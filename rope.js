class   Rope{
    constructor(bodyA, point){
        var options = {
            bodyA: bodyA,
            pointB: point,
            stiffness: 0.04,
            length: 30
        }
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }

    display(){
        if(this.string.bodyA){
            var pointA = this.string.bodyA.position;
            var pointB = this.string.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
         }
    }

    fly(){
        this.string.bodyA = null;
    }

}