function printNarcissusNumber() {
    for (let i = 153; i < 1000; i++) {
        if (isNarcissusNumber(i)) {
            console.log(i);
        }
    }
}

function isNarcissusNumber(num) {
    let sum = Math.pow(num.toString()[0], 3) + Math.pow(num.toString()[1], 3) + Math.pow(num.toString()[2], 3);
    return num === sum;
}

printNarcissusNumber();