export default class Btn{
    constructor(){
        this.startImg=document.querySelector("#start")
        this.infoImg=document.querySelector("#info")
        this.x=450;
        this.y=100;
        this.sw=this.startImg.width;
        this.sh=this.startImg.height;

        this.gameStartBtn=null;
        this.gameInfo=null;

    }

    update(){


    }

    draw(ctx){
        ctx.drawImage(this.startImg,
            0,0,this.sw,this.sh,
            this.x,this.y,this.sw,this.sh)
        ctx.drawImage(this.infoImg,this.x,this.y+300)
       
    }

    changeScreen(x,y){
        this.ax=this.sw+this.x;  
        this.ay=this.sh+this.y;  
        if((this.x-2<x&&x<this.ax+2)&&(this.y+40<y&&y<this.ay+10+10)){
            if(this.gameStartBtn!=null)
                this.gameStartBtn();
            console.log("게임시작");
        }

        if((this.x-2<x&&x<this.ax+2)&&(this.y+300+40<y&&y<this.ay+2+300+10)){
            if(this.gameStartBtn!=null)
                this.gameInfo();
            console.log("게임설명");
        }
    }


}