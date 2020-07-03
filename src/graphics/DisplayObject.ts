import FastVector from 'fast-vector';

export interface DisplayObjectBasicOptions {
  alpha?: number;
  color?: string;
  scale?: number;
  rotation?: number;
}

export interface DisplayObjectOptions extends DisplayObjectBasicOptions {
  position?: FastVector;
}

export class DisplayObject {
  public position: FastVector;
  public alpha: number;
  public color: string;
  public scale: number;
  public rotation: number;

  public render(context: CanvasRenderingContext2D): void {}
  public update(delta: number): void {}

  constructor({ position, alpha, color, scale, rotation }: DisplayObjectOptions) {
    this.position = position || new FastVector();
    this.alpha = alpha || 1;
    this.color = color || '#000000';
    this.scale = scale || 1;
    this.rotation = rotation || 0;
  }
}
