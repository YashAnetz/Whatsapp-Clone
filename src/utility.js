import moment from 'moment'; // Import moment library

function getToday() {
    return moment().format("YYYY-MM-DD");
}

const Utility = {
    getToday,
    genRandom,
    getTime
};

function genRandom(length = 7) {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = "";
    for (var i = length; i > 0; --i)
      result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  }

  function getTime(unix_timestamp) {
    // Use the timestamp as-is if it's already in milliseconds
    let date = new Date(unix_timestamp);
  
    // Get hours and minutes
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
  
    // Format time as HH:mm
    let formattedTime = hours + ':' + minutes.substr(-2);
  
    return formattedTime;
  }
  
  

// Export the Utility object
export default Utility;
