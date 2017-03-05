var figura = new THREE.Shape();

figura.moveTo(10, 10);
figura.lineTo(10, 60);    //1
figura.lineTo(10, 40);    //2
figura.lineTo(20, 30);    //3
figura.lineTo(20, 20);    //4
figura.lineTo(30, 10);    //5
figura.lineTo(40, 10);    //6
figura.lineTo(50, 20);    //7
figura.lineTo(50, 30);    //8
figura.lineTo(60, 40);    //9
figura.lineTo(60, 60);    //10
figura.lineTo(55, 50);    //11
figura.lineTo(45, 70);    //12
figura.lineTo(25, 70);    //13
figura.lineTo(15, 50);    //14

var forma = new THREE.ExtrudeGeometry( figura,{amount: 10} );


var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateY( Math.PI/6);

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
