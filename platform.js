class Platform{
    constructor(x,y){
        var option={
            isStatic:true
        }
       
this.body=Bodies.rectangle(x,y,140,20,option)
World.add(world,this.body)
    }
display(){
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,140,20)
}
}