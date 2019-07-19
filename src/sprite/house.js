export const House = {
  init: function () {

    var levels = [565, 540, 500, 450];

    var player = Q("Player").first();
    this._super({

      x: player.p.x,
      y: player.p.y,
    //  frame: Math.random() < 0.5 ? 1 : 0,
      asset: 'House1.png',
      vx: -600 + 200 * Math.random(),
      vy: 0,
      ay: 0,
      theta: (300 * Math.random() + 200) * (Math.random() < 0.5 ? 1 : -1)
    });


    // this.on("hit");
  },

  step: function (dt) {
    this.p.x += this.p.vx * dt;


    this.p.vy += this.p.ay * dt;
    this.p.y += this.p.vy * dt;
    if (this.p.y != 565) {
      this.p.angle += this.p.theta * dt;
    }

    if (this.p.y > 800) { this.destroy(); }

  },

  // hit: function () {
  //   this.p.type = 0;
  //   this.p.collisionMask = Q.SPRITE_NONE;
  //   this.p.vx = 200;
  //   this.p.ay = 400;
  //   this.p.vy = -300;
  //   this.p.opacity = 0.5;
  // }
}; 