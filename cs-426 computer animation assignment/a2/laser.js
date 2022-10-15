//  laser

console.log("laser.js")

////////////////////////////////////////////////////////////////////////
// initLuxoMotions():  setup Motion instances for each object that we wish to animate
////////////////////////////////////////////////////////////////////////

function initLaserMotions() {

      // basic interpolation test
//    myboxMotion.currTime = 0.1;
//    console.log('kf',myboxMotion.currTime,'=',myboxMotion.getAvars());    // interpolate for t=0.1
//    myboxMotion.currTime = 2.9;
//    console.log('kf',myboxMotion.currTime,'=',myboxMotion.getAvars());    // interpolate for t=2.9

    // keyframes for Luxo:    name, dt, [x, y, z,height, theta1, theta2, theta3]
    // note:  the keyframe name is arbitrary;  use this to help keep track of your own poses
    laserMotion.addKeyFrame(new Keyframe('ready',          1.0, [0, 0, 0, 0,  0]));
    laserMotion.addKeyFrame(new Keyframe('ready',          1.0, [0, 0, 0, 0,  0]));
    laserMotion.addKeyFrame(new Keyframe('ready',          1.0, [0, 0, 0, 0,  0]));
    laserMotion.addKeyFrame(new Keyframe('ready',          1.0, [0, 0, 0, 0,  0]));
    laserMotion.addKeyFrame(new Keyframe('ready',          1.0, [0, 0, 0, 0,  0]));
    laserMotion.addKeyFrame(new Keyframe('ready',          1.0, [0, 0, 0, 0,  0]));
    laserMotion.addKeyFrame(new Keyframe('ready',          1.0, [0, 0, 0, 0,  0]));
    laserMotion.addKeyFrame(new Keyframe('ready',          1.0, [0, 0, 0, 0,  0]));
    laserMotion.addKeyFrame(new Keyframe('moveUpward',       1.0, [0, 2, 0, 0,  0]));
    laserMotion.addKeyFrame(new Keyframe('moveUpward',       1.0, [0, 4, 0, 0,  0]));
    laserMotion.addKeyFrame(new Keyframe('enlarge',            1.0, [0, 6, 0, 0,  0]));
    laserMotion.addKeyFrame(new Keyframe('enlarge',            1.0, [0, 6, 0, 0,  0]));
    laserMotion.addKeyFrame(new Keyframe('enlarge',            1.0, [0, 6, 0, 0,  5]));
    laserMotion.addKeyFrame(new Keyframe('enlarge',            1.0, [0, 6, 0, 0,  15]));
    laserMotion.addKeyFrame(new Keyframe('enlarge',            1.0, [0, 6, 0, 0,  30]));
    laserMotion.addKeyFrame(new Keyframe('enlarge',            1.0, [0, 6, 0, 0,  30]));
    laserMotion.addKeyFrame(new Keyframe('enlarge',            1.0, [0, 6, 0, 0,  30]));
    laserMotion.addKeyFrame(new Keyframe('enlarge',            1.0, [0, 6, 0, 0,  30]));
    laserMotion.addKeyFrame(new Keyframe('enlarge',            1.0, [0, 6, 0, 0,  30]));
    laserMotion.addKeyFrame(new Keyframe('enlarge',            1.0, [0, 6, 0, 0,  30]));
    laserMotion.addKeyFrame(new Keyframe('enlarge',            0.9, [0, 6, 0, 0,  30]));
    laserMotion.addKeyFrame(new Keyframe('enlarge',            0.9, [0, 6, 0, 0,  60]));
    laserMotion.addKeyFrame(new Keyframe('enlarge',            1.0, [0, 6, 0, 0,  60]));
    laserMotion.addKeyFrame(new Keyframe('enlarge',            1.0, [0, 6, 0, 0,  80]));
    laserMotion.addKeyFrame(new Keyframe('enlarge',            1.0, [0, 6, 0, 0,  100]));
    laserMotion.addKeyFrame(new Keyframe('enlarge',            1.0, [0, 6, 0, 0.05,  110]));
    laserMotion.addKeyFrame(new Keyframe('enlarge',            1.0, [0, 6, 0, 0.05,  110]));
    laserMotion.addKeyFrame(new Keyframe('enlarge',            2.0, [0, 6, 0, 0.20,  110]));
    laserMotion.addKeyFrame(new Keyframe('enlarge',            3.0, [0, 6, 0, 0.25,  110]));

    laserMotion.addKeyFrame(new Keyframe('fire leser',         4.0, [0, 6, 0,0.35,      110]));
    laserMotion.addKeyFrame(new Keyframe('fire leser',         1.0, [0, 5, -5,0.40,    110]));
    laserMotion.addKeyFrame(new Keyframe('fire leser',         1.0, [0, 4, -10,0.45,   110]));
    laserMotion.addKeyFrame(new Keyframe('fire leser',         1.0, [0, 3,-15,0.50,  110]));
    laserMotion.addKeyFrame(new Keyframe('fire leser',         1.0, [0, 2, -20,0.6,   110]));
    laserMotion.addKeyFrame(new Keyframe('fire leser',         1.0, [0, 1,-25,0.6,  110]));
    laserMotion.addKeyFrame(new Keyframe('fire leser',         1.0, [0, 0, -30,0.1,   110]));
    laserMotion.addKeyFrame(new Keyframe('fire leser',         1.0, [0, 0, -30,0.1,   110]));
    laserMotion.addKeyFrame(new Keyframe('fire leser',         1.0, [0, 0, -30,0.0,   110]));
    laserMotion.addKeyFrame(new Keyframe('fire leser',         1.0, [0, 0, -30,0.0,   110]));
    laserMotion.addKeyFrame(new Keyframe('fire leser',         1.0, [0, 0, -30,0.0,   110]));
    laserMotion.addKeyFrame(new Keyframe('fire leser',         1.0, [0, 0, -30,0.0,   110]));
    laserMotion.addKeyFrame(new Keyframe('fire leser',         4.0, [0, 0, -30,0.0,   110]));
    laserMotion.addKeyFrame(new Keyframe('fire leser',         3.0, [0, 0, -30,0.0,   110]));
}

