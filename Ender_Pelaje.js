function setup() {
	
	//CUERPO GUERRERO
	var figura = new THREE.Shape();
figura.moveTo(10, 47);    //1
figura.lineTo(15, 45);    //2
figura.lineTo(25, 95);    //3
figura.lineTo(25, 70);    //4
figura.lineTo(30, 70);    //5
figura.lineTo(30, -10);    //6
figura.lineTo(35, -10);    //7
figura.lineTo(35, 70);    //8
figura.lineTo(45, 70);    //9
figura.lineTo(45, -10);    //10
figura.lineTo(50, -10);    //11
figura.lineTo(50, 70);    //12
figura.lineTo(55, 70);    //13
figura.lineTo(55, 95);    //14
figura.lineTo(65, 45);    //15
figura.lineTo(70, 47);    //16
figura.lineTo(55, 110);    //17
figura.lineTo(45, 110);    //18
figura.lineTo(45, 111);    //19
figura.lineTo(50, 111);    //20
figura.lineTo(50, 118);    //21
figura.lineTo(43, 118);    //22
figura.lineTo(43, 122);    //23
figura.lineTo(50, 122);    //24
figura.lineTo(50, 130);    //25
figura.lineTo(30, 130);    //26
figura.lineTo(30, 122);    //27
figura.lineTo(37, 122);    //28
figura.lineTo(37, 118);    //29
figura.lineTo(30, 118);    //30
figura.lineTo(30, 111);    //31
figura.lineTo(35, 111);    //32
figura.lineTo(35, 110);    //33
figura.lineTo(25, 110);    //34


	THREE.ImageUtils.crossOrigin = '';
	var textura 	= THREE.ImageUtils.loadTexture('FernandoY53.github.io/Pelaje.jpg');
	var material 	= new THREE.MeshBasicMaterial({map: textura});

  	var forma = new THREE.ExtrudeGeometry( figura,{amount: 10} );

	malla 		= new THREE.Mesh(forma,material);
  	malla.rotateY( Math.PI/6);

	escena 		= new THREE.Scene();
	escena.add(malla);

	camara 		= new THREE.PerspectiveCamera();
	camara.position.z= 200;
	camara.position.y= 60;
	camara.position.x= 40;

	renderer 	= new THREE.WebGLRenderer();
	renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
	document.body.appendChild(renderer.domElement);
}

function loop(){
	requestAnimationFrame (loop);
	
	malla.rotation.x += 0.01;

	renderer.render(escena, camara);
}

var camara, escena, renderer, malla;
setup();
loop();
