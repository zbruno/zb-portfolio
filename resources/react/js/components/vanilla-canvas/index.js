import React from 'react';
import PropTypes from 'prop-types';

import { CanvasStyles } from './style';

class Canvas extends React.Component {
  static propTypes = {
    radius: PropTypes.number,
    quantity: PropTypes.number,
  };

  static defaultProps = {
    radius: 110,
    quantity: 25,
  }

  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.context = undefined;
    this.particles = undefined;
    this.mouseX = (window.innerWidth / 2);
    this.mouseY = (window.innerHeight / 2);
  }

  componentDidMount() {
    this.init();
  }

  documentMouseMoveHandler = event => {
    this.mouseX = event.clientX * 2;
    this.mouseY = event.clientY * 2;
  }

  windowResizeHandler = () => {
    this.canvas.current.width = this.canvas.current.parentElement.clientWidth * 2;
    this.canvas.current.height = this.canvas.current.parentElement.clientHeight * 2;
  }

  update = () => {
    // Fade out the lines slowly by drawing a rectangle over the entire canvas
    this.context.fillStyle = 'rgba(0,0,0,0.05)';
    this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);

    for (let i = 0; i < this.particles.length; i++) {
      const particle = this.particles[i];
      const lp = { x: particle.position.x, y: particle.position.y };

      // Offset the angle to keep the spin going
      particle.angle += particle.speed;

      // Follow mouse with some lag
      particle.shift.x += (this.mouseX - particle.shift.x) * (particle.speed);
      particle.shift.y += (this.mouseY - particle.shift.y) * (particle.speed);

      // Apply position
      particle.position.x = particle.shift.x + Math.cos(i + particle.angle) * (particle.orbit);
      particle.position.y = particle.shift.y + Math.sin(i + particle.angle) * (particle.orbit);

      // Limit to screen bounds
      particle.position.x = Math.max(Math.min(particle.position.x), 0);
      particle.position.y = Math.max(Math.min(particle.position.y), 0);

      particle.size += (particle.targetSize - particle.size) * 0.05;

      // If we're at the target size, set a new one. Think of it like a regular day at work.
      if (Math.round(particle.size) === Math.round(particle.targetSize)) {
        particle.targetSize = 1 + Math.random() * 7;
      }

      this.context.beginPath();
      this.context.fillStyle = particle.fillColor;
      this.context.strokeStyle = particle.fillColor;
      this.context.lineWidth = particle.size;
      this.context.moveTo(lp.x, lp.y);
      this.context.lineTo(particle.position.x, particle.position.y);
      this.context.stroke();
      this.context.arc(particle.position.x, particle.position.y, particle.size / 2, 0, Math.PI * 2, true);
      this.context.fill();
    }

    // window.requestAnimationFrame(this.update);
  }

  createParticles = () => {
    const { quantity, radius } = this.props;
    const newParticles = [];

    for (let i = 0; i < quantity; i++) {
      newParticles.push({
        position: { x: this.mouseX, y: this.mouseY },
        shift: { x: this.mouseX, y: this.mouseY },
        size: 1,
        angle: 0,
        speed: 0.01 + Math.random() * 0.04,
        targetSize: 1,
        fillColor: '#' + (Math.random() * 0x404040 + 0xaaaaaa | 0).toString(16),
        orbit: radius * 0.5 + (radius * 0.5 * Math.random()),
      });
    }

    this.particles = newParticles;
  };

  init = () => {
    if (this.canvas.current && this.canvas.current.getContext) {
      this.context = this.canvas.current.getContext('2d');

      // Register event listeners
      document.addEventListener('mousemove', this.documentMouseMoveHandler, false);
      window.addEventListener('resize', this.windowResizeHandler, false);

      this.createParticles();
      this.windowResizeHandler();

      // window.requestAnimationFrame(this.update);
      setInterval(this.update, 1000 / 60);
    }
  };

  render() {
    return (
      <CanvasStyles ref={this.canvas} />
    );
  }
}

export default Canvas;
