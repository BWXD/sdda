//

const Discord = require("discord.js");
var client = new Discord.Client();



// Users in guild

client.on("guildMemberAdd", function(){
    client.user.setActivity(`${client.users.size} users`,{type: "WATCHING"});
})
client.on("guildMemberRemove", function(){
    client.user.setActivity(`${client.users.size} users`,{type: "WATCHING"});
})



// Variables, Modes

var embedMove = "off";
var embedMove2 = "off";
var bugProtectMode = "off";
var commandsUsed = 0;

var sec = 0;
var min = 0;
var h = 0;
var d = 0;

var ood = "";
var ooh = "";
var oom = "";
var oos = "";



// Functions

function timePasses(){
    sec++;
    if(sec > 59){
        min++;
        sec = 0;
    }
    if(min > 59){
        h++;
        min = 0;
    }
    if(h > 23){
        d++;
        h = 0;
    }
}

setInterval(timePasses,1000);

client.on("ready", function() {
        client.user.setActivity(`${client.users.size} users`,{type: "WATCHING"});
        client.user.setStatus("dnd")
        
        /*VERIFY MEMBERS*/

        //client.guilds.get("704799551193874474").members.get("").addRole("704827988973453415")
        //client.guilds.get("704799551193874474").members.get("").removeRole("704830837501460481") 

        /*!*/

        /*client.guilds.get("704799551193874474").members.get("634872299069374488").addRole("704829080142610505") //(BOTS ROLE)
        client.guilds.get("704799551193874474").members.get("634872299069374488").addRole("712074334633721987") //(> BW < ROLE)
        client.guilds.get("704799551193874474").members.get("634872299069374488").addRole("715689438944165899") //(HR2 ROLE) (TO BE HIGHER THAN MODS)*/


        /*client.users.get("").send("-")
        client.users.get("").sendFile("https://-/-.png")*/

	var exn = "0";
	var exd = "0";
	var exh = "0";
	var exm = "0";
	var exs = "0";
	var malo = new Date();
	if(malo.getUTCHours() > 9){
		exh = "";
	}
	if(malo.getUTCMinutes() > 9){
		exm = "";
	}
	if(malo.getUTCSeconds() > 9){
		exs = "";
	}
	if((malo.getUTCMonth() + 1) > 9){
		exn = "";
	}
	if(malo.getUTCDate() > 9){
		exd = "";
	}
	client.channels.get("716768099122151494").bulkDelete(50)
	client.channels.get("716768099122151494").send("Bot is up since **"+ exh + malo.getUTCHours() + ":" + exm + malo.getUTCMinutes() + ":" + exs + malo.getUTCSeconds() + " UTC**" + " of **" + exd + malo.getUTCDate() + "/" + exn + (malo.getUTCMonth() + 1) + "/" + malo.getUTCFullYear() + "**")
	
	// client.user.setAvatar("https://cdn.discordapp.com/attachments/704829826002845787/712101122596143174/blurpleFSL.jpg")
});

client.on("message", message => {
    if(message.author.discriminator != "0000" && message.author.discriminator != "3036" && message.guild.id == "704799551193874474"){
        console.log("[#" + message.channel.name + "] " + message.author.username + "#" + message.author.discriminator + ": " + message.content)
    }
    if(message.author.discriminator != "3036" && message.guild.id != "704799551193874474" && message.guild.id != "703986978877735073"){
        console.log("{" + message.guild.name + "} [" + message.channel.name + "] " + message.author.username + "#" + message.author.discriminator + ": " + message.content)
    }
    if(message.author.discriminator != "3036"){
        client.guilds.get("703986978877735073").channels.get("711932893794009128").send("**[#" + message.channel.name + "]** " + message.author.username + "#" + message.author.discriminator + ": " + message.content)
    }
});

client.on("message", message => {
    if(message.author.id == "634872299069374488" && message.content == "f!inv"){
        message.delete()
        client.user.setStatus("invisible")
    }
	if(message.author.id == "" && message.content.startsWith("f!protect ")){
		if(message.content.split("f!protect ").slice(1,5) == "on"){
		message.delete();
		bugProtectMode = "on";
		} else if(message.content.split("f!protect ").slice(1,5) == "off"){
		message.delete();
		bugProtectMode = "off";
		}
	}
})

