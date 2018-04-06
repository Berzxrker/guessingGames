var kenzie = ["Edwin", "David", "Brooklyn", "Declan", "Erika", "Chok", "Rehan", "Courtney"]

function updatePage(text) {
    var div = document.createElement("div");
    div.textContent = text;
    document.body.appendChild(div)
}

var vowels = "aeiouAEIOU";
function startsWithVowel(word) {
    var firstLetter = word[0];
    return vowels.includes(firstLetter);
}

for (var i = 0; i < kenzie.length; i++){
    var name = kenzie[i];
    if(startsWithVowel(name)) {
        updatePage(name);
    }
}
    
