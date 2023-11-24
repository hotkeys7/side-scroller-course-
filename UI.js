export class UI {
    constructor(game){
        this.game = game;
        this.frontSize = 30;
        this.fontFamily = "Bangers";

    }
    draw(context){
        context.save();
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowColor = "white";
        context.shadowBlur = 0;

        context.font = this.frontSize + "px " + this.fontFamily;
        context.textAlign = "left";
        context.fillStyle = this.game.fontColor;
        
        context.fillText("Score: " + this.game.score, 20, 50);

        context.font = this.fontSize * 0.8 + "px " + this.fontFamily;
        context.fillText("Time: " + (this.game.time * 0.001).toFixed(1), 20, 80);
        
        for (let i = 0; i < this.game.lives; i++){

            context.drawImage(lives, 25 * i + 20, 95, 25, 25);
        }
        

        if (this.game.gameOver){
            context.textAlign = "center";
            context.font = this.fontSize * 2 + "px " + this.fontFamily;

            if (this.game.score  > this.game.winningScore){

                context.fillText("Boo-yah", this.game.width * 0.5, this.game.height * 0.5 - 20);
                context.font = this.fontSize * 0.7 + "px " + this.fontFamily;
                context.fillText("What are creatures of the night afraid of? YOUUU!!!",
                this.game.width * 0.5, this.game.height * 0.5 + 20);

            } else {

                context.fillText("Love at first bite?", this.game.width * 0.5, this.game.height * 0.5 - 20);
                context.font = this.fontSize * 0.7 + "px " + this.fontFamily;
                context.fillText("Nope. Better luck next time! :(",
                this.game.width * 0.5, this.game.height * 0.5 + 20)
            }
        }
        context.restore();
    }
}