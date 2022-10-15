//  warp.js

/////////////////////////////////////	
// initWarpObjects()
/////////////////////////////////////	

var warpObj;
var Nidiv, dix, diy;
var Ncdiv = 2;  
var dcx, dcy;
var igridUvs = [];
var geom;
var cgridPts = [];
var Ncp;
var cpSpheres = [];    // control point spheres


function initWarpObjects() {

      // textured floor
    warpTexture = new THREE.TextureLoader().load('images/cpsc426.png');
    warpTexture.wrapS = warpTexture.wrapT = THREE.RepeatWrapping;
    warpMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff,
						    map: warpTexture, side: THREE.DoubleSide });
    geom = new THREE.Geometry(); 

      // build grid of points
    Nidiv = 20;  dix = 1/Nidiv;  diy = 1/Nidiv;    
    for (var nx = 0; nx<=Nidiv; nx++) {
	for (var ny=0; ny<=Nidiv; ny++) {
	    geom.vertices.push(new THREE.Vector3(nx*dix, ny*diy, 0));
	    igridUvs.push( new THREE.Vector2(nx*dix, ny*diy));
	}
    }

      // setup triangle faces
    var faces = geom.faces;
    geom.faceVertexUvs[0] = [];
    var i=0;
    for (var nx=0; nx<Nidiv; nx++) {
	for (var ny=0; ny<Nidiv; ny++) {
	    var i0 = ny*(Nidiv+1) + nx;         // index for bot-left of square
	    var i1 = i0 + 1;
	    var i2 = i0 + (Nidiv+1) + 1;
	    var i3 = i0 + (Nidiv+1);
	    geom.faces.push( new THREE.Face3( i0, i1, i2));    // create triangle
	    geom.faces.push( new THREE.Face3( i0, i2, i3));    // create triangle
	}
    }
      // add uv coords to all vertices, for each face
    var faces = geom.faces;
    geom.faceVertexUvs[0] = [];
    for (var i = 0; i < faces.length ; i++) { 
	var v1 = geom.vertices[faces[i].a], 
            v2 = geom.vertices[faces[i].b], 
            v3 = geom.vertices[faces[i].c];
	geom.faceVertexUvs[0].push([
	    new THREE.Vector2(v1.y, v1.x),
	    new THREE.Vector2(v2.y, v2.x),
	    new THREE.Vector2(v3.y, v3.x)
	]);
    }
    geom.uvsNeedUpdate = true;

      // create the objects:   bind geometry and texture, add to scene
    warpObj = new THREE.Mesh( geom, warpMaterial);
//    warpObj.position.set(-0.5, -0.5, 0);
    scene.add(warpObj);

    // create a control point sphere
    cpGeometry = new THREE.SphereGeometry(0.015, 16, 16);    // radius, segments, segments

      // build a grid of control points;   assume image (x,y) in [0,1]
    dcx = 1/Ncdiv;   dcy = 1/Ncdiv;    
    Ncp = 3 + Ncdiv;   // number of control points per dimension for 3rd-order curve
    for (var nx=0; nx<Ncp; nx++) {
	for (var ny=0; ny<Ncp; ny++) {
	    var x = -dcx + nx*dcx;
	    var y = -dcy + ny*dcy;
	    var z = 0;
	    cgridPts.push(new THREE.Vector3(x,y,z));
	      // create a control point sphere
	    var cps = new THREE.Mesh(cpGeometry, blueMaterial);
	    cps.position.set(x,y,z);
//	    console.log(x,y,z);
	    scene.add(cps);
	    cpSpheres.push(cps);
	}
    }
    warpMotion();
}

/////////////////////////////////////////////
//   warpCompute():  compute warped vertices from control points (cgridPts)
/////////////////////////////////////////////

function warpMotion() {
    var rad = 0.5;
    var x = 0.5 + rad*Math.cos(aniTime);
    var y = 0.5;
    var z = 0 + rad*Math.sin(aniTime);
    var i=12;
//    console.log(cgridPts[i]);
//    var i=2;

    cgridPts[i].x = x;
    cgridPts[i].y = y;
    cgridPts[i].z = z;
    cpSpheres[i].position.set(x,y,z);

    Mbs = new THREE.Matrix4;
    Mbs.set(-1/6,  3/6, -3/6, 1/6,
             3/6, -6/6,  3/6,   0,
            -3/6,    0,  3/6,   0,
             1/6,  4/6,  1/6,   0);
    Mbst = new THREE.Matrix4;
    Mbst.copy(Mbs);
    Mbst.transpose();

      // recompute vertices from the control points
    var eps = 0.001;
    var vertices = warpObj.geometry.vertices;
    for (var nx = 0; nx<=Nidiv; nx++) {               // loop through all image-grid points
	for (var ny=0; ny<=Nidiv; ny++) {
	    var i = ny*(Nidiv+1) + nx;               // index of point
	    var uv = igridUvs[i];                    // uv coord  in [0,1]  across the full image
	    var uScaled = fixRange(uv.x,eps)*Ncdiv;               // now begin computing uv in [0,1] for the local patch
	    var u0 = Math.floor(uScaled);           
	    var u = uScaled - u0;
	    var vScaled = fixRange(uv.y,eps)*Ncdiv;
	    var v0 = Math.floor(vScaled);
	    var v = vScaled - v0;
	    var U = new THREE.Vector4(u*u*u, u*u, u, 1);
	    var V = new THREE.Vector4(v*v*v, v*v, v, 1);
	    u0 += 1;  v0 += 1;
              //  build indices for the relevant portion 
	    GXelements = [];   GYelements = [];	    GZelements = [];
	    GX = new THREE.Matrix4;
	    GY = new THREE.Matrix4;
	    GZ = new THREE.Matrix4;
	    for (var bx=0; bx<4; bx++) {             // loop through 16 control points
		for (var by=0; by<4; by++) {
		    i0 = (v0-1)*Ncp + u0-1;    // base index for the local control points
		    ic = i0 + bx*Ncp + by;     // final control point index
		    im = bx*4 + by;                  // index into THREE.js matrix;  column-major order
		    GX.elements[im] = cgridPts[ic].x;
		    GY.elements[im] = cgridPts[ic].y;
		    GZ.elements[im] = cgridPts[ic].z;
		}
	    }      // end of basis point loop

	    var tmpVec = V.clone();
	    tmpVec.applyMatrix4(Mbst);
	    tmpVec.applyMatrix4(GX);
	    tmpVec.applyMatrix4(Mbs);
	    var vx = U.dot(tmpVec);
	    var tmpVec = V.clone();
	    tmpVec.applyMatrix4(Mbst);
	    tmpVec.applyMatrix4(GY);
	    tmpVec.applyMatrix4(Mbs);
	    var vy = U.dot(tmpVec);
	    var tmpVec = V.clone();
	    tmpVec.applyMatrix4(Mbst);
	    tmpVec.applyMatrix4(GZ);
	    tmpVec.applyMatrix4(Mbs);
	    var vz = U.dot(tmpVec);
	    vertices[i].x = vx;  vertices[i].y = vy;    vertices[i].z = vz;
	}
    }
    warpObj.geometry.computeFaceNormals();
    warpObj.geometry.verticesNeedUpdate = true; 
}

function fixRange(value,eps) {
    if (value<eps) 
	return eps;
    if (value>1.0-eps)
	return 1.0-eps;
    return value;
}

