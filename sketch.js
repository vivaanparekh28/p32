const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var score=0
var backgroundImg
    function preload() {
time()
    }
function setup(){
    createCanvas(800,600)
    engine = Engine.create();
    world = engine.world;
    hex=new Polygon()
    rope=new Rope(hex.body,{x:100,y:500})
    block1=new Blocks(450,400)
    platform=new Platform(450,420)
    block2=new Blocks(415,400)
    block3=new Blocks(485,400)
    block4=new Blocks(432,320)
    block5=new Blocks(468,320)
    block6=new Blocks(450,280)
    platform2=new Platform(650,250)
    block7=new Blocks(650,230)
    block8=new Blocks(615,230)
    block9=new Blocks(685,230)
    block10=new Blocks(632,190)
    block11=new Blocks(668,190)
    block12=new Blocks(650,110)
}
   
function draw(){
    if (backgroundImg){
        background(backgroundImg)
    }
    
    Engine.update(engine);
    hex.display()
    rope.display()
    block1.display()
    platform.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    platform2.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    text("Score:"+score,300,300)
    block1.score()
    block3.score()
    block4.score()
    block5.score()
    block6.score()
    block7.score()
    block8.score()
    block9.score()
    block10.score()
    block11.score()
    block12.score()

}
function mouseDragged(){
    Matter.Body.setPosition(hex.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    rope.fly()

}
function keyPressed(){
    if (keyCode===32)
     rope.attach(hex.body)
    }

    async function time(){
        var response1=await fetch("https://worldtimeapi.org/api/timezone/Europe/London")
        var JSON= await response1.json()
        var datetime=JSON.datetime
        
        var hr=datetime.slice(11,13)
       
       console.log(hr)
       if (hr<6 && hr>=15){
       
           backgroundImg = loadImage("./morning.jpg");
       }
       else {
           backgroundImg = loadImage("./night.jpg")
       }
       
       }