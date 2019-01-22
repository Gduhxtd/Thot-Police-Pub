const Discord = require('discord.js');
const auth = require('./auth.json');
const bot = new Discord.Client();

bot.on("ready", () => {
  console.log("Ready to go!");
});

bot.on("message", (message) => {
  if(message.author.bot === true || !message.guild) return;

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

  for(var i = 0; i < messArray.length; i ++)
  {
    messString += messArray[i];
  }

  const whitelist = ["sannyasins","canyonings","barnyards","sannyasin",
"sannyasis","canyoning","canyoneer","barnyard","sannyasi","polynyas","tanyards",
"lanyards","minyanim","unyoking","lanyard","polynya","tanyard","minyans",
"banyans","canyons","pinyons","unyoked","unyokes","ronyons","unyoung","banyan",
"minyan","nyalas","bunyas","anyone","canyon","pinyon","unyoke","ronyon","anyons",
"anyon","nyala","bunya", "Acropetally","Anecdotally","Antenatally","Antidotally",
"Basipetally","Bimetallics","Bimetallism","Bimetallist","Crystalline",
"Crystallise","Crystallite","Crystallize","Crystalloid","Dialectally","Elementally",
"Forestalled","Forestaller","Installment","Metallizing","Metalloidal","Nonmetallic",
"Occipitally","Pedestalled","Bimetallic","Bookstalls","Footstalls","Forestalls",
"Headstalls","Immortally","Installers","Installing","Metallists","Metallized",
"Metallizes","Metalloids","Metallurgy","Neonatally","Orientally","Parentally",
"Prenatally","Reinstalls","Retallying","Retotalled","Sagittally","Skeletally",
"Societally","Subtotally","Tallnesses","Tallyhoing","Teetotally","Uninstalls",
"Whipstalls","Install","Installer","forestall","stall","stalling","totally",
"totalling","tallying","tally","tallies","installed"];

var isBlacklisted = false;

  if(messString.includes("nya") || messString.includes("nyo") || messString.includes("tall"))
  {
    for(const a in messArray)
    {
      for(const b in whitelist)
      {
        if(messArray[a].match(whitelist[b].toLowerCase()))
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
          //message.reply('I was unable to kick the member');
          console.error(err);
      });
    }
  }

  if(isBlacklisted)
  {
    const au = message.author;
    setTimeout(() =>message.channel.send("BEGONE, THOT!"),100);
    setTimeout(() =>au.send("BEGONE, THOT!"),100);
    message.channel.createInvite({unique: true, maxAge: 3600, maxUses: 1}).then(invite => au.send(`discord.gg/${invite.code}`)).catch(console.error);
    setTimeout(() =>kickUser(),100);
    setTimeout(() =>message.delete().then().catch(console.error));
  }

});

bot.login(auth.token);
