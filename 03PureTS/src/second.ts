interface takePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface story {
  uploadStory(): void;
}

class Instagram implements takePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

class FaceBook implements takePhoto, story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public caption: string
  ) {}
  uploadStory() {
    console.log("Hello User!");
  }
}
