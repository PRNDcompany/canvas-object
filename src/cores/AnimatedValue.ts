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
    tension: 1000,
    friction: 10
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

    const {
      from,
      to,
      options: {
        config: { mass, tension, friction }
      }
    } = this;
    let position = from;
    let velocity = 0;

    for (let i = 0; i < delta; i++) {
      const force = -tension * (position - to);
      const damping = -friction * velocity;
      const acceleration = (force + damping) / mass;
      velocity = velocity + acceleration * 0.001;
      position = position + velocity * 0.001;
    }

    this.value = position;

    if (Math.abs(position - to) <= 0.0001) {
      this.value = position;
      this.end = true;
    }
  }
}
