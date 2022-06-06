$(document).ready(function() {
  $("form#form-sentence").submit(function(event) {
    event.preventDefault();
    const sentence = $("#sentence").val();
   
    const sentenceArray = sentence.split(" ");
    
    const newArray = [];
    sentenceArray.forEach(function(word) {
      if (word.length >= 3) {
        newArray.push(word);
      }
    });
    newArray.reverse();
    const reverseJoined = newArray.join(" ");
    $("#output").text(reverseJoined);
  });
});

