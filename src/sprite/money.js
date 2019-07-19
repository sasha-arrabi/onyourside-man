export const Money = {
  init: function (player) {
    this._super({
      asset:'money.png',
      x: player.x + 50,
      y: player.y - 20,
      scale: .05,
      speed: 500,
      player: player,
      collisionMask: 1
    });

    this.on('hit');
  },

  step: function (dt) {
    this.p.y -= 5;
    this.p.x = this.p.player.x + 50;
    this.p.angle += 10;
    this.p.scale *= .985;

    if (this.p.y < 350) {
      this.p.scale *= .9;

      for (const key in Q.houses) {
        if (Q.houses.hasOwnProperty(key)) {
          if (this.p.x >= Q.houses[key].p.x - 150 && this.p.x <= Q.houses[key].p.x + 150) {
            Q.houses[key].fix();
          }
        }
      }
    }

    if (this.p.y < 300) { 
      this.destroy(); 
      Q.boxes--;
    }
  },

  hit: function() {
    console.log('Hello');
    this.p.scale = 5;
  }
};