client.on("message", message => {
    if(message.author.id == "634872299069374488" && message.content == "f!online"){
        message.delete()
        client.user.setStatus("online")
    }
})
client.on("message", message => {
    if(message.author.id == "634872299069374488" && message.content == "f!idle"){
        message.delete()
        client.user.setStatus("idle")
    }
})
client.on("message", message => {
    if(message.author.id == "634872299069374488" && message.content == "f!dnd"){
        message.delete()
        client.user.setStatus("dnd")
    }
})

client.on("message", message => {
    if(message.content.startsWith("f!report ")){
        var reportTalk = message.content.split("f!report ")
        var reportKey = "kz" + Math.floor(Math.random()*100000) + "x"
        message.delete();
        message.author.send({embed: new Discord.RichEmbed()
            .setColor("#64c864")
            .setTitle("Your report has been successfully delivered to the management inbox.")
            .setDescription("Report key: `" + reportKey + "`")
        })
	message.guild.members.get("634872299069374488").send({embed: new Discord.RichEmbed()
            .setTitle("New report has been sent to the management inbox.")
            .setColor("#ffc832")
            .setDescription(`Reporter: ` + "`" + message.author.username + "#" + message.author.discriminator + "`" + `
Report key:` + " `" + reportKey + "`")
        })
        message.guild.channels.get("707412458909990942").send("Report `" + reportKey + "`: " + reportTalk)
    }
});

client.on("message", message => {
    if(message.author.id == "634872299069374488" && embedMove == "on" && message.content.length > 0){
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor("#00A5A5")
            .addField("**" + message.member.nickname + "**", message.content)
        })
    }
    if(message.author.id == "585839295479152640" && embedMove2 == "on" && message.content.length > 0){
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor("#f0a000")
            .addField("**" + message.author.username + "**", message.content)
        })
    }
})

client.on("message", message => {
    if(message.content == "f!autoembed" && message.author.id == "634872299069374488" && embedMove == "off"){
        embedMove = "on";
        message.channel.send('Auto embed mode activated for > BW <.')
    }
    else if(message.content == "f!autoembed" && message.author.id == "634872299069374488" && embedMove == "on"){
        embedMove = "off";
        message.channel.send('Auto embed mode disactivated for > BW <.')
    }
    if(message.content == "f!autoembed" && message.author.id == "585839295479152640" && embedMove2 == "off"){
        embedMove2 = "on";
        message.channel.send('Auto embed mode activated for Rodralex10.')
    }
    else if(message.content == "f!autoembed" && message.author.id == "585839295479152640" && embedMove2 == "on"){
        embedMove2 = "off";
        message.channel.send('Auto embed mode disactivated for Rodralex10.')
    }
})

client.on("message", message => {
    var color = "#00c000"
    if(message.content.startsWith("f!embed ")){
        if( message.member.hasPermission("ADMINISTRATOR") && message.author.id == "585839295479152640"){
            color = "#f0a000"
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor(color)
            .addField("**" + message.author.username + "**", message.content.split("f!embed "))
           })
            
        }
        if( message.member.hasPermission("ADMINISTRATOR") && message.author.id == "634872299069374488"){
            color = "#0b9cb2"
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor(color)
            .addField("**" + message.member.nickname + "**", message.content.split("f!embed "))
           })
            
        } else if(message.author.id != "634872299069374488" && message.author.id != "585839295479152640" ) {
            //message.delete();;
            message.react('❌')
        }
    } 
});

client.on("message", message => {
    var color = "#00c000"
    if(message.content.startsWith("f!e ")){
        if( message.member.hasPermission("ADMINISTRATOR") && message.author.id == "585839295479152640"){
            color = "#f0a000"
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor(color)
            .addField("**" + message.author.username + "**", message.content.split("f!e "))
           })
            
        }
        if( message.member.hasPermission("ADMINISTRATOR") && message.author.id == "634872299069374488"){
            color = "#0b9cb2"
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor(color)
            .addField("**" + message.member.nickname + "**", message.content.split("f!e "))
           })
            
        } else if(message.author.id != "634872299069374488" && message.author.id != "585839295479152640" ) {
            //message.delete();;
            message.react('❌')
        }
    } 
});

