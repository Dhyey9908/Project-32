class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':0.0,
        }
        this.visiblity = 225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }

      display(){
        console.log(this.body.speed);
        if(this.body.speed <5){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("#87CEEA");
        stroke("#9566A7");
        rect( 0, 0, this.width, this.height);
        pop();
        }
        else{
          World.remove(world,this.body);
          push();
          this.visiblity = this.visiblity -5;
          pop();
        }
      }
      score(){
        if(this.visiblity<0 && this.visiblity >-105){
          score++;
        }
      }
}