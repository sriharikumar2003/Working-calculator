$(document).ready(function() {
    var result = 0;
    var entrybef = 0;
    var operation = null;
    var entrynow = "0";
    updateResult(entrynow);

    $("button").on("click", function(event) {
        var keypress = $(this).html();
        console.log(keypress);

        if (keypress === 'C') {
            result = 0;
            entrynow = '0';
        } else if (keypress === 'CE') {
            entrynow = '0';
        } else if (keypress === 'back') {
            entrynow = entrynow.substring(0, entrynow.length - 1) || '0';
        } else if (keypress === '+/-') {
            entrynow = (parseFloat(entrynow) * -1).toString();
        } else if (keypress === '.') {
            if (!entrynow.includes('.')) {
                entrynow += '.';
            }
        } else if (isNumber(keypress)) {
            if (entrynow === '0') entrynow = keypress;
            else entrynow += keypress;
        } else if (isOperator(keypress)) {
            entrybef = parseFloat(entrynow);
            operation = keypress;
            entrynow = '';
        } else if (keypress === "%") {
            entrynow = (parseFloat(entrynow) / 100).toString();
        } else if (keypress === "sqrt") {
            entrynow = Math.sqrt(parseFloat(entrynow)).toString();
        } else if (keypress === "1/x") {
            entrynow = (1 / parseFloat(entrynow)).toString();
        } else if (keypress === "pi") {
            entrynow = Math.PI.toString();
        } else if (keypress === "=") {
            if (operation && entrynow !== '') {
                entrynow = operate(entrybef, parseFloat(entrynow), operation).toString();
                operation = null;
            }
        }
        updateResult(entrynow);
    });

    function updateResult(value) {
        var value = value.toString();
        $(".screen").html(value.substring(0, 10));
    }

    function isNumber(value) {
        return !isNaN(value);
    }

    function isOperator(value) {
        return value === '/' || value === '+' || value === '-' || value === '*';
    }

    function operate(a, b, operation) {
        a = parseFloat(a);
        b = parseFloat(b);
        console.log(a, b, operation);
        if (operation === '+') return a + b;
        else if (operation === '-') return a - b;
        else if (operation === '*') return a * b;
        else if (operation === '/') return a / b;
        return 0;
    }
});