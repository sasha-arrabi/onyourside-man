export const Box = {
  init: function (key) {

    var levels = [565, 540, 500, 450];

    var player = Q("Player").first();
    this._super({
      id: key,
      x: player.p.x + Q.width + 50,
      y: 265,
      collisionMask: 1,
      frame: Math.random() < 0.5 ? 1 : 0,
      scale: .7,
      asset:'house1-destroyed.png',
      vx: 0,
      vy: 0,
      sx: 600,
      sy: 600,
      ay: 0
    });

    this.on("hit");
  },

  step: function (dt) {
    var player = Q("Player").first();
    this.p.x += this.p.vx * dt;


    this.p.vy += this.p.ay * dt;
    this.p.y += this.p.vy * dt;

    if (this.p.x < player.p.x - 1100) {
      delete Q.houses[this.p.id];
      this.destroy();
    }
  },

  fix: function () {
    this.p.asset = this.p.asset(this.p.asset.length - 14) + '.png';
    delete Q.houses[this.p.id];
    Q.score++;
  }
}; 