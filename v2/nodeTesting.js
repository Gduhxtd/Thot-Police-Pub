const fs = require('fs');

var words;

fs.readFile('./test.txt', 'utf8', (err, data) => {
  if (err) throw err;
  var ind1 = 0;
  var ind2 = 0;
  var nextWord = "";
  var wordArray = [];
  var wordInd = 0;
  for(var i = 0; i < data.length; i ++)
  {
    var letter = data.substring(i,i+1);
    var letterLower = letter.toLowerCase();
    //console.log(letter + " " + letterLower);
    //console.log(!(letter == letterLower));
    if(!(letter == letterLower) != false && i != 0)
    {
      ind2 = i;
      nextWord = data.substring(ind1,ind2);
      nextWord = nextWord.trim();
      wordArray[wordInd] = nextWord;
      wordInd ++;
      ind1 = i;
    }else if(i === data.length-1)
    {
      ind2 = i+1;
      nextWord = data.substring(ind1,ind2);
      wordArray[wordInd] = nextWord;
      wordInd ++;
    }
  }
  console.log(wordArray);
});
