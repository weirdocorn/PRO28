class Paper{
    constructor(x,y,radius){
        var options={
            isStatic=false,
            restitution=0.3,
            friction=0.5,
            density=1.2
        }
    }
    display(){
        Matter.body.radius = 70;
        Matter.body.addAnimation("paper.png");
    }
}