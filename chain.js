class Chain{
    constructor(bodyA, pointB){
        var options= {
            bodyA:bodyA, 
            pointB:pointB,
            stiffness: 0.02, length: 10
        }
        this.pointB=pointB
        this.chain= Matter.Constraint.create(options);
        World.add(world, this.chain)
    }

    fly(){
        this.chain.bodyA=null
    }
    attach(bodyA){
    this.chain.bodyA=bodyA
    }
    display(){
        if(this.chain.bodyA){
            strokeWeight(4)
            line(this.chain.bodyA.position.x, this.chain.bodyA.position.y,this.pointB.x, this.pointB.y )
        }
       
    }
    }