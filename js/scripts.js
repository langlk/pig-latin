// Business Logic
var vowels = ['a', 'e', 'i', 'o', 'u'];
function translate(inputText){
  if (vowels.includes(inputText.charAt(0))){
    return inputText + "way";
  } else if (inputText.charAt(0).match(/[a-zA-Z]+/)){
    return inputText.substring(1, inputText.length) + inputText.charAt(0) + 'ay';
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
