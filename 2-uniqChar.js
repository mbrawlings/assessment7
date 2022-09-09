const perf = require('execution-time')();

function hasUniqueChar(word) {
    let answer = true
    let wordArray = word.split('')
    for (let i = 0; i < wordArray.length; i++) {
        for (let j = i+1; j < wordArray.length; j++) {
            if (wordArray[i] === wordArray[j]) {
                answer = false
                break
            } 
        }
    }
    return console.log(answer)
}



perf.start();
hasUniqueChar('Monday')
let results1 = perf.stop();
console.log(results1.preciseWords)

perf.start();
hasUniqueChar("abcdefghijklmnopqrstuvwxyz")
let results2 = perf.stop();
console.log(results2.preciseWords)

perf.start();
hasUniqueChar("Moonday")
let results3 = perf.stop();
console.log(results3.preciseWords)

/*
Time complexity: O(log n)   I would call it this because you can only have up to 26 different characters
                            before the string will start to repeat. That means below 26 will be faster
                            but once you get up to 26+ characters, it will be about the same
Space complexity: O(n)      The bigger the string, the more characters you are splitting into a new
                            array to work with.
*/