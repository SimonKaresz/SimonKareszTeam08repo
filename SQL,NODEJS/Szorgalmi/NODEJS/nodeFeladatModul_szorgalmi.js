exports.RandomSzam=function(){
    let i=0;
    let randomSzamok=[];
    while(i<20){
        let generaltSzam=Math.round(Math.random()*100+1);
        let szerepelE=false;
        for(let j=0;j<randomSzamok.length;j++){
            if(randomSzamok[j]==generaltSzam){
                szerepelE=true;
            }
        }
        if(szerepelE==false){
            randomSzamok.push(generaltSzam);
            i++;
        }
    }
    return randomSzamok;
}

