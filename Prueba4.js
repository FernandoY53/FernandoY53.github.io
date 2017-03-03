var figura = new THREE.Shape();

//figura.moveTo(20, 20);
//figura.lineTo(20, 10);

figura.acrTo(0,30,10,40,10);

var forma = new THREE.ExtrudeGeometry( figura,{amount: 10} );


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
