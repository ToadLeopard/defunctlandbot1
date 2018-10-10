const Discord = require("discord.js");

const TOKEN = "NDc1NzYzMTU1NTYyMjY2NjY1.Dkjxbg.mnctS9iN1YvudU67MBhyDQBVA04";
const PREFIX = "!!";

var fortunes = [
    "https://www.youtube.com/watch?v=WH58Fo00SXA The History of Worlds of Fun's Destroyed Classic, The Orient Express",
    "https://www.youtube.com/watch?v=ifbP6J82X7U Defunctland vs. RobPlays 3: It's the End of Walt Disney World as We Know It (And Rob Feels Fine)",
    "https://www.youtube.com/watch?v=USIVXo5R46Q The History of Zoboomafoo",
    "https://www.youtube.com/watch?v=UZQGtnEL2xs&t=188s The Failure of Disney's Arcade Chain, DisneyQuest",
    "https://www.youtube.com/watch?v=msbBGwXb9Zs&t=670s The Failure of Disney's Chuck E. Cheese Ripoff, Club Disney",
    "https://www.youtube.com/watch?v=6CN9HpYrjeM The History of Nickelodeon Hotel.",
    "https://www.youtube.com/watch?v=US-WKYA89Ig&t=5s DefunctTV, The History of Legends of the Hidden Temple.",
    "https://www.youtube.com/watch?v=-oqDqnQR5Aw&t=374s The War For Disney's America. ",
    "https://www.youtube.com/watch?v=-u7e5qYvmvc&t=65s 10 Forgotton Original Disneyland Opening Day attractions.",
    "https://www.youtube.com/watch?v=bzw-gXhcYW0&t=325s DefunctTV, The History of Bear in the Big Blue House.",
    "https://www.youtube.com/watch?v=fec3jhPGTwY The Demolition of Six Flags AstroWorld.",
    "https://www.youtube.com/watch?v=201uOqP1TnQ&t=590s The History of The Big Bad Wolf. ",
    "https://www.youtube.com/watch?v=SFE8RlKlLCE https://www.youtube.com/watch?v=wqV070b25GA&t=310s Here is Part 1 and 2 of The Failure of Euro Disney.",
    "https://www.youtube.com/watch?v=rPQtbTtmPuw A Debunkland Episode with Jaws the Ride.",
    "https://www.youtube.com/watch?v=Q2L-bZiqckM&t=403s  The History of Disney's Worst Attraction Ever, Superstar Limo", 
    "https://www.youtube.com/watch?v=iU6GCosr_NM  The History of Nara Dreamland",
    "https://www.youtube.com/watch?v=DPeea5khpx4&t=2s The History of Journey Into Imagination.",
    "https://www.youtube.com/watch?v=uCCuwqPFLfk The History of Tomb Raider the Ride."
    ];






var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready");

    bot.user.setStatus('Online')


    bot.user.setActivity('with Kevin. Need Help do "!!help" ')
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "defunctlandpatreon":
        message.channel.sendMessage("https://www.patreon.com/Defunctland/overview  If you would like to you may donate to this amazing channel it would help him a lot again this is optional.");
        break;
        case "info":
        message.channel.sendMessage("I was scripted by ToadLeopard!");
        break;
        case "howmuchdoyoulikedisneydan":
        message.channel.send("He's a Huggable Bear");
        break;
        case "noticeme":
        message.channel.sendMessage(message.author.toString() + "I seee youuuuuuu.");
        break;
        case "suggest":
        if (args[0]) message.channel.send(fortunes[Math.floor(Math.random()* fortunes.length)]);
        break;
        case "shrinemonkey":
        message.channel.sendMessage("https://nerdist.com/wp-content/uploads/2018/03/Shrine-of-the-silver-monkey.jpg");
        break;
        case "help":
        message.channel.sendMessage("Prefix is '!!' Commands are, '!!defunctlandpatreon', '!!info', '!!howmuchdoyoulikedisneydan', '!!suggest', '!!noticeme', '!!shrinemonkey', '!!help'");
        break;
    }
});

bot.login(TOKEN);