///////////////   spline.js //////////////////////
//
//  Spline plots in the bottom window
//

var greenMaterial
var redMaterial

/////////////////////////////////////	
// initSpline():  setup spline geometry
/////////////////////////////////////	

function initSpline() {
    boxGeometry = new THREE.BoxGeometry( 0.05, 6, 1 );    // width, height, depth

    var nKF = luxoMotion.keyFrameArray.length;
    for (var n=0; n<nKF; n++) {                   // draw vertical lines at each keyframe, using a 3D box (ok, it's a hack)
	var kfBox = new THREE.Mesh( boxGeometry, grayMaterial );   scene_spline.add( kfBox );
	kfBox.position.set(-10+4*luxoMotion.keyFrameArray[n].time,0,0);
    }

    timeBar = new THREE.Mesh( boxGeometry, redMaterial );   scene_spline.add( timeBar );

    var loader = new THREE.FontLoader();
    loader.load( 'helvetiker_regular.typeface.json', function ( font ) {
	var xMid, text;
	var color = 0x006699;
	var matDark = new THREE.LineBasicMaterial( {color: color, side: THREE.DoubleSide } );
	var matLite = new THREE.MeshBasicMaterial( {color: color,transparent: true,opacity: 0.4,
						    side: THREE.DoubleSide} );
	var message = "avar splines";
	var shapes = font.generateShapes( message, 1 );
	var geometry = new THREE.ShapeBufferGeometry( shapes );
	geometry.computeBoundingBox();
	xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
	geometry.translate( xMid+4, 0, 0 );
	text = new THREE.Mesh( geometry, matLite );
	scene_spline.add( text );
    });

    ////////////   avar  splines  ////////////

    var MAX_POINTS = 500;
    var drawCount = 0; 
    var nAvars = 6;     //  Luxo has 6 animation variables, i.e., degrees of freedom
    var materials = [
	new THREE.LineBasicMaterial( { color: 0x000000 }), // x
	new THREE.LineBasicMaterial( { color: 0xff0000 }), // y
	new THREE.LineBasicMaterial( { color: 0x00ff00 }), // base angle
	new THREE.LineBasicMaterial( { color: 0x0000ff }), // leg angle
	new THREE.LineBasicMaterial( { color: 0xff00ff }), // body angle
	new THREE.LineBasicMaterial( { color: 0x00ffff }), // head angle
    ];
    var geometryList  = [];
    var lineList = [];
    var geometry = [];

    for (var a=0; a<nAvars; a++) {        ////   create lines
	var geometry = new THREE.BufferGeometry();
	var positions = new Float32Array( MAX_POINTS * 3 ); // 3 vertices per point    // attributes
	geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
	geometry.setDrawRange( 0, drawCount );
	var line = new THREE.Line( geometry,  materials[a] );
	scene_spline.add( line );
	geometryList.push(  geometry );
	lineList.push( line );
    }

    var dt = 0.1;
    var curvePts = luxoMotion.genMotionCurves(dt);     //// get spline data for all curves

    var L = 1000;
    min = [L,L,L,L,L,L];  max = [-L,-L,-L,-L,-L,-L];
    for (var t=0, n=0, i=0; t<luxoMotion.maxTime; t+=dt, n++) {    //// find  (min,max) for each curve
	for (var a=0; a<nAvars; a++) {
	    if (curvePts[n][a]<min[a])  min[a] = curvePts[n][a];
	    if (curvePts[n][a]>max[a])  max[a] = curvePts[n][a];
	}
    }

    for (var a=0; a<nAvars; a++) {        //// set the vertex positions
	var line = lineList[a];
	var positions = line.geometry.attributes.position.array;
	for (var t=0, n=0, i=0; t<luxoMotion.maxTime; t+=dt, n++) {
	    if (n>=MAX_POINTS) continue;
	    positions[ i++ ] = -10 + 4*t;
	    positions[ i++ ] = -3 + 6*((curvePts[n][a]-min[a])/(max[a]-min[a]));
	    positions[ i++ ] = 0;
	}
    }
    drawCount = curvePts.length;
      // line below is required if points are changed after the first render
//    line.geometry.attributes.position.needsUpdate = true; 
    for (var a=0; a<nAvars; a++) {       //// set drawRange for each line
	var line = lineList[a];
	line.geometry.setDrawRange( 0, drawCount );    // 
    }
}

