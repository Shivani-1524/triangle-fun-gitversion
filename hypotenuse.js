const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputText = document.querySelector("#output");

function calculateHypotenuse() {
    for (let i of sides) {
        if (isNaN(i.value)) {
            outputText.innerText = "Please Enter numbers for dimensions";
            return;
        }
    }
    const sumOfSq = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSq);
    outputText.innerText = "The Length of Hypotenuse is " + lengthOfHypotenuse;
}

function calculateSumOfSquares(a, b) {
    return Math.pow(a, 2) + Math.pow(b, 2);
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
