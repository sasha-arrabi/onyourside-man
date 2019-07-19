export const Level1 = function (stage) {
  stage.insert(new Q.Repeater({
    asset: "sky.png",
    repeatY: false,
    speedX: 0.5,
    y: -75
  }));
  1
  stage.insert(new Q.Repeater({
    asset: "road.png",
    repeatY: false,
    speedX: 1.0,
    y: 300
  }));

  stage.insert(new Q.Repeater({
    asset: "grass.png",
    repeatY: false,
    speedX: 1.0,
    y: 150
  }));
  stage.insert(new Q.BoxThrower());
  stage.insert(new Q.Driver({z:1,scale:.5}));
  stage.insert(new Q.Player({z:100}));
  stage.insert(new Q.Wheel({x:20}));
  stage.insert(new Q.Wheel({x:590}));

  stage.add("viewport");
};
