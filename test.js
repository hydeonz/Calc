// str var to handle tests' results 
test = unitTests()

function assert_eq(item1, item2) {
    if (item1 == item2) {
        return true;
    } else {
        return false;
    }
}
function unitTests() {
    let statData = "";
    let oks = 0.0
    const numTests = 16.0;
    // digits
    statData = statData +  "\nTESTMOD 'digits':";
    document.getElementById('input1').value = '2';
    document.getElementById('input2').value = '5';
    if (assert_eq(parseInt(calculate('+')), 7)) {
        statData = statData + "\ntest1 '2+5' status: OK";
        oks += 1;
    } else {
        statData = statData + "\ntest1 '2+5' status: FAILED";
    }
    if (assert_eq(parseInt(calculate('-')), -3)) {
        statData = statData + "\ntest2 '2-5' status: OK";
        oks += 1;
    } else {
        statData = statData + "\ntest2 '2-5' status: FAILED";
    }
    if (assert_eq(parseInt(calculate('*')), 10)) {
        statData = statData + "\ntest3 '2*5' status: OK";
        oks += 1;
    } else {
        statData = statData + "\ntest3 '2*5' status: FAILED";
    }
    if (assert_eq(calculate('/'), 0.4)) {
        statData = statData + "\ntest4 '2/5' status: OK";
        oks += 1;
    } else {
        statData = statData + "\ntest4 '2/5' status: FAILED";
    }

    // two-digits
    statData = statData +  "\n\nTESTMOD 'two-digits':";
    document.getElementById('input1').value = '22';
    document.getElementById('input2').value = '11';
    if (assert_eq(parseInt(calculate('+')), 33)) {
        statData = statData + "\ntest1 '22+11' status: OK";
        oks += 1;
    } else {
        statData = statData + "\ntest1 '22+11' status: FAILED";
    }
    if (assert_eq(parseInt(calculate('-')), 11)) {
        statData = statData + "\ntest2 '22-11' status: OK";
        oks += 1;
    } else {
        statData = statData + "\ntest2 '22-11' status: FAILED";
    }
    if (assert_eq(parseInt(calculate('*')), 242)) {
        statData = statData + "\ntest3 '22*11' status: OK";
        oks += 1;
    } else {
        statData = statData + "\ntest3 '22*11' status: FAILED";
    }
    if (assert_eq(parseInt(calculate('/')), 2)) {
        statData = statData + "\ntest4 '22/11' status: OK";
        oks += 1;
    } else {
        statData = statData + "\ntest4 '22/11' status: FAILED";
    }

    // three-digits
    statData = statData +  "\n\nTESTMOD 'three-digits':";
    document.getElementById('input1').value = '333';
    document.getElementById('input2').value = '111';
    if (assert_eq(parseInt(calculate('+')), 444)) {
        statData = statData + "\ntest1 '333+111' status: OK";
        oks += 1;
    } else {
        statData = statData + "\ntest1 '333+111' status: FAILED";
    }
    if (assert_eq(parseInt(calculate('-')), 222)) {
        statData = statData + "\ntest2 '333-111' status: OK";
        oks += 1;
    } else {
        statData = statData + "\ntest2 '333-111' status: FAILED";
    }
    if (assert_eq(parseInt(calculate('*')), 36963)) {
        statData = statData + "\ntest3 '333*111' status: OK";
        oks += 1;
    } else {
        statData = statData + "\ntest3 '333*111' status: FAILED";
    }
    if (assert_eq(parseInt(calculate('/')), 3)) {
        statData = statData + "\ntest4 '333/111' status: OK";
        oks += 1;
    } else {
        statData = statData + "\ntest4 '333/111' status: FAILED";
    }

    // floats
    statData = statData +  "\n\nTESTMOD 'floats':";
    document.getElementById('input1').value = '12.2';
    document.getElementById('input2').value = '2.4';
    if (assert_eq(calculate('+'), 12.2+2.4)) {
        statData = statData + "\ntest1 '+' status: OK";
        oks += 1;
    } else {
        statData = statData + "\ntest1 '+' status: FAILED";
    }
    if (assert_eq(calculate('-'), 12.2-2.4)) {
        statData = statData + "\ntest2 '-' status: OK";
        oks += 1;
    } else {
        statData = statData + "\ntest2 '-' status: FAILED";
    }
    if (assert_eq(calculate('*'), 12.2*2.4)) {
        statData = statData + "\ntest3 '*' status: OK";
        oks += 1;
    } else {
        statData = statData + "\ntest3 '*' status: FAILED";
    }
    if (assert_eq(calculate('/'), 12.2/2.4)) {
        statData = statData + "\ntest4 '/' status: OK";
        oks += 1;
    } else {
        statData = statData + "\ntest4 '/' status: FAILED";
    }

    statData = statData + "\n\nunit tests' results: passed: " + String(parseInt(oks)) + ", failed: " + String(parseInt(numTests - oks)) + "\nAccuracy: " + String(oks/numTests*100) + "%\n";
    
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('result').textContent = '';
    return statData;
}