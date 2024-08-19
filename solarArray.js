import * as THREE from 'three';


const textureLoader = new THREE.TextureLoader();

const mercuryMesh = textureLoader.load(
    'texture/solarTextures/2k_mercury.jpg',
    () => {
        // console.log('success')
    },
    undefined,
    () => {
        console.log('error')
    }
)

const venusMesh = textureLoader.load(
    'texture/solarTextures/2k_venus_surface.jpg',
    () => {
        // console.log('success')
    },
    undefined,
    () => {
        console.log('error')
    }
)

const earthMesh = textureLoader.load(
    'texture/solarTextures/2k_earth_daymap.jpg',
    () => {
        // console.log('success')
    },
    undefined,
    () => {
        console.log('error')
    }
)

const marsMesh = textureLoader.load(
    'texture/solarTextures/2k_mars.jpg',
    () => {
        // console.log('success')
    },
    undefined,
    () => {
        console.log('error')
    }
)

const jupiterMesh = textureLoader.load(
    'texture/solarTextures/8k_jupiter.jpg',
    () => {
        // console.log('success')
    },
    undefined,
    () => {
        console.log('error')
    }
)

const saturnMesh = textureLoader.load(
    'texture/solarTextures/8k_saturn.jpg',
    () => {
        // console.log('success')
    },
    undefined,
    () => {
        console.log('error')
    }
)

const uranusMesh = textureLoader.load(
    'texture/solarTextures/2k_uranus.jpg',
    () => {
        // console.log('success')
    },
    undefined,
    () => {
        console.log('error')
    }
)

const moonMesh = textureLoader.load(
    'texture/solarTextures/2k_moon.jpg',
    () => {
        // console.log('success')
    },
    undefined,
    () => {
        console.log('error')
    }
)

const mercuryMaterial = new THREE.MeshStandardMaterial({
    map: mercuryMesh,
});

const venusMaterial = new THREE.MeshStandardMaterial({
    map: venusMesh,
});

const earthMaterial = new THREE.MeshStandardMaterial({
    map: earthMesh,
});

const marsMaterial = new THREE.MeshStandardMaterial({
    map: marsMesh,
});

const jupiterMaterial = new THREE.MeshStandardMaterial({
    map: jupiterMesh,
});

const saturnMaterial = new THREE.MeshStandardMaterial({
    map: saturnMesh,
});

const uranusMaterial = new THREE.MeshStandardMaterial({
    map: uranusMesh,
});

const moonMaterial = new THREE.MeshStandardMaterial({
    map: moonMesh,
});


export const planets = [
    {
        name: "Mercury",
        radius: 0.5,
        distance: 10,
        speed: 0.01,
        material: mercuryMaterial,
        moons: [],
    },
    {
        name: "Venus",
        radius: 0.8,
        distance: 15,
        speed: 0.007,
        material: venusMaterial,
        moons: [],
    },
    {
        name: "Earth",
        radius: 1,
        distance: 20,
        speed: 0.005,
        material: earthMaterial,
        moons: [
            {
                name: "Moon",
                radius: 0.3,
                distance: 3,
                speed: 0.015,
                material: moonMaterial
            },
        ],
    },
    {
        name: "Mars",
        radius: 0.7,
        distance: 25,
        speed: 0.003,
        material: marsMaterial,
        moons: [
            {
                name: "Phobos",
                radius: 0.1,
                distance: 2,
                speed: 0.02,
                material: moonMaterial
            },
            {
                name: "Deimos",
                radius: 0.2,
                distance: 3,
                speed: 0.015,
                material: moonMaterial,
            },
        ],
    },
    {
        name: "Jupiter",
        radius: 1.2,
        distance: 30,
        speed: 0.013,
        material: jupiterMaterial,
        moons: [
            {
                name: "Io",
                radius: 0.1821,
                distance: 2,
                speed: 0.015,
                material: moonMaterial
            },
            {
                name: "Europa",
                radius: 0.1560,
                distance: 3,
                speed: 0.02,
                material: moonMaterial
            },
            {
                name: "Ganymede",
                radius: 0.2634,
                distance: 4,
                speed: 0.01,
                material: moonMaterial
            },
            {
                name: "Callisto",
                radius: 0.2410,
                distance: 5,
                speed: 0.023,
                material: moonMaterial
            }
        ],
    },
    {
        name: "Saturn",
        radius: 1.0,
        distance: 35,
        speed: 0.015,
        material: saturnMaterial,
        moons: [
            {
                name: "Europa",
                radius: 0.1560,
                distance: 2,
                speed: 0.015,
                material: moonMaterial
            },
            {
                name: "Ganymede",
                radius: 0.2634,
                distance: 3,
                speed: 0.015,
                material: moonMaterial
            },
        ],
    },
    {
        name: "Uranus",
        radius: 1.1362,
        distance: 42,
        speed: 0.0583,
        material: uranusMaterial,
        moons: [
            {
                name: "Phobos",
                radius: 0.31267,
                distance: 2,
                speed: 0.015,
                material: moonMaterial
            },
            {
                name: "Deimos",
                radius: 0.56,
                distance: 3,
                speed: 0.015,
                material: moonMaterial
            }
        ],
    },
]

