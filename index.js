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
        if (str.startsWith("//")) {
            var regex = /\/\/\[(.*?)\](\\n|,)/
            var delimiter = str.match(regex)
            str = str.replace(delimiter[0], "")
            str = str.replace(delimiter[1], ",")
        }
        str = str.replace("\n", ",")
        str = str.split(",").map(s => Number(s)).filter(s => s <= 1000)
        var negetives = str.filter(s => s < 0)
        if (negetives.length) throw new Error("negative numbers not allowed " + negetives.join(","))
        return str.reduce((acc, curr) => acc + curr, 0)
    } catch (e) {
        console.error("sumOfString", e)
        throw e
    }
}

import { assert } from "chai"
// Test cases for 'sumOfString' function defined above
const testSumOfString = () => {
    try {
        assert.equal(sumOfString(""), 0, "Test Case 1  *** Empty string should return 0 ***")
        assert.equal(sumOfString("2,3"), 5, "Test Case 2  *** Sum of 2,3 should return 5 ***")
        assert.equal(sumOfString("2,3,4,5,6,7,8,9,10,99"), (2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 99), "Test Case 3 *** Sum of 2,3,4,5,6,7,8,9,10,99 should return 153 ***")
        assert.throws(() => sumOfString("-1,1,-3"), Error, "negative numbers not allowed -1,-3", "Test Case 4 *** Negative numbers are not allowed ***")
        assert.equal(sumOfString("2,3\n4"), 9, "Test Case 5 *** Sum of 2,3,4 should return 9 ***")
        assert.equal(sumOfString("//[*],2,3\n4"), 9, "Test Case 6 *** Sum of 2,3,4 should return 9 ***")
        assert.equal(sumOfString("1000,2000,3,4"), 1007, "Test Case 7 *** Sum of 1000,2000,3,4 should return 1007 ***")
        assert.equal(sumOfString("//[**],2**3\n4"), 9, "Test Case 8 *** Sum of 2,3,4 should return 9 ***")
        console.log("all test cases passed");

    } catch (err) {
        console.error("Test Failed ->", err.message)
    }
}

// Run test function
testSumOfString()