cc.Class({
    extends: cc.Component,

    properties: {
        scoreLabel: {
            default: null,
            type: cc.Label
        },
        countDownLabel: {
            default: null,
            type: cc.Label
        },
        controlButton: {
            default: null,
            type : cc.Button
        },
        clickMe: {
            default: null,
            type: cc.Button
        },
        clockBar: {
            default: null,
            type: cc.Node
        },
        highScore : 0
    },

    // use this for initialization
    onLoad: function () {
        this.gameRestart();
    },

    onClickMe: function(){
        if(this.inGame){
            this.score++;
        }
    },
    
    gameRestart : function(){
        this.score = 0;
        this.gameTime = 10;
        this.coolDownCount = 3;
        this.coolDown = false;
        this.inGame = false;
        this.end = false;
        
        this.clockBar.setRotation(0);
    },
    
    onRestart: function(){
        this.gameRestart();
    },
    
    onControlButton: function(){
        if( !this.coolDown && !this.inGame ){
            this.coolDown = true;
        }
        if( this.end ){
            this.gameRestart();
            this.coolDown = true;
        }
    },
    
    coolDownProcess : function(dt){
        this.coolDownCount -= dt;
        this.countDownLabel.string = Math.ceil(this.coolDownCount).toFixed(0).toString();
        if(this.coolDownCount<=0){
            this.coolDown = false;
            this.coolDownCount = 0;
            this.countDownLabel.string = "Click";
            this.controlButton.setVisible(false);
            this.inGame = true;
        }
    },
    
    inGameProcess : function(dt){
        this.scoreLabel.string = "Clicks: " + this.score.toString();
        this.gameTime -= dt;
        this.clockBar.setRotation(-36*this.gameTime);
        
        //Real time high score tracking
        if(this.score > this.highScore){
            this.highScore = this.Score;
        }
        
        if(this.gameTime<=0){
            this.inGame = false;
            this.end = true;
            this.gameTime = 0;
            this.countDownLabel.string = "Restart";
            this.controlButton.setVisible(true);
        }
    },
    
    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if(this.coolDown){
            this.coolDownProcess(dt);
        }else if(this.inGame){
            this.inGameProcess(dt);
        }
    },
});