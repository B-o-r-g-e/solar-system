import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { planets } from "./solarArray.js";
import {CubeTextureLoader} from "three";

let camera, scene, renderer;

camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 70);

scene = new THREE.Scene();
renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.autoRotate = false;
controls.dampingFactor = 0.5;
controls.update();

// Load texture for the Sun
const textureLoader = new THREE.TextureLoader();
const sunTexture = textureLoader.load('texture/solarTextures/2k_sun.jpg');

// Create Sun
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sunMaterial = new THREE.MeshStandardMaterial({ map: sunTexture });

//create sun
const sun = new THREE.Mesh(sphereGeometry, sunMaterial);
scene.add(sun);
sun.scale.setScalar(5)

//create background
const backgroundCubeMap = new THREE.CubeTextureLoader()
    .load([
        'texture/cubeMap/px.png',
        'texture/cubeMap/nz.png',
        'texture/cubeMap/py.png',
        'texture/cubeMap/ny.png',
        'texture/cubeMap/pz.png',
        'texture/cubeMap/nz.png'
    ])

scene.background = backgroundCubeMap

//create planet
const createPlanet = (planet) => {
    const planetMesh = new THREE.Mesh(
        sphereGeometry,
        planet.material
    )
    planetMesh.scale.setScalar(planet.radius)
    planetMesh.position.x = planet.distance;
    return planetMesh;
}

//create moon
const createMoon = (moon) => {
    const moonMesh = new THREE.Mesh(
        sphereGeometry,
        moon.material
    )
    moonMesh.scale.setScalar(moon.radius)
    moonMesh.position.x = moon.distance
    return moonMesh;
}

//add planets
const planetMeshes = planets.map((planet) => {
    const planetMesh = createPlanet(planet)
    scene.add(planetMesh);

    planet.moons.forEach((moon) => {
        const moonMesh = createMoon(moon);
        planetMesh.add(moonMesh)
    })

    return planetMesh;
})


// Create ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


// Render loop
function renderLoop() {
    sun.rotation.x += 0.003
    sun.rotation.y += 0.003

    planetMeshes.forEach((planet, planetIndex) => {
        planet.rotation.y += planets[planetIndex].speed;
        planet.position.x = Math.sin(planet.rotation.y) * planets[planetIndex].distance;
        planet.position.z = Math.cos(planet.rotation.y) * planets[planetIndex].distance;

        planet.children.forEach((moon, moonIndex) => {
            moon.rotation.y += planets[planetIndex].moons[moonIndex].speed;
            moon.position.x = Math.sin(moon.rotation.y) * planets[planetIndex].moons[moonIndex].distance;
            moon.position.z = Math.cos(moon.rotation.y) * planets[planetIndex].moons[moonIndex].distance;
        })
    })

    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(renderLoop);
}

renderLoop();
console.log(planetMeshes)
