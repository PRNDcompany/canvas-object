import { DisplayObject, DisplayObjectOptions } from './DisplayObject';

const PI2 = Math.PI * 2;

export interface CircleOptions extends DisplayObjectOptions {
  radius: number;
  startAngle?: number;
  endAngle?: number;
}

export class Circle extends DisplayObject {
  public radius: number;
  public startAngle: number;
  public endAngle: number;

  constructor({ position, radius, alpha, color, startAngle, endAngle, scale }: CircleOptions) {
    super({ position, alpha, color, scale });
    this.radius = radius;
    this.startAngle = startAngle || 0;
    this.endAngle = endAngle || PI2;
  }

  public render(context: CanvasRenderingContext2D) {
    context.save();
    context.beginPath();
    context.fillStyle = this.color;
    context.globalAlpha = this.alpha;
    context.arc(this.position.x * this.scale, this.position.y * this.scale, this.radius * this.scale, this.startAngle, this.endAngle);
    context.fill();
    context.restore();
  }
}
