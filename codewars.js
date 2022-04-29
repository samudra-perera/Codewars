/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/


function countPositivesSumNegatives(input) {
    let count = 0;
    let negativeSum = 0;

    if (input == null || input.length == null) {   // Test to see if an input has been passed as null or is an empty array
        return []
    }

    for(let i=0; i < input.length; i++) {  // For loop to iterate and count
        if(input[i] > 0) {
            count++
        } else if (input[i] < 0) {
            negativeSum+= input[i]
        }
    }
    if (count == 0 && negativeSum == 0) { // Condition if array is filled with 0's
        return []
    }
    return [count, negativeSum];
}

/* Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
0 => [0]
*/

function digitize(n) {
    let arr = n.toString().split('').reverse()
    let newArr = arr.map(num => num * 1)
    return newArr
  }

/* Another Solution 

  function digitize(n) {
  return n.toString().split("").reverse().map(Number);
}
*/





/* Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!

*/

const rps = (p1, p2) => {
    if (p1 == 'scissors' && p2 == 'rock' || p1 == 'rock' && p2 == 'paper' || p1 == 'paper' && p2 == 'scissors') {
        return 'Player 2 won!'
    } else if (p1 == p2) {
        return 'Draw!'
    } else {
        return 'Player 1 won!'
    }
};
