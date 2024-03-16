function calculate(operator) {
    let input1 = parseFloat(document.getElementById('input1').value);
    let input2 = parseFloat(document.getElementById('input2').value);
    let result = 0;
    switch (operator) {
        case '+':
            result = input1 + input2;
            break;
        case '-':
            result = input1 - input2;
            break;
        case '*':
            result = input1 * input2;
            break;
        case '/':
            result = input1 / input2;
            break;
    }
    document.getElementById('result').innerText = 'Result: ' + result;
    return result;
}