var data = require("./data.json");
var D = require("@matthewwei35/date_lib");
// ---- Helper Functions ---- //
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
// ---- Solution ---- //
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
    for (var i = 0; i < data.length; i += 1) {
        console.log('~~~~~~~~~~');
        // Name
        console.log(upperFirst(data[i].first_name) + " " + upperFirst(data[i].last_name));
        // Car Model
        console.log(upperFirst(data[i].make) + " " + upperFirst(data[i].model));
        // Purchase Date
        var purchaseDate = new Date(data[i].purchased);
        console.log("Purchased: " + months[purchaseDate.getMonth()] + " " + purchaseDate.getDate() + ", " + purchaseDate.getFullYear());
        // Last Payment
        var lastPayment = new D(data[i].lastpayment);
        console.log(lastPayment.when());
        // Phone Number
        console.log("Phone: " + formatNumber(data[i].phone));
        // City
        console.log("City: " + upperFirst(data[i].city));
    }
}
printData();
module.exports = { formatNumber: formatNumber };
