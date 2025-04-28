import React, { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three'; // Import THREE.js for color manipulation

const HeroLights = () => {
  // Track the rotation (you can adjust the angle of rotation)
  const [rotation, setRotation] = useState(0);

  // Update rotation on every frame
  useFrame(() => {
    setRotation(prev => prev + 0.01); // Increment rotation by a small amount every frame
  });

  // Define the colors to cycle through
  const colors = [
    new THREE.Color('red'),
    new THREE.Color('pink'),
    new THREE.Color('purple'),
    new THREE.Color('orange'),
    new THREE.Color('yellow'),
  ];

  // Calculate the current color index
  const index = Math.floor((rotation % (2 * Math.PI)) / (2 * Math.PI) * colors.length);
  const nextIndex = (index + 1) % colors.length;

  // Interpolate between the current color and the next one
  const color = new THREE.Color().lerpColors(
    colors[index], 
    colors[nextIndex], 
    (rotation % (2 * Math.PI)) / (2 * Math.PI) * colors.length - index
  );

  return (
    <>
      <spotLight
        position={[2, 5, 6]}
        angle={1.0}
        intensity={250}
        color={color} // Update color dynamically
      />
    </>
  );
};

export default HeroLights;
