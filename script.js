//codewithcurious.com



// Define an array of quiz questions
const quizQuestions = [
  {
    question: " Qual é o princípio legal que estabelece que ninguém pode ser julgado duas vezes pela mesma questão??",
    options: ["Princípio da Irretroatividade", "Princípio da Imparcialidade", "Princípio da Coisa Julgada", "Princípio da Proporcionalidade"],
    correctAnswer: "Princípio da Coisa Julgada"
  },
  {
    question: "Qual é o documento que garante a um inventor o direito exclusivo de produzir, vender e usar sua invenção por um determinado período?",
    options: ["Patente", "Copyright", "Marca Registrada", "Contrato de Licença"],
    correctAnswer: "Patente"
  },
  {
    question: "O que significa habeas corpus?",
    options: ["Prova material em um julgamento", "Ordem judicial para prender alguém", "Prisão preventiva", "Direito de uma pessoa detida comparecer perante um tribunal"],
    correctAnswer: "AuDireito de uma pessoa detida comparecer perante um tribunal"
  },
  {
    question: "O que Qual é a idade mínima para alguém ser considerado legalmente capaz de assinar um contrato?",
    options: ["16 anos", "18 anos", "21 anos", "25 anos"],
    correctAnswer: "AuDireito de uma pessoa detida comparecer perante um tribunal"
  }
];

// Variables to track quiz state
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timerInterval;

// Function to start the quiz
function startQuiz() {
  // Hide the start button and display the first question
  document.getElementById("start-button").style.display = "none";
  displayQuestion();
  startTimer();
}

// Function to display a question and its options
function displayQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const questionText = document.getElementById("question-text");
  const answerButtons = document.getElementById("answer-buttons");

  // Clear previous question and answer options
  questionText.innerHTML = "";
  answerButtons.innerHTML = "";

  // Display the current question
  questionText.innerHTML = currentQuestion.question;

  // Create answer buttons for each option
  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("answer-button");
    answerButtons.appendChild(button);

    // Add click event listener to check the answer
    button.addEventListener("click", function() {
      checkAnswer(option);
    });
  });
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
  const currentQuestion = quizQuestions[currentQuestionIndex];

  // Check if the selected answer is correct
  if (selectedOption === currentQuestion.correctAnswer) {
    score++;
  }

  // Move to the next question or end the quiz if all questions are answered
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(function() {
    timeLeft--;

    // Update the timer text
    document.getElementById("timer").textContent = timeLeft;

    // End the quiz if time runs out
    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}

// Function to end the quiz
function endQuiz() {
  // Stop the timer
  clearInterval(timerInterval);

  // Calculate the score percentage
  const scorePercentage = (score / quizQuestions.length) * 100;

  // Display the final score
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your Score: ${score} out of ${quizQuestions.length}</p>
    <p>Score Percentage: ${scorePercentage}%</p>
  `;
}

// Add event listener to start the quiz when the start button is clicked
document.getElementById("start-button").addEventListener("click", startQuiz);