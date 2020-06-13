function isVowel(argument) {

    var text;
    var argument = argument.toLowerCase();

    var vowels = (['a', 'e', 'i', 'o', 'u']);

    for (var i = 0; i <= vowels.length; i++) {
        if (argument != vowels[i]) {
            continue;
        }
        return true;
    }
    return false;
}

// See if "A" is a vowel
var char = "A";

if (isVowel(char)) {
    alert(char + " is a vowel");
} else {
    alert(char + " is not a vowel");
}