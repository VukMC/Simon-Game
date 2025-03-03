var rndArr = [];
var myArr = []; 
var lvl = 1;
function animSnd(c) {
    document.querySelector("." + c).classList.add("click");
    setTimeout(function(){
        document.querySelector("." + c).classList.remove("click");         
    }, 100);
    switch(c) {                                                                                                                  
        case "green":
            var g = new Audio('./audio/green.mp3');
            g.play();
            break;
        case "red":
            var r = new Audio('./audio/red.mp3');
            r.play();
            break;
        case "yellow":
            var y = new Audio('./audio/yellow.mp3');
            y.play();
            break;
        case "blue":
            var b = new Audio('./audio/blue.mp3');
            b.play();
            break;
    }
}
function rndClr() { 
    var n = Math.floor(Math.random() * 4);
    switch(n) {
        case 0:
            var c = "green";
            break;
        case 1:
            var c = "red";
            break;
        case 2:
            var c = "yellow";
            break;
        case 3:
            var c = "blue";
            break;
    }
    return c;
}
function toRnd() {   
    setTimeout(function op() {
        var c = rndClr();
        rndArr.push(c);
        animSnd(c);
    }, 800);
}
function lvlUp() {
    document.querySelector("h1").textContent = "Level " + lvl;
    lvl++;
}
function contGame() {  
    toRnd();
    toMy();
}
function toMy() { 
    function clckBttn() {
        console.log(this);
        myArr.push(this.classList[1]);
        var elementsOfMyArray = myArr.length;
        for(var xyz = 0; xyz < elementsOfMyArray; xyz++) {
            if(xyz == rndArr.length - 1) {
                document.querySelectorAll(".four-game-buttons")[0].removeEventListener("click", clckBttn);
                document.querySelectorAll(".four-game-buttons")[1].removeEventListener("click", clckBttn);
                document.querySelectorAll(".four-game-buttons")[2].removeEventListener("click", clckBttn);
                document.querySelectorAll(".four-game-buttons")[3].removeEventListener("click", clckBttn);
            }
            if(myArr[xyz] != rndArr[xyz]) {
                return gmOvr(clckBttn); 
            }
            if((xyz == rndArr.length - 1)) {
                myArr = [];
                lvlUp();  
                contGame();
            }
        }
        animSnd(this.classList[1]);
    }
    document.querySelectorAll(".four-game-buttons")[0].addEventListener("click", clckBttn);
    document.querySelectorAll(".four-game-buttons")[1].addEventListener("click", clckBttn);
    document.querySelectorAll(".four-game-buttons")[2].addEventListener("click", clckBttn);
    document.querySelectorAll(".four-game-buttons")[3].addEventListener("click", clckBttn);
}
function gmOvr(arg) {
    document.querySelectorAll(".four-game-buttons")[0].removeEventListener("click", arg);
    document.querySelectorAll(".four-game-buttons")[1].removeEventListener("click", arg);
    document.querySelectorAll(".four-game-buttons")[2].removeEventListener("click", arg);
    document.querySelectorAll(".four-game-buttons")[3].removeEventListener("click", arg);
    document.querySelector("h1").textContent = "Game Over";
    setTimeout(function(){
        document.querySelector("h1").textContent = "Press Any Key to Start";
    }, 200);
    document.querySelector("body").classList.add("game-over");
    setTimeout(function(){
        document.querySelector("body").classList.remove("game-over");
    }, 200);
    var GOsound = new Audio('./audio/game-over.mp3');
    GOsound.play();
    rndArr = [];
    myArr = [];
    lvl = 1;
    main();
}

function main() {
    document.addEventListener("keypress", function start() {
        toRnd();
        toMy();
        document.removeEventListener("keypress", start);
    });
    document.addEventListener("touchend", function start1() {
        console.log(this);
        toRnd();
        toMy();
        document.removeEventListener("touchend", start1);
    });
}

debugger;
main();