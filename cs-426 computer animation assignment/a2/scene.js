///////// scene.js //////////////////

/////////////////////////////////////	
// MATERIALS
/////////////////////////////////////	

var diffuseBlue = new THREE.MeshLambertMaterial( {color: 0xc0c0ff} );
var diffuseRed = new THREE.MeshLambertMaterial( {color: 0xff4040} );
var laserMaterial = new THREE.MeshLambertMaterial( {color: 0xacfafc} );
var diffuseMaterial = new THREE.MeshLambertMaterial( {color: 0xaf7f3f} );
var diffuseMaterial2 = new THREE.MeshLambertMaterial( {color: 0xffffff, side: THREE.DoubleSide } );
var yellowMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var redMaterial = new THREE.MeshBasicMaterial( {color: 0xff0000} );
var greenMaterial = new THREE.MeshBasicMaterial( {color: 0x00f000} );
var blueMaterial = new THREE.MeshBasicMaterial( {color: 0x0000f0} );
var grayMaterial = new THREE.MeshBasicMaterial( {color: 0xa0a0a0} );
var armadilloMaterial = new THREE.MeshBasicMaterial( {color: 0x7fff7f} );

console.log("scene.js")

/////////////////////////////////////	
// initLights():  SETUP LIGHTS
/////////////////////////////////////	
light = new THREE.PointLight(0xffffff,3);
function initLights() {
    light.position.set(0,45,0);
    light.castShadow = true; 
    scene.add(light);
    ambientLight = new THREE.AmbientLight(0x606060);
    scene.add(ambientLight);
    //scene.background = new THREE.Color( 0x120921 );
}

/////////////////////////////////////	
// initLuxoObjects()
/////////////////////////////////////	

function initLuxoObjects() {
    // multi-colored cube      [https://stemkoski.github.io/Three.js/HelloWorld.html] 
    var cubeMaterialArray = [];    // order to add materials: x+,x-,y+,y-,z+,z-
    cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0xff3333 } ) );
    cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0xff8800 } ) );
    cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0xffff33 } ) );
    cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0x33ff33 } ) );
    cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0x3333ff } ) );
    cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0x8833ff } ) );


      // textured floor
    floorTexture = new THREE.TextureLoader().load('images/floor.jpg');
    floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(2, 2);
    floorMaterial = new THREE.MeshLambertMaterial( {color: 0xcfcfcf, 
						    map: floorTexture, side: THREE.DoubleSide });
    floorGeometry = new THREE.PlaneBufferGeometry(30,30);
    floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.position.y = 0.0;
    floor.rotation.x = Math.PI / 2;
    // scene.add(floor);
    floor.castShadow = false;
    floor.receiveShadow = true;

    // sphere, located at light position
    sphereGeometry = new THREE.SphereGeometry(0.3, 32, 32);    // radius, segments, segments
    sphere = new THREE.Mesh(sphereGeometry, yellowMaterial);
    sphere.position.set(-5,10,2);
    sphere.position.set(light.position.x, light.position.y, light.position.z);
    scene.add(sphere);
}

/////////////////////////////////////////////////////////////////////////////////////
//  create customShader material
/////////////////////////////////////////////////////////////////////////////////////

var customShaderMaterial = new THREE.ShaderMaterial( {
//        uniforms: { textureSampler: {type: 't', value: floorTexture}},
	vertexShader: document.getElementById( 'customVertexShader' ).textContent,
	fragmentShader: document.getElementById( 'customFragmentShader' ).textContent
} );



const spherePosition = { type: 'v3', value: light.position };
const toonColor = { type: 'c', value: new THREE.Color(1.0, 0.8, 0.4) };
const toonColor2 = { type: 'c', value: new THREE.Color(0.8, 0.1, 0.35) };
const outlineColor = { type: 'c', value: new THREE.Color(0.0, 0.0, 0.0) };
var portalShaderMaterial = new THREE.ShaderMaterial( {
        uniforms: {
            spherePosition: spherePosition,
        
            toonColor: toonColor,
            toonColor2: toonColor2,
            outlineColor: outlineColor,
          },
        vertexShader: document.getElementById( 'portalVertexShader' ).textContent,
        fragmentShader: document.getElementById( 'portalFragmentShader' ).textContent
    } );
////////////////////////////////////////////////////////////////////////	
// initFileObjects():    read object data from OBJ files;  see onResourcesLoaded() for instances
////////////////////////////////////////////////////////////////////////	

function initFileObjects() {
        // list of OBJ files that we want to load, and their material
    models = {     
	teapot:    {obj:"obj/teapot.obj", mtl: customShaderMaterial, mesh: null	},
	armadillo: {obj:"obj/armadillo.obj", mtl: customShaderMaterial, mesh: null },
    
    portal:    {obj:"obj/portal.obj", mtl: portalShaderMaterial, mesh: null },
    };

    var manager = new THREE.LoadingManager();
    manager.onLoad = function () {
	console.log("loaded all resources");
	RESOURCES_LOADED = true;
	onResourcesLoaded();
    }
    var onProgress = function ( xhr ) {
	if ( xhr.lengthComputable ) {
	    var percentComplete = xhr.loaded / xhr.total * 100;
	    console.log( Math.round(percentComplete, 2) + '% downloaded' );
	}
    };
    var onError = function ( xhr ) {
    };

    // Load models;  asynchronous in JS, so wrap code in a fn and pass it the index
    for( var _key in models ){
	console.log('Key:', _key);
	(function(key){
	    var objLoader = new THREE.OBJLoader( manager );
	    objLoader.load( models[key].obj, function ( object ) {
		object.traverse( function ( child ) {
		    if ( child instanceof THREE.Mesh ) {
			child.material = models[key].mtl;
			child.material.shading = THREE.SmoothShading;
		    }	} );
		models[key].mesh = object;
//		scene.add( object );
	    }, onProgress, onError );
	})(_key);
    }
}


