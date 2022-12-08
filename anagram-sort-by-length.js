/* Anagram Problem
For example, given the following input:
["affx", "a", "ab", "ba", "nnx", "xnn", "cde", "edc", "dce", "xffa"]
The function should return:
[["a"], ["ab", "ba"], ["nnx", "xnn"], ["cde", "edc", "dce"], ["xffa",
"affx"]]
*/

let words = ["affx", "a", "ab", "ba", "nnx", "xnn", "cde", "edc", "dce", "xffa"];
let aryIndex = [];
let result = [];

for (var i = 0; i < words.length; i++) {

    // remove repetition of the same array value
    if (aryIndex.indexOf(i) > -1) continue;

    var word = words[i];
    
    // if the length of an element of an array is 1 
    if (word.length == 1) {
        result.push(new Array(word));
        continue;
    }

    // Sort characters in alphabetical order
    var alphabetical = word.split("").sort().join("");
    
    var repeateElements = [];
    for (var j = 0; j < words.length; j++) {
        if (i === j) {
          continue;
        }
        
        var other = words[j];
        if (alphabetical === other.split("").sort().join("")) {
            aryIndex.push(j);
            if(repeateElements.indexOf(word) == -1) repeateElements.push(word);
            if(repeateElements.indexOf(other) == -1) repeateElements.push(other);
        }
    }
    result.push(repeateElements);
}

// Sort by length of string
result.sort(function (a,b) {
    if(a[0].length > b[0].length) return 1;
    if(a[0].length < b[0].length) return -1;
    return 0;
});

console.log("result:", result);
