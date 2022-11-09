//get select form
const elForm = document.querySelector(".test-form");
const elLevelSelect = elForm.querySelector(".level-select");
const elTimeSelect = elForm.querySelector(".time-select");

//get test tags
const elTestModal = document.querySelector(".test-modal");
const elScoreText = elTestModal.querySelector(".user-score");
const elCountAttempt = elTestModal.querySelector(".count-attempt");
const elTime = elTestModal.querySelector(".test-time");
const elQuestionText = elTestModal.querySelector(".question-text");
const elQuestionCounter = elTestModal.querySelector(".question-counter");
const elSignList = elTestModal.querySelector(".sign-list");

// get template
const elSignTemplate = document.querySelector(".img-template").content;

//get game over tags
const elGameOverWrap = document.querySelector(".game-over-wrap");
const elGameOverBtn = elGameOverWrap.querySelector(".lose-btn");

//get winner modal tags
const elWinnerModal = document.querySelector(".winner-wrap");
const elWinnerBtn = document.querySelector(".winner-btn");
const elUserResult = document.querySelector(".user-result-text");

// get all sounds
const trueSound = new Audio("./sounds/true.mp3");
const falseSound = new Audio("./sounds/false-classic.mp3");
const winnerSound = new Audio("./sounds/win.wav");
const gameOverSound = new  Audio("./sounds/game-over-mario.mp3")

//Global fragment
const globalFragment = document.createDocumentFragment();

//Symbols image array
const availableQuestions = [];

//Questions array
const availableQuestionsClone = [];

//Form submit
elForm.addEventListener("submit", function (evt){
    evt.preventDefault();
    document.body.classList.add("show");
    levelFind(elLevelSelect.value);
    getNewQuestion();
    renderSignImg(availableQuestions);
    timeFunction(elTimeSelect.value - 0);
});

//Random array
let randomArrEasy = Math.floor(Math.random() * 80)
let randomArrNormal = Math.floor(Math.random() * 59)
let randomArrHard = Math.floor(Math.random() * 38)

//Level select
function levelFind(levelSelect){
    if(levelSelect === "easy"){
      const easySymbols = roadSymbols.splice(randomArrEasy, 21);
      easySymbols.forEach(item => {
          availableQuestions.push(item);
          availableQuestionsClone.push(item);
      })
    }
    if(levelSelect === "normal"){
        const normalSymbols = roadSymbols.splice(randomArrNormal, 42);
        normalSymbols.forEach(item => {
            availableQuestions.push(item);
            availableQuestionsClone.push(item);
        })
    }
    if(levelSelect === "hard"){
        const hardSymbols = roadSymbols.splice(randomArrHard, 63);
        hardSymbols.forEach(item => {
            availableQuestions.push(item);
            availableQuestionsClone.push(item);
        });
    }
}

//Time Function
function timeFunction(selectValue){
    let counter = selectValue;
    displayTime(counter);
    const countDown = setInterval(() => {
        counter--;
        displayTime(counter);
        if(counter <= 0 || counter < 1){
            endTime()
            clearInterval(countDown)
        }
    }, 1000);
}

//Time display show
function displayTime(second){
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    elTime.innerHTML = `${min < 10 ? '0': ''}${min}:${sec < 10 ? '0' : ''}${sec}`
}

//Question counter
let questionCounter = 0;

//Get random question
function getNewQuestion(){
    elQuestionCounter.innerHTML = `Question ${questionCounter + 1} of ${availableQuestions.length}`;
    if(questionCounter === availableQuestions.length){
        elWinnerModal.classList.add("d-flex");
        winnerSound.play();
    }
    // get random questions
    const questionIndex = availableQuestionsClone[Math.floor(Math.random() * availableQuestionsClone.length)];
    elQuestionText.dataset.id = questionIndex.id;
    elQuestionText.textContent = questionIndex.symbol_title;
    questionCounter++;
    const indexOne = availableQuestionsClone.findIndex(item => item.id === questionIndex.id);
    availableQuestionsClone.splice(indexOne, 1);
}


//Event delegation symbols list
elSignList.addEventListener("click", findTrueQuestion);

//Score Counter
let scoreCounterText = 0;

//Attempt counter
let countAttempt = 5;

//Event delegation function
function findTrueQuestion(evt){
    const getQuestionId = Number(elQuestionText.dataset.id);
    let foundQuestion;
    if(evt.target.matches(".question-item")){
        const getSignId = Number(evt.target.dataset.id);
        const findQuestion = availableQuestions.find(item => {
            return  getSignId === item.id;
        });
        foundQuestion = findQuestion
    }
    if(foundQuestion.id === getQuestionId){
        getNewQuestion();
        evt.target.classList.add("true-answer");
        setTimeout(() => {
            evt.target.classList.add("sign-hidden");
        }, 1600);
        trueSound.play();
        let twoNumber = 2
        scoreCounterText += twoNumber;
    }  else{
        evt.target.classList.add("false-answer");
        setTimeout(() => {
            evt.target.classList.remove("false-answer")
        }, 2500);
        scoreCounterText--;
        countAttempt--;
        falseSound.play();
    }
    elScoreText.textContent = scoreCounterText;
    elCountAttempt.textContent = countAttempt;
    elUserResult.textContent = scoreCounterText;
    counterEnd();
};

//Game over function
function counterEnd(){
    if(scoreCounterText === -5){
        elTestModal.classList.add("d-none");
        elGameOverWrap.classList.add("d-flex");
        gameOverSound.play();
    }
    if(countAttempt === 0){
        elTestModal.classList.add("d-none");
        elGameOverWrap.classList.add("d-flex");
        gameOverSound.play();
    }
}

//Render Symbols Image
function renderSignImg(allSymbols){
    elSignList.innerHTML = "";
    allSymbols.forEach(item => {
        const signTemplateClone = elSignTemplate.cloneNode(true);
        signTemplateClone.querySelector(".question-item").dataset.id = item.id;
        signTemplateClone.querySelector(".sign-img").src = item.symbol_img;

        globalFragment.appendChild(signTemplateClone);
    })

    elSignList.appendChild(globalFragment);
}

//Winner replay btn
elWinnerBtn.addEventListener("click", function (){
    window.location.reload();
});

//Game over replay btn
elGameOverBtn.addEventListener("click", function (){
    window.location.reload();
});


//End time
function endTime(){
    elTestModal.classList.add("d-none");
    elGameOverWrap.classList.add("d-flex");
    gameOverSound.play();
};


