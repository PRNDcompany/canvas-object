import { DisplayObject, DisplayObjectOptions } from './DisplayObject';

export interface TextOptions extends DisplayObjectOptions {
  content: string;
  fontFamily?: string;
  fontSize?: number;
  textBaseline?: CanvasTextBaseline;
  textAlign?: CanvasTextAlign;
  fontWeight?: string | number;
}

export class Text extends DisplayObject {
  public content: string;
  public fontFamily: string;
  public fontSize: number;
  public fontWeight: string | number;
  public textBaseline: CanvasTextBaseline;
  public textAlign: CanvasTextAlign;

  constructor({ position, alpha, color, content, fontFamily, fontWeight, fontSize, textAlign, textBaseline }: TextOptions) {
    super({ position, alpha, color });

    this.content = content;
    this.fontFamily = fontFamily || 'serif';
    this.fontSize = fontSize || 12;
    this.fontWeight = fontWeight || 'normal';
    this.textAlign = textAlign || 'left';
    this.textBaseline = textBaseline || 'middle';
  }

  public getWidth(context: CanvasRenderingContext2D) {
    context.save();
    context.beginPath();
    context.fillStyle = this.color;
    context.globalAlpha = this.alpha;
    context.font = `${this.fontWeight} ${this.fontSize * this.scale}px ${this.fontFamily}`;
    const { width } = context.measureText(this.content);
    context.stroke();
    context.restore();
    return width;
  }

  public render(context: CanvasRenderingContext2D) {
    context.save();
    context.beginPath();
    context.fillStyle = this.color;
    context.globalAlpha = this.alpha;
    context.font = `${this.fontWeight} ${this.fontSize * this.scale}px ${this.fontFamily}`;
    context.fillText(this.content, this.position.x * this.scale, this.position.y  * this.scale);
    context.stroke();
    context.restore();
  }
}
