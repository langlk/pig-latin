// Business Logic

function translate(inputText){
  var alphaMatches = inputText.match(/[a-zA-Z]+/);
  var alphaText = "";
  var result = "";
  if (alphaMatches) {
    alphaText = alphaMatches[0];
    var leadingConsonants = alphaText.match(/^(qu|[^aeiou][^aeiouy]*)/i);
    if (leadingConsonants) { // has leading consonant(s)
      var consonants = leadingConsonants[0];
      var newString = alphaText.substring(consonants.length, alphaText.length);
      result = newString + consonants + "ay";
    } else { // first letter vowel
      result = alphaText + "way";
    }
  }
  var nonAlphaText = inputText.substring(alphaText.length, inputText.length);
  return result + nonAlphaText;
}

function translateSentence(inputText) {
  var textArray = inputText.split(" ");
  var outputArray = textArray.map(function(word) {
    return translate(word);
  });
  return outputArray.join(" ");
}

$(document).ready(function(){
  $("#sentence").submit(function(e){
    e.preventDefault();
    var inputText = $("input#sentence-input").val();
    $("input#sentence-input").val(translateSentence(inputText));
  });
});
