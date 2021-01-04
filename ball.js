class ball   {
    constructor(x,y,r)   {
        this.body=Matter.Bodies.circle(x,y,r,{isStatic:false,restitution:0.3,friction:0.5,density:1.2});
        this.radius=r;
        this.img=loadImage("paper.png");
        Matter.World.add(myWorld,this.body);
    }
    display()   {
        fill("red");
        image(this.img,this.body.position.x,this.body.position.y,this.radius*3,this.radius*3);
    }
}