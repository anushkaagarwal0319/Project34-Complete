class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 3,
            length:250
        }

        this.pointB = pointB
    
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB
        strokeWeight(0);
        stroke("white")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}

