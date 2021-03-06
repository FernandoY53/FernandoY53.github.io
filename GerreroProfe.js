function setup() {
	
	
	//THREE.ImageUtils.crossOrigin = '';
	//var textura 	= THREE.ImageUtils.loadTexture('FernandoY53.github.io/Piedra2.jpg');
	//var material 	= new THREE.MeshBasicMaterial({map: textura});
  
                                                          // instantiate a loader
  var loader = new THREE.TextureLoader();                 // load a resource                            
  loader.load('FernandoY53.github.io/Piedra.jpg',         // resource URL
	function( texture ) {                          // Function when resource is loaded          
	var material = new THREE.MeshBasicMaterial( {           // do something with the texture
			map: texture
      
  //CUERPO GUERRERO
	var figura = new THREE.Shape();

  	figura.moveTo(10, 40);    //1
  	figura.lineTo(15, 40);    //2
  	figura.lineTo(15, 60);    //3
  	figura.lineTo(20, 67);    //4
  	figura.lineTo(32, 40);    //5
  	figura.lineTo(32, 38);    //6
  	figura.lineTo(25, 10);    //7
	figura.lineTo(27, 10);    //8
  	figura.lineTo(20, 6);    //9
  	figura.lineTo(35, 6);    //10
  	figura.lineTo(35, 10);    //11
  	figura.lineTo(37, 10);    //12
  	figura.lineTo(40, 30);    //13
  	figura.lineTo(43, 10);    //14
	figura.lineTo(45, 10);    //15
  	figura.lineTo(45, 6);    //16
  	figura.lineTo(60, 6);    //17
  	figura.lineTo(53, 10);    //18
  	figura.lineTo(55, 10);    //19
	figura.lineTo(48, 38);    //20
  	figura.lineTo(48, 40);    //21
  	figura.lineTo(60, 67);    //22
  	figura.lineTo(78, 67);    //23
  	figura.lineTo(82, 75);    //24
  	figura.lineTo(82, 83);    //25
  	figura.lineTo(85, 83);    //26
  	figura.lineTo(85, 84);    //27
  	figura.lineTo(84, 84);    //28
  	figura.lineTo(86, 110);    //29
  	figura.lineTo(81.5, 120);    //30
  	figura.lineTo(77, 110);    //31
  	figura.lineTo(79, 84);    //32
  	figura.lineTo(78, 84);    //33
  	figura.lineTo(78, 83);    //34
  	figura.lineTo(80, 83);    //35
  	figura.lineTo(80, 80);    //36
	figura.lineTo(75, 72);    //37
  	figura.lineTo(60, 72);    //38
  	figura.lineTo(55, 79);    //39
  	figura.lineTo(45, 79);    //40
  	figura.lineTo(45, 81);    //41
  	figura.lineTo(50, 81);    //42
  	figura.lineTo(50, 100);    //43
  	figura.lineTo(30, 100);    //44
  	figura.lineTo(30, 81);    //45
  	figura.lineTo(35, 81);    //46
  	figura.lineTo(35, 79);    //47
  	figura.lineTo(25, 79);    //48
  	figura.lineTo(10, 67);    //49
      
    var forma = new THREE.ExtrudeGeometry( figura,{amount: 10} );
	  malla 		= new THREE.Mesh(forma,material);
  	malla.rotateY( Math.PI/6);

	  escena 		= new THREE.Scene();
	  escena.add(malla);  
      
		 } );
	},	

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
	
	malla.rotation.y += 0.01;

	renderer.render(escena, camara);
}

var camara, escena, renderer, malla;
setup();
loop();
