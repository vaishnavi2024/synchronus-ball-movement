class Form {
constructor(){
    this.title=createElement('h2');
this.input=createInput("Name");
this.button=createButton("Submit");
this.reset=ceateButton("Reset");
this.greeting=createElement("h2");
}
hide() {
    this.input.hide();
    this.button.hide();
    this.greeting.hide(); 
    this.title.hide(); 
}
display() {
    this.title.html("multiplayergame");
    this.title.position(displayWidth/2-50,10);
    this.input.position(displayWidth/2-40,displayHeight/2-70);
    this.button.position(displayWidth/2+40,displayHeight/2);
    this.reset.position(displayWidth/2,40);
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name=this.input.value();
        playerCount+=1;
        player.index=playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Welcome " + player.name);
        this.greeting.position(displayWidth/2-40,displayHeight/4);
        
    })
    this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
    })

}
}