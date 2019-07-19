export const Player =
{
  init: function (p) {

    this._super(p, {
      asset: "vehicle.png",
      collisionMask: 0,
      x: 300,
      y: 550,
      speed: 500,
      jump: -750
    });

    this.p.points = this.p.standingPoints;

    this.add("2d, animation");
  },

  step: function (dt) {
    this.p.vx += (this.p.speed - this.p.vx) / 4;

    if (this.p.y > 550) {
      this.p.y = 550;
      this.p.landed = 1;
      this.p.vy = 0;
    } else {
      this.p.landed = 0;
    }

    if (Q.inputs['action'] && this.p.landed > 0) {
      this.p.vy = this.p.jump;
    }

    if (Q.inputs['fire']) {
      this.stage.insert(new Q.Money(this.p));
    }

    this.stage.viewport.centerOn(this.p.x + 300, 400);
  }
};