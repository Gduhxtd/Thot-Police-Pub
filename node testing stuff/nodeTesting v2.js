const fs = require('fs');

function getWordList1(path)
{
   fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err;
  });
}

function getWordList(path)
{
  var asdf = fs.createReadStream(path, 'utf8');
  //console.log(fs.createReadStream(path).read());

}

getWordList1('./blacklist.txt');

//var blacklist = getWordList('./blacklist.txt');

//console.log(getWordList('./blacklist.txt'))
//console.log(blacklist);
