var inputString = `pyTestMyString`;

let isBeginingWithPy = function() {
    if (inputString.substring(0, 2) == `py`) {
        return inputString;
    } else {
        return `py` + inputString;
    }
};

console.log(isBeginingWithPy(inputString));