let Allimg=document.querySelectorAll('.game img');
// console.log(Allimg);

let userChoice;
let computerChoice;

let userScore=0;
let compScore=0;

let roundNumber=1;
const totalrounds=10;

function compfunc(){

    let arr=['rock','paper','scissors'];
    let var1=Math.floor(Math.random()*3);
// console.log(var1);
let compChoice=arr[var1];
return compChoice;


}
// compfunc()



function gamefunc(){
    compChoice=compfunc();
    // console.log(compChoice);
    // console.log(userChoice);
    alert(`user selected ${userChoice} and computer selected ${compChoice}`);
    if(userChoice===compChoice){
        let button=document.getElementById('button');
        button.innerHTML="Game Draw";
        // console.log(button);

    }

        else if(userChoice==='rock' && compChoice==='scissor'){
            let button=document.getElementById('button');
            button.innerHTML="User won";
            userScore++;

            document.getElementById('userscore').innerHTML=userScore;

        }
        else if(userChoice==='rock' && compChoice==='paper'){
            let button=document.getElementById('button');
            button.innerHTML="Computer won";
            compScore++;

            document.getElementById('compscore').innerHTML=compScore; 
        }
        else if(userChoice==='paper' && compChoice==='rock'){
            let button=document.getElementById('button');
            button.innerHTML="User won";
            userScore++;

            document.getElementById('userscore').innerHTML=userScore;

        }
        else if(userChoice==='paper' && compChoice==='scissor'){
            let button=document.getElementById('button');
            button.innerHTML="Computer won";
            compScore++;

            document.getElementById('compscore').innerHTML=compScore; 
        }
        else if(userChoice==='scissor' && compChoice==='paper'){
            let button=document.getElementById('button');
            button.innerHTML="User won";
            userScore++;

            document.getElementById('userscore').innerHTML=userScore;
        }
        else if(userChoice==='scissor' && compChoice==='rock'){
            let button=document.getElementById('button');
            button.innerHTML="Computer won";
            compScore++;

            document.getElementById('compscore').innerHTML=compScore; 
        }




}


Allimg.forEach((i)=>{

i.addEventListener('click',function(){
        userChoice=i.id;
        // console.log(userChoice);
        gamefunc(userChoice);
})



})
