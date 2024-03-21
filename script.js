const { reverse } = require("dns");

const capitalize = (str) => {
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

const reverseString = (str) => {
    str = str.split('').reverse().join('');
    return str;
}

function Calculator() {
    this.add = (a, b) => {
        return a + b;
    }

    this.subtract = (a, b) => {
        return a - b;
    }

    this.multiply = (a, b) => {
        return a * b;
    }

    this.divide = (a, b) => {
        return a / b;
    }
}

const ceaser = (str, shift) => {
    let newStr = ""

    for(let i = 0; i < str.length; i++) {
        const type = isCapital(str.charCodeAt(i));
        
        if(!type) {
            newStr += str[i];
            continue;
        }
        
        let shifted = str.charCodeAt(i) + shift;

        if(type === "capital") {
            if(shifted > 90) {
                let leftover = shifted % 90;
                shifted = 65 + leftover - 1;
            }
        } else if(type === "lower") {
            if(shifted > 122) {
                let leftover = shifted % 122;
                shifted = 97 + leftover - 1;
            }
        }

        newStr += String.fromCharCode(shifted);
    }

    return newStr;
}

const isCapital = (ch) => {
    if(ch > 64 && ch < 91) {
        return "capital";
    }
    else if(ch > 96 && ch < 123) {
        return "lower";
    }
    return false;
}

const analyzeArray = (arr) => {
    if(arr.length === 0) {
        return null;
    }
    
    arr.sort();

    let object = {
        average: average(arr),
        min: arr[0],
        max: arr[arr.length - 1],
        length: arr.length
    }

    return object;
}

const average = (arr) => {
    res = arr.reduce((a, b) => a + b);
    res /= arr.length;
    return res
}

module.exports = {
    capitalize,
    reverseString,
    Calculator,
    ceaser,
    analyzeArray
}