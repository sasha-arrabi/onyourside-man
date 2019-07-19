export const Driver =
{
  init: function (p) {

    this._super(p, {
      asset: "driver.png",
      collisionMask: 0,
      x: 350,
      y: 500,
      speed: 500,
      jump: -750
    });

    this.add("2d, animation");
  },

  step: function (dt) {
    this.p.vx += (this.p.speed - this.p.vx) / 4;

    if (this.p.y > 500) {
      this.p.y = 500;
      this.p.landed = 1;
      this.p.vy = 0;
    } else {
      this.p.landed = 0;
    }

  }
};