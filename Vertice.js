//Se define Objeto
var forma = new THREE.Geometry();

forma.vertices.push( new THREE.Vector3( 1,  0,  1 ) ); // Vértice 0
forma.vertices.push( new THREE.Vector3( 1,  0, -1 ) ); // Vértice 1
forma.vertices.push( new THREE.Vector3(-1,  0, -1 ) ); // Vértice 2
forma.vertices.push( new THREE.Vector3(-1,  0,  1 ) ); // Vértice 3
forma.vertices.push( new THREE.Vector3( 0,  10,  0 ) ); // Vértice 4
forma.vertices.push( new THREE.Vector3( 0,  -10,  0 ) ); // Vértice 5
forma.vertices.push( new THREE.Vector3( 5,  0,  0) ); // Vértice 6
forma.vertices.push( new THREE.Vector3( -5,  0,  0 ) ); // Vértice 7

forma.faces.push( new THREE.Face3( 3, 2, 1 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 3, 1, 0 ) ); // Cara 1
forma.faces.push( new THREE.Face3( 3, 0, 4 ) ); // Cara 2
forma.faces.push( new THREE.Face3( 0, 1, 4 ) ); // Cara 3
forma.faces.push( new THREE.Face3( 1, 2, 4 ) ); // Cara 4
forma.faces.push( new THREE.Face3( 2, 3, 4 ) ); // Cara 5
forma.faces.push( new THREE.Face3( 2, 3, 4 ) ); // Cara 5
forma.faces.push( new THREE.Face3( 3, 0, 5 ) ); // Cara 5
forma.faces.push( new THREE.Face3( 0, 1, 5 ) ); // Cara 5
forma.faces.push( new THREE.Face3( 1, 2, 5 ) ); // Cara 5
forma.faces.push( new THREE.Face3( 2, 3, 5 ) ); // Cara 5
forma.faces.push( new THREE.Face3( 0, 6, 5 ) ); // Cara 5
forma.faces.push( new THREE.Face3( 1, 6, 5 ) ); // Cara 5
forma.faces.push( new THREE.Face3( 0, 1, 5 ) ); // Cara 5
forma.faces.push( new THREE.Face3( 3, 7, 5 ) ); // Cara 5
forma.faces.push( new THREE.Face3( 2, 7, 5 ) ); // Cara 5
forma.faces.push( new THREE.Face3( 3, 2, 7 ) ); // Cara 5

forma.computeBoundingSphere();

forma.computeFaceNormals();

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
malla.rotateY(Math.PI/4);

var escena = new THREE.Scene();
escena.add( malla );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 25;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, 
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
