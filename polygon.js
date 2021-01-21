class Polygon{
    constructor(){
var option={
    isStatic:false
}
        this.body=Bodies.circle(100,500,50,option)
        this.image = loadImage("./polygon.png");
        World.add(world, this.body);

    }
    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x,this.body.position.y,50,50);
    }
}