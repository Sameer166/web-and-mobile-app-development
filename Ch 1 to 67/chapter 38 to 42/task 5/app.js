function CustomIndexOf(string, word) {
    var string = string.toLowerCase();
    var word = word.toLowerCase();
    var index = -1;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === word[0]) {
            for (var j = 1; j < word.length; j++) {
                if (string[i + j] === word[j]) {
                    var index = i;
                    continue;
                } else {
                    index = -1;
                    break;
                }
            }
        }
    }
    return index;
}