/////////////////////////////////////////////////////////////////////////////////////
// onResourcesLoaded():  once all OBJ files are loaded, this gets called
//                       Object instancing is done here
/////////////////////////////////////////////////////////////////////////////////////
var testMash;
function onResourcesLoaded(){
	
 // Clone models into meshes;   [Michiel:  AFAIK this makes a "shallow" copy of the model,
 //                             i.e., creates references to the geometry, and not full copies ]


    meshes["armadillo1"] = models.armadillo.mesh.clone();
    meshes["armadillo1"].position.set(0, 6, -12);
    meshes["armadillo1"].rotation.set(0,-Math.PI/1,0);
    meshes["armadillo1"].scale.set(0.1,0.1,0.1);
    scene.add(meshes["armadillo1"]);
    
    meshes["armadillo2"] = models.armadillo2.mesh.clone();
    meshes["armadillo2"].position.set(0, 5 ,23);
    meshes["armadillo2"].rotation.set(0,2*Math.PI/1.0,0);
    meshes["armadillo2"].scale.set(0.1,0.1,0.1);
    scene.add(meshes["armadillo2"]);

    // meshes["dragon1"].position.set(-5, 0.2, 4);
    // meshes["dragon1"].rotation.set(0, Math.PI, 0);
    // meshes["dragon1"].scale.set(0.3,0.3,0.3);
    // scene.add(meshes["dragon1"]);

    

    meshesLoaded = true;
}

/////////////////////////////////////	
// otherObjects():  these are here as examples;  
// move to initObjects() as needed
/////////////////////////////////////	

function otherObjects() {
    // custom object
    var geom = new THREE.Geometry(); 
    var v0 = new THREE.Vector3(0,0,0);
    var v1 = new THREE.Vector3(3,0,0);
    var v2 = new THREE.Vector3(0,3,0);
    var v3 = new THREE.Vector3(3,3,0);
    geom.vertices.push(v0);
    geom.vertices.push(v1);
    geom.vertices.push(v2);
    geom.vertices.push(v3);
    geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
    geom.faces.push( new THREE.Face3( 1, 3, 2 ) );
    geom.computeFaceNormals();
    customObject = new THREE.Mesh( geom, diffuseMaterial2 );
    customObject.position.set(0, 0, -2);
    scene.add(customObject);

    // mybox 
    myboxGeometry = new THREE.BoxGeometry( 1, 1, 1 );    // width, height, depth
    mybox = new THREE.Mesh( myboxGeometry, diffuseMaterial );
    scene.add( mybox );

    // box
    boxGeometry = new THREE.BoxGeometry( 1, 1, 1 );    // width, height, depth
    box = new THREE.Mesh( boxGeometry, diffuseMaterial );
    box.position.set(-4, 0, 0);
    scene.add( box );

    // multi-colored cube      [https://stemkoski.github.io/Three.js/HelloWorld.html] 
    var cubeMaterialArray = [];    // order to add materials: x+,x-,y+,y-,z+,z-
    cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0xff3333 } ) );
    cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0xff8800 } ) );
    cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0xffff33 } ) );
    cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0x33ff33 } ) );
    cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0x3333ff } ) );
    cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0x8833ff } ) );
      // Cube parameters: width (x), height (y), depth (z), 
      //        (optional) segments along x, segments along y, segments along z
    var mccGeometry = new THREE.BoxGeometry( 1.5, 1.5, 1.5, 1, 1, 1 );
    mcc = new THREE.Mesh( mccGeometry, cubeMaterialArray );
    mcc.position.set(0,0,0);
    scene.add( mcc );	

    // cylinder
    // parameters:  radiusAtTop, radiusAtBottom, height, radialSegments, heightSegments
    cylinderGeometry = new THREE.CylinderGeometry( 0.30, 0.30, 0.80, 20, 4 );
    cylinder = new THREE.Mesh( cylinderGeometry, diffuseMaterial);
    cylinder.position.set(2, 0, 0);
    scene.add( cylinder );

    // cone:   parameters --  radiusTop, radiusBot, height, radialSegments, heightSegments
    coneGeometry = new THREE.CylinderGeometry( 0.0, 0.30, 0.80, 20, 4 );
    cone = new THREE.Mesh( coneGeometry, diffuseMaterial);
    cone.position.set(4, 0, 0);
    scene.add( cone);

    // torus:   parameters -- radius, diameter, radialSegments, torusSegments
    torusGeometry = new THREE.TorusGeometry( 1.2, 0.4, 10, 20 );
    torus = new THREE.Mesh( torusGeometry, diffuseMaterial);

    torus.rotation.set(0,0,0);     // rotation about x,y,z axes
    torus.scale.set(1,2,3);
    torus.position.set(6, 0, 0);   // translation

    scene.add( torus );
}

