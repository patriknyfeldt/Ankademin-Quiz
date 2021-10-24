const listOfQuestions = [
    {
        questionnr: "Fråga 1",
        question: "Man får använda två av nedanstående vindruvor när man producerar champagne, vilka två?",
        answer1: "Pinot Noir",
        answer2: "Sauvignon Blanc",
        answer3: "Pinot Meunier",
        rightAnswer: "Pinot Noir" + "Pinot Meunier"
    },
    {
        questionnr:"Fråga 2",
        question: "Är fiskbullar gott?",
        answer1: "Nej",
        answer2: "Ja",
        answer3: "Lite gott",
        rightAnswer: "answer1"
    },
    {
        questionnr: "Fråga 3",
        question: "Vilken är den godaste pizzan?",
        answer1: "Margherita",
        answer2: "Vesuvio",
        answer3: "Napoletana",
        rightAnswer: "answer2"
    },
    {
        questionnr: "Fråga 4",
        question: "I vilken vinregion producerar man godast vin??",
        answer1: "Bourgogne",
        answer2: "Piemonte",
        answer3: "Toscana",
        rightAnswer: "answer2"
    },
    {
        questionnr: "Fråga 5",
        question: "Vilken spansk stad har bäst restauranger?",
        answer1: "Barcelona",
        answer2: "Madrid",
        answer3: "San Sebastian",
        rightAnswer: "answer3"
    },
    {
        questionnr: "Fråga 6",
        question: "Vilken pastasort är godast?",
        answer1: "Agnolotti al Plin",
        answer2: "Ravioli",
        answer3: "Tortellini",
        rightAnswer: "answer1"
    },
    {
        questionnr: "Fråga 7",
        question: "Vilken ölsort är godast?",
        answer1: "India pale ale",
        answer2: "Lager",
        answer3: "Stout",
        rightAnswer: "answer2"
    },
    {
        questionnr: "Fråga 8",
        question: "Vilken fisk är godast?",
        answer1: "Aborre",
        answer2: "Sjötunga",
        answer3: "Piggvar",
        rightAnswer: "answer3"
    },
    {
        questionnr: "Fråga 9",
        question: "Är 10 frågor fler än man kan tro?",
        answer1: "Ja",
        answer2: "Nej",
        answer3: "Vet ej",
        rightAnswer: "answer1"
    },
    {
        questionnr: "Fråga 10",
        question: "Vilket land i världen producerar godast vin?",
        answer1: "Italien",
        answer2: "Frankrike",
        answer3: "Spanien",
        rightAnswer: "answer1"
    }
];
 
let body = document.querySelector("body");
let startStopContainer = document.querySelector("#startStopContainer");
let modeBtn = document.querySelector("#mode");
let startBtn = document.querySelector("#startButton");
let answerBtn = document.querySelector("#answerButton");
let reloadBtn = document.querySelector("#reloadButton");
let answerContainer = document.querySelector("#answerContainer");
let questionHeading = document.querySelector("#questionHeading");
let radioButtonContainer = document.querySelector(".radioButtons");
let questions = document.querySelector(".questions");
let question = document.querySelector("#question");
let label1 = document.querySelector("#label1");
let label2 = document.querySelector("#label2");
let label3 = document.querySelector("#label3");
let optionButtons = document.querySelectorAll("[name='options']");
let checkBoxes = document.querySelectorAll("[name='checkbox']");
let checkBoxContainer = document.querySelector(".checkBoxContainer");
let checkBoxLabel1 = document.querySelector("#checkBoxLabel1");
let checkBoxLabel2 = document.querySelector("#checkBoxLabel2");
let checkBoxLabel3 = document.querySelector("#checkBoxLabel3");
let rightAnswers = [];


let start = () => {

    radioButtonContainer.style.display = "block";
    answerContainer.style.display = "block";
    questions.style.display = "block";
    startBtn.style.display = "none";

            radioButtonContainer.style.display = "none";
            checkBoxContainer.style.display = "block";
            questionHeading.innerHTML = listOfQuestions[0].questionnr;
            question.innerHTML = listOfQuestions[0].question;
            checkBoxLabel1.innerHTML = listOfQuestions[0].answer1;
            checkBoxLabel2.innerHTML = listOfQuestions[0].answer2;
            checkBoxLabel3.innerHTML = listOfQuestions[0].answer3;
    }

let nextQuestion = () => {
        if(listOfQuestions.length === 0){
            answerBtn.style.display = "none";
            radioButtonContainer.style.display = "none";
            questions.style.display = "none";
            let endOfQuizText = document.createElement("h2");
            endOfQuizText.innerHTML = "Nu har du svarat på alla frågor! Klicka för att se ditt resultat."
            startStopContainer.appendChild(endOfQuizText);
            let seeResultBtn = document.createElement("button");
            seeResultBtn.innerHTML = "klicka här för att se resultat";
            seeResultBtn.classList.add("darklight");
            startStopContainer.appendChild(seeResultBtn);
            seeResultBtn.addEventListener('click', () => {
                let scoreMsg = document.createElement("h2");
                scoreMsg.innerHTML = `Du fick ${rightAnswers.length} rätt av 10 möjliga.`;
                if(rightAnswers.length > 10 * 0.75){
                    scoreMsg.style.color = "green";
                }
                else if(rightAnswers.length > 10 * 0.5){
                    scoreMsg.style.color = "orange";
                }
                startStopContainer.appendChild(scoreMsg);
                startStopContainer.removeChild(seeResultBtn);
            })
            
        }
        else{
        checkBoxContainer.style.display = "none";    
        radioButtonContainer.style.display = "block";
        questionHeading.innerHTML = listOfQuestions[0].questionnr;
        question.innerHTML = listOfQuestions[0].question;
        label1.innerHTML = listOfQuestions[0].answer1;
        label2.innerHTML = listOfQuestions[0].answer2;
        label3.innerHTML = listOfQuestions[0].answer3;
        } 
    }
    
let firstQuestionEvent = () => {
        let arrayOfCheckedBoxes = [];

        checkBoxes.forEach((box) => {
                if(box.checked){
                    arrayOfCheckedBoxes.push(box.value);
                    let answer = arrayOfCheckedBoxes[0] + arrayOfCheckedBoxes[1]; 
                    if(answer === listOfQuestions[0].rightAnswer){
                        rightAnswers.push(answer);
                    }
                }
            })
        
            if(arrayOfCheckedBoxes.length === 2){
            listOfQuestions.shift();
            nextQuestion();
            }
            else{
            alert("Du måste välja två alternativ!");
            }
    }
    
let questionEvent = () => {
        let arrayOfCheckedButtons = [];
    
            optionButtons.forEach((btn) => {
                if(btn.checked){
                    arrayOfCheckedButtons.push(btn.value);
                    if(btn.value === listOfQuestions[0].rightAnswer){
                    rightAnswers.push(btn.value);
                }
                btn.checked = false;
            }
    
        })
        if(arrayOfCheckedButtons.length !== 0){
        listOfQuestions.shift();
        nextQuestion();
        }
        else{
            alert("Du måste välja ett alternativ!");
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

    if(listOfQuestions.length === 10){
        firstQuestionEvent();
}
    else{
        questionEvent();
}
});



