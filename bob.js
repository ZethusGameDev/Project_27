class bob {

    constructor(x,y,radius) {
        
        var options = {

            isStatic:false,
            friction:0,
            density:0.8,
            restitution:1

        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius
        World.add(world, this.body);

    }

    display() {

        var pos = this.body.position
        
        ellipseMode(RADIUS);
        fill("gray")
        ellipse(pos.x,pos.y,this.radius,this.radius);

    }
}