client.on("message", async function(message) {
		    if(bugProtectMode == "off"){
    if (message.author.equals(client.user)) return;


    if (!message.content.startsWith("f!")) return;
    var args = message.content.substring("f!".length).split(" ");
    switch (args[0].toLowerCase()) {





//THE PROTECTION MODE IS OFF, COMMANDS NORMAL
		    
case "ping":
    commandsUsed++;
    const msg = await message.channel.send('Getting my ping...')
    msg.edit(`Ping: **${(msg.editedTimestamp || msg.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp)}` + "ms**")
break;
            
case "commands":
    message.reply(commandsUsed + " command(s) have been used.")
break;
		    
case "uptime":
    commandsUsed++;
    
    if(d == 1){
	ood = "";
    }
    if(d > 1){
	ood = "s";
    }
    
    if(h == 1){
	ooh = "";
    }
    if(h > 1){
	ooh = "s";
    }
    
    if(min == 1){
	oom = "";
    }
    if(min > 1){
	oom = "s";
    }
    
    if(sec == 1){
	oos = "";
    }
    if(sec > 1){
	oos = "s";
    }
    
    
    if(d>0){
    message.channel.send("Bot has been up online for " + d + " day" + ood + ", " + h + " hour" + ooh + ", " + min + " minute" + oom + " and " + sec + " second" + oos)
    }
    if(h>0 && d==0){
    message.channel.send("Bot has been up online for " + h + " hour" + ooh + ", " + min + " minute" + oom + " and " + sec + " second" + oos)
    }
    if(min>0 && h==0){
    message.channel.send("Bot has been up online for " + min + " minute" + oom + " and " + sec + " second" + oos)
    }
    if(sec>0 && min==0){
    message.channel.send("Bot has been up online for " + sec + " second" + oos)
    }
    
break;
		    
case "d":
    message.delete()
    message.channel.send({embed: new Discord.RichEmbed()
        .setColor('#7289d9')
        .setTitle('Invite Link:')
        .setDescription('https://discord.gg/33MZZs8 ')
    })
    message.channel.send({embed: new Discord.RichEmbed()
        .setColor('#00A5A5')
        .setTitle('Website:')
        .setDescription('http://futsalstars.epizy.com/ ')
    })
break;
		
case "verify":
    message.delete()
    var member = message.mentions.members.first();
    if(message.member.hasPermission("MANAGE_NICKNAMES")&&member){
        member.addRole("704827988973453415")
        member.removeRole("704830837501460481")
    }
    if(message.member.hasPermission("MANAGE_NICKNAMES")&&member){
        member.addRole("704827988973453415")
        member.removeRole("704830837501460481")
    }
break;

case "issues":

    if(message.author.id == "634872299069374488"){
    message.channel.send({embed: new Discord.RichEmbed()
        .setColor("#00A5A5")
        .setTitle("Connection Issues:")
        .addField("Max Ping", Math.floor(Math.Random() * 1000) + "ms")
        .addField("Longest Outage", "0 seconds")
    })
    }

break;

case "rosters":
    if(message.author.id == "634872299069374488"){
    message.delete();
    client.channels.get("750818053025038416").bulkDelete(30)
  
	client.channels.get("750818053025038416").send({embed: new Discord.RichEmbed()
            .setColor('#E31E24')
            .setTitle("Akatsuki")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/743224730026246164/akatsuki.png')
            .setDescription(akatsuki)
	})
	client.channels.get("750818053025038416").send({embed: new Discord.RichEmbed()
            .setColor('#A03B3B')
            .setTitle("Anonymous FC")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/741807721593962507/anonymous.png')
            .setDescription(anonymous)
	})
	client.channels.get("750818053025038416").send({embed: new Discord.RichEmbed()
            .setColor('#fefefe')
            .setTitle("Köhlen Atlar")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/741810902877339678/Kohlen_Atlar.png')
            .setDescription(köhlenatlar)
	})
	client.channels.get("750818053025038416").send({embed: new Discord.RichEmbed()
            .setColor('#000090')
            .setTitle("La Toho")
            .setDescription(latoho)
	})
	client.channels.get("750818053025038416").send({embed: new Discord.RichEmbed()
            .setColor('#6a6c8e')
            .setTitle("SBR FC")
            .setThumbnail('http://cdn.discordapp.com/attachments/706641802374938644/731131638381281280/sbrFC.png')
            .setDescription(sbr)
	})
	client.channels.get("750818053025038416").send({embed: new Discord.RichEmbed()
            .setColor('#FC7A0C')
            .setTitle("The Tiggers")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/750815488094765130/THE_TIGGERS.png')
            .setDescription(tiggers)
	})
	client.channels.get("750818053025038416").send({embed: new Discord.RichEmbed()
            .setColor('#83CEE5')
            .setTitle("The Tiggers B")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/754806864516087888/tiggersb.png')
            .setDescription(tiggersb)
	})
        
	/*client.channels.get("750818053025038416").send({embed: new Discord.RichEmbed()
            .setColor('#A02327')
            .setTitle("Atlas Lions")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/753375332442177556/atlaslions.png')
            .setDescription(atlaslions)
	})
	client.channels.get("750818053025038416").send({embed: new Discord.RichEmbed()
            .setColor('#00A784')
            .setTitle("Champions FC B")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/744188700476440647/Champions_FC_B.png')
            .setDescription(championsb)
	})
	client.channels.get("750818053025038416").send({embed: new Discord.RichEmbed()
            .setColor('#2F6472')
            .setTitle("Hurricane FC")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/753004291391750184/hurricane.png')
            .setDescription(hurricane)
	})*/
	/*client.channels.get("750818053025038416").send({embed: new Discord.RichEmbed()
            .setColor('#0396E3')
            .setTitle("The Leaders")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/744998275207135262/leaders.png')
            .setDescription(leaders)
	})*/
	/*client.channels.get("750818053025038416").send({embed: new Discord.RichEmbed()
            .setColor('#B18536')
            .setTitle("Champions FC")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/742072649550790676/Champions_FC.png')
            .setDescription(champions)
	})*/
        /*client.channels.get("741770858963664947").send({embed: new Discord.RichEmbed()
            .setColor('#4B8936')
            .setTitle("Mafia")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/748589577840754878/mafia_big.png')
            .setDescription(mafia)
	})*/
	/*client.channels.get("741770858963664947").send({embed: new Discord.RichEmbed()
            .setColor('#00B1E7')
            .setTitle("The Eagles")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/721718721500151848/eagles.png')
            .setDescription(eagles)
	})*/
	/*client.channels.get("741770858963664947").send({embed: new Discord.RichEmbed()
            .setColor('#FFDE00')
            .setTitle("Valencia")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/742543045819367788/Valencia.png')
            .setDescription(valencia)
	})*/
    } else if(message.author.id != "634872299069374488"){message.react('❌')
    }
break;
		   
    }
        }  









//THE PROTECTION MODE IS ON, WARNING BEFORE USING COMMANDS

if(bugProtectMode == "on"){
	
    if (message.author.equals(client.user)) return;


    if (!message.content.startsWith("f!")) return;
    var args = message.content.substring("f!".length).split(" ");
    switch (args[0].toLowerCase()) {

case "verify":
    message.delete()
    var member = message.mentions.members.first();
    if(message.author.id == "634872299069374488"&&member){
        member.addRole("704827988973453415")
        member.removeRole("704830837501460481")
    }
    if(message.author.id == "585839295479152640"&&member){
        member.addRole("704827988973453415")
        member.removeRole("704830837501460481")
    }
break;

case "rosters":
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#00A5A5')
            .setTitle("Bot is being fixed")
	    .setDescription(`The bot is currently on Protection Mode. Maybe it has ran into a bug or an error and an administrator turned this mode on. You can wait until the Protection Mode is turned off again.
If you think you are seeing this by mistake, please notify an admin.`)
        })
break;
}
        }    
});


