import * as THREE from 'three'

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
var cube = new THREE.Mesh( geometry, material );
cube.position.set(10 , 0, 0 );
scene.add(cube)

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
}
animate();
