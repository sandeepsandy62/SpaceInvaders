class Scene1 extends Phaser.Scene {

    constructor(){
        super("bootGame");
    }

    //load everything in the memory
    preload(){
        this.load.image("background","assets/images/background.png");
        this.load.image("ship","assets/images/ship.png");
        this.load.image("ship2","assets/images/ship2.png");
        this.load.image("ship3","assets/images/ship3.png");
    }

    //add to the scene
    create() {
        this.add.text(20,20,"Loading game...");
        this.scene.start("playGame");
    }
}