import moment from 'moment'; // Import moment library

function getToday() {
    return moment().format("YYYY-MM-DD");
}

const Utility = {
    getToday
};

function genRandom(length = 7) {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = "";
    for (var i = length; i > 0; --i)
      result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  }
  

// Export the Utility object
export default Utility;
