/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    console.log(s,words);
    out=[];
    words.forEach(word => {
        patt = new RegExp(word.split('').join('\\w*'));
        if (patt.test(s)){out.push(word)};
    })
    return out.length;
};

console.log(numMatchingSubseq("dsahjpjauf",["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"])); //--> 2
console.log(numMatchingSubseq("abcde",["a","bb","acd","ace"])); //-->3