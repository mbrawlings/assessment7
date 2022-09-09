function findLongestWord(arr) {
    let ans = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > ans) {
            ans = arr[i].length
        }
    }
    console.log(ans)
}

findLongestWord(["hi", "hello"])
findLongestWord(["hi", "hello",'goodbye','bye','cya','tatafornow'])

/*
Time complexity: O(n)
Space complexity: O(1)
*/