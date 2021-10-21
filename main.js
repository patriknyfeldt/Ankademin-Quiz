const listOfQuestions = [
    {
        questionnr: "Fråga 1",
        question: "Hur många bultar finns det i Ölandsbron?",
        answer1: "svar ett",
        answer2: "svar två",
        answer3: "svar tre",
        rightAnswer: "answer1"
    },
    {
        questionnr:"Fråga 2",
        question: "Är fiskbullar gott?",
        answer1: "svar fyra",
        answer2: "svar fem",
        answer3: "svar sex",
        rightAnswer: "answer3"
  
    }
];

let body = document.querySelector("body");
let modeBtn = document.querySelector("#mode");
let reloadBtn = document.querySelector("#reload");
let startBtn = document.querySelector("#startButton");
let answerBtn = document.querySelector("#answerButton");
let questionHeading = document.querySelector("#questionHeading");
let questions = document.querySelector(".questions");
let question = document.querySelector("#question");
let label1 = document.querySelector("#label1");
let label2 = document.querySelector("#label2");
let label3 = document.querySelector("#label3");
let optionButtons = document.querySelectorAll("[name='options']");
let rightAnswers = [];

let start = () => {
    questions.style.display = "block";
    startBtn.style.display = "none";
        if(listOfQuestions.length === 0){
            questions.style.display = "none";
            let endOfQuizText = document.createElement("h2");
            endOfQuizText.innerHTML = `You scored ${rightAnswers.length} out of 10!`
            document.querySelector("#startStopContainer").appendChild(endOfQuizText);
        }
        else{
        questionHeading.innerHTML = listOfQuestions[0].questionnr;
        question.innerHTML = listOfQuestions[0].question;
        label1.innerHTML = listOfQuestions[0].answer1;
        label2.innerHTML = listOfQuestions[0].answer2;
        label3.innerHTML = listOfQuestions[0].answer3;
        } 
}

    

modeBtn.addEventListener('click', () => {
    body.classList.toggle("darklight");
})
reloadBtn.addEventListener('click', () => {
    location.reload();
})

startBtn.addEventListener('click', start);

answerBtn.addEventListener('click', () => {
    
    optionButtons.forEach((btn) => {
        if(btn.checked){
            if(btn.value === listOfQuestions[0].rightAnswer){
                rightAnswers.push(btn.value);
            }
            btn.checked === false;
        }
    })
    listOfQuestions.shift();
    start();

});





