function ages (ages){
    if (ages >=0 && ages <3) {
        console.log("baby");
    }
    else if (ages>=3 && ages < 14 ){
        console.log("child");
    }
    else if(ages>=14 && ages <20){
        console.log("teenager");
    }
    else if (ages>=20 && ages<66) {
        console.log("adult");
    }
    else if (ages>=66){
        console.log("elder");
    }
    else{сцз
        console.log("out of bounds");
    }
}