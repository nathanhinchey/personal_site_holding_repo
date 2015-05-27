(function() {

  var DEFAULTS = {
    color: "white",
    lineWidth: 1.5,
    radius: 20,
    vel: [0,0]
  }

  var Ship = window.Asteroids.Ship = function(pos,game) {
    DEFAULTS.pos = pos;
    DEFAULTS.game = game;
    window.Asteroids.MovingObject.call(this, DEFAULTS);
  }

  window.Asteroids.Util.inherits(Ship, window.Asteroids.MovingObject);

  Ship.prototype.relocate = function () {
    this.pos = game.randomPosition();
    this.velocity = [0,0];
  };

  Ship.prototype.triangle = true;

  Ship.prototype.power = function (impulse) {
    this.velocity[0] += impulse[0];
    this.velocity[1] += impulse[1];
  };

  Ship.prototype.fireBullet = function() {
    this.game.bullets.concat(new Bullet(this.game));

  };

})();
