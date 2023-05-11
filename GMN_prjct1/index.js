 let sNumber = Math.trunc(Math.random()*20)+1; //scret num
  var score = 20; //score
  var hScore = 0; // high score
//  document.querySelector('.sNumber').textContent = sNumber;
 

document.querySelector('.check').addEventListener('click' , function(){
const guess = Number(document.querySelector('.guessed').value);
// console.log(guess , sNumber); 
// game logic for win or loose
if(!guess){
 document.querySelector('.remark').textContent="🛑 Enter a Number";
}else if (guess === sNumber){
  document.querySelector('.remark').textContent="😍 correct number";
  document.querySelector('.heading').textContent = 'you won🏆 ';
  document.querySelector('.sNumber').textContent = sNumber;
  document.querySelector('body').style.backgroundColor = 'rgb(17, 110, 40)';
  document.querySelector('.sNumber').style.width = '420px';
  document.querySelector('.sNumber').style.backgroundColor = 'rgb(9 120 13)';
  document.querySelector('.pAgain').style.backgroundColor = "yellow";
   if(score > hScore){
     hScore = score ; 
     document.querySelector('.hScoreNum').textContent = hScore;
    //  console.log(hScore);
   }}
   else if (guess !== sNumber){
    if(score > 1 ){
     score--;
     document.querySelector('.remark').textContent = 
     guess > sNumber ? " ⬇️try lower":"  ⬆️  try higher"   ;
     document.querySelector('.scoreNum').textContent =  score;
    }else{
     document.querySelector('.remark').textContent= " 🤯you lost";
     document.querySelector('body').style.backgroundColor='red';
     document.querySelector('.heading').textContent = 'game over❗';
     document.querySelector('.heading').style.
     color = "rgb(105, 10, 57)";
   }}
//  }else if (guess < sNumber){
//   if(score > 0){
//     score--;
//     document.querySelector('.remark').textContent= " ⬇️ low number";
//   document.querySelector('.scoreNum').textContent =  score;
//   }else{
//     document.querySelector('.remark').textContent= " 🤯you lost";
//     document.querySelector('body').style.backgroundColor='red';
//     document.querySelector('.heading').textContent = 'game over❗';
//     document.querySelector('.heading').style.
//     color = "rgb(105, 10, 57)";
//   }}

 
// else if (guess > sNumber){
//   if(score > 0){
//   score--;
//   document.querySelector('.remark').textContent="⬆️ high number";

//   document.querySelector('.scoreNum').textContent =  score;
//   }else{
//     document.querySelector('.remark').textContent= " 🤯you lost";
//     document.querySelector('body').style.backgroundColor='red';
//     document.querySelector('.heading').textContent = 'game over❗';
//     document.querySelector('.heading').style.
//     color = "rgb(105, 10, 57)";
//   }
// }
})
// play again button manupulation
document.querySelector('.pAgain').addEventListener('click' , function() {
  score = 20;
 document.querySelector('.scoreNum').textContent =  score ; 
  sNumber = Math.trunc(Math.random()*20)+1;
 document.querySelector('body').style.backgroundColor = "black";
 document.querySelector('.remark').textContent = "Start guessing...";
 document.querySelector('.heading').textContent = "Guess My Number !";
 document.querySelector('.sNumber').textContent = "?";
 document.querySelector('.heading').style.color = "rgb(13, 173, 107)";
 document.querySelector('.guessed').value = '';
 document.querySelector('.sNumber').style.backgroundColor = "red";
 document.querySelector('.pAgain').style.backgroundColor = "black";

})