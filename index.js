const Discord = require("discord.js");

const TOKEN = "NDc1NzYzMTU1NTYyMjY2NjY1.Dkjxbg.mnctS9iN1YvudU67MBhyDQBVA04";
const PREFIX = "!!";

var fortunes = [
    "https://www.youtube.com/watch?v=6CN9HpYrjeM' I really like the one on the Nickelodeon Hotel have a watch!",
    "https://www.youtube.com/watch?v=US-WKYA89Ig&t=5s Here is one about one of many game shows filmed at Nickelodeon Studios in Universal Studios.",
    "https://www.youtube.com/watch?v=-oqDqnQR5Aw&t=374s Oooooh one about a cancelled Disney Park Centered around American history? ",
    "https://www.youtube.com/watch?v=-u7e5qYvmvc&t=65s Oh my 10 Forgotton Disneyland attractions? Hmmmmm, let's take a dive into it!",
    "https://www.youtube.com/watch?v=bzw-gXhcYW0&t=325s The First Ever DefunctTV about the now cancelled Disney TV Show Bear in the Big Blue House.",
    "https://www.youtube.com/watch?v=fec3jhPGTwY Well, let's travel down to texas yall to the now empty land that was AstroWorld.",
    "https://www.youtube.com/watch?v=201uOqP1TnQ&t=590s I guess its time to go back to Busch Gardens Again to the fan favorite swinging ride Big Bad Wolf!",
    "https://www.youtube.com/watch?v=wqV070b25GA&t=310s Well, here is Part 2 on what saved Euro Disneyland if you haven't seen the first part go on and watch it then come back to me.",
    "https://www.youtube.com/watch?v=SFE8RlKlLCE Let's take a dive back into some Disney History where this used to be the most hated theme park Disney has ever made. Let's take a look shall we?",
    "https://www.youtube.com/watch?v=rPQtbTtmPuw Alrighy, another Debunkedland about Jaws the ride at Universal Studios Florida. Let's take a look and see what controversies this ride had.",
    "https://www.youtube.com/watch?v=Q2L-bZiqckM&t=403s Oh my, another video about Superstar Limo again?!? Well, I guess Kevin wasn't even done with this 'Exciting' Attraction.", 
    "https://www.youtube.com/watch?v=iU6GCosr_NM Welp, let's head to a little city in Japan where sat a Knock Off Disney Park named Nara Dreamland.",
    "https://www.youtube.com/watch?v=DPeea5khpx4&t=2s 80s and 90s Disney Kids may remember this classic ride Journey Into Imagination. Let's take a look on how this ride caused the guests at Epcot with a 'Imaginationable' experence.",
    "https://www.youtube.com/watch?v=uCCuwqPFLfk O. Look's like Kevin is going back to 2001 at Paramounts Kings Island outside of Cincinatti. Let's take a flip?"
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
