function count_vowel(string) {
    var vowels = ["a", "e", "i", "o", "u"];
    var count = 0;
    for (var x = 0; x < string.length; x++) {
        switch (vowels.includes(string[x]) && vowels.includes(string[x + 1])) {
            case true:
                count++;
                break;
        }
    }
    return count;
}