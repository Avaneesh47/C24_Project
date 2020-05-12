class ShootBall{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    attach(body){
        //flag = "red";
        this.sling.bodyA = body;
    }

    shoot(){
        this.sling.bodyA = null;
    }

    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        stroke("white");
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }

}
