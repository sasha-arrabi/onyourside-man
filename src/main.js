import * as Quintus from 'quintus';
import { BoxThrower } from './game-object/box-thrower';
import { Level1 } from './scene/level1';
import { Driver } from './sprite/driver';
import { Money } from './sprite/money';
import { Player } from './sprite/player';
import { Wheel } from './sprite/wheel';

window.loadGame = () => {
  var playButton = window.document.getElementById('playButton');
  playButton.parentNode.removeChild(playButton);

  var Q = window.Q = Quintus({ audioSupported: ['mp3', 'ogg'] })
    .include("Sprites, Scenes, Input, 2D, Anim, Touch, UI")
    .setup({ maximize: true })
    .controls().touch();

  Q.gravityY = 2000;

  Q.include("Audio").enableSound();

  Q.Sprite.extend("Driver", Driver);

  Q.Sprite.extend("Player", Player);

  Q.Sprite.extend("Money", Money);

  Q.Sprite.extend("Wheel", Wheel);

  Q.GameObject.extend("BoxThrower", BoxThrower);

  Q.scene("level1", Level1);

  Q.load("driver.png, player.png, wheel-source.png, sky.png, road.png, crates.png, crates.json, grass.png, vehicle.png, money.png, jingle.mp3", function () {
    Q.compileSheets("crates.png", "crates.json");
    Q.stageScene("level1");

    function playThemeSong() {
      Q.audio.stop('jingle.mp3');
      Q.audio.play('jingle.mp3', {
        loop: true,
        loopStart: 0,
        loopEnd: 51
      });
    }
    playThemeSong();
  });
}
