;(function() {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var GameView = window.Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  GameView.prototype.start = function() {
    window.setInterval(this.game.step.bind(this.game), 20);
    window.setInterval(function(){
      this.game.draw(this.ctx)
    }.bind(this), 20);

    key('w', function() { this.game.ship.power([0,-1]) }.bind(this));
    key('a', function() { this.game.ship.power([-1,0]) }.bind(this));
    key('s', function() { this.game.ship.power([0,1]) }.bind(this));
    key('d', function() { this.game.ship.power([1,0]) }.bind(this));
  }

})();
