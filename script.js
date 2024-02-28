document.addEventListener('DOMContentLoaded', function () {
    var resultScreen = document.querySelector('.result');
    var operators = document.querySelectorAll('.operator');
    var numbers = document.querySelectorAll('.btnNumber');
    var dotButton = document.querySelector('.decimal');
    var clearButton = document.querySelector('.clear');
    var equalsButton = document.querySelector('.equal-sign');

    resultScreen.value = '0';
    var isOperatorAdded = false;
    var isDotAdded = false;

    function clearScreen() {
        resultScreen.value = '0';
        isOperatorAdded = false;
        isDotAdded = false;
    }

    operators.forEach(function (operator) {
        operator.addEventListener('click', function () {
            if (resultScreen.value === '0' || resultScreen.value === 'Error') {
                resultScreen.value = '';
            }

            if (!isOperatorAdded) {
                resultScreen.value += operator.value;
                isOperatorAdded = true;
                isDotAdded = false;
            }
        });
    });

    numbers.forEach(function (number) {
        number.addEventListener('click', function () {
            if (resultScreen.value === '0' || resultScreen.value === 'Error') {
                resultScreen.value = '';
            }
            resultScreen.value += number.value;
            isOperatorAdded = false;
        });
    });

    dotButton.addEventListener('click', function () {
        if (resultScreen.value === '0' || resultScreen.value === 'Error') {
            resultScreen.value = '';
        }

        if (!isDotAdded) {
            resultScreen.value += dotButton.value;
            isDotAdded = true;
            isOperatorAdded = false;
        }
    });

    clearButton.addEventListener('click', function () {
        clearScreen();
    });

    equalsButton.addEventListener('click', function () {
        try {
            resultScreen.value = eval(resultScreen.value);
        } catch (error) {
            resultScreen.value = 'Error';

            document.addEventListener('keydown', function () {
                clearScreen();
            }, { once: true });
        }
    });
});
