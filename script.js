// Quiz Data
const quizData = {
    english: [
        { question: "What is Bahrain's first satellite?", answers: ["Sputnik", "Apollo", "Al Munther", "Hubble"], correct: 2 },
        { question: "What year will Al Munther launch?", answers: ["2022", "2024", "2026", "2028"], correct: 1 },
        { question: "What orbit does Al Munther use?", answers: ["LEO", "MEO", "GEO", "HEO"], correct: 0 }
    ],
    arabic: [
        { question: "ما هو أول قمر صناعي بحريني؟", answers: ["سبوتنيك", "أبولو", "المنذر", "هابل"], correct: 2 },
        { question: "في أي عام سيتم إطلاق المنذر؟", answers: ["2022", "2024", "2026", "2028"], correct: 1 },
        { question: "ما هو المدار الذي يستخدمه المنذر؟", answers: ["LEO", "MEO", "GEO", "HEO"], correct: 0 }
    ]
};

let language = "english";
let currentQuestionIndex = 0;
let score = 0;

// Function to Set Language
function setLanguage(selectedLanguage) {
    language = selectedLanguage;
    document.getElementById("language-selection").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    document.getElementById("score").style.display = "block";
    loadQuestion();
}

// Load Question
function loadQuestion() {
    const quiz = quizData[language];
    const currentQuestion = quiz[currentQuestionIndex];

    document.getElementById("question").innerText = currentQuestion.question;
    const answerButtons = document.getElementById("answer-buttons");
    answerButtons.innerHTML = ""; // Clear previous answers

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.onclick = () => checkAnswer(index);
        answerButtons.appendChild(button);
    });

    document.getElementById("feedback").innerText = "";
    document.getElementById("next-button").style.display = "none";
}

// Check Answer
function checkAnswer(selectedIndex) {
    const quiz = quizData[language];
    const correctIndex = quiz[currentQuestionIndex].correct;

    if (selectedIndex === correctIndex) {
        document.getElementById("feedback").innerText = language === "english" ? "✅ Correct!" : "✅ إجابة صحيحة!";
        score++;
    } else {
        document.getElementById("feedback").innerText = language === "english" ? "❌ Wrong!" : "❌ خطأ!";
    }

    document.getElementById("score").innerText = "Score: " + score;
    document.getElementById("next-button").style.display = "block";
}

// Load Next Question
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData[language].length) {
        loadQuestion();
    } else {
        document.getElementById("quiz").innerHTML = `<h2>${language === "english" ? "Quiz Finished!" : "انتهت المسابقة!"}</h2>
                                                     <p>${language === "english" ? "Your final score: " : "نتيجتك النهائية: "} ${score}</p>`;
    }
}

