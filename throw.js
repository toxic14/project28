class thrown{
    constructor(bodyA,pointB){
    var options = {
    bodyA:bodyA,
    pointB:pointB,
    length:10,
    stiffness:0.04
    }
    this.pointB=pointB;
    this.tip=Constraint.create(options)
    World.add(world,this.tip);
    
    }
    display(){
    
        if(this.tip.bodyA){
        push();
        var posA=this.tip.bodyA.position;
        var posB=this.pointB;

        stroke(48,22,8)
        strokeWeight(9)
        line(posA.x,posA.y,posB.x,posB.y)
        pop();
        }
    }
    
    fly(){
    
        this.tip.bodyA=null;
    
    }

    attach(Obj){
    
        this.tip.bodyA=Obj;
    
    }

    }
