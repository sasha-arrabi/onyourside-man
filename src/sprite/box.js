export const Box = {
  init: function () {

    var levels = [565, 540, 500, 450];

    var player = Q("Player").first();
    this._super({
      x: player.p.x + Q.width + 50,
      y: 265,
      frame: Math.random() < 0.5 ? 1 : 0,
      scale: .7,
      type: 1,
      asset:'house1.png',
      vx: 0,
      vy: 0,
      ay: 0
    });


    this.on("hit");
  },

  step: function (dt) {
    var player = Q("Player").first();
    this.p.x += this.p.vx * dt;


    this.p.vy += this.p.ay * dt;
    this.p.y += this.p.vy * dt;
    if (this.p.x < player.p.x - 1100) { this.destroy(); }
  },

  hit: function () {
    this.p.type = 0;
    this.p.collisionMask = Q.SPRITE_NONE;
    this.p.vx = 200;
    this.p.ay = 400;
    this.p.vy = -300;
    this.p.opacity = 0.5;
  }
}; 