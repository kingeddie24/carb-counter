const foods = {

    rice: { name: 'Cooked jollof rice',
        portion: '1 cup',
        carbsPerPortion: 41,
        source: 'West African Food Composition Table (FAO/Infoods) and the Nigerian Food Composition Database.'
        },

    yam: { name: 'Pounded yam', 
        portion: '1 medium wrap (approx. 250g)',
        carbsPerPortion: 93,
        source: 'Journal of Food Composition and Analysis / USDA FoodData Central (calculated based on raw tuber baseline moisture loss during preparation)'
        },

    garri: { name: 'Garri (Eba)', 
        portion: '1 cup', 
        carbsPerPortion: 58, 
        source: 'Nigerian Food Composition Tables (Ministry of Health / University of Ibadan nutritional data)'
        },

    beans: { name: 'Cooked brown beans', 
        portion: '1 cup', 
        carbsPerPortion: 35, 
        source: 'FAO Food Composition Table for Use in Africa / Harvard T.H. Chan School of Public Health Nutrition Source.'
        },
    
    plantain: { name: 'Fried plantain', 
        portion: '1 cup', 
        carbsPerPortion: 42, 
        source: 'USDA FoodData Central (SR Legacy Data for fried yellow plantains)'
        }
};

function calculateCarbs(carbsPerPortion, portions) {
    return Math.round(carbsPerPortion * portions * 10) / 10;
}

const foodSelect = document.querySelector('#food');
const portionsInput = document.querySelector('#portions');
const calculateButton = document.querySelector('#calculate');
const resultText = document.querySelector('#result');

calculateButton.addEventListener('click', function () {
    const foodKey = foodSelect.value;
    const portionsEaten = Number(portionsInput.value);
    
    if (!Object.hasOwn(foods, foodKey)) {
        resultText.textContent = 'Please select a valid food item from the list.';
        return;
    }

    const food = foods[foodKey];

    if (portionsInput.value === '' || !Number.isFinite(portionsEaten) || portionsEaten <= 0 || portionsEaten > 20) {
        resultText.textContent = 'Please enter a valid number of portions between 0.5 and 20.';
        return;
    }

    const totalCarbs = calculateCarbs(food.carbsPerPortion, portionsEaten);
    resultText.textContent = `${food.name} (${portionsEaten} x ${food.portion}): ${totalCarbs} grams of carbs.`;
 
    if (totalCarbs > 100) {
        resultText.textContent += '  WARNING! This is a high carb portion. Check with your doctor or dietician about your carb targets.';
    }
});
