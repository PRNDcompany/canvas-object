import { DisplayObject, DisplayObjectOptions } from './DisplayObject';
import FastVector from 'fast-vector';

export interface BezierCurveLineOptions extends DisplayObjectOptions {
  lineCap?: CanvasLineCap;
  lineWidth?: number;
  curvePositions: [FastVector, FastVector, FastVector]
  endPosition: FastVector;
}

export class BezierCurveLine extends DisplayObject {
  public curvePositions: [FastVector, FastVector, FastVector]
  public endPosition: FastVector;
  public lineCap: CanvasLineCap;
  public lineWidth: number;

  constructor({ position, endPosition, curvePositions, alpha, color, scale, lineCap, lineWidth }: BezierCurveLineOptions) {
    super({ position, alpha, color, scale });

    this.curvePositions = curvePositions;
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
    context.bezierCurveTo(this.curvePositions[0].x, this.curvePositions[0].y, this.curvePositions[1].x, this.curvePositions[1].y, this.curvePositions[2].x, this.curvePositions[2].y);
    context.lineTo(Math.round(this.endPosition.x * this.scale) + 0.5, Math.round(this.endPosition.y  * this.scale) + 0.5);
    context.stroke();
    context.restore();
  }
}
