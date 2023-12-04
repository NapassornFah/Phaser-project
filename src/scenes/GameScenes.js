// import Phaser
import { repeat } from 'lodash';
import Phaser from 'phaser';
import GameScenes2 from './GameScenes2';

//create a variable
let bg
let player

// !create a class exrending phase.Scene
class GameScenes extends Phaser.Scene {
    constructor() {
        super({
            key:'GameScenes' //เป็นการบอกว่าจะใช้ชื่ออะไร ส่วนใหญ่ตั้งชื่อตามclass
        }) //การถ่ายทอดคุณสมบัติ โดยที่ class super จะเป็นตัวแม่ (จะเป็นการสร้างตัวแม่)
        // this.player
    }

    preload() { //ทำงาน1รอบ
        this.load.image('bg-pink', 'assets/image/game-scene/background/background-pink.png')

        // this.load.spritesheet('nutor', assets/image/game-scene/spritesheets/goose.png)

        this.load.spritesheet('goose', 'assets/image/game-scene/spritesheets/goose.png',
            {
                frameWidth: 251,
                frameHeight: 250,
            }
        )

        this.load.image('logs', 'assets/image/game-scene/components/logs.png')
    }

    create() { //การสร้าง การassign set 
        // this.add.image(0, 0, 'bg-pink').setOrigin(0, 0)
        bg = this.add
            .tileSprite(0 ,0, 1280, 720,'bg-pink')
            .setOrigin(0, 0) // set orgin to top left
            console.log(bg);

        player = this.physics.add.sprite(700, 350, 'goose')    

        this.anims.create({
            key : 'player-walk', //ชื่ออนิเมชั่น
            frames : this.anims.generateFrameNumbers('goose', {
                start: 0,
                end: 6,
            }),
            frameRate : 1,
            repeat: -1, // infinity การวนซ้ำ เช่น การเดิน นั่ง
        })

        // this.groupObject = this.physics.add.group()
        // this.groupObject.create(0,0,'logs').setOrigin(0,0)
        // this.groupObject.create(200,200,'logs').setOrigin(0,0)
        // this.groupObject.create(500,500,'logs').setOrigin(0,0)
    }
    
    update(){ //funcionเสริท หริอ ตรวจ
        bg.tilePositionX += 5

        player.anims.play('player-walk', true)

        // this.scene.start('GameScenes2')\
        this.scene.start("Event1")
    }
}

export default GameScenes