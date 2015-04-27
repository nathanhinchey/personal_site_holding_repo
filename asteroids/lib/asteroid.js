(function() {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Asteroid = window.Asteroids.Asteroid = function(pos, game){
    var defaults = {};

    defaults.radius = 20;
    defaults.color = "red";
    defaults.pos = pos;
    defaults.vel = function(){
      var negX = Math.random() > .5 ? -1 : 1;
      var negY = Math.random() > .5 ? -1 : 1;

      return [Math.random() * 5 * negX, Math.random() * 5 * negY];
    }();

    window.Asteroids.MovingObject.call(this, defaults);
    this.game = game;
  }

  window.Asteroids.Util.inherits(Asteroid, window.Asteroids.MovingObject);

})();
