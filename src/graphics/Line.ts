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

  constructor({ position, endPosition, alpha, color, lineCap, lineWidth }: LineOptions) {
    super({ position, alpha, color });

    this.endPosition = endPosition;
    this.lineCap = lineCap || 'butt';
    this.lineWidth = lineWidth || 1;
  }

  render(context: CanvasRenderingContext2D) {
    context.save();
    context.beginPath();
    context.strokeStyle = this.color;
    context.globalAlpha = this.alpha;
    context.lineCap = this.lineCap;
    context.moveTo(this.position.x, this.position.y);
    context.lineTo(this.endPosition.x, this.endPosition.y);
    context.stroke();
    context.restore();
  }
}