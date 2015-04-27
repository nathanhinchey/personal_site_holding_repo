(function() {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var MovingObject = window.Asteroids.MovingObject = function(params) {
    this.pos = params.pos;
    this.velocity = params.vel;
    this.radius = params.radius;
    this.color = params.color;
    this.game = params.game;
  };

  MovingObject.prototype.draw = function(ctx) {

    ctx.fillStyle = this.color;

    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    ctx.fill();
  };

  MovingObject.prototype.move = function() {
    this.pos[0] += this.velocity[0];
    this.pos[1] += this.velocity[1];
    this.pos = window.Asteroids.Game.wrap(this.pos);
  };

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var dX = otherObject.pos[0] - this.pos[0];
    var dY = otherObject.pos[1] - this.pos[1];
    var distance = Math.sqrt( (dX * dX) + (dY * dY));
    return distance < this.radius + otherObject.radius;
  };

  MovingObject.prototype.collideWith = function (otherObject) {
  };

})();
