class Tanker {
  constructor(x,y,angle) {
    var options = {
    isStatic: true
    }
    this.body = Bodies.rectangle(x,y,50,20);
    this.x = x;
    this.y = y;
    Matter.Body.setAngle(this.body,angle);
  };

    display(){
      var pos = this.body.position;
      push();
      rotate(this.body.angle);
      fill("orange");
      rectMode(CENTER);
      rect(pos.x,pos.y,50,20);
      pop();
      fill("red");
      rectMode(CENTER);
      rect(80,350,100,50);
      triangle(30,325,130,325,80,265);
    };
}
