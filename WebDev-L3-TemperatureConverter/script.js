const tempInput = document.getElementById("temperature");
const unit = document.getElementById("unit");

const btn = document.getElementById("convertBtn");

const error = document.getElementById("error");

const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

btn.addEventListener("click", () => {

    const value = parseFloat(tempInput.value);

    if (isNaN(value)) {

        error.textContent = "Please enter a valid numeric temperature.";

        clearResults();

        return;
    }

    error.textContent = "";

    let c, f, k;

    if (unit.value === "c") {

        if (value < -273.15) {

            error.textContent = "Temperature cannot be below Absolute Zero (-273.15°C).";

            clearResults();

            return;
        }

        c = value;
        f = (value * 9/5) + 32;
        k = value + 273.15;

    }

    else if (unit.value === "f") {

        c = (value - 32) * 5/9;

        if (c < -273.15) {

            error.textContent = "Temperature cannot be below Absolute Zero.";

            clearResults();

            return;
        }

        f = value;
        k = c + 273.15;

    }

    else{

        if (value < 0) {

            error.textContent = "Temperature cannot be below Absolute Zero (0 K).";

            clearResults();

            return;
        }

        k = value;
        c = value - 273.15;
        f = (c * 9/5) + 32;

    }

    celsius.textContent = `Celsius : ${c.toFixed(2)} °C`;

    fahrenheit.textContent = `Fahrenheit : ${f.toFixed(2)} °F`;

    kelvin.textContent = `Kelvin : ${k.toFixed(2)} K`;

});

function clearResults(){

    celsius.textContent = "Celsius :";

    fahrenheit.textContent = "Fahrenheit :";

    kelvin.textContent = "Kelvin :";

}