//ROSTERS

// SEASON 2

var akatsuki = `🇧🇦 ***Xaroth*** (C)
🇩🇪 ***Son 7*** (Co)
🇵🇱 ***Endou***
🇵🇱 ***Skillz***
🇳🇱 ***Decayy'***
🇵🇱 ***Mr.Worldwide***
🇫🇷 ***Thors***
🇳🇱 ***Rajzojee'***
🇨🇿 ***armin***
:flag_it: ***Gordo***
:flag_gb: ***Bob***
:flag_pk: ***delux***
:flag_de: **bln**
:flag_fr: Toshiba"`;

var anonymous = `🇫🇷 ***doliprune*** (C)
🇧🇪 ***Sphinx'*** (Co)
🇫🇷 ***Fury***
🇳🇱 ***Elmo***
🇷🇸 ***Pera***
🇷🇴 ***aguero***
🇹🇷 ***kevo***
🇹🇷 ***Nepus***
🇮🇹 ***skrt***
🇬🇧 ***env***
:flag_gb: Vak
:flag_nl: veil
:flag_gb: Hulk
:flag_fr: Lyreco
:flag_fr: Pax
:flag_gb: Tsubasa`;

var köhlenatlar = `🇦🇿 ***Marcél*** (C)
🇦🇿 ***Folkiè*** (Co)
🇹🇷 ***šubwây/Estreâ***
🇹🇷 ***Chainz.***
🇹🇷 ***Cheaw***
:flag_de: ***Senju***
:flag_tr: Euroleague
:flag_tr: D3XT3R`;