/////////////////////////////////////	
// initLaser():  setup Luxo geometry
/////////////////////////////////////	

function initLaser() {
    // radiusTop, radiusBottom, height, radialSegments,heightSegments
    cylinderGeometry1 = new THREE.CylinderGeometry(0.5, 0.5 , 3, 20, 4 );
    laser = new THREE.Mesh(cylinderGeometry1,energySphereShaderMaterial); 
    laser.position.set(0, 5, 12);
    // laser.rotation.x = -Math.PI/2;
    scene.add( laser);
    laser.castShadow = true;    laser.receiveShadow = false;
    laser.matrixAutoUpdate = false;  
}

///////////////////////////////////////////////////////////////////////////////////////
// updatelaser(avars)
///////////////////////////////////////////////////////////////////////////////////////

function updateLaser(avars) {
    var deg2rad = Math.PI/180;
    var xPosition = avars[0];
    var yPosition = 20+avars[1];
    var zPosition = 23 + avars[2];
    var height = avars[3];
    var theta1 = avars[4]*deg2rad;

    var len1 = 3;
    var width = 0.5;  
    var depth=1;
    var frame1 = new THREE.Matrix4();

      ////////////// luxo1
    laser.matrix.identity(); 
    laser.matrix.multiply(new THREE.Matrix4().makeTranslation(xPosition,yPosition,zPosition,0));    
    laser.matrix.multiply(new THREE.Matrix4().makeRotationX(-theta1));    
    //laser.matrix.multiply(new THREE.Matrix4().makeRotationX(theta1));    
      // Frame 1 has been established
    frame1.copy(laser.matrix);
    laser.matrix.multiply(new THREE.Matrix4().makeTranslation(0,0.5*width,0));   
    laser.matrix.multiply(new THREE.Matrix4().makeScale(2*height,10*height,2*height));    

    laser.updateMatrixWorld();
 
  
}

