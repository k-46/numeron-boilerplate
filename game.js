const displayNum1 = document.getElementById("number1");
const displayNum2 = document.getElementById("number2");
const buttons = document.getElementById("buttons");
const timer = document.getElementById("timer");
let num1 ;
let num2 ;
let time =5;
let score = 0;

// Iteration 2: Generate 2 random number and display it on the screen

function randomNumbers(){
    let temp = Math.floor(Math.random()*100 + 1)
    return temp
}

function displayRandomNumbers(){
    num1 = randomNumbers();
    num2 = randomNumbers();
    displayNum1.innerText=num1;
    displayNum2.innerText=num2;
}





// Iteration 3: Make the options button functional

buttons.addEventListener("click",(e)=>{
    compareNumbers(e.target.id);
})

// Comparing two numbers

function compareNumbers(operation){
    if(operation=="greater-than" && num1 > num2 || operation=="equal-to" && num1==num2 || operation=="lesser-than" && num1 < num2){
        // console.log(operation)
        displayRandomNumbers()
        time = 5;
        score++
    }
    else{
        gameOver()
    }
    
}

// Iteration 4: Build a timer for the game

function stopWatch(){
    if(time<=0){
        gameOver()
    }
    timer.innerText = time
    time--
}


function gameOver(){
    location.href = "gameover.html"
    localStorage.setItem("score",score)
    
}

setInterval(stopWatch,1000)
displayRandomNumbers()