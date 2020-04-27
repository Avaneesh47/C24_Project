class Ground {
  constructor(x, y, width, height) {
    var options ={
      isStatic : true
    }

    this.body = Bodies.rectangle(x, y, width, height);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  };

  display(){
    var pos = this.body.position;
    fill("white");
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
  }
}
