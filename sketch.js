// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var world,engine;
var ground;
var ball1,ball2,ball3;
var canonBall,shot;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.

    engine = Engine.create();
    world = engine.world;

    var canvas = createCanvas(800,400);
    
    ground = new Ground(400,390,800,20);
    tanker = new Tanker(75,305);

    ball1 = new Ball(550,200,50);
    ball2 = new Ball(750,200,50);
    ball3 = new Ball(400,200,50);

    canonBall = new CanonBall(140,270);

    shot = new ShootBall(canonBall.body,{x:140,y:270});
}

function draw() {
    // Remember to update the Matter Engine and set the background.

    Engine.update(engine);

    background("black");

    ground.display();
    tanker.display();

    ball1.display();
    ball2.display();
    ball3.display();

    canonBall.display();

    rotate(0);
    fill("white");
    text("x:"+mouseX,50,50);
    text("y:"+mouseY,50,70);
}


function keyReleased() {
    // Call the shoot method for the cannon.

    if(keyCode === 32){
        shot.shoot();
        Matter.Body.applyForce(canonBall.body,canonBall.body.position,{x:1000,y:-1});
    }

    if(keyCode === 13){
        shot.attach(canonBall.body);
    }
}