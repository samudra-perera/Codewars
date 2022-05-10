// 7 Kyu Area of Circle in Square
/* Turn an area of a square in to an area of a circle that fits perfectly inside the square.

inscribed circle

You get the blue+red area and need to calculate the red area.

Your function gets a number which represents the area of the square and should return the area of the circle. The tests are rounded by 8 decimals to make sure multiple types of solutions work.

You don't have to worry about error handling or negative number input: area >= 0.

This kata might be simpler than you expect, but good luck! */

function squareAreaToCircle(size){
    return (Math.sqrt(size)/2)**2*Math.PI; // returns lenght of sqauare/2 = radius^2 * pi
  }


/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelArr = str.split('').filter((char) => {
        return vowels.includes(char)
    })
    return vowelArr.length
}

/* 

A non-empty array a of length n is called an array of all possibilities if it contains all numbers between [0,a.length-1].Write a method named isAllPossibilities that accepts an integer array and returns true if the array is an array of all possibilities, else false.

Example:

a=[1,2,0,3]
a.length-1=3 
a includes [0,3] ,hence the function should return true

*/

function isAllPossibilities(x){
    if (x.length == 0) {
        return false
    }
    let empty = Array.from(Array(x.length).keys()).toString(); // create array [0,1,2,X]
    let compare = x.filter((num) => empty.includes(num)).sort((a,b) => a - b).toString()
    return ((empty === compare) ? true : false) // turned the sorted array into a string for comparison
}

/// Find the smallest integer in an array 

function findSmallestInt(arr) {
    let sorted = arr.sort((a,b) => a - b)
    return sorted[0]
}

findSmallestInt([78,56,232,12,8])

/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */
function sumMix(x){
    return x.map(item => item*1).reduce((a,c) => a + c, 0) // map returns an array of all nums then reduce adds
}

/* 
Task
You are given a moment in time and space. What you must do is break it down into time and space, to determine if that moment is from the past, present or future.

Time is the sum of characters that increase time (i.e. numbers in range ['1'..'9'].

Space in the number of characters which do not increase time (i.e. all characters but those that increase time).

The moment of time is determined as follows:

If time is greater than space, then the moment is from the future. If time is less than space, then the moment is from the past. Otherwise, it is the present moment.

You should return an array of three elements, two of which are false, and one is true. The true value should be at the 1st, 2nd or 3rd place for past, present and future respectively.

Examples
For moment = "01:00 pm", the output should be [true, false, false].

time equals 1, and space equals 7, so the moment is from the past.

For moment = "12:02 pm", the output should be [false, true, false].

time equals 5, and space equals 5, which means that it's a present moment.

For moment = "12:30 pm", the output should be [false, false, true].

time equals 6, space equals 5, so the moment is from the future.

Input/Output
[input] string moment
The moment of time and space that the input time came from.

[output] a boolean array
Array of three elements, two of which are false, and one is true. The true value should be at the 1st, 2nd or 3rd place for past, present and future respectively.
*/


function momentOfTimeInSpace(moment) {
    let int = ['1','2','3','4','5','6','7','8','9']
    let arrMoment = moment.split('').filter(item => int.includes(item)).map(item => item*1)
    let time = arrMoment.reduce((a,total) => a + total)
    let space = moment.length - arrMoment.length
    return [time < space, time == space, time > space]
}

momentOfTimeInSpace('12:30 am')

/* Sort an array according to the indices in another array. It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.

initialArray = ['x', 'y', 'z'] sortingArray = [ 1, 2, 0]

sort(initialArray, sortingArray) => ['z', 'x', 'y']

sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']
*/

function sort(initialArray, sortingArray) {
    let sorted = [];
    for(let i = 0; i < initialArray.length; i++){
        sorted[i] = initialArray[sortingArray[i]]
    }
    return sorted
}
// works but fails on tests ????


sort([1, 2, 3, 4, 5], [0, 2, 1, 4, 3])


//Compass 
/* You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.

Return the direction you will face after the turn.

Examples
"S",  180  -->  "N"
"SE", -45  -->  "E"
"W",  495  -->  "NE"
*/

function direction(facing, turn){
    let directionArray = ['N','NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N']
    let compass = [0, 45, 90, 135, 180, 225, 270, 315, 360]
    let facingIn = directionArray.indexOf(facing)
    if (facing == 'N') {
        facingIn = 8;
    }
    let totalTurn = compass[facingIn] + turn
    if (totalTurn > 360) {
        return directionArray[(totalTurn/45)%8]
    } else if (totalTurn < 0) {
        return directionArray[totalTurn/45]
    }
    //return directionArray[((compass[facingIn] + turn)/45)%8]
    return totalTurn
}

  //direction('W', 495)
  direction("N", -450)

  // this code is incorrect



// Jaden Casing 
function toJadenCase(str) {
    let strArr = str.split(' ')
    let newArr = strArr.map((item) => {
        return item.charAt(0).toUpperCase()
    })
    return newArr
}

toJadenCase('My name is samudra Perera')

let example = 'thisisanExample'
console.log(example.charAt(0).toUpperCase() + example.slice(1))


// Jaden Casing Correct One

function toJadenCase(str) {
    let strArr = str.split(' ')
    let l = strArr.length
    for(let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1)
    }
    return strArr.join(' ')
}

toJadenCase('My name is samudra Perera')

/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

function squareDigits(num){
    return num.toString().split('').map(item => (item**2).toString()).join('') * 1
  }
squareDigits(9119)

