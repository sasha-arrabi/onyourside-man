export const Box = {
  init: function (player) {
    this._super({
      asset:'money.png',
      x: player.x + 50,
      y: player.y,
      scale: .05,
      speed: 500,
      player: player
    });
  },

  step: function (dt) {
    this.p.y -= 5;
    this.p.x = this.p.player.x;
    this.p.angle += 10;
    this.p.scale *= .985;

    if (this.p.y < 350) { this.p.scale *= .9}
    if (this.p.y < 300) { this.destroy(); }
  }
};