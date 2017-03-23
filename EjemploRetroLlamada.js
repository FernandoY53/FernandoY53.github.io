function listener(){
  camara.aspect = window.innerWidth / window.innerHeight;
  camara.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window,innerHeight);
}
function setup(){
  escena = new THREE.Scene();
  camara = new  THREE.PerspectiveCamera(75,window.innerWidth/window
  
var tipoEcento = 'rezise';
var capturar = false;
window.addEventListener(tipoEvento, listener, capturar);
}
function loop(){
  requestAnimationFrame(loop);
  
  malla.rotation.x +=0.01;
  malla.rotation.y += 0.01;
  
  renderer.render(escena, camara);
}
var escena, camara, renderer, malla;

setup();
loop();
                                          
