// Business Logic

function translate(inputText){
  if (inputText.match(/[a-zA-Z]+/)) {
    var leadingConsonants = inputText.match(/^(qu|[^aeiou][^aeiouy]*)/i);
    if (leadingConsonants) {
      var consonants = leadingConsonants[0];
      var newString = inputText.substring(consonants.length, inputText.length);
      return newString + consonants + "ay";
    } else { // first letter vowel
      return inputText + "way";
    }
  } else {
    return inputText;
  }
}



$(document).ready(function(){
  $("#sentence").submit(function(e){
    e.preventDefault();
    var inputText = $("input#sentence-input").val();
    console.log(translate(inputText));
  });
});
