/* eslint-disable */
import React from 'react';
import { v4 } from 'uuid';
import Particle from './particle';
// import IMAGES from '../../components/confetti/images';

const particles = new Map();

function repaint(canvas) {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle, key) => {
    const updateValue = particle.update();

    if (updateValue === false) {
      particles.delete(key);
    }
  });
  requestAnimationFrame(() => repaint(canvas));
}

function randomNumberInRange(min, max) {
  return Math.random() * (max - min) + min;
}

export default (canvas, options) => {
  if (!canvas) return;

  options = Object.assign(
    {
      isInfinite: false,
      numParticles: 20,
      imgArray: IMAGES,
      speedRange: [1, 3],
    },
    options
  );

  const { isInfinite, numParticles, imgArray, speedRange } = options;

  for (let i = 0; i < numParticles; i++) {
    // grab random svg path
    const svgPath = imgArray[Math.floor(Math.random() * imgArray.length)];
    const randomX = randomNumberInRange(0, canvas.width);
    const randomY = randomNumberInRange(-10, 10);
    const randomSpeed = randomNumberInRange(speedRange[0], speedRange[1]);
    const randomRotate = randomNumberInRange(100, 200);
    const newParticle = new Particle(
      randomSpeed,
      randomX,
      randomY,
      randomRotate,
      svgPath,
      canvas,
      isInfinite
    );

    particles.set(v4(), newParticle);
  }

  repaint(canvas);
};

/* eslint-enable */
