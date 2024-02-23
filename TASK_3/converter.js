function convertTemperature() {
    let inputElement = document.getElementById("input");
    let selectUnit = document.getElementById("select");

    if (isNaN(inputElement.value)) {
        alert("Please enter a valid temperature.");
        return;
    }

    // Convert temperature based on selected unit
    let units;
    var convertedTemperature;
    if (selectUnit.value === "celsius") {
        convertedTemperature = (parseFloat(inputElement.value) * 9 / 5) + 32; // Celsius to Fahrenheit
        units = "°F";
    } else if (selectUnit.value === "fahrenheit") {
        convertedTemperature = (parseFloat(inputElement.value) - 32) * 5 / 9; // Fahrenheit to Celsius
        units = "°C";
    } else if (selectUnit.value === "kelvin") {
        convertedTemperature = parseFloat(inputElement.value) - 273.15; // Kelvin to Celsius
        units = "K";
    }

    let spanElement = document.getElementById("span");
    spanElement.textContent = convertedTemperature.toFixed(2) + " " + units;
}
