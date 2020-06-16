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
  public value: number;
  public options: AnimatedValueOptions;

  private end: boolean = false;

  constructor(from: number, to: number, options: AnimatedValueOptions = { config: AnimatedValue.defaultAnimatedValueConfig }) {
    this.from = from;
    this.to = to;
    this.value = from;
    this.options = options;
  }

  update(delta: number): void {
    if (this.end) {
      return;
    }

    let position = this.from;
    let velocity = 0;

    for (let i = 0; i < delta; i++) {
      const force = -this.options.config.tension * (position - this.to);
      const damping = -this.options.config.friction * velocity;
      const acceleration = (force + damping) / this.options.config.mass;
      velocity = velocity + acceleration * 0.001;
      position = position + velocity * 0.001;
    }

    this.value = position;

    if (Math.abs(position - this.to) <= 0.0001) {
      this.value = position;
      this.end = true;
    }
  }
}
