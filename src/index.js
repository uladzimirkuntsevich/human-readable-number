module.exports = function toReadable (number) {

    let digits = {"0":"zero", "1": "one", "2":"two", "3":"three", "4":"four", "5":"five", "6":"six", "7":"seven", "8":"eight", "9":"nine"};
    let fromTenToNineteen = {"10":"ten","11":"eleven", "12":"twelve", "13":"thirteen", "14":"fourteen", "15":"fifteen", "16":"sixteen", "17":"seventeen", "18":"eighteen", "19":"nineteen"};
    let twoDigits = {"1":"ten","2":"twenty", "3":"thirty", "4":"forty", "5":"fifty", "6":"sixty", "7":"seventy", "8":"eighty", "9":"ninety"}

    let x = number.toString();

    // for (let i = 0; i < x.length; i++) {
        if (x.length === 3) {
            if (x[1] === "0" && x[2] === "0") {
                return (digits[x[0]] + " hundred");
            } else if (x[2] === "0") {
                return (digits[x[0]] + " hundred " + twoDigits[x[1]]);
            } else if (x[1] === "0") {
                return (digits[x[0]] + " hundred " + digits[x[2]]);
            } else if (x[1] === "1") {
                return (digits[x[0]] + " hundred " + fromTenToNineteen[x[1] + x[2]]);
            } else {
                return (digits[x[0]] + " hundred " + twoDigits[x[1]] + " " + digits[x[2]]);
            }
        } else if (x.length === 2) {
            if (x[0] === "1") {
                return fromTenToNineteen[x];
            } else if (x[1] === "0") {
                return twoDigits[x[0]];
            } else {
                return (twoDigits[x[0]] + " " + digits[x[1]]);
            }
        } else {
            return digits[x];
        }

}
