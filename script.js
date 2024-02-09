let questions = [ 
    {
    question :  ") What is the preferred way for adding a background color in HTML?",

      answers : [
        {text : "a.) <body background=yellow>" ,correct : "false"},
        {text : "b.) <background>yellow</background>" ,correct : "false"},
        {text : "c.) < body style=background-color:yellow>" ,correct : "true"},
        {text : "d.) <background color=yellow>text<background>" ,correct : "false"},
      ]
    },

    {
        question :  ") How can you create an e-mail link?",
    
          answers : [
            {text : "a.) <mail href=a@b>" ,correct : "false"},
            {text : "b.) <mail>a@b</mail>" ,correct : "false"},
            {text : "c.) <a href=a@b>" ,correct : "false"},
            {text : "<a href=mailto:a@b.com>" ,correct : "true"},
          ]
        },

        {
            question :  ") Which of the following JavaScript cannot do?",
        
              answers : [
                {text : "a.) JavaScript can react to events" ,correct : "false"},
                {text : "b.) JavaScript can manipulate HTML elements" ,correct : "false"},
                {text : "c.) JavaScript can be use to validate data" ,correct : "false"},
                {text : "d.) All of the Above" ,correct : "true"},
              ]
            },

            {
                question :  ") What is the preferred way for adding a background color in HTML?",
            
                  answers : [
                    {text : "a.) <body background=yellow>" ,correct : "false"},
                    {text : "b.) <background>yellow</background>" ,correct : "false"},
                    {text : "c.) < body style=background-color:yellow>" ,correct : "true"},
                    {text : "d.) <background color=yellow>text<background>" ,correct : "false"},
                  ]
                },


                {
                    question :  ") _________ keyword is used to declare variables in javascript.",
                
                      answers : [
                        {text : "a.) Var" ,correct : "true"},
                        {text : "b.) Dim" ,correct : "false"},
                        {text : "c.) String" ,correct : "false"},
                        {text : "d.) None of the above" ,correct : "false"},
                      ]
                    },
]

const questionElement = document.getElementById("question");
const ansElement = document.getElementById("ans-btns");
const nextButton = document.getElementById("next-btn");

// store question index and score

let currentQuestionIndex = 0;
let score =  0;

// create a function to start new quiz with qusetion 1

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML =  "Next";

  showQuestion();
}

// this func display new question in array according to index

function showQuestion() {

     resetState();
    let currentQuestion =  questions[currentQuestionIndex];  // 
    let quesNo =  currentQuestionIndex + 1;
    questionElement.innerHTML = quesNo + "" +currentQuestion.question;  // add new qusetions in elemnent 

    // show the annwers of current questions

    currentQuestion.answers.forEach(answer  =>{   // anwser variable k andr array ki value store ho jy gwe
      let ansButton = document.createElement("button");
      ansButton.classList.add("btn");
      ansButton.innerText=answer.text;
      ansElement.appendChild(ansButton);  // dispply button inside this anselemnnt div

      if (answer.correct) {
        ansButton.dataset.correct  = answer.correct;
      }
      ansButton.addEventListener("click", selectAnswer);
    }  )

}

// this func for remove previous answer that we add manuly
 function resetState() {
  nextButton.style.display = "none";
  while (ansElement.firstChild) {
     ansElement.removeChild(ansElement.firstChild);
  }  

 }

 function selectAnswer(e) {
      let selectedBtn = e.target;
      let isCorrect = selectedBtn.dataset.correct=="true";
      if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
      }
      else{
        selectedBtn.classList.add("incorrect");
      }
      Array.from(ansElement.children).forEach(ansButton =>{
             if (ansButton.dataset.correct === "true") {
                ansButton.classList.add("correct");

             }
            
             ansButton.disabled = "true";
            
      });
      nextButton.style.display = "block";
     
 }
  function showScore() {
   resetState();
   questionElement.innerHTML  = `Your Score is ${score} out ${questions.length}`;

   nextButton.innerHTML = "Start Again";
   nextButton.style.display  = "block";
  }
 
 
 function handleNextbtn() {
       currentQuestionIndex++;
       if (currentQuestionIndex < questions.length) {
             showQuestion();
       }
       else{
          showScore();
       }
 }


 nextButton.addEventListener("click",()=>{
  if (currentQuestionIndex <  questions.length) {
    handleNextbtn();
  }
  else{
      startQuiz();
  }
 })

startQuiz();


