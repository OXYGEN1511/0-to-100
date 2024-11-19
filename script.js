const questions = [
    {
        question:"What is the correct way to declare a variable in JavaScript?",
        answers:[
            
                {text:"var myVar = 10", correct: false},
               { text:"variable myVar = 10",correct:false},
               { text:"let myVar = 10",correct:true},
               { text:"int myVar = 10",correct:false},
                
            
        ]
    },

    {
        question:"What does the slice() method in JavaScript do?",
        answers:[
            
                {text:"Removes the last character of a string", correct: false},
               { text:"Extracts a section of a string and returns it as a new string",correct:true},
               { text:"Converts a string to uppercase",correct:false},
               { text:"Concatenates two strings together",correct:false},
                
            
        ]
    },

    {
        question:"In Python, what does the range() function return?",
        answers:[
            
                {text:"A list of numbers", correct: true},
               { text:"A tuple of numbers",correct:true},
               { text:"An iterator that generates numbers on-the-fly",correct:false},
               { text:" None of the above",correct:false},
                
            
        ]
    },

    {
        question:"Which data structure is typically used to implement a Last-In-First-Out (LIFO) behavior?",
        answers:[
            
                {text:"Queue", correct: false},
               { text:"Stack",correct:true},
               { text:" Heap",correct:false},
               { text:"Linked List",correct:false},
                
            
        ]
    },

    {
        question:"In Java, what keyword is used to inherit a class?",
        answers:[
            
                {text:"extends", correct: true},
               { text:"implements",correct:false},
               { text:" inherit",correct:false},
               { text:"extends & implements",correct:false},
                
            
        ]
    },
    {
        question:"What is the time complexity of searching for an element in a sorted array using binary search?",
        answers:[
            
                {text:" O(n)", correct: false},
               { text:"O(log n)",correct:true},
               { text:" O(n log n)",correct:false},
               { text:" O(1)",correct:false},
                
            
        ]
    },
    {
        question:"In Python, what keyword is used to handle exceptions?",
        answers:[
            
                {text:" try", correct: true},
               { text:" catch",correct:false},
               { text:" throw",correct:false},
               { text:" except",correct:true},
                
            
        ]
    },
    {
        question:"Which data type in C++ is used to represent integer values without any decimal places?",
        answers:[
            
                {text:"  int", correct: true},
               { text:"float",correct:false},
               { text:"  double",correct:false},
               { text:" char",correct:false},
                
            
        ]
    },
    {
        question:"What is the purpose of the 'break' statement in a switch-case block?",
        answers:[
            
                {text:" Terminates the loop", correct: false},
               { text:" Skips the current iteration",correct:false},
               { text:"  Exits the switch-case block",correct:true},
               { text:"Jumps to a specific case label",correct:false},
                
            
        ]
    },
    {
        question:"In C++, what is the term for a function that doesn't return any value?",
        answers:[
            
                {text:"  void function", correct: true},
               { text:"null function",correct:false},
               { text:" empty function",correct:false},
               { text:" None of the above",correct:false},
                
            
        ]
    },







];

const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
let currentQuestionIndex=0;
let score=0;
nextButton.innerHTML="Next";
showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+"." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
        
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct=="true"){
            button.classList.add("correct");
        }
        button.disabled=true;

    });
    nextButton .style.display ="block";

}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display ="block";
    // startQuiz();
    currentQuestionIndex = 0;
    score = 0;
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();

