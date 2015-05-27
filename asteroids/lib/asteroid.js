(function() {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Asteroid = window.Asteroids.Asteroid = function(pos, game){
    var defaults = {};

    defaults.game = game;
    defaults.radius = 40;
    defaults.color = "red";
    defaults.lineWidth = 2;
    defaults.pos = pos;
    defaults.vel = function(){
      var negX = Math.random() > .5 ? -1 : 1;
      var negY = Math.random() > .5 ? -1 : 1;

      return [Math.random() * 5 * negX, Math.random() * 5 * negY];
    }();

    window.Asteroids.MovingObject.call(this, defaults);
  }

  window.Asteroids.Util.inherits(Asteroid, window.Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof window.Asteroids.Ship) {
      console.log("ship collision");
      console.log(otherObject.pos);
      console.log(this.pos);
      otherObject.relocate();
    } else {
      console.log("asteroid collision");
    }
  }

})();
