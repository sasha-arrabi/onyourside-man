export const Box = {
  init: function () {
    this._super({
      asset:'money.png',
      x: 600,
      y: 550
    });
  },

  step: function (dt) {
    this.p.y += this.p.vy * dt;

    if (this.p.y > 800) { this.destroy(); }

    if (Q.inputs['fire']) {
      this.stage.insert(new Q.Box());
    }
  }
};