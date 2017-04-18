var iluminacion = new THREE.AmbientLight(0xFFFFFF);

var forma = new THREE.SphereGeometry(1);
var material = new THREE.Scene();
escena.add(malla);
escena.edd(iluminacion);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var lienzo = document.getElementById("luzAmbiental");
var renderizador = new THREE.WebGLRenderer({canvas: lienzo,
                                            antialias: true});
renderizador.setSize( 600,600);
renderizador.render(escena, camara);