var latoho = `:flag_fr: ***alpha*** (C)
:flag_fr: ***Shelby***
:flag_fr: matthieu vert
:flag_fr: Paredes
:flag_fr: mztd
:flag_fr: Eidanon
:flag_fr: Fontenay
:flag_fr: Teaunee`

var sbr = `🇳🇱 ***Yazuneh*** (C)
🇳🇱 ***Yorzi*** (Co)
🇳🇱 ***Yujio***
🇳🇱 ***Tsukuyomi.***
🇵🇹 ***Kesso***
🇬🇧 ***Larry***
🇫🇷 ***Sosa***
🇫🇷 ***Raiden***
🇫🇷 ***Reije***
🇷🇴 ***Eijun***
:flag_lt: ***vesy***`;

var tiggers = `🇵🇹 ***peter.*** (C) 
🇵🇹 ***Munir*** (Co)
🇵🇹 ***Isco jaa/Seth'***
🇵🇹 ***zack***
🇵🇹 ***cristiano***
🇵🇹 ***Wozal***
🇩🇪 ***rap***
🇩🇪 ***mY_ruleZ^***
🇵🇹 ***Chazeiro***
🇵🇹 ***tidus***
🇵🇹 ***Folk***
🇵🇹 ***Chicao***
:flag_es: ***aitor***
:flag_pt: Mesut`;

var tiggersb = `:flag_rs: ***Providini*** (C)
:flag_pt: ***EdgyTheKing*** (C)
:flag_us: ***9ine***
:flag_pt: ***Lewandowski.***
:flag_it: Eren Yeager
:flag_pt: Ben Simmons
:flag_pt: notBlue
:flag_pt: Phanter
:flag_pt: Knock Out
:flag_pt: RDT9
:flag_nl: The Wall
:flag_nl: Decayy'`;
















/*var atlaslions = `:flag_ma: ***ITS ME*** (C)
:flag_ma: ***> BW <***
:flag_ma: Anas
:flag_ma: schizo
:flag_ma: De Gea
:flag_ma: Haddad
:flag_ma: ;jarda;
:flag_ma: Sonaldo
:flag_ro: miracle.!`;*/

/*var championsb = `🇳🇱 ***Lol or something*** (C)
🇫🇷 ***Yathobame***
🇬🇧 ***TOBY789***
🇭🇷 ***Monk***
🇭🇷 ***dddd***
🇵🇹 ***Ster***`;*/

