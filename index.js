let count =  0;
let scoreElem = document.getElementById("score");

function increase(){
    count += 1
    console.log(count)
    scoreElem.innerText = count;
}
function increase2(){
    count +=2
    console.log(count)
    scoreElem.innerText = count;
}
function increase3(){
    count +=3
    console.log(count)
    scoreElem.innerText = count;
}

let score = 0;
let plusElem = document.getElementById("scores");

function plus(){
    score += 1
    console.log(score)
    plusElem.innerText = score;
}
function plus1(){
    score += 2
    console.log(score)
    plusElem.innerText = score;
}
function plus2(){
    score +=3
    console.log(score)
    plusElem.innerText = score;
}