const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    const input = display.value;
    try {
        const result = eval(input);
        if (result === undefined || isNaN(result)) {
            display.value = 'Error';
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = 'Error';
    }
}