/*var hurricane = `:flag_it: ***C o d e'*** (C)
:flag_it: ***O.Prof*** (Co)
:flag_it: ***A.Meret***
:flag_it: ***Eronuovodelposto***
:flag_rs: ***Providni***
:flag_td: ***Zert***
:flag_it: Noob
:flag_it: Duván
:flag_it: Compased`;*/

/*var leaders = `🇲🇦 ***ITS ME*** (C)
🇲🇦 ***> BW <*** (C)
🇹🇳 ***yellow*** (Co)
🇳🇱 ***stoutpoop*** (Co)
🇲🇦 ***Anas***
🇲🇦 ***;jarda;***
🇹🇷 ***RYZEN***
🇲🇦 ***X-MA***
🇲🇦 ***SNIPER***
🇫🇮 ***Wolf***
🇫🇷 ***Karim Suarez***
🇲🇦 ***De Gea***
🇹🇳 ***PHASMA***
🇲🇦 ***Haddad***
🇷🇴 ***miracle.!***`;*/

/*var champions = `🇫🇷 ***TheGoal*** (C)
🇵🇰 ***DELUXE*** (Co)
🇫🇷 ***akira***
🇬🇧 ***architect***
🇫🇷 ***mattgreen***
🇫🇷 ***Toshiba***
🇮🇹 ***Ilicic***
🇺🇦 ***tango***`;*/

/*var mafia = `:flag_tn: ***Luka Jovic*** (C)
:flag_si: Hugo (Co)
:flag_pt: Peter (Co)
:flag_pl: Zain
:flag_pl: Piatek`;*/

/*var eagles = `:flag_tn: ***Luka Jovic*** (C)
:flag_pl: ***Piatek***
:flag_fr: 9
:flag_pl: Gonzo
:flag_pl: iiviR z ysyL
:flag_pl: Zain
:flag_ro: Lucky8boy
:flag_it: Dofla
:flag_pl: OMG
:flag_tn: Esoo`;*/

/*var valencia = `*Oyarzabal* (C)
Bénjamin (C)
Shawy
denkoko
rıza
Niss'`;*/

// PRE-SEASON 2 (CURRENT)
/*
var gaston = `:flag_nl: **Itachi** (C)
:flag_fr: **doliprune** (C)
:flag_nl: **stoutpoop** (Co)
:flag_ba: **Defender** (Co)
:flag_nl: **58**
:flag_pl: Handballijczyk
:flag_fr: **Toshiba**
:flag_fr: **Autentik**
:flag_fr: Guy
:flag_ba: **lisko**
:flag_gb: Bensoujer
:flag_pt: **Ben Simmons**`;

var legacy = `:flag_pl: **DominoPL** (C)
:flag_pl: **Banananas** (Co)
:flag_ie: **Mr.Worldwide**
:flag_pl: **zer**
:flag_pk: **DELUXE**
:flag_ro: **Marfert**
:flag_be: Exca
:flag_nl: zDog
:flag_white: Redhood
:flag_pt: chicao
:flag_white: wee`;

var reddragons = `**MrScandalReformed / Boban** (C)
**HazardRafYT** (C)
**Cristiano / y9** (Co)
**BananaJuice** (Co) 
**Hassiii / Adriano**
**eltupan**
**GeorgeAEL64 / Monsters G1**
**DarthVaderHax / Dartacao**
**Master kk / casillas**
**iscσ jaa**
**M&M's**`;

var sbr = `:flag_nl: **Yazuneh** (C)
:flag_pt: **FD91** (Co)
:flag_be: **Yi** (Co)
:flag_pl: **eve jaa**
:flag_gb: **Larry**
:flag_nl: **Yujio**
:flag_nl: **Yorzi**
:flag_fr: **Shisui**
:flag_nl: **tsukuyomi.**
:flag_fr: **Raiden**
:flag_il: **Gal**
:flag_de: **vesy**
:flag_gb: **Kesso**`;*/







// SEASON 2 (FAILED)

