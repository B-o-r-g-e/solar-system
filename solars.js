// import * as THREE from 'three';
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import { planets } from "./solarArray.js";
//
// let camera, scene, renderer;
//
// camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.set(0, 0, 250);
//
// scene = new THREE.Scene();
// renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);
//
// // Add orbit controls
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.autoRotate = false;
// controls.dampingFactor = 0.5;
// controls.update();
//
// // Load texture for the Sun
// const textureLoader = new THREE.TextureLoader();
// const sunTexture = textureLoader.load('texture/solarTextures/2k_sun.jpg');
//
// // Create Sun
// const sunGeometry = new THREE.SphereGeometry(39, 32, 32);
// const sunMaterial = new THREE.MeshStandardMaterial({ map: sunTexture });
// const sun = new THREE.Mesh(sunGeometry, sunMaterial);
// scene.add(sun);
// sun.position.x = -50;
//
// // Create group to hold planets and their moons
// const group = new THREE.Group();
// const planetGroup = new THREE.Group();
//
// // Create planets and their moons
// planets.map((planet) => {
//     // Create the planet
//     const planetGeometry = new THREE.SphereGeometry(planet.radius, 32, 32);
//     const planetMaterial = new THREE.MeshStandardMaterial({ map: planet.material });
//     const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
//
//     // Create a group for the planet and its moons
//     planetGroup.add(planetMesh);
//
//     // Position the planet within the group
//     planetMesh.position.x = planet.distance;
//
//     // Create and add each moon to its respective planet
//     planet.moons.forEach((moon) => {
//         const moonGeometry = new THREE.SphereGeometry(moon.radius, 32, 32);
//         const moonMaterial = new THREE.MeshStandardMaterial({ map: moon.material });
//         const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
//
//         // Position the moon relative to the planet
//         moonMesh.position.x = planet.distance + moon.distance;
//
//         // Add the moon to the planet group
//         // planetGroup.add(moonMesh);
//         planetGroup.children.forEach((planet) => {
//             planet.add(moonMesh);
//         })
//     });
//
//     // Add the planet group to the main group
//     group.add(planetGroup);
// });
//
// // Add the group containing planets and moons to the scene
// scene.add(group);
//
// // Create ambient light
// const ambientLight = new THREE.AmbientLight(0xffffff, 1);
// scene.add(ambientLight);
//
// // Handle window resize
// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// });
//
//
// // Render loop
// function renderLoop() {
//     sun.rotation.x += 0.01
//
//     planetGroup.children.forEach((planet, planetIndex) => {
//         planet.rotation.y += planets[planetIndex].speed;
//         // planet.rotation.x += Math.sin(planet.rotation.y) * planets[planetIndex].distance;
//         // planet.rotation.z += Math.cos(planet.rotation.y) * planets[planetIndex].distance;
//     })
//
//     controls.update();
//     renderer.render(scene, camera);
//     requestAnimationFrame(renderLoop);
// }
//
// renderLoop();
