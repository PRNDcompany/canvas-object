import FastVector from 'fast-vector';

export interface DisplayObjectOptions {
  position: FastVector;
  alpha?: number;
  color?: string;
  scale?: number;
}

export class DisplayObject {
  public position: FastVector;
  public alpha: number;
  public color: string;
  public scale: number;

  public render(context: CanvasRenderingContext2D): void {}

  constructor({ position, alpha, color, scale }: DisplayObjectOptions) {
    this.position = position;
    this.alpha = alpha || 1;
    this.color = color || '#000000';
    this.scale = scale || 1;
  }
}
