const inputs = document.querySelectorAll(".user-input");
const areaBtn = document.querySelector("#calc-area-btn");
const output = document.querySelector("#output");

function calculateArea() {

    if (inputs[0].value && inputs[1].value) {
        if (inputs[0].value > 0 && inputs[1].value > 0) {
            const area = useFormula(inputs);
            output.innerText = "Area of triangle is " + area;
        } else {
            output.innerText = "PLease enter valid dimensions"
        }

    } else {
        output.innerText = "Please enter the dimensions";
    }


}

function useFormula(dimensions) {
    const base = dimensions[0].value;
    const height = dimensions[1].value;
    return 1 / 2 * (base * height);
}

areaBtn.addEventListener("click", calculateArea);

