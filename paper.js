class Paper{

	constructor(x,y){
        var options={

            isStatic:false,
            restitucion:0.3,
            friction:0,
            density:1.2
          }
          this.body = Bodies.rectangle(x, y, 50, 50, options);
          this.width = 150;
          this.height = 40;
          World.add(world, this.body);
    }       
	
	display()
	{
        var pos = this.body.position;
       var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke('white')
        fill('orange')
        rectMode(CENTER)
        ellipse(0,0,this.r,this.r)
        pop();	
	} 

}