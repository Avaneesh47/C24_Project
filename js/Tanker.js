class Tanker {
  constructor(x,y) {
    var options = {
    isStatic: true
    }
    this.body = Bodies.rectangle(x,y,150,150,options);
    this.x = x;
    this.y = y;
    this.image = loadImage("assets/tank.jpg");
    World.add(world,this.body);
  };

    display(){
      var pos = this.body.position;
      push();
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,150,150);
      pop();
    };
}
