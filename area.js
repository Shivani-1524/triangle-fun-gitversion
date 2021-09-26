const inputs = document.querySelectorAll(".user-input");
const areaBtn = document.querySelector("#calc-area-btn");
const output = document.querySelector("#output");

function calculateArea() {
    const area = useFormula(inputs);
    output.innerText = "Area of triangle is " + area;
}

function useFormula(dimensions) {
    const base = dimensions[0].value;
    const height = dimensions[1].value;
    return 1 / 2 * (base * height);
}

areaBtn.addEventListener("click", calculateArea);

