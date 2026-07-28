const quiz = [

    {
        question : "What is the capital of India?",
        options : ["Delhi","Mumbai","Surat","Pune"],
        answer : "Delhi"
    },

    {
        question : "2 + 5 = ?",
        options : ["5","6","7","8"],
        answer : "7"
    },

    {
        question : "HTML stands for?",
        options : [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Home Tool Markup Language",
            "Hyper Tool Machine Language"
        ],
        answer : "Hyper Text Markup Language"
    }

];

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const options = document.getElementById("options");
const result = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion(){
    options.innerHTML="";
    let q = quiz[currentQuestion];
    question.innerText = q.question;
    q.options.forEach(function(option){
        let button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click",function(){
            if(option===q.answer){
                score++;
            }
            nextBtn.disabled=false;
            let allButtons=document.querySelectorAll("#options button");
            allButtons.forEach(function(btn){
                btn.disabled=true;
            });
        });
        options.appendChild(button);
    });
}

nextBtn.addEventListener("click",function(){
    currentQuestion++;
    if(currentQuestion<quiz.length){
        loadQuestion();
        nextBtn.disabled=true;
    }
    else{
        question.innerText="Quiz Finished";
        options.innerHTML="";
        nextBtn.style.display="none";
        result.innerText="Your Score : "+score+" / "+quiz.length;
    }
});

nextBtn.disabled=true;

loadQuestion();