//CUERPO
var figura = new THREE.Shape();

figura.moveTo(10, 30);
figura.lineTo(10, 50);    //1
figura.lineTo(20, 60);    //2
figura.lineTo(20, 70);    //3
figura.lineTo(30, 80);    //4
figura.lineTo(40, 80);    //5
figura.lineTo(50, 70);    //6
figura.lineTo(50, 60);    //7
figura.lineTo(60, 50);    //8
figura.lineTo(60, 30);    //9
figura.lineTo(55, 40);    //10
figura.lineTo(45, 20);    //11
figura.lineTo(42.22, 20);    //12
figura.lineTo(42.22, 10);    //13
figura.lineTo(37.78, 10);    //14
figura.lineTo(37.78, 20);    //15
figura.lineTo(32.22, 20);    //16
figura.lineTo(32.22, 10);    //17
figura.lineTo(27.78, 10);    //18
figura.lineTo(27.78, 20);    //19
figura.lineTo(25, 20);    //20
figura.lineTo(15, 40);    //21

var forma = new THREE.ExtrudeGeometry( figura,{amount: 10} );


var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateY( Math.PI*5/6);

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 200;
camara.position.y = 40;
camara.position.x = 10;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
