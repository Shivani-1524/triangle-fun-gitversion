const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");;
const outputText = document.querySelector("#output");

const correctAnswers = { "q1": "90°", "q2": "right angled", "q3": "12, 16, 20", "q4": "Equilateral triangle", "q5": "85°" };

function calculateScore() {
    let score = 0;
    // let index = 0;
    const formResults = new FormData(quizForm);
    // for (let entry of formResults.values()) {
    //     if (entry === correctAnswers[index]) {
    //         score += 1;
    //     }
    //     index += 1;
    // }

    for (let entry of formResults.entries()) {
        for (let i = 0; i < Object.keys(correctAnswers).length; i++) {
            if (entry[1] === Object.values(correctAnswers)[i] && entry[0] === Object.keys(correctAnswers)[i]) {
                score += 1;
            }
        }
    }
    outputText.innerText = "Your score is: " + score;
}

submitBtn.addEventListener("click", calculateScore)