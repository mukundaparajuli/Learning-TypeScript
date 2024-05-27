"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class FaceBook {
    constructor(cameraMode, filter, burst, caption) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.caption = caption;
    }
    uploadStory() {
        console.log("Hello User!");
    }
}
