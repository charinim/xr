import * as THREE from 'three'

export default class Object{
  constructor(){
    
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
    this.material = new THREE.MeshBasicMaterial( { color: 0xff01232 } );
    this.cube = new THREE.Mesh( this.geometry, this.material );
    this.cube.position.set(1 , 1, 1 );
  
    

  }

  // cube(){
   
  //   console.log("Testing");

  // }
  
  // animate() {
  //   requestAnimationFrame( animate );
  //   renderer.render( scene, camera );
   }
  // animate();
  

