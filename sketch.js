var myEngine,myWorld,paper,block,block2,block3,dustbin,ground1,a;
function setup()  {
    createCanvas(800,200);
    myEngine=Matter.Engine.create();
    myWorld=myEngine.world;     
    ground1=new ground(400,180,800,20);
    block=new bin(660,110,20,120);
    block2=new bin(710,170,100,20);
    block3=new bin(760,110,20,120);
    paper=new ball(150,170,12.5);
}

function preload()   {
    dustbin=loadImage("dustbin.png");
    a=loadImage("paper.png");
}

function draw()  {
    background("white");
    Matter.Engine.update(myEngine);
    imageMode(CENTER);
    paper.display();
    image(dustbin,710,110,90,120);
    block.display();
    block3.display();
    ground1.display();
}

function keyPressed()   {
    if(keyCode == UP_ARROW)   {
        Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-25});
    }
}