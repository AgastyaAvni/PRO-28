class Stone {
    constructor(x, y, r) {
      var options = {
          'isStatic':false,
          'restitution':0,
          'friction':1,
          'density':1.2,
          
      }
      this.body = Bodies.circle(x, y, r, options);

      this.image=loadImage("ghyt/stone.png");

      this.r = r;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
     
      imageMode(RADIUS);
    
      
      image(this.image,0, 0, this.r, this.r);
      pop();
    }
  };