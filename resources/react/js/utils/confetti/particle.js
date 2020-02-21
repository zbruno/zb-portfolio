/* eslint-disable */
export default class Particle {
  constructor(speed, xPos, yPos, rotation, name, canvas, isInfinite) {
    this.speed = speed;
    this.xPos = xPos;
    this.yPos = yPos;
    this.counter = 0;
    this.sign = Math.random() < 0.5 ? -1 : 1;
    this.name = name;
    this.rotation = rotation;
    this.canvas = canvas;
    this.isInfinite = isInfinite;

    this.image = new Image();
    this.image.src = `/images/curology/app/components/confetti/${name}.svg`;
  }

  update() {
    const rotation = this.rotation + this.counter;
    const x = this.xPos + Math.cos(this.counter / 100) * 25;
    const y = this.yPos + Math.abs(this.counter);

    if (y > this.canvas.height) {
      if (this.isInfinite) {
        this.yPos = -10;
        this.counter = 0;
      } else {
        return false;
      }
    }

    this.counter += this.sign * this.speed;

    this.drawRotated(x, y, rotation);
  }

  drawRotated(x, y, deg) {
    const rad = (deg * Math.PI) / 180;
    const ctx = this.canvas.getContext('2d');

    ctx.translate(x + this.image.width / 2, y + this.image.height / 2);
    ctx.rotate(rad);
    ctx.drawImage(
      this.image,
      (this.image.width / 2) * -1,
      (this.image.height / 2) * -1,
      this.image.width,
      this.image.height
    );
    ctx.rotate(rad * -1);
    ctx.translate(
      (x + this.image.width / 2) * -1,
      (y + this.image.height / 2) * -1
    );
  }
}
/* eslint-enable */
