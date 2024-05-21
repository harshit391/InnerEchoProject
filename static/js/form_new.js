document.addEventListener('DOMContentLoaded', function() {
    let currentQuestion = 0;
    const totalQuestions = 60; // Update this to the actual number of questions
    const questions = document.querySelectorAll('.question');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const submitButton = document.getElementById('submit-button');
    const fillBtn = document.getElementById('fillIt');

    function showQuestion(index) {
        questions.forEach((question, i) => {
            question.classList.toggle('active', i === index);
        });
    }

    function updateButtons() {
        prevButton.style.display = currentQuestion > 0 ? 'block' : 'none';
        nextButton.style.display = currentQuestion < totalQuestions - 1 ? 'block' : 'none';
        submitButton.style.display = currentQuestion === totalQuestions - 1 ? 'block' : 'none';
    }

    function validateCurrentQuestion() {
        const currentQuestionElement = questions[currentQuestion];
        const options = currentQuestionElement.querySelectorAll('input[type="radio"]');
        return Array.from(options).some(option => option.checked);
    }

    prevButton.addEventListener('click', () => {
        if (currentQuestion > 0) {
            currentQuestion--;
            showQuestion(currentQuestion);
            updateButtons();
        }
    });

    nextButton.addEventListener('click', () => {
        if (validateCurrentQuestion()) {
            fillBtn.textContent = "";
            if (currentQuestion < totalQuestions - 1) {
                currentQuestion++;
                showQuestion(currentQuestion);
                updateButtons();
            }
        } else {
            fillBtn.textContent = "Please select an option before proceeding !!";
        }
        
    });

    // Initialize form
    showQuestion(currentQuestion);
    updateButtons();
});

console.log(document.getElementById("google_translate_element"));
