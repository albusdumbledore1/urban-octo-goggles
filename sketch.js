const Bodies= Matter.Bodies
const Engine  = Matter.Engine
const World = Matter.World

var ground,particles;

var engine, world;
var dividers = []
var plinko = []
var particles = null;

var side1,side2;
var turns = 0;

var score  = 0;

var PLAY = 1;
var END = 0;

var gameState = PLAY;

function setup() {
  engine = Engine.create();
  engine = Engine.create();
  engine = Engine.create();
    world = engine.world;
  createCanvas(480,800);
 
  ground  = new Ground(width/2,800,width,20);

side1 = new Ground (5,height/2,10,800);
side2 = new Ground (475,height/2,10,800)

for(k = 0;k<=width;k = k+80){
  dividers.push(new Ground (k,700,10,200));
}

for(j = 40;j <=width;j = j+50){
  plinko.push(new Plinko(j,75));
}

for(l = 20;l <=width;l = l+50){
  plinko.push(new Plinko(l,125));
}
for(k = 40;k <=width;k = k+50){
  plinko.push(new Plinko(k,175));
}

for(m = 20;m <=width;m = m+50){
  plinko.push(new Plinko(m,225));
}

for(n = 40;n <=width;n = n+50){
  plinko.push(new Plinko(n,275));
}

for(o = 20;o <=width;o = o+50){
  plinko.push(new Plinko(o,325));
}


for(p = 40;p <=width;p = p+50){
  plinko.push(new Plinko(p,375));
}

for(a = 20;a <=width;a = a+50){
  plinko.push(new Plinko(a,425));
}

for(b = 40;b <=width;b = b+50){
  plinko.push(new Plinko(b,475));
}





}

function draw() {
  background(0);  
  Engine.update(engine);
textSize(22);
fill(255);
  text("500",30,620);
  text("300",110,620);
  text("100",190,620);
  text("100",270,620);
  text("300",350,620);
  text("500",430,620);



  ground.display();


  for(k=0;k<dividers.length;k++){
    dividers[k].display();
  }

  for(j = 0;j<plinko.length; j++){
  plinko[j].display();
  }
  
  for(l = 0;l<plinko.length; l++){
    plinko[l].display();
    }

    for(k = 0;k<plinko.length; k++){
      plinko[k].display();
      }

      for(m = 0;m<plinko.length; m++){
        plinko[m].display();
        }

        for(n = 0;n<plinko.length; n++){
          plinko[n].display();
        }

        for(o = 0;o<plinko.length; o++){
          plinko[o].display();
          }   

          for(p = 0;p<plinko.length; p++){
            plinko[p].display();
            }   
            
          for(a = 0;a<plinko.length; a++){
            plinko[a].display();
            }   

            for(b = 0;b<plinko.length; b++){
              plinko[b].display();
                } 
            
                
if(gameState = 1){

     
if(particles!==null){
  particles.display();

  
if(particles.body.position.y>600){
  

  if(particles.body.position.x < 80){
    score = score+500;

    particles = null;
    
  } else if(particles.body.position.x > 80  &&  particles.body.position.x < 160 ){
    score = score+300;

    particles = null;
    
  }  else if(particles.body.position.x > 160  && particles.body.position.x < 320 ){
    score = score+100;

    particles = null;
    
  }  else if(particles.body.position.x > 320  &&  particles.body.position.x < 400 ){
    score = score+300;

    particles = null;
    
  }  else if(particles.body.position.x > 400 &&    particles.body.position.x < 480 ){
    score = score+500;

    particles = null;
    
  }


}
  

}

text(" score "  + score,200,550);
text ("Turns ~ "  +  turns,240,50);
   

    if (turns = 6){
      gameState = 0;
    }

  } 

    if(gameState === 0){
      textSize(42);
      text("GAME  OVER",200,400);
      particles = null;
    }
    drawSprites();

}

function keyPressed(){
  console.log("hello");
  particles = new Particle(random(30 , 400),10,10);
  turns = turns+1;
  console.log("particles");
}

