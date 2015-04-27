;(function(){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Game = window.Asteroids.Game = function(){

    this.asteroids = [];
    (function () {

      for(var i = 0; i < Game.NUM_ASTEROIDS; i++){
        var pos = [
          Math.random() * Game.DIM_X,
          Math.random() * Game.DIM_Y
        ]
        this.asteroids.push(new window.Asteroids.Asteroid(pos, this));
      }

    }).call(this);

  }

  Game.NUM_ASTEROIDS = 20;
  Game.DIM_X = 1000;
  Game.DIM_Y = 600;

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, 1000, 600);

    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(ctx);
    }
  };

  Game.prototype.moveObjects = function(){
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].move();
    }
    this.checkCollisions();
  }

  Game.prototype.checkCollisions = function() {
    for (var i = 0; i < this.asteroids.length; i++) {
      for (var j = 0; i < this.asteroids.length; j++) {
        console.log(i);
        console.log(j);

        if (i !== j && this.asteroids[i].isCollidedWith(this.asteroids[j])) {
          alert("COLLISION");
        }
      }
    }
  }

  Game.wrap = function (pos) {
    var wrappedPos = pos;

    if (pos[0] > Game.DIM_X) {
      wrappedPos[0] = 0;
    }
    if (pos[1] > Game.DIM_Y) {
      wrappedPos[1] = 0;
    }
    if (pos[0] < 0) {
      wrappedPos[0] = Game.DIM_X;
    }
    if (pos[1] < 0) {
      wrappedPos[1] = Game.DIM_Y;
    }

    return wrappedPos;
  };

})();
