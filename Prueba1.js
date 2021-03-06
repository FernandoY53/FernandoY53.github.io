var points = [];

for ( var i = 0; i < 10; i ++ ) {
	points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
}

var geometry = new THREE.LatheGeometry( points );
var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( geometry, material );
malla.rotateX(Math.PI/4);

var escena=new THREE.Scene();
escena.add( malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, 
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render(escena, camara);
