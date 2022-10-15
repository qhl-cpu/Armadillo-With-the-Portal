//  EnergySphere1

console.log("energySphere1.js")

////////////////////////////////////////////////////////////////////////
// initEnergySphere1Motions():  setup Motion instances for each object that we wish to animate
////////////////////////////////////////////////////////////////////////

// keyframes for EnergySphere1:    name, dt, [x, y, z,radius, theta1, theta2, theta3]
function initEnergySphere1Motions() {
    EnergySphere1Motion.addKeyFrame(new Keyframe('preapare',          2.0, [0, 0, 0, 0,  0, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('preapare',          2.0, [0, 0, 0, 0,  0, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('preapare',          2.0, [0, 0, 0, 0,  0, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('preapare',          2.0, [0, 0, 0, 0,  0, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('preapare',          2.0, [0, 0, 0, 0,  0, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('ready',          1.0, [0, 0, 0, 2,  0, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('ready',          1.0, [0, 0, 0, 5,  100, -85, 125, 20]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('ready',          1.0, [0, 0, 0, 8,  100, -85, 125, 20]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('ready',          1.0, [0, 0, 0, 5,  200, -85, 100, 40]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('ready',          1.0, [0, 0, 0, 8,  360, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('ready',          1.0, [0, 0, 0, 5,  360, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('ready',          1.0, [0, 0, 0, 8,  360, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('moveUpward',       0.9, [0, 1, 0, 11,  360, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('moveUpward',       0.9, [0, 2, 0, 8,  360, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('moveUpward',            1.0, [0, 3, 0, 14,  360, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('moveUpward',            1.0, [0, 4, 0, 11,  360, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('moveUpward',            1.0, [0, 5, 0, 17,  360, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('moveUpward',            1.0, [0, 6, 0, 14,  360, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('squash & squish',            1.0, [0, 7, 0, 20,  360, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('squash & squish',            1.0, [0, 7, 0, 17,  360, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('squash & squish',            1.0, [0, 7, 0, 23,  360, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('squash & squish',            1.0, [0, 7, 0, 20,  360, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('squash & squish',            1.0, [0, 7, 0, 26,  360, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('squash & squish',            1.0, [0, 7, 0, 23,  360, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('squash & squish',            1.0, [0, 7, 0, 29,  360, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('squash & squish',            1.0, [0, 7, 0, 26,  360, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('enlarge',            1.0, [0, 7, 0, 32,  360, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('enlarge',            1.0, [0, 7, 0, 34,  360, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('enlarge',            1.0, [0, 7, 0, 36,  360, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('enlarge',            2.0, [0, 7, 0, 38,  360, -25, 25, 0]));

    EnergySphere1Motion.addKeyFrame(new Keyframe('end',              1.0, [0, 7, 0, 0,  0, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('end',              1.0, [0, 7, 0, 0,  0, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('end',              1.0, [0, 7, 0, 0,  0, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('end',              1.0, [0, 7, 0, 0,  0, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('end',              2.0, [0, 7, 0, 0,  0, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('end',              4.0, [0, 7, 0, 0,  0, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('end',              4.0, [0, 7, 0, 0,  0, -25, 25, 0]));
    EnergySphere1Motion.addKeyFrame(new Keyframe('end',              4.0, [0, 7, 0, 0,  0, -25, 25, 0]));
    
}

/////////////////////////////////////	
// initEnergySphere1():  setup Luxo geometry
/////////////////////////////////////	
const ticks = { type: "f", value: 0.0 };
const ambientColor = { type: 'c', value: new THREE.Color(0.0, 0.0, 1.0) };
const diffuseColor = { type: 'c', value: new THREE.Color(0.0, 1.0, 1.0) };
const specularColor = { type: 'c', value: new THREE.Color(1.0, 1.0, 1.0) };
const lightColor = { type: 'c', value: new THREE.Color(1.0, 1.0, 1.0) };
const kAmbient = { type: "f", value: 0.3 };
const kDiffuse = { type: "f", value: 0.6 };
const kSpecular = { type: "f", value: 1.0 };
const shininess = { type: "f", value: 10.0 };

var energySphereShaderMaterial = new THREE.ShaderMaterial( {
    uniforms: {
    ambientColor: ambientColor,
    diffuseColor: diffuseColor,
    specularColor: specularColor,
    lightColor: lightColor,

    
    kSpecular: kSpecular,
    kAmbient: kAmbient,
    kDiffuse: kDiffuse,
    shininess: shininess,
    spherePosition: spherePosition,
    },
    vertexShader: document.getElementById( 'energySphereVertexShader' ).textContent,
    fragmentShader: document.getElementById( 'energySphereFragmentShader' ).textContent
} );
function initEnergySphere1() {    
    sphereGeometry = new THREE.SphereGeometry(0.1,32,16);//radius,widthSegments,heightSegments 
    EnergySphere1 = new THREE.Mesh(sphereGeometry,energySphereShaderMaterial); 
    
    scene.add( EnergySphere1);
    EnergySphere1.castShadow = true;    EnergySphere1.receiveShadow = false;
    EnergySphere1.matrixAutoUpdate = false;  
}

///////////////////////////////////////////////////////////////////////////////////////
// updateEnergySphere1(avars)
///////////////////////////////////////////////////////////////////////////////////////

function updateEnergySphere1(avars) {
    ticks.value += 1;
    var deg2rad = 0;
    var xPosition = avars[0];
    var yPosition = 20+avars[1];
    var zPosition = 24 + avars[2];
    var radius = 2*avars[3]
    var theta1 = avars[4]*deg2rad;
    var theta2 = avars[5]*deg2rad;
    var theta3 = avars[6]*deg2rad;
    var theta4 = avars[7]*deg2rad;
    var len1 = 3;  var len2 = 3;   var len3 = 3;      var len4 = 0.8;
    var width = 0.5;  var depth=1;
    var frame1 = new THREE.Matrix4();
    var frame2 = new THREE.Matrix4();
    var frame3 = new THREE.Matrix4();
    var frame4 = new THREE.Matrix4();

      ////////////// EnergySphere1
      EnergySphere1.matrix.identity(); 
      EnergySphere1.matrix.multiply(new THREE.Matrix4().makeTranslation(xPosition,yPosition,zPosition,0));    
      
      // Frame 1 has been established
    frame1.copy(EnergySphere1.matrix);
    EnergySphere1.matrix.multiply(new THREE.Matrix4().makeScale(radius,radius,radius));    

    EnergySphere1.updateMatrixWorld();

}

