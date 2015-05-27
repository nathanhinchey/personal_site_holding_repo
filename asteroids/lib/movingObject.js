(function() {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var MovingObject = window.Asteroids.MovingObject = function(params) {
    this.pos = params.pos;
    this.velocity = params.vel;
    this.radius = params.radius;
    this.color = params.color;
    this.lineWidth = params.lineWidth;
    this.game = params.game;
  };

  MovingObject.prototype.draw = function(ctx) {

    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;
    var r = this.radius;
    ctx.beginPath();
    if (this.triangle){
      ctx.moveTo(this.pos[0], this.pos[1] - r);
      ctx.lineTo(this.pos[0] - (0.8 * r), this.pos[1] + (0.8 * r));
      ctx.lineTo(this.pos[0] + (0.8 * r), this.pos[1] + (0.8 * r));
      ctx.lineTo(this.pos[0], this.pos[1] - r);
      // ctx.moveTo(this.pos[0], this.pos[1])
    }
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    ctx.stroke();
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
