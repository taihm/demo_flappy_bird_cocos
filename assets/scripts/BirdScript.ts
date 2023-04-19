import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BirdScript')
export class BirdScript extends Component {
    start() {
        console.log("hello world cocos engine");
    }

    update(deltaTime: number) {
        
    }
}

