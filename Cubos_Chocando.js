function setup(){
  cubo1 = new THREE.Mesh( new THREE.BoxGeometry(1,1,1),
                          new THREE.MeshNormalMaterial());
  cubo2 = new THREE.Mesh( new TRHEE.BoxGeometry(1,1,1),
                          new THREE.MeshNormalMaterial());
  cubo1.position.x = 0.7;
  cubo2.position.x = -0.7;
  
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 5;
  
  escena = new THREE.Scene();
  escena.add(cubo1);
  escena.add(cubo2);
  escena.add(camara);
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerHeight*.95,
                    window.innerHeight*.95);
                    
  document.body.appendChild(  renderer.domElement);
  
  
