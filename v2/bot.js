const Discord = require('discord.js');
const auth = require('./auth.json');
const bot = new Discord.Client();

function getList(path)
{
  const fs = require('fs');

  var words;

  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err;
    var ind1 = 0;
    var ind2 = 0;
    var nextWord = "";
    var wordArray = [];
    var wordInd = 0;
    for(let i = 0; i < data.length; i ++)
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

}

bot.on("ready", () => {
  console.log("Ready to go!");
});

bot.on("message", (message) => {
  if(message.author.bot == true || !message.guild) return;

  const messLower = message.content.toLowerCase();

  var messArray = messLower.split(" ");

  if(messArray.includes(""))
  {
    function notEmpty(str)
    {
        return str;
    }
    messArray = messArray.filter(notEmpty);
  }

  var messString = "";

  for(let i = 0; i < messArray.length; i ++)
  {
    messString += messArray[i];
  }

  const whitelist = getWhitelist();

var isBlacklisted = false;

  if(messString.includes("nya") || messString.includes("nyo") || messString.includes("tall"))
  {
    for(let a in messArray)
    {
      for(let b in whitelist)
      {
        if(messArray[a].match(whitelist[b]))
        {
          isBlacklisted = false;
          break;
          break;
        }
        else
        {
          isBlacklisted = true;
        }
      }
    }
  }

  //var hasKicked = false;

  function kickUser()
  {
    if(isBlacklisted)
    {
      message.member.kick().catch(err => {
          message.reply('I was unable to kick the member');
          console.error(err);
      });
      //hasKicked = true;
    }
  }

  if(isBlacklisted) //&& !hasKicked)
  {
    const au = message.author;
    setTimeout(message.channel.send("BEGONE, THOT!"),100);
    setTimeout(au.send("BEGONE, THOT!"),100);
    message.channel.createInvite({unique: true, maxAge: 3600, maxUses: 1}).then(invite => au.send(`discord.gg/${invite.code}`)).catch(console.error);
    setTimeout(kickUser,100);
  }//else if(hasKicked)
  //{
  //  message.delete().then().catch(console.error);
  //}

});

bot.login(auth.token);
