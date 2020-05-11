import { DisplayObject, DisplayObjectOptions } from './DisplayObject';

const PI2 = Math.PI * 2;

export interface CircleOptions extends DisplayObjectOptions {
  radius: number;
}

export class Circle extends DisplayObject {
  public radius: number;

  constructor({ position, radius, alpha, color }: CircleOptions) {
    super({ position, alpha, color });
    this.radius = radius;
  }

  render(context: CanvasRenderingContext2D) {
    context.save();
    context.beginPath();
    context.fillStyle = this.color;
    context.globalAlpha = this.alpha;
    context.arc(this.position.x, this.position.y, this.radius, 0, PI2);
    context.fill();
    context.restore();
  }
}
