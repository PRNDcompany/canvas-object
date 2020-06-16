export interface AnimatedValueConfig {
  mass: number;
  tension: number;
  friction: number;
}

export interface AnimatedValueOptions {
  config: AnimatedValueConfig;
}

export class AnimatedValue {
  static defaultAnimatedValueConfig: AnimatedValueConfig = {
    mass: 1,
    tension: 450,
    friction: 30
  };

  public from: number;
  public to: number;
  public options: AnimatedValueOptions;

  private end: boolean = false;
  private position: number;
  private velocity: number;

  constructor(from: number, to: number, options: AnimatedValueOptions = { config: AnimatedValue.defaultAnimatedValueConfig }) {
    this.from = from;
    this.to = to;
    this.options = options;
    this.position = this.from;
    this.velocity = 0;
  }

  get value() {
    return this.position;
  }

  update(delta: number): void {
    if (this.end) {
      return;
    }

    for (let i = 0; i < delta; i++) {
      const force = -this.options.config.tension * (this.position - this.to);
      const damping = -this.options.config.friction * this.velocity;
      const acceleration = (force + damping) / this.options.config.mass;
      this.velocity = this.velocity + acceleration * 0.001;
      this.position = this.position + this.velocity * 0.001;
    }

    if (Math.abs(this.position - this.to) <= 0.0001) {
      this.position = this.to;
      this.end = true;
    }
  }
}
