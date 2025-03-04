var r = []; var m = []; var l = 1;
function animSnd(c) {
    document.querySelector("." + c).classList.add("c");
    setTimeout(function(){
        document.querySelector("." + c).classList.remove("c");         
    }, 100);
    switch(c) {                                                                                                                  
        case "green":
            var g = new Audio('./audio/green.mp3');
            return g.play();
        case "red":
            var r = new Audio('./audio/red.mp3');
            return r.play();
        case "yellow":
            var y = new Audio('./audio/yellow.mp3');
            return y.play();
        case "blue":
            var b = new Audio('./audio/blue.mp3');
            return b.play();
    }
}
function rndClr() { 
    var n = Math.floor(Math.random() * 4);
    switch(n) {
        case 0:
            return "green";
        case 1:
            return "red";
        case 2:
            return "yellow";
        case 3:
            return "blue";
    }
}
function toRnd() {   
    setTimeout(function() {
        var c = rndClr();
        r.push(c);
        animSnd(c);
    }, 800);
}
function contGame() {  
    toRnd();
    toMy();
}
function toMy() { 
    function clckBttn() {
        m.push(this.classList[1]);
        var elementsOfMyArray = m.length;
        for(var xyz = 0; xyz < elementsOfMyArray; xyz++) {
            if(xyz == r.length - 1) {
                document.querySelectorAll(".four-game-buttons")[0].removeEventListener("click", clckBttn);
                document.querySelectorAll(".four-game-buttons")[1].removeEventListener("click", clckBttn);
                document.querySelectorAll(".four-game-buttons")[2].removeEventListener("click", clckBttn);
                document.querySelectorAll(".four-game-buttons")[3].removeEventListener("click", clckBttn);
            }
            if(m[xyz] != r[xyz]) {
                return gmOvr(clckBttn); 
            }
            if((xyz == r.length - 1)) {
                m = [];
                document.querySelector("h1").textContent = "Level " + l++;
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
    document.querySelector("h1").textContent = "Game Over";
    document.querySelector("body").classList.add("game-over"); 
    setTimeout(function(){
        document.querySelector("body").classList.remove("game-over");
    }, 200);
    var GOsound = new Audio('./audio/game-over.mp3');
    GOsound.play();
    setTimeout(function(){
        window.location.reload();
    }, 520);
}
function main() {
    document.addEventListener("keypress", function s() {
        toRnd();
        toMy();
        document.removeEventListener("keypress", s);
    });
    document.addEventListener("touchend", function s1() {
        toRnd();
        toMy();
        document.removeEventListener("touchend", s1);
    });
}

main();