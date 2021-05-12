var data = require("./data.json");
// Helper Functions //
function isEmpty(str) {
    var words = str.trim().split('');
    for (var i = 0; i < words.length; i += 1) {
        if (words[i] !== ('\n' || '\r' || '\t')) {
            return false;
        }
    }
    return true;
}
function upperFirst(str) {
    if (isEmpty(str) === true) {
        return '';
    }
    var strEndSlice = str.slice(1);
    var firstLetter = str[0].toUpperCase();
    return firstLetter + strEndSlice;
}
// Solution //
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function printData() {
    console.log(upperFirst(data[0].first_name) + " " + upperFirst(data[0].last_name));
    console.log(upperFirst(data[0].make) + " " + upperFirst(data[0].model));
    var purchaseDate = new Date(data[0].purchased);
    console.log(months[purchaseDate.getMonth()] + " " + purchaseDate.getDate() + ", " + purchaseDate.getFullYear());
}
printData();
