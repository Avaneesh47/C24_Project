// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var world,engine;
var ground;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.

    engine = Engine.create();
    world = Engine.world;

    var canvas = createCanvas(800,400);
    
    ground = new Ground(400,390,800,20);

    tanker = new Tanker(-25,300,-PI/7);
}

function draw() {
    // Remember to update the Matter Engine and set the background.

    Engine.update(engine);

    background("black");

    ground.display();
    tanker.display();

    rotate(0);
    fill("white");
    text("x:"+mouseX,50,50);
    text("y:"+mouseY,50,70);
}


function keyReleased() {
    // Call the shoot method for the cannon.
}