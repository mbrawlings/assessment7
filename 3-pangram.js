const perf = require('execution-time')();

function isPangram(str) {
    let newStr = str.toLowerCase()
    if (   newStr.includes('a')
        && newStr.includes('b')
        && newStr.includes('c')
        && newStr.includes('d')
        && newStr.includes('e')
        && newStr.includes('f')
        && newStr.includes('g')
        && newStr.includes('h')
        && newStr.includes('i')
        && newStr.includes('j')
        && newStr.includes('k')
        && newStr.includes('l')
        && newStr.includes('m')
        && newStr.includes('n')
        && newStr.includes('o')
        && newStr.includes('p')
        && newStr.includes('q')
        && newStr.includes('r')
        && newStr.includes('s')
        && newStr.includes('t')
        && newStr.includes('u')
        && newStr.includes('v')
        && newStr.includes('w')
        && newStr.includes('x')
        && newStr.includes('y')
        && newStr.includes('z')) {
        return true
    } else {
        return false
    }
}
perf.start();
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
let results = perf.stop();
console.log(results.preciseWords)

perf.start();
console.log(isPangram("I like cats, but not mice i just dont really understand why the above string is taking so long i wonder if its because eavery word has been written out with spaces or something im not really sure so im down here writing and test to see if this will cause a difference"))
let results1 = perf.stop();
console.log(results1.preciseWords)

perf.start();
console.log(isPangram("abcdefghijklmnopqrstuvwxyz"))
let results2 = perf.stop();
console.log(results2.preciseWords)

perf.start();
console.log(isPangram(";alsidjkhv;aowiethj;waoiegn;awioeljtgalksdgnapow;eirgha;oweidgljf;awjehfopiawuehrgoia;sdlkjga;wiehgaosidhvbna;lsdkjgraseipurgha;sodiljfgnasiurfgha;soihg;osadiflhjnv;aosldjhg;aowirugh;asodiflv"))
let results3 = perf.stop();
console.log(results3.preciseWords)

/*
Time complexity: O(n) the changes are kinda small but as the string gets bigger, runtime increases
Space complexity: O(1)
*/