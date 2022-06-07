$(document).ready(function () {
  $('form#form-sentence').submit(function (event) {
    event.preventDefault();
    const sentence = $('#sentence').val();
    let thereIsAPeriod = false;
    if (sentence.charAt(sentence.length - 1) === '.') {
      thereIsAPeriod = true;
      // remove period from the string
    }
    const sentenceArray = sentence.split(' ');

    const newArray = [];
    sentenceArray.forEach(function (word) {
      if (word.length >= 3) {
        newArray.push(word);
      }
    });
    newArray.reverse();
    let reverseJoined = newArray.join(' ');
    // reverseJoined += '.';
    $('#output').text(reverseJoined);
  });

  $('#clear').click(function () {
    $('#output').val('');
    $('#sentence').val('');
  });
});
