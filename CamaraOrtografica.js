//Camara Ortografica

var camara =new three.OrthographicCamara();

camara.left = window=innerWidth /-2;
camara.right = window=innerWidth /2;
camara.top = window .innerHeigth/ 2;
camara.bottom = window=innerHeigth /-2;
camara.near = 0.1;
camara.far = 1000;
camara.updateProjectionMatriz();

camara.position.z = 100;

var cubo = new THREE.Mesh(new THREE.BoxGeometry(30,30,30),
			new THREE.MeshNormalMaterial());
cubo.rotateY(Math.PI/4);

var esfera1 = new THREE.Mesh(	new THREE.SphereGeometry(15),
				newTHREE.MesNormalMaterial());
esfera1.position.x=50;


var esfera2 = new THREE.Mesh(	new THREE.SphereGeometry(15),
				newTHREE.MesNormalMaterial());
esfera2.position.x=-50;
esfera2.position.z=-100;

var escena = new THREE.Scene();
escena.add(esfera1);
escena.add(esfera2);
escena.add(cubo);

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(	window.innerWidth,
			window.innerHeight);

document.body.appendChild( renderizador.domElement);
renderizador.render(escena, camara);
