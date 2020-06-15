"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnimatedValue = /** @class */ (function () {
    function AnimatedValue(from, to, options) {
        if (options === void 0) { options = { config: AnimatedValue.defaultAnimatedValueConfig }; }
        this.end = false;
        this.from = from;
        this.to = to;
        this.value = from;
        this.options = options;
    }
    AnimatedValue.prototype.update = function (delta) {
        if (this.end) {
            return;
        }
        var _a = this, from = _a.from, to = _a.to, _b = _a.options.config, mass = _b.mass, tension = _b.tension, friction = _b.friction;
        var position = from;
        var velocity = 0;
        for (var i = 0; i < delta; i++) {
            var force = -tension * (position - to);
            var damping = -friction * velocity;
            var acceleration = (force + damping) / mass;
            velocity = velocity + acceleration * 0.001;
            position = position + velocity * 0.001;
        }
        this.value = position;
        if (Math.abs(position - to) <= 0.0001) {
            this.value = position;
            this.end = true;
        }
    };
    AnimatedValue.defaultAnimatedValueConfig = {
        mass: 1,
        tension: 1000,
        friction: 10
    };
    return AnimatedValue;
}());
exports.AnimatedValue = AnimatedValue;
