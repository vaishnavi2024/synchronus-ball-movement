class Game{
constructor (){

}


getState() {



var gameStateref = database.ref('gameState');
gameStateref.on("value", function(data){
    gameState=data.val();

});
}

update(state) {
    database.ref('/').update({
        gameState:state});

}
async start() {
    if (gameState===0) {
        player=new Player ();
        var playerCountref=await database.ref('playerCount').once("value");
        if (playerCountref.exists()) {
            playerCount=playerCountref.val();
            player.getCount();
        }
        form=new Form();
        form.display();
        

    }
    car1=createSprite(100,200);
    car2=createSprite(300,200);
    car3=createSprite(500,200);
    car4=createSprite(700,200);
    cars=[car1,car2,car3,car4]; 

    car1.addImage("car1",car1img);
    car2.addImage("car2",car2img);
    car3.addImage("car3",car3img);
    car4.addImage("car4",car4img);
    
}
play() {
form.hide();
//text("Game begins",200,100); 
Player.getplayerinfo ();
if (allPlayers!==undefined) {
    background("orange");
    image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5);

    var index=0;
    var y,x=100; 

    var displayposition=130; 
    for (var plr in allPlayers) { 
        index=index+1;
        x=x+200;
        y=displayHeight-allPlayers[plr].distance;
        cars[index-1].x=x;
        cars[index-1].y=y;

        if (index===player.index) {
            fill("white");
            ellispe(x,y,10,15);
            cars[index-1].shapeColor="blue";
            camera.position.x=displayWidth/2;
            camera.position.y=cars[index-1].y;
            

        }
        /*fill("blue");
        else fill("black");
    displayposition+=30; 
    text(allPlayers[plr].name+" : "+ allPlayers[plr].distance, 120, displayposition);*/
    }
}
if (keyIsDown(UP_ARROW)&& player.index !==null) {
player.distance+=20;
player.update();

}

if (player.distance>4800) {
    gameState=2;
}
drawSprites();
}
end() {
    console.log("Game Over");
}
}