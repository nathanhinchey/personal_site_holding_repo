(function() {

  var BULLET_SPEED = 3;

  var DEFAULTS = {
    radius: 3,
    color: "blue"
  }

  var Bullet = window.Asteroids.Bullet = function(game) {
    DEFAULTS.vel = game.ship.velocity * BULLET_SPEED;
    DEFAULTS.pos = Bullet.startingBulletPos(game);
    DEFAULTS.game = game;

    window.Asteroids.MovingObject.call(this, defaults);
  }

  Bullet.startingBulletPos = function(game) {
    var ship = game.ship;
    return [
      ship.pos[0] + Bullet.normalize(ship.velocity)[0] * ship.radius,
      ship.pos[1] + Bullet.normalize(ship.velocity)[1] * ship.radius
    ];
  }

  Bullet.normalize = function(vector) {
    var dX = vector[0]
    var dY = vector[1]
    var magnitude = Math.sqrt( (dX * dX) + (dY * dY) );

    return [vector[0]/magnitude, vector[1]/magnitude]
  }

  window.Asteroids.Util.inherits(Bullet, window.Asteroids.MovingObject);

})();
