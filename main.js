const listOfQuestions = [
    {
        questionnr: "Fråga 1",
        question: "Hur många bultar finns det i Ölandsbron?",
        answer1: "svar ett",
        answer2: "svar två",
        answer3: "svar tre",
        rightAnswer: "svar tre"
    },
    {
        questionnr:"Fråga 2",
        question: "Är fiskbullar gott?",
        answer1: "svar fyra",
        answer2: "svar fem",
        answer3: "svar sex",
        rightAnswer: "svar fyra"
  
    }
];



let body = document.querySelector("body");
let modeBtn = document.querySelector("#mode");
let reloadBtn = document.querySelector("#reload");
let startBtn = document.querySelector("#startButton");
let answerBtn = document.querySelector("#answerButton");
console.log(answerBtn);
let questionHeading = document.querySelector("#questionHeading");
let questions = document.querySelector(".questions");
let question = document.querySelector("#question");
let label1 = document.querySelector("#label1");
let label2 = document.querySelector("#label2");
let label3 = document.querySelector("#label3");


let start = () => {
    questions.style.display = "block";
    startBtn.style.display = "none";
        if(listOfQuestions.length === 0){
            alert ("you answered all questions!");
        }
        questionHeading.innerHTML = listOfQuestions[0].questionnr;
        question.innerHTML = listOfQuestions[0].question;
        label1.innerHTML = listOfQuestions[0].answer1;
        label2.innerHTML = listOfQuestions[0].answer2;
        label3.innerHTML = listOfQuestions[0].answer3;
    
}
    

modeBtn.addEventListener('click', () => {
    body.classList.toggle("darklight");
})
reloadBtn.addEventListener('click', () => {
    location.reload();
})
console.log(startBtn);

startBtn.addEventListener('click', start);
answerBtn.addEventListener('click', () => {
    listOfQuestions.shift();
    start();
});





