const showVerb = document.getElementById("showVerb")
const showImage = document.getElementById("showImage")
const showAudio = document.getElementById("showAudio")

const first = document.getElementById("first-verb")
const second = document.getElementById("second-verb")
const third = document.getElementById("third-verb")
const fourth = document.getElementById("fourth-verb")

const next = document.getElementById("next")
const verbCounter = document.getElementById("verbCounter")
const allRightAnswer = document.getElementById("all-right-answer")
const verbContainer = document.getElementById("verb-container")

const numberOfVerbs = verbs.length

let answerRoulette = [0,1,1,1]
let everyNumberOfVerbs = []
let rightAnswer
let allRightAnswers

next.addEventListener('click', function(){
    ponerVerbo()
    next.style.display = "none"
})

function ponerVerbo(){
    showVerb.innerHTML = "Deposita 200 bitcoins para jugar"
}
