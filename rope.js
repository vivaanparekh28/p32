class Rope{
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 10

        }
        this.chain=Constraint.create(option)
        World.add(world, this.chain);
    }
    fly(){
        this.chain.bodyA=null
        
    }
    attach(body){
        this.chain.bodyA=body
    }
    display(){
        if(this.chain.bodyA&&this.chain.pointB){
            push()
            strokeWeight(3)
            line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,100,500)
            pop()
        }
        
    }
}