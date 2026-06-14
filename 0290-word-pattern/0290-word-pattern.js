/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let words = s.split(" ");

    if(pattern.length !== words.length){
        return false;
    }

    let map1 = {}
    let map2 = {}

    for(let i=0; i<pattern.length; i++){
        let char = pattern[i];
        let word = words[i];
    if (map1.hasOwnProperty(char) && map1[char] !== word) {
            return false;
        }

        if (map2.hasOwnProperty(word) && map2[word] !== char) {
            return false;
        }


    map1[char] = word;
    map2[word] = char;
    }
    return true;
};