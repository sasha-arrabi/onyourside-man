import * as Quintus from 'quintus';
import { BoxThrower } from './game-object/box-thrower';
import { Level1 } from './scene/level1';
import { Box } from './sprite/box';
import { Player } from './sprite/player';
import { Vehicle } from './sprite/vehicle';

window.addEventListener("load", function () {

  var Q = window.Q = Quintus()
    .include("Sprites, Scenes, Input, 2D, Anim, Touch, UI")
    .setup({ maximize: true })
    .controls().touch();

  Q.gravityY = 2000;

  Q.Sprite.extend("Player", Player);

  Q.Sprite.extend("Box", Box);
  

  Q.GameObject.extend("BoxThrower", BoxThrower);

  Q.scene("level1", Level1);

  Q.load("player.json, player.png, sky.png, road.png, crates.png, crates.json, grass.png, vehicle.png", function () {
    Q.compileSheets("player.png", "player.json");
    Q.compileSheets("crates.png", "crates.json");

    Q.stageScene("level1");

  });
});
