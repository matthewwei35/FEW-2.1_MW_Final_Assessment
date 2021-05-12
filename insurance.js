var data = require("./data.json");
var D = require("@matthewwei35/date_lib");
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
function formatNumber(number) {
    if (isEmpty(number) === true) {
        return 'No phone number on file';
    }
    var areaCode = number.slice(0, 3);
    var middle = number.slice(3, 6);
    var end = number.slice(6);
    return "(" + areaCode + ") " + middle + "-" + end;
}
function printData() {
    console.log(upperFirst(data[0].first_name) + " " + upperFirst(data[0].last_name));
    console.log(upperFirst(data[0].make) + " " + upperFirst(data[0].model));
    var purchaseDate = new Date(data[0].purchased);
    console.log("Purchased: " + months[purchaseDate.getMonth()] + " " + purchaseDate.getDate() + ", " + purchaseDate.getFullYear());
    var lastPayment = new D(data[0].lastpayment);
    console.log(lastPayment.when());
    console.log("Phone: " + formatNumber(data[0].phone));
}
printData();
module.exports = { formatNumber: formatNumber };
