class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    car1=createSprite(100,200);
    car2=createSprite(400,200);
    car3=createSprite(700,200);
    car4=createSprite(1100,200);
    cars=[car1,car2,car3,car4]
  }

  play(){
    form.hide_details()
    text("Game Start", 200, 100)                                                           
    Player.playerInfo()
    if (allPlayers!==undefined){
      var index=0;
      var x = 0;
      var y;
      for(var plr in allPlayers){
        index=index+1;
        x=x+300;
        y=displayHeight-allPlayers[plr].distance
        cars[index-1].x=x;
        cars[index-1].y=y;
        if(index===player.index){
        cars[index-1].shapeColor=red;
        }
      }
    }
    if(keyIsDown(UP_ARROW) && player.index !== null){
    player.distance=player.distance+40;
    player.update();}
  }
  drawSprites();
}
