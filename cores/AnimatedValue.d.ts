export interface AnimatedValueConfig {
    mass: number;
    tension: number;
    friction: number;
}
export interface AnimatedValueOptions {
    config: AnimatedValueConfig;
}
export declare class AnimatedValue {
    static defaultAnimatedValueConfig: AnimatedValueConfig;
    from: number;
    to: number;
    value: number;
    options: AnimatedValueOptions;
    private end;
    constructor(from: number, to: number, options?: AnimatedValueOptions);
    update(delta: number): void;
}
