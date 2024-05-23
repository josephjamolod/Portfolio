import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./CanvasLoader";

const Space = () => {
  const space = useGLTF("/spaceBoy/scene.gltf");
  // console.log(space);
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 20]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={space.scene}
        scale={0.75}
        position={[0, -2, 0]}
        // rotation={[-0.01, -0.2, -0.1]}
        rotation={[0.05, -0.2, 0]}
      />
    </mesh>
  );
};

const SpaceCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      //   camera={{ position: [14, 10, 18], fov: 15 }}
      camera={{ position: [8, 10, 22], fov: 15 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Space />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default SpaceCanvas;
