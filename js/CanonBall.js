class CanonBall {
  constructor(x,y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
    this.body = Bodies.circle(x,y,50,options);
    this.x = x;
    this.y = y;
    this.ballImage = loadImage("assets/canonBall.png");
    World.add(world,this.body);
  };

  display(){
    var pos = this.body.position;
    //var angle = this.body.angle;
    push();
    //translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.ballImage,pos.x,pos.y,50,50);
    pop();
  };
};
