import 'phaser'; //import pheser
import Phaser from 'phaser';
import GameScenes from './scenes/GameScenes';
import GameScenes2 from './scenes/GameScenes2';
import Event1 from './scenes/Event1';
import Event2 from './scenes/Event2';

const config = {
    type : Phaser.AUTO, //ให้มันเลือกเองว่าจะใช้นตัวอะไร คือไรไม่รุ้
    width : 1280,
    height : 720,
    parent : 'content', //ชื่อ id class ใน div ของ  html
    backgroundColor : '#000',
    physics : {
        default : 'arcade',
        arcade : {
            gravity : {
                y: 200,
            },
            debug : true //ส่วนมหญ่จะเปิดแบบinbox ในเกม  เช่น เปิดอิฐบลอค 
        }
    },
    scene : [GameScenes, GameScenes2, Event1, Event2] //array 
}
let game = new Phaser.Game(config); //สร้างตัวแปรเกม , obj ตัวใหม่มาแทนที่