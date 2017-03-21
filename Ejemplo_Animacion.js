function setup(){
  escena = new THREE.Scene();
  
  camara = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
  
  camara.position.z = 5;
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeigth);
  document.body.appendChild(renderer.domElement);
