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