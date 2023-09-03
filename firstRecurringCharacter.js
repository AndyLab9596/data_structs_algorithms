// Google Question
// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
// It should return 2

// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4];
// It should return 1

// Given an array [2, 3, 4, 5];
// It should return undefined

function findFirstRecurringCharacter (array) {
    let hashMap = {};

    for (const val of array) {
        if (!hashMap[val]) {
            hashMap[val] = true;
        } else {
            return val;
        } 
    }
    return undefined
}

module.exports = findFirstRecurringCharacter;