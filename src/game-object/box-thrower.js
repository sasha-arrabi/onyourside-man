export const BoxThrower = {
  init: function () {
    this.p = {
      launchDelay: 1.75,
      launchRandom: 1,
      launch: 2
    }
  },

  update: function (dt) {
    this.p.launch -= dt;

    if (this.p.launch < 0) {
      let key = Math.random().toString(36).substring(2, 15);
      let house = new Q.Box(key);
      Q.houses[key] = house;
      this.stage.insert(house);
      this.p.launch = this.p.launchDelay + this.p.launchRandom * Math.random();
    }
  }
};