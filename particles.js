class Particle{
 constructor(x, y, diameter) {
  var options = {
   'restitution':0,
   'friction':0,
   'density':100,
   isStatic:false
  }
  this.body = Bodies.circle(x, y, diameter/2, options);
  this.radius = diameter/2;
  World.add(world, this.body);
  this.color=color(random(100,255),random(100,255),random(100,255));
 }
 display(){
  var pos =this.body.position;
  var angle=this.body.angle;
  fill(this.color);
  push ();
  translate (pos.x,pos.y);
  rotate(angle);
  ellipseMode(RADIUS);
  strokeWeight(5);
  stroke(this.color);
  ellipse(0, 0, this.radius,this.radius);
  pop ();
 }
}