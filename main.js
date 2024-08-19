import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Create group
const group = new THREE.Group();

// Set up scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

// Set up camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Load textures
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('texture/TCom_GeometricPavers3_header.jpg');
const texture2 = textureLoader.load('texture/TCom_SyntheticSpongeB_header.jpg');

// Create geometries and materials
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const material1 = new THREE.MeshStandardMaterial({ map: texture });
const material2 = new THREE.MeshStandardMaterial({ map: texture2 });

// Create meshes and add them to the group
const box = new THREE.Mesh(boxGeometry, material1);
box.scale.set(2, 2, 2);
group.add(box);

const sphereGeometry = new THREE.SphereGeometry(1, 21, 18);
const sphere = new THREE.Mesh(sphereGeometry, material1);
sphere.position.set(0, 3);
group.add(sphere);

const dodecahedronGeometry = new THREE.DodecahedronGeometry(1, 2);
const dodecahedron = new THREE.Mesh(dodecahedronGeometry, material1);
dodecahedron.position.set(0, -3);
group.add(dodecahedron);

const torusGeometry = new THREE.TorusGeometry(1, 4, 20, 93);
const torus = new THREE.Mesh(torusGeometry, material2);
torus.position.set(7, 0);
group.add(torus);

const torusKnotGeometry = new THREE.TorusKnotGeometry(1, 2.5243, 150, 10);
const torusKnot = new THREE.Mesh(torusKnotGeometry, material2);
torusKnot.position.set(-8, 0);
group.add(torusKnot);

// Add plane
const planeGeometry = new THREE.PlaneGeometry(1, 1);
const planeMaterial = new THREE.MeshStandardMaterial({ map: texture, side: THREE.DoubleSide });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.position.set(0, -5);
plane.scale.set(50, 20);
plane.rotation.x = -Math.PI / 2;
plane.receiveShadow = true;
scene.add(plane);

// Add lights
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(10, 10, 5);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 1024;
directionalLight.shadow.mapSize.height = 1024;
directionalLight.shadow.camera.near = 0.5;
directionalLight.shadow.camera.far = 50;
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight('white', 0.1);
scene.add(ambientLight);

// Set camera position
camera.position.set(0, 0, 20);
camera.lookAt(0, 0, 0);

// Set up renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Optionally, use soft shadows
document.body.appendChild(renderer.domElement);

// Set up orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.autoRotate = false;
controls.dampingFactor = 0.5;

// Add the group to the scene
scene.add(group);
group.children.forEach((child) => {
    child.castShadow = true;
    child.receiveShadow = false;
});

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Render loop
function renderLoop() {
    controls.update();

    group.children.forEach((child) => {
        child.rotation.x += 0.01;
    });

    renderer.render(scene, camera);
    requestAnimationFrame(renderLoop);
}

renderLoop();
