export default class gameScreenCanvas{
    constructor(){
        this.dom=document.querySelector("#game-canvas")
        //this.dom.focus();

        /**@type {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");
    }



    run(){
        this.update();
        this.draw();
    }

    update(){

        
    }
    draw(){
        this.ctx.strokeRect(100,100,50,0,Math.PI*2)

    }


}