function getRandomArbitrary(min,max) {
    return Math.round(Math.random()*(max-min)+min);
}

function TortoisePos(){
    var tmp = getRandomArbitrary(1,11);
    if(tmp>=1 && tmp<=5){
        return 3;
    }
    else if(tmp>=6 && tmp<=7){
        return -6;
    }
    else if(tmp>=8 && tmp<=10){
        return 1;
    }
}

function HarePosition(){
    var pom = getRandomArbitrary(1,11);
    if(pom>=1 && pom<=2){
        return 0;
    }
    else if(pom>=3 && pom<=4){
        return 9;
    }
    else if(pom==5){
        return -12;
    }
    else if(pom>=6 && pom>=8){
        return 1;
    }
    else if(pom>=9 && pom>=10){
        return 2;
    }
}
function func(){
    for(var i=1; i<=70; ++i){
        var button=document.getElementsByClassName("start");
    }
        button.addEventListener("click", Start,false);
}
function Start(){
    var i=1;
    var stopwatch=document.getElementsByClassName("time");
    var tortoise="<img src=\"turtle.png\">";
    var hare="img src=\"bunny.png\">";
    var tpos=0;
    var prevtpos=0;
    var hpos=0;
    var prevhpos=0;
    var interval=setInterval(game, 1000);

    function game(){
        stopwatch.innerHTML="TIMER: "+i;
        prevtpos=tpos;
        prevhpos=hpos;
        var newTpos=TortoisePos();
        var newHpos=HarePosition();
        if(newTpos>0){
            tpos+=newTpos;
        }
        else if(tpos+newTpos>0){
            tpos+=newTpos;
        }
        if(newHpos>0){
            hpos+=newHpos;
        }
        else if(hpos+newHpos>0){
            hpos+=newHpos;
        }
        if(hpos==tpos){
            document.body.innerHTML="[COLOR=#333333]OUCHHHHHH!!!![/COLOR]";
        }
        if(tpos>=70){
            window.alert("!!THE TORTOISE WON THE RACE!!");
            clearInterval(interval);
        }
        else if(hpos>=70){
            window.alert("!!THE HARE WON THE RACE!!");
            clearInterval(interval);
        }
        ++i;
    }
 }

window.addEventListener("start",Start,false);