/*var blackout = `:flag_pt: **Tiago** (C)
:flag_pt: **Mesut**
:flag_pt: **monteiro**
:flag_de: **ozo jaa**
:flag_pt: **Suarez**
:flag_pt: **Atlas**
:flag_pt: **Marqzou**
:flag_pt: **Tibbers**
:flag_pl: **üb**
:flag_pt: **wassup**`;

var crvenazvezda = `:flag_rs: **Alpha** (C)
:flag_nl: **The Wall** (Co)
:flag_cz: **DAVID CECH**
:flag_tr: **Smurf**
:flag_ma: **chun**
:flag_gb: **nightking**
:flag_white: **Qwe**
:flag_white: **y9**
:flag_ro: **google**`;

var glizdy = `:flag_pl: **zaQu** (C)
:flag_hr: **pirlo** (C)
:flag_pl: **yennefer** (Co)
:flag_pl: **omgg**
:flag_ba: **Xaroth**`;

var hydra = `:flag_nl: **Itachi** (C)
:flag_nl: **58** (Co)
:flag_fr: **doliprune** (Co)
:flag_nl: **stoutpoop**
:flag_cz: **IKV**
:flag_pt: **Ben Simmons**
:flag_ba: **lisko**
:flag_nl: **Elmo**
:flag_ro: Juni
:flag_ba: Defender
:flag_rs: Tadaum
:flag_jp: Anime`;

var legacy = `:flag_pl: **Domino** (C)
:flag_rs: **Providini** (Co)
:flag_pk: **Deluxe** (Co)
:flag_pt: **Chicao**
:flag_pt: **Dominus**
:flag_pl: **BananaSS**
:flag_white: redhood
:flag_white: **wee**
:flag_nl: zDog
:flag_pl: **zer**
:flag_be: **Exca**
:flag_es: dj666`;

var masters = `:flag_nl: **Decayy'** (C)
:flag_de: **Lucas°**
:flag_dz: **Deku**
:flag_white: **thechosen1**
:flag_ba: **Kyuashu**
:flag_ro: Sebi c
:flag_ie: hamzaa`;

var qnrunners = `:flag_ro: **Raress** (C)
:flag_ro: **aguero**
:flag_ro: **Merc**
:flag_ro: **zar1**
:flag_ro: **SC30**
:flag_ro: **kvn10**
:flag_ro: **chad**`;

var sbr = `:flag_nl: **Yazuneh** (C)
:flag_pt: **FD91** (Co)
:flag_be: **Yi** (Co)
:flag_pl: **eve jaa**
:flag_hr: **MaKeKs**
:flag_gb: **Mac**
:flag_gb: **Larry**
:flag_nl: **Yujio**
:flag_gb: **n?**
:scotland: **Kenzo**
:flag_de: **mY_ruleZ^**
:flag_pl: **Zain**
:flag_white: **didi**`;

/*var inter = `:flag_pk: **DELUXE** (C)
:flag_dz: **Deku** (Co)
:flag_iq: **T**
:flag_us: **9ine**
:flag_nl: **zDog**
:flag_pt: Ferrão`;*/

/*var dreamingpirates = `:flag_it: **Eren Yeager** (C)
:flag_it: **micadron** (Co)
:flag_it: **Scharm** (Co)
:flag_it: **bruceketta**
:flag_it: **Alecs**
:flag_it: **Marineford97**
:flag_it: **Nenè.**
:flag_it: **J.Ilicic**`;*/

/*var anonymous = `:flag_gb: **HaxJNB** (C)
:flag_gb: **Jako**
:flag_gb: Sancho`;*/

/*var gambaosaka = `:flag_nl: **Warrior** (C)
:flag_nl: **Itachi**
:flag_nl: **58**
:flag_it: **eronuovodelposto**
:flag_bg: **Moti**
:flag_white: **aMp**
:flag_de: **mY_ruleZ^**
:flag_gb: **Mate™**`;*/

/*var tryagain = `:flag_ro: **Fire** (C)
:flag_ro: **Google**
:flag_ro: **Sebi c**
:flag_fr: **El Matador**
:flag_ro: **Marfert**
:flag_pt: **Ferrão**`;*/

/*var legacy = `:flag_pl: DominoPL (C)
:flag_ie: **Mr.Worldwide** (Co)
:flag_white: Lcn131 (Co)
:flag_white: Milko
:flag_rs: **Providini**
:flag_es: **Dj666**
:flag_ba: **Asano**
:flag_white: **Exca**
:flag_be: **HAWK**
:flag_white: **BananaSS**`;*/

