import * as THREE from "three";

const canvas = document.querySelector("canvas.webgl");
const sizes = {
  width: 800,
  height: 600,
};

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
const axesHelper = new THREE.AxesHelper(3);

mesh.position.set(0.7, -0.6, 1);
camera.position.z = 3;
camera.position.y = 1;
camera.position.x = 1;

mesh.scale.x = 2;
mesh.scale.y = 0.5;
mesh.scale.z = 0.5;

scene.add(mesh);
scene.add(camera);
scene.add(axesHelper);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
