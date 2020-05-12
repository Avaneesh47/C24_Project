class Ball {
  constructor(x,y,radius) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
    }

    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    //this.x = x;
    //this.y = y;
    World.add(world,this.body);
  }

  display() {
    var pos = this.body.position;
    push();
    fill("turquoise");
    circle(pos.x,pos.y,this.radius);
    pop();
  }
}
