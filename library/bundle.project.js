require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"GameScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'da0c4FurC9FN6YsrHnzuTov', 'GameScript');
// scripts\GameScript.js

cc.Class({
    "extends": cc.Component,

    properties: {
        scoreLabel: {
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
            this.controlButton.setVisible(false);
            this.inGame = true;
        }
    },

    inGameProcess: function inGameProcess(dt) {
        this.scoreLabel.string = "Clicks: " + this.score.toString();
        this.gameTime -= dt;
        this.clockBar.setRotation(-36 * this.gameTime);

        //Real time high score tracking
        if (this.score > this.highScore) {
            this.highScore = this.Score;
        }

        if (this.gameTime <= 0) {
            this.inGame = false;
            this.end = true;
            this.gameTime = 0;
            this.countDownLabel.string = "Restart";
            this.controlButton.setVisible(true);
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        if (this.coolDown) {
            this.coolDownProcess(dt);
        } else if (this.inGame) {
            this.inGameProcess(dt);
        }
    }
});

cc._RFpop();
},{}]},{},["GameScript"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0NvY29zQ3JlYXRvci9yZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImFzc2V0cy9zY3JpcHRzL0dhbWVTY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZGEwYzRGdXJDOUZONllzckhuenVUb3YnLCAnR2FtZVNjcmlwdCcpO1xuLy8gc2NyaXB0c1xcR2FtZVNjcmlwdC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc2NvcmVMYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICBjb3VudERvd25MYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICBjb250cm9sQnV0dG9uOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvblxuICAgICAgICB9LFxuICAgICAgICBjbGlja01lOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvblxuICAgICAgICB9LFxuICAgICAgICBjbG9ja0Jhcjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG4gICAgICAgIGhpZ2hTY29yZTogMFxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5nYW1lUmVzdGFydCgpO1xuICAgIH0sXG5cbiAgICBvbkNsaWNrTWU6IGZ1bmN0aW9uIG9uQ2xpY2tNZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5HYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3JlKys7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2FtZVJlc3RhcnQ6IGZ1bmN0aW9uIGdhbWVSZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5nYW1lVGltZSA9IDEwO1xuICAgICAgICB0aGlzLmNvb2xEb3duQ291bnQgPSAzO1xuICAgICAgICB0aGlzLmNvb2xEb3duID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5HYW1lID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW5kID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5jbG9ja0Jhci5zZXRSb3RhdGlvbigwKTtcbiAgICB9LFxuXG4gICAgb25SZXN0YXJ0OiBmdW5jdGlvbiBvblJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZ2FtZVJlc3RhcnQoKTtcbiAgICB9LFxuXG4gICAgb25Db250cm9sQnV0dG9uOiBmdW5jdGlvbiBvbkNvbnRyb2xCdXR0b24oKSB7XG4gICAgICAgIGlmICghdGhpcy5jb29sRG93biAmJiAhdGhpcy5pbkdhbWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29vbERvd24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVuZCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lUmVzdGFydCgpO1xuICAgICAgICAgICAgdGhpcy5jb29sRG93biA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29vbERvd25Qcm9jZXNzOiBmdW5jdGlvbiBjb29sRG93blByb2Nlc3MoZHQpIHtcbiAgICAgICAgdGhpcy5jb29sRG93bkNvdW50IC09IGR0O1xuICAgICAgICB0aGlzLmNvdW50RG93bkxhYmVsLnN0cmluZyA9IE1hdGguY2VpbCh0aGlzLmNvb2xEb3duQ291bnQpLnRvRml4ZWQoMCkudG9TdHJpbmcoKTtcbiAgICAgICAgaWYgKHRoaXMuY29vbERvd25Db3VudCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmNvb2xEb3duID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNvb2xEb3duQ291bnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5jb3VudERvd25MYWJlbC5zdHJpbmcgPSBcIkNsaWNrXCI7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xCdXR0b24uc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmluR2FtZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgaW5HYW1lUHJvY2VzczogZnVuY3Rpb24gaW5HYW1lUHJvY2VzcyhkdCkge1xuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gXCJDbGlja3M6IFwiICsgdGhpcy5zY29yZS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLmdhbWVUaW1lIC09IGR0O1xuICAgICAgICB0aGlzLmNsb2NrQmFyLnNldFJvdGF0aW9uKC0zNiAqIHRoaXMuZ2FtZVRpbWUpO1xuXG4gICAgICAgIC8vUmVhbCB0aW1lIGhpZ2ggc2NvcmUgdHJhY2tpbmdcbiAgICAgICAgaWYgKHRoaXMuc2NvcmUgPiB0aGlzLmhpZ2hTY29yZSkge1xuICAgICAgICAgICAgdGhpcy5oaWdoU2NvcmUgPSB0aGlzLlNjb3JlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVRpbWUgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5pbkdhbWUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVRpbWUgPSAwO1xuICAgICAgICAgICAgdGhpcy5jb3VudERvd25MYWJlbC5zdHJpbmcgPSBcIlJlc3RhcnRcIjtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbEJ1dHRvbi5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMuY29vbERvd24pIHtcbiAgICAgICAgICAgIHRoaXMuY29vbERvd25Qcm9jZXNzKGR0KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmluR2FtZSkge1xuICAgICAgICAgICAgdGhpcy5pbkdhbWVQcm9jZXNzKGR0KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiXX0=
