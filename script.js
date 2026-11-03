const riceCarbsPerCup = 45;

const cupsInput = document.querySelector('#cups');
const calculateButton = document.querySelector('#calculate');
const resultText = document.querySelector('#result');

calculateButton.addEventListener('click', function () {
    const cupsEaten = Number(cupsInput.value);
    if (cupsEaten.value === '' || !Number.isFinite(cupsEaten) || cupsEaten <= 0 || cupsEaten > 20) {
        resultText.textContent = 'Please enter a valid number of cups between 0.5 and 20.';
        return;
    }
    const totalCarbs = riceCarbsPerCup * cupsEaten;
    resultText.textContent = `Total carbs: ${totalCarbs} grams`;
});
