var figura = new THREE.Shape();

//figura.moveTo(20, 20);
//figura.lineTo(20, 10);

figura.lineTo(100,20);          // Create a horizontal line
figura.arcTo(150,20,150,70,50); // Create an arc
figura.lineTo(150,120);  

var forma = new THREE.LatheGeometry(figura);


var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateY( Math.PI/6);

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.x = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
