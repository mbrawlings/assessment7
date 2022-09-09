function addToZero(arr) {
    let answer = false

    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                answer = true
                break
            }
        }
    }
    return console.log(answer)
}

addToZero([])
addToZero([1])
addToZero([1,2,3])
addToZero([1,2,3,-2])

/*
Time complexity: O(n^2)   
Space complexity: O(1)   
*/