class Wall{
 constructor(x, y, width, height) {
  var options = {
   'restitution':0,
   'friction':0,
   'density':100,
   isStatic:true
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  World.add(world, this.body);
 }
 display(){
  var pos =this.body.position;
  var angle=this.body.angle;
  fill("white");
  push ();
  translate (pos.x,pos.y);
  rotate(angle);
  rectMode(CENTER);
  strokeWeight(0);
  stroke("white");
  rect(0, 0, this.width, this.height);
  pop ();
 }
}