var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var geometry = new THREE.BoxGeometry( 2, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube1 = new THREE.Mesh( geometry, material );
var cube2 = new THREE.Mesh( geometry, material );

scene.add( cube1 );
scene.add( cube2 );
camera.position.z = 5;

var animate = function () {
	requestAnimationFrame( animate );

	cube1.rotation.x += 0.1;
	cube1.rotation.y += 0.1;

	renderer.render(scene, camera);
};

animate();
