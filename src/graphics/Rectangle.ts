import { DisplayObject, DisplayObjectOptions } from './DisplayObject';

export interface RectangleOptions extends DisplayObjectOptions {
  width: number;
  height: number;
}

export class Rectangle extends DisplayObject {
  public width: number;
  public height: number;

  constructor({ position, width, height, alpha, color, scale, rotation }: RectangleOptions) {
    super({ position, alpha, color, scale, rotation });
    this.width = width;
    this.height = height;
  }

  public render(context: CanvasRenderingContext2D) {
    context.save();
    context.beginPath();
    context.translate(this.position.x, this.position.y);
    context.rotate(this.rotation);
    context.translate(-this.position.x, -this.position.y);
    context.fillStyle = this.color;
    context.globalAlpha = this.alpha;
    context.fillRect(this.position.x * this.scale, this.position.y * this.scale, this.width * this.scale, this.height * this.scale);
    context.fill();
    context.restore();
  }
}
