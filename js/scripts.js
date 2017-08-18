// Business Logic

function translate(inputText){
  var leadingNonAlpha = inputText.match(/^[^a-zA-Z]*/)[0];
  var alphaMatches = inputText.match(/[a-zA-Z]+.*[a-zA-Z]+/);
  var alphaText = "";
  var result = "";
  if (alphaMatches) {
    alphaText = alphaMatches[0];
    // The regex below finds if a string starts with one or more consonants, treating y as a consonant only if it is the first letter, and grabbing any u that comes after a q that is a leading consonant.
    var leadingConsonants = alphaText.match(/^([^aeiou]?[^aeiouy]*qu|[^aeiou][^aeiouy]*)/i);
    if (leadingConsonants) { // has leading consonant(s)
      var consonants = leadingConsonants[0];
      var newString = alphaText.substring(consonants.length, alphaText.length);
      result = newString + consonants + "ay";
    } else { // first letter vowel
      result = alphaText + "way";
    }
  }
  var endNonAlpha = inputText.substring(leadingNonAlpha.length + alphaText.length, inputText.length);
  return leadingNonAlpha + result + endNonAlpha;
}

function translateSentence(inputText) {
  var textArray = inputText.split(" ");
  var outputArray = textArray.map(function(word) {
    return translate(word);
  });
  return outputArray.join(" ");
}

// UI Logic
$(document).ready(function(){
  $("#sentence").submit(function(e){
    e.preventDefault();
    var inputText = $("input#sentence-input").val();
    $("input#sentence-input").val(translateSentence(inputText));
  });

  // Video Background
  var vid = document.getElementById("bgvid"),
  pauseButton = document.getElementById("vidpause");
  var paused = false;
  if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }

  $("#vidpause").click(function() {
    if (!paused) {
      vid.pause();
      pauseButton.innerHTML = "Background Paused";
      paused = true;
    } else {
      vid.play();
      pauseButton.innerHTML = "Pause Background";
      paused = false;
    }
  });
});
