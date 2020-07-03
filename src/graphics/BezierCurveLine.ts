import { DisplayObject, DisplayObjectBasicOptions } from './DisplayObject';
import FastVector from 'fast-vector';

export interface BezierCurveLineOptions extends DisplayObjectBasicOptions {
  positions: Array<FastVector>;
  lineCap?: CanvasLineCap;
  lineWidth?: number;
}

export class BezierCurveLine extends DisplayObject {
  public positions: Array<FastVector> = [];
  public lineCap: CanvasLineCap;
  public lineWidth: number;

  constructor({ positions, alpha, color, scale, lineCap, lineWidth, rotation }: BezierCurveLineOptions) {
    super({ alpha, color, scale, rotation });

    this.positions = positions;
    this.lineCap = lineCap || 'butt';
    this.lineWidth = lineWidth || 1;
  }

  static gradient(a: FastVector, b: FastVector) {
    return (b.y - a.y) / (b.x - a.x);
  }

  public render(context: CanvasRenderingContext2D) {
    context.save();
    context.beginPath();
    context.translate(this.position.x, this.position.y);
    context.rotate(this.rotation);
    context.translate(-this.position.x, -this.position.y);
    context.strokeStyle = this.color;
    context.globalAlpha = this.alpha;
    context.lineCap = this.lineCap;
    context.lineWidth = this.lineWidth * this.scale;

    const f = 0.6;
    const t = 0.3;

    context.moveTo(Math.round(this.positions[0].x * this.scale) + 0.5, Math.round(this.positions[0].y * this.scale) + 0.5);

    let m = 0;
    let dx1 = 0;
    let dy1 = 0;
    let dx2 = 0;
    let dy2 = 0;

    let prevPosition = this.positions[0];
    for (var i = 1; i < this.positions.length; i++) {
      const currentPosition = this.positions[i];
      const nextPosition = this.positions[i + 1];
      if (nextPosition) {
        m = BezierCurveLine.gradient(prevPosition, nextPosition);
        dx2 = (nextPosition.x - currentPosition.x) * -f;
        dy2 = dx2 * m * t;
      } else {
        dx2 = 0;
        dy2 = 0;
      }
      context.bezierCurveTo(
        Math.round((prevPosition.x - dx1) * this.scale) + 0.5,
        Math.round((prevPosition.y - dy1) * this.scale) + 0.5,
        Math.round((currentPosition.x + dx2) * this.scale) + 0.5,
        Math.round((currentPosition.y + dy2) * this.scale) + 0.5,
        Math.round(currentPosition.x * this.scale) + 0.5,
        Math.round(currentPosition.y * this.scale) + 0.5
      );
      dx1 = dx2;
      dy1 = dy2;
      prevPosition = currentPosition;
    }

    context.stroke();
    context.restore();
  }
}
