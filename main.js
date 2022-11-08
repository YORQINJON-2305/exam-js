const elForm = document.querySelector(".test-form");

//getselect tags in main page
const elLevelSelect = elForm.querySelector(".level-select");
const elTimeSelect = elForm.querySelector(".time-select");

//get test tags
const elCloseTestModalBtn = document.querySelector(".close-test-modal");
const elScoreText = document.querySelector(".user-score");
const elTime = document.querySelector(".test-time");
const elTestModal = document.querySelector(".test-modal");
const elQuestionText = elTestModal.querySelector(".question-text");
const elQuestionCounter = elTestModal.querySelector(".question-counter");
const elSignList = elTestModal.querySelector(".sign-list");
const elSignTemplate = document.querySelector(".img-template").content;

//get game over tags
const elGameOverWrap = document.querySelector('.game-over-wrap');
const elRefreshBtn = elGameOverWrap.querySelector('.refresh-btn');

//Global fragment
const globalFragment = document.createDocumentFragment();

let currentQuestion;
const availableQuestions = [];
const availableQuestionsClone = [];

elForm.addEventListener("submit", function (evt){
    evt.preventDefault();
    document.body.classList.add("show");
    levelFind(elLevelSelect.value);
    getNewQuestion();
    renderSignImg(availableQuestions);
    timeFunction(elTimeSelect.value - 0);
});

// let randomArr = Math.floor(Math.random() * 80)
function levelFind(levelSelect){
    if(levelSelect === "easy"){
      const easySymbols = roadSymbols.splice(0, 21);
      easySymbols.forEach(item => {
          availableQuestions.push(item);
          availableQuestionsClone.push(item);
      })
    }
    if(levelSelect === "normal"){
        const normalSymbols = roadSymbols.splice(0, 41);
        normalSymbols.forEach(item => {
            availableQuestions.push(item);
            availableQuestionsClone.push(item);
        })
    }
    if(levelSelect === "hard"){
        const hardSymbols = roadSymbols.splice(0, 63);
        hardSymbols.forEach(item => {
            availableQuestions.push(item);
            availableQuestionsClone.push(item);
        });
    }
}

elCloseTestModalBtn.addEventListener("click", function (){
    document.body.classList.remove("show");
});

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

function displayTime(second){
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    elTime.innerHTML = `${min < 10 ? '0': ''}${min}:${sec < 10 ? '0' : ''}${sec}`
}

elSignList.addEventListener("click", findTrueQuestion);

let questionCounter = 0;
function getNewQuestion(){
    elQuestionCounter.innerHTML = `Question ${questionCounter + 1} of ${availableQuestions.length}`;
    if(questionCounter === availableQuestions.length){
        elGameOverWrap.classList.add("d-flex");
    }
    // get random questions
    const questionIndex = availableQuestionsClone[Math.floor(Math.random() * availableQuestions.length)];
    elQuestionText.textContent = questionIndex.symbol_title;
    elQuestionText.dataset.id = questionIndex.id;
    const indexOne = availableQuestionsClone.indexOf(questionIndex);
    availableQuestionsClone.splice(indexOne, 1);
    questionCounter++
}

let scoreCounterText = 0;
function findTrueQuestion(evt){
    const getQuestionId = Number(elQuestionText.dataset.id);
    let findQ;
    if(evt.target.matches(".question-item")){
        const getSignId = Number(evt.target.dataset.id);
        const findQuestion = availableQuestions.find(item => {
            return  getSignId === item.id;
        });
        findQ = findQuestion
    }
    if(findQ.id === getQuestionId){
        getNewQuestion();
        findQ.isComplete = true;
        renderSignImg(availableQuestions);
        let twoNumber = 2
        scoreCounterText += twoNumber;
    }  else{
        scoreCounterText--
    }
    elScoreText.textContent = scoreCounterText;
    counterEnd()
};

function counterEnd(){
    if(scoreCounterText === -5){
        elTestModal.classList.add("d-none");
        elGameOverWrap.classList.add("d-flex")
    }
}

function renderSignImg(allSymbols){
    elSignList.innerHTML = "";


    allSymbols.forEach(item => {
        // const newItem = document.createElement("li");
        // newItem.classList.add("question-item");
        // newItem.dataset.id = item.id;
        // const newImg = document.createElement("img");
        // newImg.src = item.symbol_img;
        // newImg.classList.add("sign-img", "img-fluid");
        // const newCheckImg = document.createElement("img");




        const signTemplateClone = elSignTemplate.cloneNode(true);
        signTemplateClone.querySelector(".question-item").dataset.id = item.id;
        if(item.isComplete === true){
            signTemplateClone.querySelector(".question-item").style.backgroundColor = "green";
        }
        signTemplateClone.querySelector(".sign-img").src = item.symbol_img;

        globalFragment.appendChild(signTemplateClone);
    })

    elSignList.appendChild(globalFragment);
}



function endTime(){
    elTestModal.classList.add("d-none");
    elGameOverWrap.classList.add("d-flex")
};

elRefreshBtn.addEventListener("click", function (){
    window.location.reload();
});



