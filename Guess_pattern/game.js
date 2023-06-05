 
var buttonColours = ["red", "blue", "green", "yellow"];
 var gamePattern = [];


 //  starting game
 var started = false
$(document).keypress(function(){
    if(!started){
    $('.level').text("level 1")
    nextSequence()
    started=true
 }})
 $(document).click(function(){
  if(!started){
  $('.level').text("level 1")
  nextSequence()
  started=true
}})
 
  level = 0 ;
 function nextSequence() {
    userClickedPattern = [];
   level++;
  $(".level").text(`level ${level}`)

  
  var randomNumber = Math.floor(Math.random() * 4);

   
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
   
   playSound(randomChosenColour)

   $('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosenColour);
//    var audio = new Audio('sounds/'+randomChosenColour+'.mp3')
//    audio.play()
}


function checkAnswer(currentLevel){
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    console.log ('success')
    if (userClickedPattern.length === gamePattern.length){
     setTimeout(function(){
      nextSequence();
     }, 1000);
    }}else{
      var wrong = new Audio("sounds/wrong.mp3")
      wrong.play()
      $('body').addClass("game-over")
        setTimeout(function(){
        $('body').removeClass("game-over")
      }, 200);
      startOver()
    }
  
} 
function startOver(){
  $(".level").text(`Game over at level ${level} press any key to restart`)
   $(".level").css("fontSize", "25px");
   level = 0;
  
 
  gamePattern=[]
  started = false
} 
 

// nextSequence()
var userClickedPattern=[];


 

// button clicking event
  $('.btn').click(function(){
    
        //  level++;
        //  $(".level").text(`level ${level}`)

         var userChosenColour = this.id;
         userClickedPattern.push(userChosenColour);
         animatePress(userChosenColour)
         playSound(userChosenColour)
         checkAnswer(userClickedPattern.length-1);

 })      
 
 

//   fading function
 function animatePress(currentColour){
  $( `.${currentColour}`).addClass("pressed")
   setTimeout(function(){
    $( `.${currentColour}`).removeClass("pressed")
}, 100);
}

// sound function
function playSound(color){
    var audio = new Audio('sounds/'+color+'.mp3')
    audio.play()
}


 
    

 

























// var gamePattern = []
//  gamePattern.push(randomChosenColour)
 



//   var userClickedPattern = [];
   
//   $('.btn').click(function(){
//      var userChosenColour = this.id;
//      userClickedPattern.push(userChosenColour);
//      console.log(userClickedPattern)
//   })

 

// function nextSequence() {
//     var randomNumber = Math.floor(Math.random()*4);
//     return randomNumber;
// }


// // random colour generator
// var randomNumber = nextSequence();
// var buttonColours = ["red","blue","green","yellow"]
// var randomChosenColour = buttonColours[randomNumber]
//   fading(randomChosenColour)

  
  
//   $('button').click(function sound(colr){
//      var makeSound = new Audio(`sounds/${colr}.mp3`)
//      makeSound.play();
//   })
//  sound(randomChosenColour);

  
// //   fading function
// function fading(randomChosenColour2){
//   $( `.${randomChosenColour2}`).addClass("pressed")

//    setTimeout(function(){
//     $( `.${randomChosenColour}`).removeClass("pressed")
// }, 100);
// }
  













// function nextSequence() {
//     var buttonColours = ["red","blue","green","yellow"]
//     var randomNumber = Math.floor(Math.random()*4);
//     var randomChosenColour = buttonColours[randomNumber]
// gamePattern.push(randomChosenColour)
// $("."+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)
// }
 


// nextSequence()