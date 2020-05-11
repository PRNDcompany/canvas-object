import FastVector from 'fast-vector';

export interface DisplayObjectOptions {
  position: FastVector;
  alpha?: number;
  color?: string;
}

export class DisplayObject {
  public position: FastVector;
  public alpha: number;
  public color: string;

  public render(context: CanvasRenderingContext2D): void {}

  constructor({ position, alpha, color }: DisplayObjectOptions) {
    this.position = position;
    this.alpha = alpha || 1;
    this.color = color || '#000000';
  }
}
