const riceCarbsPerCup = 45;

const cupsInput = document.querySelector('#cups');
const calculateButton = document.querySelector('#calculate');
const resultText = document.querySelector('#result');

calculateButton.addEventListener('click', function () {
    const cupsEaten = Number(cupsInput.value);
    if (cupsInput.value === '' || !Number.isFinite(cupsEaten) || cupsEaten <= 0 || cupsEaten > 20) {
        resultText.textContent = 'Please enter a valid number of cups between 0.5 and 20.';
        return;
    }

    const totalCarbs = Math.round(riceCarbsPerCup * cupsEaten * 10) / 10;
    resultText.textContent = `Total carbs: ${totalCarbs} grams.`;

    if (totalCarbs > 100) {
        resultText.textContent += '  WARNING! This is a high carb portion. Check with your doctor or dietician about your carb targets.';
    }
});
