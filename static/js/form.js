document.addEventListener('DOMContentLoaded', function() {
    let currentQuestion = 0;
    const totalQuestions = 42; // Update this to the actual number of questions
    const questions = document.querySelectorAll('.question');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const submitButton = document.getElementById('submit-button');

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

    prevButton.addEventListener('click', () => {
        if (currentQuestion > 0) {
            currentQuestion--;
            showQuestion(currentQuestion);
            updateButtons();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentQuestion < totalQuestions - 1) {
            currentQuestion++;
            showQuestion(currentQuestion);
            updateButtons();
        }
    });

    // Initialize form
    showQuestion(currentQuestion);
    updateButtons();
});
