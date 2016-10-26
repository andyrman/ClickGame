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
        clickMe: {
            "default": null,
            type: cc.Button
        },
        restart: {
            "default": null,
            type: cc.Button
        },
        bar: {
            "default": null,
            type: cc.Node
        },
        score: 0,
        time: 10,
        count: 3,
        countDown: true,
        end: true
    },

    // use this for initialization
    onLoad: function onLoad() {},

    onClickMe: function onClickMe() {
        if (!this.end) {
            this.score++;
        }
    },

    onRestart: function onRestart() {
        this.score = 0;
        this.time = 10;
        this.count = 3;
        this.countDown = true;
        this.end = false;

        this.bar.setRotation(-36 * this.time);
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        if (this.countDown) {
            this.count -= dt;
            this.countDownLabel.string = Math.ceil(this.count).toFixed(0).toString();
            if (this.count <= 0) {
                this.countDown = false;
                this.count = 0;
                this.countDownLabel.string = "Start!!";
                this.end = false;
            }
        } else {
            this.scoreLabel.string = this.score.toString();
            this.time -= dt;
            this.bar.setRotation(-36 * this.time);
            if (this.time <= 0) {
                this.end = true;
                this.time = 0;
                this.countDownLabel.string = "End!!";
            }
        }
    }
});

cc._RFpop();
},{}]},{},["GameScript"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0NvY29zQ3JlYXRvci9yZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImFzc2V0cy9zY3JpcHRzL0dhbWVTY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZGEwYzRGdXJDOUZONllzckhuenVUb3YnLCAnR2FtZVNjcmlwdCcpO1xuLy8gc2NyaXB0c1xcR2FtZVNjcmlwdC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc2NvcmVMYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICBjb3VudERvd25MYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICBjbGlja01lOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvblxuICAgICAgICB9LFxuICAgICAgICByZXN0YXJ0OiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvblxuICAgICAgICB9LFxuICAgICAgICBiYXI6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBzY29yZTogMCxcbiAgICAgICAgdGltZTogMTAsXG4gICAgICAgIGNvdW50OiAzLFxuICAgICAgICBjb3VudERvd246IHRydWUsXG4gICAgICAgIGVuZDogdHJ1ZVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHt9LFxuXG4gICAgb25DbGlja01lOiBmdW5jdGlvbiBvbkNsaWNrTWUoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmQpIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcmUrKztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvblJlc3RhcnQ6IGZ1bmN0aW9uIG9uUmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMudGltZSA9IDEwO1xuICAgICAgICB0aGlzLmNvdW50ID0gMztcbiAgICAgICAgdGhpcy5jb3VudERvd24gPSB0cnVlO1xuICAgICAgICB0aGlzLmVuZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuYmFyLnNldFJvdGF0aW9uKC0zNiAqIHRoaXMudGltZSk7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMuY291bnREb3duKSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50IC09IGR0O1xuICAgICAgICAgICAgdGhpcy5jb3VudERvd25MYWJlbC5zdHJpbmcgPSBNYXRoLmNlaWwodGhpcy5jb3VudCkudG9GaXhlZCgwKS50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY291bnQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnREb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudERvd25MYWJlbC5zdHJpbmcgPSBcIlN0YXJ0ISFcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMudGltZSAtPSBkdDtcbiAgICAgICAgICAgIHRoaXMuYmFyLnNldFJvdGF0aW9uKC0zNiAqIHRoaXMudGltZSk7XG4gICAgICAgICAgICBpZiAodGhpcy50aW1lIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50RG93bkxhYmVsLnN0cmluZyA9IFwiRW5kISFcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiXX0=
