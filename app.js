import mainScreenCanvas from './panel/main-screen-canvas.js'
import gameScreenCanvas from './panel/game-screen-canvas.js'

window.addEventListener("load", function(){
    const mainscreencanvas = new mainScreenCanvas();
        mainscreencanvas.ongameStart=()=>{
            mainscreencanvas.dom.classList.add("d-none");
            gamescreencanvas.dom.classList.remove("d-none");
            console.log("됐나?")
        }
    mainscreencanvas.run();

    const gamescreencanvas = new gameScreenCanvas();
    gamescreencanvas.run();

})