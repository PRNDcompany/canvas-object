import { DisplayObject, DisplayObjectOptions } from './DisplayObject';

export interface RectangleOptions extends DisplayObjectOptions {
  width: number;
  height: number;
}

export class Rectangle extends DisplayObject {
  public width: number;
  public height: number;

  constructor({ position, width, height, alpha, color }: RectangleOptions) {
    super({ position, alpha, color });
    this.width = width;
    this.height = height;
  }

  render(context: CanvasRenderingContext2D) {
    context.save();
    context.beginPath();
    context.fillStyle = this.color;
    context.globalAlpha = this.alpha;
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
    context.fill();
    context.restore();
  }
}
