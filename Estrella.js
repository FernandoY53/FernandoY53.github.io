var figura = new THREE.Shape();

figura.moveTo(20, 20);
figura.lineTo(20, 10);
figura.lineTo(30, 15);
figura.lineTo(40, 10);
figura.lineTo(40, 20);
figura.lineTo(50, 25);
figura.lineTo(40, 30);
figura.lineTo(40, 40);
figura.lineTo(30, 35);
figura.lineTo(20, 40);
figura.lineTo(20, 30);
figura.lineTo(10, 25);

var forma = new THREE.ExtrudeGeometry( figura,{amount: 10} );


var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateY( Math.PI/6);

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;
camara.position.x = 50;
camara.position.y = 30;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
