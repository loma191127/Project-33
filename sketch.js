const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var wallLeft,wallRight,wallTop,wallBottom;
var div1,div2,div3,div4,div5,div6;
var plinkos=[];
var particles=[];
var score = 0;
function setup() {
 createCanvas(400,575);
 engine = Engine.create();
 world = engine.world;
 
 wallLeft = new Wall(10,287.5,20,575);
 wallRight = new Wall(390,287.5,20,575);
 wallTop = new Wall(200,10,400,20);
 wallBottom = new Wall(200,565,400,20);

 div1 = new Wall(60,534.5,10,75);
 div2 = new Wall(120,534.5,10,75);
 div3 = new Wall(180,534.5,10,75);
 div4 = new Wall(240,534.5,10,75);
 div5 = new Wall(300,534.5,10,75);
 div6 = new Wall(350,534.5,10,75);

 for (var j = 50; j <=width; j=j+50){ 
  plinkos.push(new Plinko(j,75));
 }
 for (var j = 50; j <=width-10; j=j+50){ 
  plinkos.push(new Plinko(j,175));
 }
 for (var j = 50; j <=width; j=j+50){ 
  plinkos.push(new Plinko(j,275));
 }
 for (var j = 50; j <=width-10; j=j+50) { 
  plinkos.push(new Plinko(j,375));
 }
/* for (var a = ) 
*/
}
function draw() {
 background(200,200,200); 
 Engine.update(engine);
 textSize(30);
 text("Your score: " + score,175,50);
 wallLeft.display();
 wallRight.display();
 wallTop.display();
 wallBottom.display(); 

 div1.display();
 div2.display();
 div3.display();
 div4.display();
 div5.display();
 div6.display();

 for (var i = 0; i < plinkos.length; i++) {     
  plinkos[i].display();   
 } 
 if(frameCount%5===0){
  particles.push(new Particle(random(10,390), 30,10));
  score++;
 }

 for(var j = 0 ; j < particles.length;j++){
    particles[j].display();
 }

 drawSprites();
}