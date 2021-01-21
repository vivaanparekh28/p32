class Blocks{
    constructor(x,y){
       
this.body=Bodies.rectangle(x,y,30,50)
World.add(world,this.body)

this.visible=255
    }

    score(){
        if (this.visible<0 && this.visible>-105){
            score++
        }
    }
display(){
    if (this.body.speed<3){
        push()
        rectMode(CENTER)
        fill("blue")
        rect(this.body.position.x,this.body.position.y,30,50)
        
        pop()
    }
    else{
        push()
        this.visible-=5
    tint(255,this.visible)
   
    pop()
        
        
  World.remove(world,this.body)
    }
   
}
}