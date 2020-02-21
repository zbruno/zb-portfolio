import React, { useState, useCallback, useRef } from 'react';
import { observer } from 'mobx-react';
import * as THREE from 'three';
import { Canvas } from 'react-three-fiber';

import Effects from './effects';
// import Sparks from './sparks';
import Particles from './particles';
// import './styles.css'

function HeroCanvas() {
  const [down, set] = useState(false);
  const mouse = useRef([0, 0]);
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), []);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <Canvas
      pixelRatio={Math.min(2, isMobile ? window.devicePixelRatio : 1)}
      camera={{ fov: 100, position: [0, 0, 30] }}
      onMouseMove={onMouseMove}
      onMouseUp={() => set(false)}
      onMouseDown={() => set(true)}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.Uncharted2ToneMapping;
        gl.setClearColor(new THREE.Color('#020207'));
      }}
    >
      <fog attach="fog" args={['white', 50, 190]} />
      <pointLight distance={100} intensity={4} color="white" />
      <Particles count={isMobile ? 5000 : 10000} mouse={mouse} />
      {/* <Sparks count={20} mouse={mouse} colors={['#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff', 'lightpink', 'lightblue']} /> */}
      <Effects down={down} />
    </Canvas>
  );
}

export default observer(HeroCanvas);
