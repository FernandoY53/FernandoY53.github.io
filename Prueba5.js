var ctx = new THREE.Shape();
ctx.arc(0,0,1.5,0,2*Math.PI);
var forma1 = new THREE.ExtrudeGeometry(ctx,{amount: 20} );
var material1 = new THREE.MeshNormalMaterial();
var malla1 = new THREE.Mesh( forma1, material1 );
malla1.rotateX( Math.3/2*PI);
var escena1 = new THREE.Scene();
escena1.add(malla1);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;

var figura = new THREE.Shape();

//figura.moveTo(0, 0);
figura.lineTo(0, 4);          //A
figura.lineTo(3.6, 2.5);      //B
figura.lineTo(3.6, -2.5);     //C
figura.lineTo(0, -4);         //D
figura.lineTo(-3.6, -2.5);    //E
figura.lineTo(-3.6, 2.5);     //F

var forma = new THREE.ExtrudeGeometry( figura,{amount: 10} );

var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.3/2*PI);

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
