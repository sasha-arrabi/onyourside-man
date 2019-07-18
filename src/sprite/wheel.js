export const Wheel =
{
  init: function (p) {

    this._super(p, {
      asset: "wheel-source.png",
      collisionMask: 0,
      y: 650,
      speed: 500,
      jump: -750
    });

    this.add("2d, animation");
  },

  step: function (dt) {
    this.p.vx += (this.p.speed - this.p.vx) / 4;

    if (this.p.y > 650) {
      this.p.y = 650;
      this.p.landed = 1;
      this.p.vy = 0;
    } else {
      this.p.landed = 0;
    }
    this.p.angle += 10;

  }
};