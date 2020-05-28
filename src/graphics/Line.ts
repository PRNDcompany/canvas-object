import { DisplayObject, DisplayObjectOptions } from './DisplayObject';
import FastVector from 'fast-vector';

export interface LineOptions extends DisplayObjectOptions {
  lineCap?: CanvasLineCap;
  lineWidth?: number;
  endPosition: FastVector;
}

export class Line extends DisplayObject {
  public endPosition: FastVector;
  public lineCap: CanvasLineCap;
  public lineWidth: number;

  constructor({ position, endPosition, alpha, color, scale, lineCap, lineWidth }: LineOptions) {
    super({ position, alpha, color, scale });

    this.endPosition = endPosition;
    this.lineCap = lineCap || 'butt';
    this.lineWidth = lineWidth || 1;
  }

  public render(context: CanvasRenderingContext2D) {
    context.save();
    context.beginPath();
    context.strokeStyle = this.color;
    context.globalAlpha = this.alpha;
    context.lineCap = this.lineCap;
    context.lineWidth = this.lineWidth * this.scale;
    context.moveTo(Math.round(this.position.x * this.scale) + 0.5, Math.round(this.position.y * this.scale) + 0.5);
    context.lineTo(Math.round(this.endPosition.x * this.scale) + 0.5, Math.round(this.endPosition.y  * this.scale) + 0.5);
    context.stroke();
    context.restore();
  }
}
