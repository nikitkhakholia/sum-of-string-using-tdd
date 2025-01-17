// Requirements
// 1.  Empty string returns 0
// 2.  Returns the sum of the numbers in a string
// 3.  Supports any amount of numbers
// 4.  Supports only positive numbers
// 5.  Takes care of '\n' in given ',' seperated string 
// 6.  Supports any delimiter given at the start of string in the format '//[delimiter]\n....'
// 7.  Numbers greater than 1000 are ignored
// 8.  Delimiters can be of any length with the following format: “//[delimiter]\n”
// 9.  Allow multiple delimiters like this: “//[delim1][delim2]\n”
// 10.  Make sure you can also handle multiple delimiters with length longer than one char



// Returns sum of string and supports above cases
const sumOfString = (str) => {
    try {
        if (!str) return 0
        str = str.split(",").map(s => Number(s))
        return str.reduce((acc, curr) => acc + curr, 0)
    } catch (e) {
        console.error("sumOfString", e)
    }
}

import { assert } from "chai"
// Test cases for 'sumOfString' function defined above
const testSumOfString = () => {
    try {
        assert.equal(sumOfString(""), 0, "Test Case 1  *** Empty string should return 0 ***")
        assert.equal(sumOfString("2,3"), 5, "Test Case 2  *** Sum of 2,3 should return 5 ***")
        assert.equal(sumOfString("2,3,4,5,6,7,8,9,10,99"), (2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 99), "Test Case 3 *** Sum of 2,3,4,5,6,7,8,9,10,99 should return 153 ***")
        assert.throws(() => sumOfString("-1,1"), Error, "negative numbers not allowed -1", "Test Case 4 *** Negative numbers are not allowed ***")
        console.log("all test cases passed");

    } catch (err) {
        console.error("Test Failed ->", err.message)
    }
}

// Run test function
testSumOfString()