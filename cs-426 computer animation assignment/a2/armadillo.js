//  armadillo

console.log("armadillo.js")

////////////////////////////////////////////////////////////////////////
// initLuxoMotions():  setup Motion instances for each object that we wish to animate
////////////////////////////////////////////////////////////////////////

function initArmadilloMotions() {

      // basic interpolation test
//    myboxMotion.currTime = 0.1;
//    console.log('kf',myboxMotion.currTime,'=',myboxMotion.getAvars());    // interpolate for t=0.1
//    myboxMotion.currTime = 2.9;
//    console.log('kf',myboxMotion.currTime,'=',myboxMotion.getAvars());    // interpolate for t=2.9

    // keyframes for Luxo:    name, dt, [arm1x, arm1y, arm1z,arm1height,arm2x, arm2y, arm2z,arm2height, arm1theta1, arm2thetaX, arm2thetaZ]
    // note:  the keyframe name is arbitrary;  use this to help keep track of your own poses
    armadilloMotion.addKeyFrame(new Keyframe('moveDown', 0.0, [-1, 1, 0, 1,         0, 100, 0, 1,       -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('moveDown', 2.0, [-0.7, 0.3, 0, 1,     0, 100, 0, 1,       -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('moveDown', 2.0, [0.3, 0.6, 0, 1,      0, 80, 0, 1,        -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('moveDown', 2.0, [1, 1, 0, 1,          0, 40, 0, 1,        -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('moveDown', 1.0, [0.4, 0.6, 0, 1,      0, 20, 0, 1,        -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('moveDown', 1.0, [ -0.3, 0.3, 0, 1,    0, 0, 0, 1,         -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('moveDown', 1.0, [-1, 1, 0, 1,         0, 5, 0, 1,         -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('moveDown', 1.0, [-0.7, 0.3, 0, 1,     0, 0, 0, 1,         -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('moveDown', 1.0, [0.3, 0.6, 0, 1,      0, 3, 0, 1,         -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('moveDown', 1.0, [1, 1, 0, 1,          0, 0, 0, 1,         -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('dodging',  2.0, [0.4, 0.6, 0, 1,      1, 1, 0, 1,         -25,1, 1]));
    armadilloMotion.addKeyFrame(new Keyframe('dodging',  1.0, [-0.3, 0.3, 0, 1,     0.3, 0.6, 0, 1,     -25,1, 1]));
    armadilloMotion.addKeyFrame(new Keyframe('dodging',  1.0, [-1, 1, 0, 1,        -0.7, 0.3, 0, 1,     -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('dodging',  2.0, [-0.7, 0.3, 0, 1,     1, 1, 0, 1,         -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('dodging',  1.0, [0.3, 0.6, 0, 1,     -0.3, 0.3, 0, 1,     -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('dodging',  1.0, [1, 1, 0, 1,          0.4, 0.6, 0,1,      -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('dodging',  2.0, [0.4, 0.6, 0, 1,      1, 1, 0, 1,         -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('dodging',  1.0, [-0.3, 0.3, 0, 1,     0.3, 0.6, 0, 1,     -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('dodging',  1.0, [-1, 1, 0, 1,        -0.7, 0.3, 0, 1,     -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('dodging',  2.0, [-0.7, 0.3, 0, 1,    -1, 1, 0, 1,         -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('dodging',  1.0, [0.3, 0.6, 0, 1,     -0.3, 0.3, 0, 1,     -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('dodging',  1.0, [1, 1, 0, 1,          0.4, 0.6, 0, 1,     -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('dodging',  1.0, [0.4, 0.6, 0, 1,      1, 1, 0, 1,         -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('dodging',  1.0, [-0.3, 0.3, 0, 1,     0.3, 0.6, 0, 1,     -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('dodging',  1.0, [-1, 1, 0, 1,        -0.7, 0.3, 0, 1,     -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('dodging',  2.0, [-0.7, 0.3, 0, 1,    -1, 1, 0, 1,         -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('dodging',  1.0, [0.3, 0.6, 0, 1,     -0.3, 0.3, 0, 1,     -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('dodging',  1.0, [1, 1, 0, 1,          0.4, 0.6, 0, 1,     -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('dodging',  1.0, [0.4, 0.6, 0, 1,      1, 1, 0, 1,         -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('dodging',  1.0, [-0.3, 0.3, 0, 1,     0.3, 0.6, 0, 1,     -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('dodging',  1.0, [-1, 1, 0, 1,        -0.7, 0.3, 0, 1,     -25, 1,1]));
    armadilloMotion.addKeyFrame(new Keyframe('dodging',  2.0, [-0.7, 0.3, 0, 1,    -1, 1, 0, 1,         -25, 1,1]));


    armadilloMotion.addKeyFrame(new Keyframe('absorbed', 1.0, [0.3, 0.6, 0, 1,     0, 0, -6, 1,     -25, 1,45]));
    armadilloMotion.addKeyFrame(new Keyframe('absorbed', 1.0, [1, 1, 0, 1,         0, 4, -15, 1,     -25, 1,90]));
    armadilloMotion.addKeyFrame(new Keyframe('absorbed', 1.0, [0.4, 0.6, 0, 1,     0, 4, -23, 0.9,   -25, 1, 135]));
    armadilloMotion.addKeyFrame(new Keyframe('absorbed', 1.0, [-0.3, 0.3, 0, 1,    0, 4, -30, 0.8,   -25, 1, 180]));
    armadilloMotion.addKeyFrame(new Keyframe('absorbed', 1.0, [-1, 1, 0, 1,        0, 4, -36, 0.7,   -25, 1, 225]));
    armadilloMotion.addKeyFrame(new Keyframe('absorbed', 1.0, [-0.7, 0.3, 0, 1,    0, 4, -41, 0.6,   -25, 1, 270]));
    armadilloMotion.addKeyFrame(new Keyframe('absorbed', 1.0, [0.3, 0.6, 0, 1,     0, 3, -45, 0.5,   -25, 1, 315]));
    armadilloMotion.addKeyFrame(new Keyframe('absorbed', 1.0, [1, 1, 0, 1,         0, 3, -47, 0.4,   -25, 1, 360]));
    armadilloMotion.addKeyFrame(new Keyframe('absorbed', 1.0, [0.4, 0.6, 0, 1,     0, 3, -48, 0.3,   -25, 1, 405]));
    armadilloMotion.addKeyFrame(new Keyframe('absorbed', 1.0, [-0.3, 0.3, 0, 1,    0, 3, -49, 0.2,   -25, 1, 450]));
    armadilloMotion.addKeyFrame(new Keyframe('absorbed', 1.0, [-1, 1, 0, 1,        0, 3, -50, 0.1,   -25, 1, 495]));    
    armadilloMotion.addKeyFrame(new Keyframe('absorbed', 1.0, [-0.7, 0.3, 0, 1,    0, 3, -50, 0,     -25, 1, 540]));    
    armadilloMotion.addKeyFrame(new Keyframe('absorbed', 1.0, [-0.85, 0.6, 0, 1,   0, 3, -50, 0,     -25, 1, 585]));    
    armadilloMotion.addKeyFrame(new Keyframe('absorbed', 1.0, [-1, 1, 0, 1,        0, 3, -50, 0,     -25, 1, 630]));
}

/////////////////////////////////////	
// initArmadillo():  setup Luxo geometry
/////////////////////////////////////	

var armadillo;
var armadillo2;
function initArmadillo() {
    models = {
        armadillo: {obj:"obj/armadillo.obj", mtl: customShaderMaterial, mesh: null },
        
        };
          
        var manager = new THREE.LoadingManager();
        manager.onLoad = function () {
        console.log("loaded all resources");
        RESOURCES_LOADED = true;
        armadillo = models.armadillo.mesh.clone();
        armadillo2 = models.armadillo.mesh.clone();

    armadillo.position.set(0, 0, 0);
    armadillo.scale.set(0.1,0.1,0.1);
    armadillo.rotation.x = -Math.PI/2;
    scene.add( armadillo);
    armadillo.castShadow = true;    armadillo.receiveShadow = false;
    armadillo.matrixAutoUpdate = false;  

    armadillo2.position.set(0, 0, 0);
    armadillo2.scale.set(0.1,0.1,0.1);
    armadillo2.rotation.x = -Math.PI/2;
    scene.add( armadillo2);
    armadillo2.castShadow = true;    armadillo2.receiveShadow = false;
    armadillo2.matrixAutoUpdate = false;  
    meshesLoaded = true;


        //onResourcesLoaded();
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

///////////////////////////////////////////////////////////////////////////////////////
// updateArmadillo(avars)
///////////////////////////////////////////////////////////////////////////////////////

function updateArmadillo(avars) {
    var armadilloScale = 0.18;
    var deg2rad = Math.PI/180;
    var Arm1xPos = avars[0];
    var Arm1yPos = 9 + avars[1];
    var Arm1zPos = 37 + avars[2];
    var Arma1Height = avars[3];

    var Arm2xPos = avars[4];
    var Arm2yPos = 9 + avars[5];
    var Arm2zPos = -12 + avars[6];
    var Arma2Height = avars[7];

    var Arma1Theta1 = avars[8]*deg2rad;
    
    var Arma2ThetaX = -avars[9]*deg2rad;
    var Arma2ThetaZ = avars[10]*deg2rad;
    
    var frame1 = new THREE.Matrix4();
    var frame2 = new THREE.Matrix4();
    var frame3 = new THREE.Matrix4();
    var frame4 = new THREE.Matrix4();

      ////////////// luxo1
      armadillo.matrix.identity(); 
      armadillo.matrix.multiply(new THREE.Matrix4().makeTranslation(Arm1xPos,Arm1yPos,Arm1zPos));     
      frame1.copy(armadillo.matrix);  
      armadillo.matrix.multiply(new THREE.Matrix4().makeScale(armadilloScale*Arma1Height,armadilloScale*Arma1Height,armadilloScale*Arma1Height));    
      armadillo.updateMatrixWorld();  


      armadillo2.matrix.identity(); 
      armadillo2.matrix.multiply(new THREE.Matrix4().makeTranslation(Arm2xPos,Arm2yPos,Arm2zPos));    
      armadillo2.matrix.multiply(new THREE.Matrix4().makeRotationX(Arma2ThetaX));    
      armadillo2.matrix.multiply(new THREE.Matrix4().makeRotationY(180*deg2rad));
      armadillo2.matrix.multiply(new THREE.Matrix4().makeRotationZ(Arma2ThetaZ));
      frame2.copy(armadillo2.matrix);
      armadillo2.matrix.multiply(new THREE.Matrix4().makeScale(armadilloScale*Arma2Height,armadilloScale*Arma2Height,armadilloScale*Arma2Height));    
      armadillo2.updateMatrixWorld();  
    
 
  
}

