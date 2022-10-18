//Se agregan todas las variables a utilizar
const showVerb = document.getElementById("showVerb");
const showImage = document.getElementById("showImage");
const showAudio = document.getElementById("showAudio");

const first = document.getElementById("first-verb");
const second = document.getElementById("second-verb");
const third = document.getElementById("third-verb");
const fourth = document.getElementById("fourth-verb");

const play = document.getElementById("next");
const verbsCounter = document.getElementById("verbs-counter");
const allRightCounter = document.getElementById("all-right-answers");
const allWrongCounter = document.getElementById("all-wrong-answers");
const verbsContainer = document.getElementById("verbs-container");
 
const numberOfVerbs = verbs.length;

let answerRoullete = [0,1,1,1];
let everyNumberOfVerbs = [];
let rightAnswer; 
let rightAnswersCounter = 0;
let wrongAnswersCounter = 0;

// Rl boton next nos permite iniciar el juego presionando el boton y mandando info
play.addEventListener("click", function(){
    ponerVerbo();
    play.style.display = 'none';
});

// Se utiliza la funcion para hacer aleatorio
makeRandomList();

let lastPosition = everyNumberOfVerbs.length-1;

// Se crea la funcion para hacer aleatorios los verbos
function makeRandomList(){
    for (var i = 0; i < numberOfVerbs; i++){
        everyNumberOfVerbs.push(i);
    }
    everyNumberOfVerbs = everyNumberOfVerbs.sort(() => Math.random() - 0.5);
}

// Se crea la funcion para aplicar una accion si es correcta o incorrecta
function buttonEffect(itsRight,button){
    if (itsRight){
      button.classList.add('rightAnswer');
      setTimeout(function(){
        button.classList.remove('rightAnswer');
      },1000);
      rightAnswersCounter = rightAnswersCounter+1;
    }else{
      button.classList.add('wrongAnswer');
      setTimeout(function(){
        button.classList.remove('wrongAnswer');
      },1000);
      wrongAnswersCounter = wrongAnswersCounter+1;
    }
    setTimeout(function(){
      ponerVerbo();
    },500);
  }

  // Se le agrega un listener que le agregue la funcionalidad a cada boton
first.addEventListener("click",function(){
buttonEffect(isItRight_(first.innerHTML),this);
});

second.addEventListener("click", function(){
buttonEffect(isItRight_(second.innerHTML),this);
});

third.addEventListener("click", function(){
buttonEffect(isItRight_(third.innerHTML),this);
});

fourth.addEventListener("click", function(){
buttonEffect(isItRight_(fourth.innerHTML),this);
});

// funcion para que los botones salgan de manera aleatorea 
function shuffleAnswers(array) {
  let numberOfAnswerButtons = array.length;
  let randomIndex;
  while (numberOfAnswerButtons != 0) {
    randomIndex = Math.floor(Math.random() * numberOfAnswerButtons);
    numberOfAnswerButtons--;
    [array[numberOfAnswerButtons], array[randomIndex]] = [
    array[randomIndex], array[numberOfAnswerButtons]];
  }
  return array;
}

function isItRight_(answer){
  return answer==rightAnswer?true:false;
}

function randomVerbo(notThisOne){
  theOne = Math.floor(Math.random()*verbos.length);
  return theOne == notThisOne?randomVerbo(notThisOne):theOne;
}

function ponerVerbo() {
  answerRoullete = shuffleAnswers(answerRoullete);

  let randomPosition = everyNumberOfVerbs[lastPosition];
  let imgText = "<img src='img/"+verbs[randomPosition]+".jpg'"; 
  imgText += "height:'140px' width='100px'>";

  // Se agregan los botones con sus respectivos diseños
  first.classList.add("btn","btn-outline-light","btn-md");
  second.classList.add("btn","btn-outline-light","btn-md");
  third.classList.add("btn","btn-outline-light","btn-md");
  fourth.classList.add("btn","btn-outline-light","btn-md");

  // Se agrega la informacion que permite mostrar la informacion dependiendo la accion
  if (lastPosition >= 0){
    var just_position = lastPosition+1;
    verbsCounter.innerHTML = ''+just_position+' / '+numberOfVerbs;
    allRightCounter.innerHTML = "Right answers: "+rightAnswersCounter;
    allWrongCounter.innerHTML = "Wrong answers: " + wrongAnswersCounter;

    showVerb.innerHTML = verbs[randomPosition];
    showImage.innerHTML = imgText;
    showAudio.src = "audio/"+verbs[randomPosition]+".mp3";
    showAudio.play();

    first.innerHTML = !answerRoullete[0]?verbos[randomPosition]:verbos[randomVerbo(randomPosition)];
    second.innerHTML = !answerRoullete[1]?verbos[randomPosition]:verbos[randomVerbo(randomPosition)];
    third.innerHTML = !answerRoullete[2]?verbos[randomPosition]:verbos[randomVerbo(randomPosition)];
    fourth.innerHTML = !answerRoullete[3]?verbos[randomPosition]:verbos[randomVerbo(randomPosition)];

    rightAnswer = verbos[randomPosition];
    lastPosition = lastPosition - 1;
  }else{
    verbsCounter.innerHTML = "0 / " + numberOfVerbs;
    allRightCounter.innerHTML = "Right answers: " + rightAnswersCounter;
    allWrongCounter.innerHTML = "Wrong answers: " + wrongAnswersCounter;
    showVerb.innerHTML = "Thank you !";
    verbsContainer.innerHTML = ""; 
  }
}

