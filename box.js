class Box{
    constructor(x,y,width,height){
    var myOpt={
        restitution:0.8,
        friction:0.3,
        density:1,
        isStatic : false
    }

        this.body=Bodies.rectangle(x,y,width,height,myOpt);
        this.width=width;
        this.height=height;
        World.add(world,this.body)


    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);


        fill(255);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

    }

}