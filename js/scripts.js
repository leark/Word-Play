$(document).ready(function () {
  $('form#form-sentence').submit(function (event) {
    event.preventDefault();

    // grabbing value from inside id sentence
    const sentence = $('#sentence').val();

    // split sentence by ' ' and put it in a new array
    const sentenceArray = sentence.split(' ');

    // initialize new array
    const newArray = [];

    // loop through and check for words that are bigger or equal to 3 letters and add them to initialized array
    sentenceArray.forEach(function (word) {
      if (word.length >= 3) {
        newArray.push(word);
      }
    });

    // reverse the order of elements inside the array
    newArray.reverse();

    // join the elements to make a new string
    let reverseJoined = newArray.join(' ');

    $('#output').text(reverseJoined);
  });

  $('#clear').click(function () {
    $('#output').text('');
    $('#sentence').val('');
  });
});

// let thereIsAPeriod = false;
// if (sentence.charAt(sentence.length - 1) === '.') {
//   thereIsAPeriod = true;
//   // remove period from the string
// }
// reverseJoined += '.';
