const player0 =   document.querySelector('.player--0');
const player1 =   document.querySelector('.player--1');
const prt0 =      document.querySelector('#prt--0');
const prt1 =      document.querySelector('#prt--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');


const newGame = document.querySelector('.new');
const rtd =  document.querySelector('.rtd');
const hold = document.querySelector('.hold'); 
let crntNum1 = document.getElementById("crntNum--0");
let crntNum2 = document.getElementById("crntNum--1");
let score0 = document.getElementById("score--0");
let score1 =  document.getElementById("score--1");
let dice = document.querySelector('.dice');


  const players = [0,0];
  let activePlayer = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  let sum  = 0;
  crntNum2.textContent = 0;
const green = document.querySelector(`#prt--${activePlayer}`);
const score = document.querySelector(`#score--${activePlayer}`);
const current =  document.querySelector(`#current--${activePlayer}`);

rtd.addEventListener('click', function(){
    let diceNum = Math.trunc(Math.random()*6)+1;
    // console.log(typeof diceNum ,diceNum);
    dice.src = `dice-${diceNum}.png`;
    dice.style.width ='70px';
    dice.style.marginLeft ='-2rem';
     
      if( diceNum!==1){
        sum += diceNum ;
        // console.log(sum);
        // crntNum1.textContent = sum ;
        document.getElementById(`crntNum--${activePlayer}`).textContent =  sum ;
         
        if(activePlayer === 0){
          prt0.style.backgroundColor = "rgb(219 118 173)" ;
          prt1.style.backgroundColor = '#c979a56b';
            

       }else if (activePlayer === 1){
         prt1.style.backgroundColor = "rgb(219 118 173)" ;
         prt0.style.backgroundColor = '#c979a56b';
          
         
          
       
       }else{
         false  ;
       }
      }else{
        document.getElementById(`crntNum--${activePlayer}`).textContent = 0 ;

        activePlayer = activePlayer === 0 ? 1 : 0 ;
        sum = 0
        if(activePlayer === 0){
          prt0.style.backgroundColor = "#b3648f" ;
          prt1.style.backgroundColor = '#c979a56b';
         }else if (activePlayer === 1){
          prt1.style.backgroundColor = "#b3648f" ;
         prt0.style.backgroundColor = '#c979a56b';
 
        }else{
          false
        }
       } 
        
})
  hold.addEventListener('click' , function(){
   document.getElementById(`score--${activePlayer}`).textContent = sum;
   debugger;
  //  console.log(sum);
  //  const scores =(`score--${activePlayer}`).;
  //  console.log(scores);
   if(sum >= 50){
    //  console.log(sum);
     const green = document.querySelector(`#prt--${activePlayer}`);
     const score = document.querySelector(`#score--${activePlayer}`);
     const current =  document.querySelector(`#current--${activePlayer}`);
 
    //  console.log(green);
     green.style.backgroundColor = '#35af35';
     current.style.backgroundColor = '#35af35';
     score.textContent= 'winner🎊';
     score.style.fontSize = '2rem';
     rtd.style.display = 'none';
     
   }
   else if(sum < 50){
    activePlayer = activePlayer === 0 ? 1 : 0 ;
    sum = 0;

      if(activePlayer === 0){
      prt0.style.backgroundColor = "#b3648f" ;
      prt1.style.backgroundColor = '#c979a56b';
      crntNum2.innerHTML=0;


 
     }else if (activePlayer === 1){
      prt1.style.backgroundColor = "#b3648f" ;
     prt0.style.backgroundColor = '#c979a56b';
     crntNum1.innerHTML=0;
     

 
    }}
   
   })

   newGame.addEventListener('click' , function(){
     const green = document.querySelector(`#prt--${activePlayer}`);
     const score = document.querySelector(`#score--${activePlayer}`);
     const current =  document.querySelector(`#current--${activePlayer}`);
     const crntNum =  document.querySelector(`#crntNum--${activePlayer}`);

    //  let sum = 0 ;
     green.style.backgroundColor = '#c979a56b';
    current0.style.backgroundColor = 'rgb(175, 67, 112)';
    current1.style.backgroundColor = 'rgb(175, 67, 112)';
    crntNum1.textContent=0;
    sum = 0;
    crntNum2.textContent=0;
    score0.textContent = 0;
    score1.textContent = 0;
    score.style.fontSize = '3rem';
    dice.src = 'dice.png';
    rtd.style.display = 'block';

   })
   