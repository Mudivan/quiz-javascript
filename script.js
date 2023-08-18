//codewithcurious.com



// Define an array of quiz questions
const quizQuestions = [
  {
    question: "Pergunta 1 - Qual é o princípio legal que estabelece que ninguém pode ser julgado duas vezes pela mesma questão??",
    options: [
              "Princípio da Irretroatividade",
              "Princípio da Imparcialidade",
              "Princípio da Coisa Julgada",
              "Princípio da Proporcionalidade"
            ],
    correctAnswer: "Princípio da Coisa Julgada"
  },
  {
    question: "Pergunta 2 - Qual é o documento que garante a um inventor o direito exclusivo de produzir, vender e usar sua invenção por um determinado período?",
    options:
      [
        "Patente",
        "Copyright",
        "Marca Registrada",
        "Contrato de Licença"
      ],
    correctAnswer: "Patente"
  },
  {
    question: "Pergunta 3 - O que significa habeas corpus?",
    options:
      [
        "Prova material em um julgamento",
        "Ordem judicial para prender alguém",
        "Prisão preventiva",
        "Direito de uma pessoa detida comparecer perante um tribunal"
      ],
    correctAnswer: "AuDireito de uma pessoa detida comparecer perante um tribunal"
  },
  {
    question: "Pergunta 4 - O que Qual é a idade mínima para alguém ser considerado legalmente capaz de assinar um contrato?",
    options:
      [
        "16 anos",
        "18 anos",
        "21 anos",
        "25 anos"
      ],
    correctAnswer: "AuDireito de uma pessoa detida comparecer perante um tribunal"
  },
  {
    question: "Pergunta 5 - O que é a presunção de inocência em termos legais??",
    options:
      [
        "O direito de permanecer em silêncio durante um julgamento",
        "A obrigação de provar a própria inocência",
        "A ideia de que um réu é considerado inocente até que sua culpa seja comprovada",
        "A possibilidade de um júri popular determinar a pena de um réu"
      ],
    correctAnswer: "A ideia de que um réu é considerado inocente até que sua culpa seja comprovada"
  },
  {
    question: "Pergunta 6 - Qual é o ramo do direito que lida com as relações entre indivíduos e entidades privadas, não envolvendo o governo?",
    options:
      [
        "Direito Civil",
        "Direito Penal",
        "Direito Administrativo",
        "Direito Constitucional"
      ],
    correctAnswer: "Direito Civil"
  },
  {
    question: "Pergunta 7 - O que é o habeas data?",
    options:
      [
        "Direito de acesso a informações pessoais em bancos de dados públicos",
        "Ordem judicial para a prisão de um indivíduo",
        "Recurso usado para contestar a constitucionalidade de uma lei",
        "Processo utilizado para a obtenção de patentes"
      ],
    correctAnswer: "Direito de acesso a informações pessoais em bancos de dados públicos"
  },
  {
    question: "Pergunta 8 - O que é o princípio do contraditório no sistema legal?",
    options:
      [
        "O direito de permanecer em silêncio durante um julgamento",
        "A obrigação de apresentar provas contra si mesmo",
        "O direito de um réu ser informado das acusações contra ele",
        "O direito das partes envolvidas em um processo de serem ouvidas e confrontarem evidências"
      ],
    correctAnswer: "O direito das partes envolvidas em um processo de serem ouvidas e confrontarem evidências"
  },
  {
    question: "Pergunta 9 - O que é o jus primae noctis?",
    options:
      [
        "O direito de um indivíduo de se recusar a testemunhar contra si mesmo",
        "O direito de um cidadão a possuir uma arma de fogo",
        "O direito de um réu a um julgamento rápido",
        "Uma teoria filosófica sobre os direitos naturais"
      ],
    correctAnswer: "Não existe essa expressão no contexto legal."
  },
  {
    question: "Pergunta 10 - O que é um homicídio culposo?",
    options:
      [
        "Matar alguém intencionalmente, com premeditação",
        "Matar alguém em legítima defesa",
        "Matar alguém acidentalmente, sem a intenção de matar",
        "Matar alguém em estado de insanidade mental"
      ],
    correctAnswer: "Matar alguém acidentalmente, sem a intenção de matar"
  },
  {
    question: "Pergunta 11: De acordo com o Código de Ética e Disciplina da OAB, qual é a regra básica que um advogado deve seguir ao fixar seus honorários?",
    options:
            [
              "O valor deve ser igual ao praticado pela maioria dos advogados na região.",
              "O valor deve ser o mesmo para todos os clientes, independente do caso.", 
              "O valor deve ser fixado de forma justa, observando o grau de complexidade e o trabalho a ser realizado.", 
              "O valor deve ser informado ao cliente após a conclusão do processo."
            ],
    correctAnswer: "O valor deve ser fixado de forma justa, observando o grau de complexidade e o trabalho a ser realizado."
  },
  {
    question: "Pergunta 12 - No contexto do direito penal, qual é o princípio que estabelece que ninguém pode ser obrigado a produzir prova contra si mesmo?",
    options:
              [
                "Princípio da Inviolabilidade do Advogado",
                "Princípio da Irretroatividade da Lei Penal", 
                "Princípio da Presunção de Inocência", 
                "Princípio do Nemo Tenetur se Detegere"
              ],
    correctAnswer: "Princípio do Nemo Tenetur se Detegere "
  },
  {
    question: "Pergunta 13 - De acordo com o Estatuto da OAB, qual é a principal função do Conselho Federal da OAB?",
    options:
              [
                "Fiscalizar a atuação dos juízes nos tribunais superiores.",
                "Disciplinar a conduta dos advogados nos processos judiciais.", 
                "Representar a advocacia brasileira perante os órgãos do Poder Judiciário.",
                "Expedir carteiras profissionais aos bacharéis em direito."
              ],
    correctAnswer: "Representar a advocacia brasileira perante os órgãos do Poder Judiciário."
  },
  {
    question: "Pergunta 14 - No âmbito do direito do trabalho, qual é o período máximo de trabalho permitido por dia, de acordo com a Constituição Federal?",
    options:
            [
              "6 horas",
              "8 horas",
              "10 horas",
              "12 horas"
            ],
    correctAnswer: "8 horas"
  },
  {
    question: "Pergunta 15 - No contexto do direito processual civil, qual é o nome dado ao documento pelo qual se inicia uma ação judicial?",
    options:
            [
              "Sentença",
              "Decisão",
              "Reclamação",
              "Petição Inicial"
            ],
    correctAnswer: "Petição Inicial"
  },
  {
    question: "Pergunta 16: No direito civil, qual é o conceito que se refere à perda da propriedade de um bem por falta de pagamento das dívidas a ele vinculadas?",
    options:
            [
              "Desapropriação",
              "Usucapião",
              "Alienação",
              "Penhora"
            ],
    correctAnswer: "Penhora"
  },
  {
    question: "Pergunta 17: Segundo o Código de Processo Penal brasileiro, em qual fase do processo ocorre a instrução, momento em que são produzidas as provas e ouvidas as testemunhas?",
    options:
            [
              "Denúncia",
              "Julgamento",
              "Sentença",
              "Audiência "
            ],
    correctAnswer: "Audiência"
  },
  {
    question: "Pergunta 18: De acordo com o Código de Defesa do Consumidor, o que é considerado prática abusiva nas relações de consumo?",
    options:
            [
              "Oferecer informações claras e precisas sobre os produtos.",
              "Respeitar o direito de arrependimento do consumidor.",
              "Recusar a venda de produtos para um cliente insatisfeito.",
              "Elevar o preço de produtos sem justa causa."
            ],
    correctAnswer: "Elevar o preço de produtos sem justa causa."
  },
  {
    question: "Pergunta 19: No contexto do direito administrativo, o que é um 'ato administrativo discricionário'?",
    options:
            [
              "Um ato que a administração pública é obrigada a praticar, sem margem para escolha.",
              "Um ato que a administração pública pode praticar com total liberdade de escolha e apreciação.",
              "Um ato que só pode ser praticado pelo poder judiciário.",
              "Um ato praticado exclusivamente pelo legislativo."
            ],
    correctAnswer: "Um ato que a administração pública pode praticar com total liberdade de escolha e apreciação."
  },
  {
    question: "Pergunta 20: De acordo com a Constituição Federal do Brasil, qual é o número mínimo de ministros que compõem o Supremo Tribunal Federal?",
    options:
            [
              "7",
              "10",
              "11",
              "15"
            ],
    correctAnswer: "11"
  },
  {
    question: "Pergunta 21: O que é a 'coisa julgada' em um processo judicial?",
    options:
            [
              "O ato de iniciar um processo judicial.",
              "A etapa em que as partes apresentam suas alegações finais.",
              "A decisão final de um tribunal que não pode mais ser questionada.",
              "O período de análise das provas durante um julgamento."
            ],
    correctAnswer: "A decisão final de um tribunal que não pode mais ser questionada."
  },
  {
    question: "Pergunta 22: Qual é o órgão responsável pela edição do Código de Ética e Disciplina da OAB?",
    options:
            [
              "Conselho Nacional de Justiça (CNJ)",
              "Supremo Tribunal Federal (STF)",
              "Conselho Federal da OAB",
              "Ministério da Justiça"
            ],
    correctAnswer: "Conselho Federal da OAB."
  },
  {
    question: "Pergunta 23: De acordo com o Código de Processo Penal, o que é o 'habeas corpus'?",
    options:
            [
              "Um recurso utilizado para recorrer de uma sentença condenatória.",
              "Um documento que permite a prisão de um indivíduo suspeito.",
              "Uma ordem judicial para prender um réu.",
              "Um remédio jurídico utilizado para garantir a liberdade de locomoção de alguém."
            ],
    correctAnswer: "Um remédio jurídico utilizado para garantir a liberdade de locomoção de alguém."
  },
  {
    question: "Pergunta 24: No direito previdenciário, o que é o 'salário de benefício'?",
    options:
            [
              "A quantia que um empregado recebe mensalmente.",
              "O valor pago pelo empregador ao empregado em caso de doença.",
              "A base de cálculo utilizada para determinar o valor de certos benefícios previdenciários.",
              "O montante que um trabalhador autônomo deve pagar à previdência social."
            ],
    correctAnswer: "A base de cálculo utilizada para determinar o valor de certos benefícios previdenciários."
  },
  {
    question: "Pergunta 25: Qual é a finalidade do 'habeas data' no contexto jurídico?",
    options:
            [
              "Obter informações sobre processos judiciais em andamento.",
              "Garantir o acesso a registros e informações pessoais em órgãos públicos ou privados.",
              "Solicitar o testemunho de especialistas em um julgamento.",
              "Recorrer de decisões proferidas por juízes de primeira instância."
            ],
    correctAnswer: "Garantir o acesso a registros e informações pessoais em órgãos públicos ou privados."
  },
  {
    question: "Pergunta 26: De acordo com o Código Civil brasileiro, o que é a 'usucapião'?",
    options:
            [
              "Um tipo de contrato de locação de imóveis.",
              "O direito do locador de retomar o imóvel alugado após o término do contrato.",
              "A aquisição da propriedade de um bem por meio da posse prolongada e ininterrupta.",
              "A obrigação de pagamento de tributos sobre a propriedade de um imóvel."
            ],
    correctAnswer: "A aquisição da propriedade de um bem por meio da posse prolongada e ininterrupta."
  },

];

// Variables to track quiz state
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = quizQuestions.length * 10;
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
    <h2>Quiz Completo!</h2>
    <p>Acertou: ${score} de ${quizQuestions.length} perguntas</p>
    <p>Acerto: ${scorePercentage}%</p>
  `;
}

// Add event listener to start the quiz when the start button is clicked
document.getElementById("start-button").addEventListener("click", startQuiz);
