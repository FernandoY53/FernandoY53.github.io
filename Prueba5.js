var figura = new THREE.Shape();

//figura.moveTo(10, 10);
figura.lineTo(0, 3);          //A
figura.lineTo(2.6, 1.5);      //B
figura.lineTo(2.6, -1.5);     //C
figura.lineTo(0, -3);         //D
figura.lineTo(-2.6, -1.5);    //E
figura.lineTo(-2.6, 1.5);     //F

var forma = new THREE.ExtrudeGeometry( figura,{amount: 10} );

var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/6);

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