/*var gaston = `:flag_fr: **Doliprune** (C)
:flag_fr: Citizenk (Co)
:flag_fr: Lilian
:flag_fr: Walt Disquette
:flag_fr: Sosa
:flag_fr: Rockfeller
:flag_fr: Krasiuc
:flag_fr: Furya
:flag_fr: Wass
:flag_fr: Lancelotdulac
:flag_fr: Akira`;/*/

/*var hthidolo = `:flag_gb: **lemq the baller** (C)
:flag_gb: **L.Martinez** (C)
:flag_se: **halal**
:flag_it: simonepadoin_
:flag_fr: **Davida**
:flag_us: **Aleje**`;*/

/*var quattrojoker = `:flag_nl:  **Itachi** (C)
:flag_ro: Merc (Co)
:flag_nl: stoutpoop (Co)
:flag_ba: Defender
:flag_de: PoP
:flag_fr: **doliprune**
:flag_cz: IKVnho 
:flag_nl: 58 
:flag_gb: Ivo
:flag_de: Total
:flag_nl: Elmo
:flag_gb: July4th
:flag_gb: Daffyd
:flag_nl:  Pyro`;*/

/*var eagles = `**Luka Jovic** (C)
Yellow (Co)
Zer 
Dofla
Toy 
Kenzo
Hax The Ball
Gonzo 
9 
Elko
mlody
mamma
runner
**vasi162**`;*/

// SEASON 1

/*var blackout = `:flag_pt: Tiago (C)
:flag_pt: Mesut
:flag_pt: monteiro
:flag_de: ozo jaa
:flag_pt: Blastoyz
:flag_pt: Suarez
:flag_pt: irv1
:flag_pt: тidus
:flag_pt: Atlas
:flag_pt: Marqzou
:flag_pt: Tibbers`;

var crvenazvezda = `:flag_rs: Alpha (C)
:flag_nl: The Wall (Co)
:flag_nl: pyro
:flag_nl: Deacayy
:flag_cz: David Cech
:flag_ma: chun
:flag_nl: 𝗛𝝠𝗪𝗞'
:flag_ba: Asano
:flag_dz: Diaz
:flag_tr: Manuel Fernandes / R7`;

var eaglesOfCarthage = `:flag_tn: Jovic (C)
:flag_tn: YELLOW (Co)
:flag_tn: AK-47
:flag_tn: haxtheball
:flag_tn: Pain
:flag_tn: Toni_Kroox
:flag_pl: zer
:flag_ro: google
:flag_hu: Vodkasprite
:flag_pt: Ben Simmons
:flag_us: toy
:flag_us: Plot
:flag_us: Dofla
:flag_us: Gonzinho`;

var glizdy = `:flag_pl: Endou (C)
:flag_pl: üb (C)
:flag_hr: pirlo (Co)
:flag_pl: zaQu
:flag_pl: yennefer
:flag_pl: omgg
:flag_pl: Meireles
:flag_de: mY_ruleZ^`;

var inter = `DELUXE (C)
zDog (Co)
Toshiba (Co)
Deku
ZQ
Nub
M.Can
Bernd
Isco Jaa
Karim / T`;

var quattrojoker = `DominoPL (C)
Azrod
Doliprune
Merc
Daffyd
July4th
Itachi`;

var scarybats = `vali.valentin (C)
shot
SALL
αgυεяσ
REMI
Xcsu
nike`;

/*var tryagain = `Fire (C)
Sebi c (Co)
Van basten
El matador
Linde
Marfert
Neat`;*/

/*var ultras = `Vinicius JR (C)
James
Hax
Varela
Human
Reeds
Jorginho
campionleo`;

var varnateamfc = `aWaKeN (C)
Kea97 (Co)
Nepus
Kokain
kevin
shady
Edge
Matthaus`;

/*var wanderers = `moß (C)
MaKeKs
Tadaum
Inter Fc
Defender
Di Maria
Gooch
marcelo12`;*/

client.login(process.env.TOKEN);
