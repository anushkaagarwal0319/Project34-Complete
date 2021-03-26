const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

function preload() {
//preload the images here

bg = loadImage("images/bg.jpg");

}

function setup() {
  createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

  Engine.run(engine);

  hero = new Hero(275, 100, 10, 10);
  
  ground = new Ground(320, 450, 1000, 5);

  fly = new Fly(hero.body, {x:275, y:70});

  monster = new Monster(750, 200, 50, 50)

  //create blocks

  block2 = new Block(470, 400, 50, 50);
  block3 = new Block(550, 400, 50, 50);
  block4 = new Block(630, 400, 50, 50);
  block7 = new Block(470, 345, 50, 50);
  block8 = new Block(470, 295, 50, 50);
  block9 = new Block(550, 345, 50, 50);
  block10 = new Block(550, 295, 50, 50);
  block11 = new Block(630, 345, 50, 50);
  block12 = new Block(630, 295, 50, 50);

}

function draw() {
  background(bg);

  hero.display();
  ground.display();
  fly.display();

  block2.display();
  block3.display();
  block4.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
 
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY});
}
