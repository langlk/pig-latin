// Business Logic
var vowels = ['a', 'e', 'i', 'o', 'u'];
function translate(inputText){
  if (vowels.includes(inputText)){
    return inputText + "way";
  }
  return inputText;
}



$(document).ready(function(){
  $("#sentence").submit(function(e){
    e.preventDefault();
    var inputText = $("input#sentence-input").val();
    console.log(translate(inputText));
  });
});
