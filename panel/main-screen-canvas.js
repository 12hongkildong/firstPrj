import Btn from '../item/btn.js'

export default class mainScreenCanvas{

    constructor(){
        this.dom=document.querySelector("#main-screen-canvas")

        /**@type {CanvasRenderingContext2D} */
        this.ctx=this.dom.getContext("2d");
        
        this.dom.onclick=this.onclickHandler.bind(this);
        this.btn = new Btn();
            this.btn.gameStartBtn=this.gameStartBtnHandler.bind(this);
        this.gameStart=null;

    }

    run(){
        this.update();
        this.draw();
        window.setTimeout(()=>{
            this.run();
        })

    }

    update(){


    }

    draw(){
        this.btn.draw(this.ctx);
    }

    onclickHandler(e){
        this.btn.changeScreen(e.x,e.y)
        console.log(e.x,e.y);
    }

    gameStartBtnHandler(){
        if(this.gameStart!=null)
            this.gameStart();
    }

}