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
    message.reply(commandsUsed + " have been used.")
break;
		    
case "online":
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

case "rosters":
    if(message.author.id == "634872299069374488"){
    message.delete();
    client.channels.get("741770858963664947").bulkDelete(30)
  
	client.channels.get("741770858963664947").send({embed: new Discord.RichEmbed()
            .setColor('#E31E24')
            .setTitle("Akatsuki")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/743224730026246164/akatsuki.png')
            .setDescription(akatsuki)
	})
	client.channels.get("741770858963664947").send({embed: new Discord.RichEmbed()
            .setColor('#A03B3B')
            .setTitle("Anonymous FC")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/741807721593962507/anonymous.png')
            .setDescription(anonymous)
	})
	client.channels.get("741770858963664947").send({embed: new Discord.RichEmbed()
            .setColor('#B18536')
            .setTitle("Champions FC")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/742072649550790676/Champions_FC.png')
            .setDescription(champions)
	})
	client.channels.get("741770858963664947").send({embed: new Discord.RichEmbed()
            .setColor('#00A784')
            .setTitle("Champions FC B")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/744188700476440647/Champions_FC_B.png')
            .setDescription(championsb)
	})
	client.channels.get("741770858963664947").send({embed: new Discord.RichEmbed()
            .setColor('#00B1E7')
            .setTitle("The Eagles")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/721718721500151848/eagles.png')
            .setDescription(eagles)
	})
	client.channels.get("741770858963664947").send({embed: new Discord.RichEmbed()
            .setColor('#fefefe')
            .setTitle("Köhlen Atlar")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/741810902877339678/Kohlen_Atlar.png')
            .setDescription(köhlenatlar)
	})
	client.channels.get("741770858963664947").send({embed: new Discord.RichEmbed()
            .setColor('#6a6c8e')
            .setTitle("SBR FC")
            .setThumbnail('http://cdn.discordapp.com/attachments/706641802374938644/731131638381281280/sbrFC.png')
            .setDescription(sbr)
	})
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

var akatsuki = `:flag_ba: ***Xaroth*** (C)
:flag_ba: rubinho (Co)
:flag_it: Tadić
:flag_nl: Rajzojee'
:flag_dz: Deku
:flag_pl: Skillz
:flag_fr: Thors
:flag_de: Quaresmaaaa
:flag_de: Son 7
:flag_it: Mertens
:flag_se: Vera
:flag_de: Ayyoub'
:flag_pl: Endou
:flag_de: flacko350`;

var anonymous = `:flag_fr: ***doliprune*** (C)
:flag_be: ***Sphinx'*** (Co)
:flag_fr: ***Fury***
:flag_nl: ***Elmo***
:flag_rs: ***Pera***
:flag_ro: ***aguero***
:flag_ro: ***garrincha***
:flag_tr: ***kevo***
:flag_nl: ***stoutpoop***
:flag_tr: ***Nepus***
:flag_it: ***skrt***
:flag_gb: ***env***
:flag_ma: > BW <`;

var champions = `:flag_gb: ***architect*** (C)
:flag_pk: ***DELUXE*** (Co)
:flag_fr: akira (Co)
:flag_pt: ***peter.***
:flag_gb: ***matt green***
:flag_fr: TheGoal
:flag_pt: ᴋᴇɴꜱʜɪɴ
:flag_nl: tsukuyomi.
:flag_fr: Lancelot Du Lac
:flag_be: Amine
:flag_fr: Toshiba`;

var championsb = `:flag_nl: ***Lol or something*** (C)
:flag_nl: Decayy'
:flag_fr: Yathobame
:flag_gb: CFCJNB7
:flag_gb: nightking
:flag_fr: [0] The GK
:flag_gb: TOBY789
:flag_fr: xézah
:flag_gb: Sea King`;

var eagles = `:flag_tn: ***Luka Jovic*** (C)
:flag_ma: ***ITS ME*** (Co)
:flag_pl: ***Piatek***
:flag_fr: ***Karim Suarez***
:flag_fr: 9
:flag_pl: Gonzo
:flag_pl: iiviR z ysyL
:flag_pl: Zain
:flag_ro: Lucky8boy
:flag_it: Dofla
:flag_pl: OMG
:flag_tn: Esoo`;

var köhlenatlar = `:flag_az: ***Marcél*** (C)
:flag_tr: ***šubwây***
:flag_tr: ***Alessia***
:flag_tr: ***denkoko***
:flag_az: ***Folkiè***
:flag_tr: ***arfinho***
:flag_tr: ***Flämmable***
:flag_tr: ***Chainz.***
:flag_tr: Cheaw
:flag_tr: Gaúcho
:flag_tr: Estreâ
:flag_tr: Xéd
:flag_tr: Sorlord`;

var sbr = `:flag_nl: ***Yazuneh*** (C)
:flag_nl: ***Yorzi*** (Co)
:flag_pt: FD91 (Co)
:flag_nl: ***Yujio***
:flag_nl: ***Tsukuyomi.***
:flag_pl: ***üb***
:flag_fr: Sosa
:flag_fr: Risky
:flag_fr: Raiden
:flag_fr: Shisui
:flag_il: Gal
:flag_pt: Kesso
:flag_be: Yi
:flag_gb: Larry`;


















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
