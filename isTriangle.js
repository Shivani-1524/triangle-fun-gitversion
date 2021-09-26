const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#check-triangle-btn");
const outputText = document.querySelector("#output-text");

function triangleCheck() {
    for (let i of inputs) {
        if (isNaN(i.value)) {
            outputText.innerText = "Please Enter numbers for angles";
            return;
        }
    }
    const angleSum = sumOfAngles(inputs);
    if (angleSum === 180) {
        outputText.innerText = "Yay, the angles form a triangle";
    }
    else {
        outputText.innerText = "angles dont form a triangle";
    }
}

function sumOfAngles(angleArray) {
    let sum = 0;
    for (let input of angleArray) {
        sum = sum + Number(input.value);
    }
    return sum;
}

isTriangleBtn.addEventListener("click", triangleCheck);

