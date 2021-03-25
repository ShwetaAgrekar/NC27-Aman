class Chain{
    constructor(bodyA, bodyB, pointA){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointA : pointA,
            length : 100,
            stiffness : 0.01
        }
        this.pointA = pointA;
        this.chain = Constraint.create (options);
        World.add(world, this.chain);
    }

    display(){
        var ptA = this.pointA;
        var ptB = this.chain.bodyB.position;
        strokeWeight(4);
        stroke("red")
        line(ptA.x, ptA.y, ptB.x, ptB.y);
    }
}