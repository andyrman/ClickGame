require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"GameScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'da0c4FurC9FN6YsrHnzuTov', 'GameScript');
// scripts\GameScript.js

cc.Class({
    "extends": cc.Component,

    properties: {
        titleLabel: {
            "default": null,
            type: cc.Label
        },
        scoreLabel: {
            "default": null,
            type: cc.Label
        },
        highLabel: {
            "default": null,
            type: cc.Label
        },
        countDownLabel: {
            "default": null,
            type: cc.Label
        },
        controlButton: {
            "default": null,
            type: cc.Button
        },
        clickMe: {
            "default": null,
            type: cc.Button
        },
        clockBar: {
            "default": null,
            type: cc.Node
        },
        highScore: 0
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.gameRestart();
    },

    onClickMe: function onClickMe() {
        if (this.inGame) {
            this.score++;
        }
    },

    gameRestart: function gameRestart() {
        this.score = 0;
        this.gameTime = 10;
        this.coolDownCount = 3;
        this.coolDown = false;
        this.inGame = false;
        this.end = false;

        this.clockBar.setRotation(0);
    },

    onRestart: function onRestart() {
        this.gameRestart();
    },

    onControlButton: function onControlButton() {
        if (!this.coolDown && !this.inGame) {
            this.coolDown = true;

            this.titleLabel.enabled = false;
            this.highLabel.enabled = true;
            this.scoreLabel.enabled = true;
        }
        if (this.end) {
            this.gameRestart();
            this.coolDown = true;
        }
    },

    coolDownProcess: function coolDownProcess(dt) {
        this.coolDownCount -= dt;
        this.countDownLabel.string = Math.ceil(this.coolDownCount).toFixed(0).toString();
        if (this.coolDownCount <= 0) {
            this.coolDown = false;
            this.coolDownCount = 0;
            this.countDownLabel.string = "Click";
            this.controlButton.enabled = false;
            this.inGame = true;
        }
    },

    inGameProcess: function inGameProcess(dt) {

        this.scoreLabel.string = "Clicks : " + this.score.toString();
        this.highLabel.string = "Highest : " + this.highScore.toString();

        this.gameTime -= dt;
        this.clockBar.setRotation(-36 * this.gameTime);

        //Real time high score tracking

        if (this.score > this.highScore) {
            this.highScore = this.score;
        }

        if (this.gameTime <= 0) {
            this.inGame = false;
            this.end = true;
            this.gameTime = 0;
            this.countDownLabel.string = "Restart";
            this.controlButton.enabled = true;
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        console.log(this.highScore);
        if (this.coolDown) {
            this.coolDownProcess(dt);
        } else if (this.inGame) {
            this.inGameProcess(dt);
        }
    }
});

cc._RFpop();
},{}]},{},["GameScript"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0NvY29zQ3JlYXRvci9yZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImFzc2V0cy9zY3JpcHRzL0dhbWVTY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2RhMGM0RnVyQzlGTjZZc3JIbnp1VG92JywgJ0dhbWVTY3JpcHQnKTtcbi8vIHNjcmlwdHNcXEdhbWVTY3JpcHQuanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHRpdGxlTGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgc2NvcmVMYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICBoaWdoTGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgY291bnREb3duTGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgY29udHJvbEJ1dHRvbjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgY2xpY2tNZToge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgY2xvY2tCYXI6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBoaWdoU2NvcmU6IDBcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuZ2FtZVJlc3RhcnQoKTtcbiAgICB9LFxuXG4gICAgb25DbGlja01lOiBmdW5jdGlvbiBvbkNsaWNrTWUoKSB7XG4gICAgICAgIGlmICh0aGlzLmluR2FtZSkge1xuICAgICAgICAgICAgdGhpcy5zY29yZSsrO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGdhbWVSZXN0YXJ0OiBmdW5jdGlvbiBnYW1lUmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMuZ2FtZVRpbWUgPSAxMDtcbiAgICAgICAgdGhpcy5jb29sRG93bkNvdW50ID0gMztcbiAgICAgICAgdGhpcy5jb29sRG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluR2FtZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVuZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuY2xvY2tCYXIuc2V0Um90YXRpb24oMCk7XG4gICAgfSxcblxuICAgIG9uUmVzdGFydDogZnVuY3Rpb24gb25SZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLmdhbWVSZXN0YXJ0KCk7XG4gICAgfSxcblxuICAgIG9uQ29udHJvbEJ1dHRvbjogZnVuY3Rpb24gb25Db250cm9sQnV0dG9uKCkge1xuICAgICAgICBpZiAoIXRoaXMuY29vbERvd24gJiYgIXRoaXMuaW5HYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmNvb2xEb3duID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy50aXRsZUxhYmVsLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaGlnaExhYmVsLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zY29yZUxhYmVsLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVuZCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lUmVzdGFydCgpO1xuICAgICAgICAgICAgdGhpcy5jb29sRG93biA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29vbERvd25Qcm9jZXNzOiBmdW5jdGlvbiBjb29sRG93blByb2Nlc3MoZHQpIHtcbiAgICAgICAgdGhpcy5jb29sRG93bkNvdW50IC09IGR0O1xuICAgICAgICB0aGlzLmNvdW50RG93bkxhYmVsLnN0cmluZyA9IE1hdGguY2VpbCh0aGlzLmNvb2xEb3duQ291bnQpLnRvRml4ZWQoMCkudG9TdHJpbmcoKTtcbiAgICAgICAgaWYgKHRoaXMuY29vbERvd25Db3VudCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmNvb2xEb3duID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNvb2xEb3duQ291bnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5jb3VudERvd25MYWJlbC5zdHJpbmcgPSBcIkNsaWNrXCI7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xCdXR0b24uZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pbkdhbWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGluR2FtZVByb2Nlc3M6IGZ1bmN0aW9uIGluR2FtZVByb2Nlc3MoZHQpIHtcblxuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gXCJDbGlja3MgOiBcIiArIHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5oaWdoTGFiZWwuc3RyaW5nID0gXCJIaWdoZXN0IDogXCIgKyB0aGlzLmhpZ2hTY29yZS50b1N0cmluZygpO1xuXG4gICAgICAgIHRoaXMuZ2FtZVRpbWUgLT0gZHQ7XG4gICAgICAgIHRoaXMuY2xvY2tCYXIuc2V0Um90YXRpb24oLTM2ICogdGhpcy5nYW1lVGltZSk7XG5cbiAgICAgICAgLy9SZWFsIHRpbWUgaGlnaCBzY29yZSB0cmFja2luZ1xuXG4gICAgICAgIGlmICh0aGlzLnNjb3JlID4gdGhpcy5oaWdoU2NvcmUpIHtcbiAgICAgICAgICAgIHRoaXMuaGlnaFNjb3JlID0gdGhpcy5zY29yZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdhbWVUaW1lIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5HYW1lID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmVuZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmdhbWVUaW1lID0gMDtcbiAgICAgICAgICAgIHRoaXMuY291bnREb3duTGFiZWwuc3RyaW5nID0gXCJSZXN0YXJ0XCI7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xCdXR0b24uZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmhpZ2hTY29yZSk7XG4gICAgICAgIGlmICh0aGlzLmNvb2xEb3duKSB7XG4gICAgICAgICAgICB0aGlzLmNvb2xEb3duUHJvY2VzcyhkdCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbkdhbWUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5HYW1lUHJvY2VzcyhkdCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7Il19
