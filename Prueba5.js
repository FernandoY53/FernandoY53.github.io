var figura = new THREE.Shape();

figura.moveTo(10, 10);
figura.lineTo(10, 10);
figura.lineTo(30, 10);
figura.lineTo(35, 15);
figura.lineTo(30, 30);
figura.lineTo(10, 30);
figura.lineTo(5, 15);

var forma = new THREE.ExtrudeGeometry( figura,{amount: 10} );

var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateY( Math.PI/6);

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 400;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
