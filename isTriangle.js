const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#check-triangle-btn");
const outputText = document.querySelector("#output-text");

function triangleCheck() {
    if (inputs[0].value && inputs[1].value && inputs[2].value) {
        if (inputs[0].value > 0 && inputs[1].value > 0 && inputs[2].value > 0) {
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
        } else {
            outputText.innerText = "Enter valid angles";
        }

    } else {
        outputText.innerText = "Enter all the angles";
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

