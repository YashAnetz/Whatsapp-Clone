import moment from 'moment'; // Import moment library

function getToday() {
    return moment().format("YYYY-MM-DD");
}

const Utility = {
    getToday
};

// Export the Utility object
export default Utility;
