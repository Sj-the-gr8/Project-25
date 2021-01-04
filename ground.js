class ground   {
    constructor(x,y,w,h)   {
        this.body=Matter.Bodies.rectangle(x,y,w,h,{isStatic:true});
        Matter.World.add(myWorld,this.body);
        this.height=h;
        this.width=w;
    }
    display()   {
        rectMode(CENTER);
        fill("black");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}