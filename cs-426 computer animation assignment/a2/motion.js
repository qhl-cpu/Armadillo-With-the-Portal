////////////////////////////////////////////////////////////
// Keyframe   and   Motion  classes
////////////////////////////////////////////////////////////

class Keyframe {
   constructor(name,dt,avars,time=0.0) {
       this.name = name;
       this.dt = dt;                 // time since last keyframe
       this.avars = avars;           // animation variables
       this.time = time;             // absolute time of keyframe;  to be computed later
   };
}

class Motion {
    constructor(setMatricesFunc) {
	this.keyFrameArray = [];          // list of keyframes
	this.maxTime = 0.0;               // time of last keyframe
	this.currTime = 0.0;              // current playback time
	this.updateMatrices = setMatricesFunc;    // function to call to update transformation matrices
    };
    reset() {                     // go back to first keyframe
	this.currTime = 0.0;
    };
    addKeyFrame(keyframe) {               // add a new keyframe at end of list
	this.keyFrameArray.push(keyframe);
	this.maxTime += keyframe.dt;
	keyframe.time = this.maxTime;
    };
    print() {
	var nKF = this.keyFrameArray.length;
	for (var n=0; n<nKF; n++) {
	    console.log("Keyframe ",n, this.keyFrameArray[n]);
	}
    };
    timestep(dt) {                //  take a time-step
	this.currTime += dt;
	if (this.currTime > this.maxTime)  // loop to beginning if beyond end
	    this.currTime = 0;     
	if (this.currTime < 0.0)           // loop to end if beyond beginning (for negative dt)
	    this.currTime = this.maxTime;
//	var avars = this.getAvarsLinear();
	var avars = this.getAvarsSpline();
	this.updateMatrices(avars);
    };

    genMotionCurves(dt) {
	var curvePts = [];
	for (var t=0; t<this.maxTime; t+=dt) {
	    this.currTime = t;
//	    var avars = this.getAvarsLinear();
	    var avars = this.getAvarsSpline();
	    curvePts.push(avars);
	}
//	console.log(curvePts);
	return curvePts;
    };

    getAvarsSpline() {       // Catmull-Rom spline interpolation across multiple segments
	var Mh = new THREE.Matrix4();     // hermite basis matrix
	Mh.set( 2, -2, 1, 1,        // set using row-major ordering
	   -3, 3, -2, -1,
	   0, 0, 1, 0,
	   1, 0, 0, 0 );
	var i = 1;      // begin with the first curve segment
	var eps=0.001;
//	console.log("currTime=",this.currTime);
	while (this.currTime > this.keyFrameArray[i].time)      // find the right pair of keyframes
	    i++;	// increment i to check next keyFrame
	var avars = [];
	var nKF = this.keyFrameArray.length; // number of key frame
	for (var n=0; n<this.keyFrameArray[i-1].avars.length; n++) {  
              // compute point indices
			  // compute 4 control points i1,i2,i3,i4
	    var i1 = i-2;  if (i1<0) i1=0;          // duplicate first end point
	    var i2 = i-1;							// i2 = previous key frame number
	    var i3 = i;								// i3 = current key frame number
	    var i4 = i+1;  if (i4>nKF-1) i4=nKF-1;  // i4 = next key frame number (duplicate last end point)
	    var kf1 = this.keyFrameArray[i1];		// assign 4 keyframes to kf1,kf2,kf3 and kf4
	    var kf2 = this.keyFrameArray[i2];		
	    var kf3 = this.keyFrameArray[i3];		
	    var kf4 = this.keyFrameArray[i4];		

		// calculate the tangent for control point 2 and 3 in each animation variable in 4 keyframes
	    var y1 = kf1.avars[n],  t1 = kf1.time;	// get current keyframe's current animation variable and the current keyframe's time
	    var y2 = kf2.avars[n],  t2 = kf2.time;	
	    var y3 = kf3.avars[n],  t3 = kf3.time;
	    var y4 = kf4.avars[n],  t4 = kf4.time;
	    var y2p = (t3-t2)*(y3-y1)/(t3-t1);
	    var y3p = (t3-t2)*(y4-y2)/(t4-t2);

	    var t = (this.currTime - t2)/(t3-t2);	// by calculating this t, we would be able to know where are we in this animation timeline
	    var T = new THREE.Vector4( t*t*t, t*t, t, 1 ); // create a cubic parametric polynomial basis vector T
	    var G = new THREE.Vector4(y2,y3,y2p,y3p); // create a geometry vector G
	    var A = G.applyMatrix4(Mh); // calculate polynomial basis coefficients A = Mh * G
	    var val = T.dot(A); // calculate polynomial,and get set of basis functions (calculate x(t) for cubic parametric curve)
	    avars.push(val);
	}
	return avars;
    };

    getAvarsLinear() {        // linear interpolation of values
	var i = 1;      // begin with the first curve segment
	while (this.currTime > this.keyFrameArray[i].time)      // find the right pair of keyframes
	    i++;
	var avars = [];
	for (var n=0; n<this.keyFrameArray[i-1].avars.length; n++) {   // interpolate the values
	    var y0 = this.keyFrameArray[i-1].avars[n];
	    var y1 = this.keyFrameArray[i].avars[n];
	    var x0 = this.keyFrameArray[i-1].time;
	    var x1 = this.keyFrameArray[i].time;
	    var x = this.currTime;
	    var y = y0 + (y1-y0)*(x-x0)/(x1-x0);    // linearly interpolate
	    avars.push(y);
	}
	return avars;         // return list of interpolated avars
    };
}

