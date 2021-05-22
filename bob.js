class bob
{
	constructor(x,y,r)
	{
		var options={
			'restitution':1.1,
			'friction':5,
			'density':0.8
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		this.image=loadImage("g.ball.png")
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(2);
			//fill("orange")
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}

