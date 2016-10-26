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
        timeLabel: {
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
            type: cc.ProgressBar
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

        this.timeLabel.string = Math.ceil(this.time).toFixed(0).toString();
        this.bar.setRotation(36 * this.time);
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
            this.timeLabel.string = Math.ceil(this.time).toFixed(0).toString();
            this.bar.setRotation(36 * this.time);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0NvY29zQ3JlYXRvci9yZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImFzc2V0cy9zY3JpcHRzL0dhbWVTY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZGEwYzRGdXJDOUZONllzckhuenVUb3YnLCAnR2FtZVNjcmlwdCcpO1xuLy8gc2NyaXB0c1xcR2FtZVNjcmlwdC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc2NvcmVMYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICB0aW1lTGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgY291bnREb3duTGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgY2xpY2tNZToge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgcmVzdGFydDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgYmFyOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByb2dyZXNzQmFyXG4gICAgICAgIH0sXG4gICAgICAgIHNjb3JlOiAwLFxuICAgICAgICB0aW1lOiAxMCxcbiAgICAgICAgY291bnQ6IDMsXG4gICAgICAgIGNvdW50RG93bjogdHJ1ZSxcbiAgICAgICAgZW5kOiB0cnVlXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge30sXG5cbiAgICBvbkNsaWNrTWU6IGZ1bmN0aW9uIG9uQ2xpY2tNZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuZCkge1xuICAgICAgICAgICAgdGhpcy5zY29yZSsrO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uUmVzdGFydDogZnVuY3Rpb24gb25SZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy50aW1lID0gMTA7XG4gICAgICAgIHRoaXMuY291bnQgPSAzO1xuICAgICAgICB0aGlzLmNvdW50RG93biA9IHRydWU7XG4gICAgICAgIHRoaXMuZW5kID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy50aW1lTGFiZWwuc3RyaW5nID0gTWF0aC5jZWlsKHRoaXMudGltZSkudG9GaXhlZCgwKS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLmJhci5zZXRSb3RhdGlvbigzNiAqIHRoaXMudGltZSk7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMuY291bnREb3duKSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50IC09IGR0O1xuICAgICAgICAgICAgdGhpcy5jb3VudERvd25MYWJlbC5zdHJpbmcgPSBNYXRoLmNlaWwodGhpcy5jb3VudCkudG9GaXhlZCgwKS50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY291bnQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnREb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudERvd25MYWJlbC5zdHJpbmcgPSBcIlN0YXJ0ISFcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMudGltZSAtPSBkdDtcbiAgICAgICAgICAgIHRoaXMudGltZUxhYmVsLnN0cmluZyA9IE1hdGguY2VpbCh0aGlzLnRpbWUpLnRvRml4ZWQoMCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuYmFyLnNldFJvdGF0aW9uKDM2ICogdGhpcy50aW1lKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWUgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnREb3duTGFiZWwuc3RyaW5nID0gXCJFbmQhIVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyJdfQ==
