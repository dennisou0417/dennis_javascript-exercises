const removeFromArray = function(arr, ...items) {
    let newArray = [];

    arr.forEach((item) => {
        if(!items.includes(item)){
            newArray.push(item);
        }
    })

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
