const Discord = require("discord.js");
const PREFIX = "f!";

var client = new Discord.Client();

var usersInGuild = client.users.size - 4;

client.on("guildMemberAdd", function(){
    client.user.setActivity(`${client.users.size} users`,{type: "WATCHING"});
})

client.on("guildMemberRemove", function(){
    client.user.setActivity(`${client.users.size} users`,{type: "WATCHING"});
})

var embedMove = "off";
var embedMove2 = "off";
var bugProtectMode = "off";

var commandsUsed = 0;

var commitement = ""
var theMonth = ""

var sec = 0;
var min = 0;
var h = 0;
var d = 0;

var ood = "";
var ooh = "";
var oom = "";
var oos = "";

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
        client.user.setActivity(`${client.users.size - 1} users`,{type: "WATCHING"});
        client.user.setStatus("dnd")
        //client.user.setActivity(`songs`,{type: "LISTENING"});
        
/*VERIFY MEMBERS*/

        //client.guilds.get("704799551193874474").members.get("").addRole("704827988973453415")
        //client.guilds.get("704799551193874474").members.get("").removeRole("704830837501460481")

	/*client.channels.get("710972037782437888").bulkDelete(30)
	client.channels.get("710972037782437888").send({embed: new Discord.RichEmbed()
            .setColor('#c6000e')
            .setTitle("Blackout   :trophy:")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706662392192565329/blackout.png')
            .setDescription(blackout)
        })
	message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#d90512')
            .setTitle("Crvena Zvezda")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/707577909979906068/crvenazvezda.png')
            .setDescription(crvenazvezda)
        })
        client.channels.get("710972037782437888").send({embed: new Discord.RichEmbed()
            .setColor('#ae0725')
            .setTitle("Eagles Of Carthage")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/708522834649153606/eaglesofcarthage.png')
            .setDescription(eaglesOfCarthage)
        })
        client.channels.get("710972037782437888").send({embed: new Discord.RichEmbed()
            .setColor('#149d3c')
            .setTitle("GLIZDY")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/707310392703189012/glizdy.png')
            .setDescription(glizdy)
        })
        client.channels.get("710972037782437888").send({embed: new Discord.RichEmbed()
            .setColor('#0267ab')
            .setTitle("Inter FC")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706672577170374796/inter.png')
            .setDescription(inter)
        })
        client.channels.get("710972037782437888").send({embed: new Discord.RichEmbed()
            .setColor('#c7041f')
            .setTitle("Quattro Joker")
            .setThumbnail('http://cdn.discordapp.com/attachments/697867394630156300/715986168193482762/old_team.png')
            .setDescription(quattrojoker)
        })
        client.channels.get("710972037782437888").send({embed: new Discord.RichEmbed()
            .setColor('#9602fb')
            .setTitle("Scary Bats")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/717434044198944768/scarybats1.png')
            .setDescription(scarybats)
        })
        //client.channels.get("710972037782437888").send({embed: new Discord.RichEmbed()
            //.setColor('#f9fcff')
            //.setTitle("TryAgain")
            //.setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/717426676308639854/tryagain.png')
            //.setDescription(tryagain)
        //})
        client.channels.get("710972037782437888").send({embed: new Discord.RichEmbed()
            .setColor('#fff2de')
            .setTitle("Ultras")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/719256291708502086/ULTRAS.png')
            .setDescription(ultras)
        })
        client.channels.get("710972037782437888").send({embed: new Discord.RichEmbed()
            .setColor('#b672ff')
            .setTitle("VarnaTeam FC")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706651727402762400/varna.png')
            .setDescription(varnateamfc)
        })
        //client.channels.get("710972037782437888").send({embed: new Discord.RichEmbed()
            //.setColor('#c60c31')
            //.setTitle("Wanderers")
            //.setThumbnail('https://cdn.discordapp.com/attachments/646469539051077653/712403302695829555/wanderers.png')
            //.setDescription(wanderers)
        //})*/

/*GIVE YOURSELF ADMIN ON JOIN!*/

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

//ADD ACCEPT/REJECT MESSAGES
//ADD CAPTAINS WARNING MESSAGES

/*client.on("message", message => {
    if(message.content.startsWith("f!say ") && message.member.hasPermission("ADMINISTRATOR")){
        message.delete();
        //message.channel.sendMessage(message.content.split("f!say "))
        message.channel.send(message.content.split("f!say "));
    }
});*/

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


    if (!message.content.startsWith(PREFIX)) return;
    var args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0].toLowerCase()) {
			    //THE PROTECTION MODE IS OFF, COMMANDS NORMAL
		    
case "ping":
		    commandsUsed++;
        const msg = await message.channel.send('Getting my ping...')
msg.edit(`Ping: **${(msg.editedTimestamp || msg.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp)}` + "ms**")
    break;
		    
	    case "me":
		    if(message.author.id == "634872299069374488"){
			    message.reply("f!rosters, f!modify [TEAM] {ROSTER}, f!add [TEAM] {PLAYER}, f!teams, f!commands")
		    }
break;
		    
		    //f!teams on work
	    case "commands":
		    	message.reply(commandsUsed + " have been used.")
		 break;
		    
case "register":
		    commandsUsed++;
        if(message.channel.id == "705539473378639935" && message.member.highestRole.id != "715716361065725952"){
            message.delete()
            message.author.send({embed: new Discord.RichEmbed()
                .setColor("fa0000")
                .setTitle("Hello, **" + message.author.username + "**.")
                .setDescription(`Your request to register in **Futsal Stars Members** association has been successfully delivered to the official futsal stars management inbox.
They will review your request and reply to you soon after they certify that you are an allowed community member and add you to the members list of the community.
Thank you.`)
            })

            client.channels.get("707412458909990942").send("**" + message.author.username + "#" + message.author.discriminator + "** wants to register in **Futsal Stars Members** association.")

            message.member.addRole("715716361065725952");
        }
        if(message.channel.id == "705539473378639935" && message.member.highestRole.id == "715716361065725952"){
            message.reply("you have already sent a registration request!")
        }
        if(message.channel.id != "705539473378639935"){
            message.message.react("❌")
        }
break;
		    
/*
case "participe":
		    commandsUsed++;
	if(participations.length < 16){
        message.delete()

        client.channels.get("717102211032940626").send("**" + message.author.username + "#" + message.author.discriminator + "** has registered in the **Futsal Stars Fun Cup n°1**.")
	participations += "C";
	}
	else if(participations.length > 15){
        message.delete()
        client.channels.get("717104939473698858").send("**" + message.author.username + "#" + message.author.discriminator + "** has joined the waiting list of participation in **Futsal Stars Fun Cup n°1**.")
	}
break;	
		    
		    
	/*
case "funcup":
		    commandsUsed++;
	if(message.author.id == "634872299069374488"){
		message.channel.send(participations.length + " players has registered in the Fun Cup #1.")
	}
break;		    
		    
		    */
		    
		    
		    
		    
		    
/*
case "help":
		    commandsUsed++;
    if(message.channel.id == "705539473378639935"){
        message.delete();
    message.channel.send({embed: new Discord.RichEmbed()
        .setColor('#cd2225')
        .setTitle("Commands:")
        .addField('**Server**', `**f!rules**: Display rules of server.
**f!report**: Report somebody who broke the rules, or a bug in the client, or a certain mistake in the system.`)
        .addField('**Bot**', `**f!online**: Displays the duration of the bot connection to the server.
**f!ping**: Get bot ping.`)
        .addField('**League**', `**f!registration**: Shows the registeration criteria/instructions.`)
        .addField('**System**', `**f!register**: Send a request to register in Futsal Stars Member.
**f!participe**: Used command to participe at a certain event. (Currently: Fun Cup #1)`)
        .setFooter('Command used by ' + message.author.username + "#" + message.author.discriminator)
       })
    } else if(message.channel.id != "705539473378639935"){
        //message.delete();;
        message.react('❌')
    }

break;*/
		    
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
		    

/*case "time":
    var t = new Date();

    var tthours = ""
    var ttminutes = ""
    var ttseconds = ""

    if(t.getUTCHours() < 10){
        tthours = "0"
    } if(t.getUTCMinutes() < 10){
        ttminutes = "0"
    }
    if(t.getUTCSeconds() < 10){
        ttseconds = "0"
    }
    message.channel.send({embed: new Discord.RichEmbed()
        .setColor("#305d7c")
        .setTitle(tthours + t.getUTCHours()+":"+ttminutes +t.getUTCMinutes()+":"+ttseconds+t.getUTCSeconds())
    })
    break;*/

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
        client.channels.get("721482377989324902").bulkDelete(30)
  
        /*message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#c6000e')
            .setTitle("Blackout   :trophy:")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706662392192565329/blackout.png')
            .setDescription(blackout)
        })
	message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#d90512')
            .setTitle("Crvena Zvezda")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/707577909979906068/crvenazvezda.png')
            .setDescription(crvenazvezda)
        })
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#ae0725')
            .setTitle("Eagles Of Carthage")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/708522834649153606/eaglesofcarthage.png')
            .setDescription(eaglesOfCarthage)
        })
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#149d3c')
            .setTitle("GLIZDY")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/707310392703189012/glizdy.png')
            .setDescription(glizdy)
        })
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#0267ab')
            .setTitle("Inter FC")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706672577170374796/inter.png')
            .setDescription(inter)
        })
        /*message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#0f9ac1')
            .setTitle("Letters FC")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/714114301606232144/fcletters.png')
            .setDescription(lettersfc)
        })*/
        /*message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#c7041f')
            .setTitle("Quattro Joker")
            .setThumbnail('http://cdn.discordapp.com/attachments/697867394630156300/715986168193482762/old_team.png')
            .setDescription(quattrojoker)
        })
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#9602fb')
            .setTitle("Scary Bats")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/717434044198944768/scarybats1.png')
            .setDescription(scarybats)
        })
        /*message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#f2f9ff')
            .setTitle("TryAgain")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/717426676308639854/tryagain.png')
            .setDescription(tryagain)
        })*/
        /*message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#fff2de')
            .setTitle("Ultras")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/719256291708502086/ULTRAS.png')
            .setDescription(ultras)
        })
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#b672ff')
            .setTitle("VarnaTeam FC")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706651727402762400/varna.png')
            .setDescription(varnateamfc)
        })
        /*message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#c60c31')
            .setTitle("Wanderers")
            .setThumbnail('https://cdn.discordapp.com/attachments/646469539051077653/712403302695829555/wanderers.png')
            .setDescription(wanderers)
        })*/
	/*client.channels.get("721482377989324902").send({embed: new Discord.RichEmbed()
            .setColor('#010101')
            .setTitle("Anonymous FC")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/722436153952698388/anonymous.png')
            .setDescription(anonymous)
	})*/
	/*client.channels.get("721482377989324902").send({embed: new Discord.RichEmbed()
            .setColor('#c6000e')
            .setTitle("Black Out :trophy:")
            .setThumbnail('http://cdn.discordapp.com/attachments/706641802374938644/721717590963257444/blackout.png')
            .setDescription(blackout)
	})
	client.channels.get("721482377989324902").send({embed: new Discord.RichEmbed()
            .setColor('#d90512')
            .setTitle("Crvena Zvezda")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/707577909979906068/crvenazvezda.png')
            .setDescription(crvenazvezda)
	})
	/*client.channels.get("721482377989324902").send({embed: new Discord.RichEmbed()
            .setColor('#74c7f1')
            .setTitle("Dreaming Pirates")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/722460761137348678/dreamingpirates.png')
            .setDescription(dreamingpirates)
	})*/
	/*client.channels.get("721482377989324902").send({embed: new Discord.RichEmbed()
            .setColor('#149d3c')
            .setTitle("GLIZDY")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/724245331797213184/glizdy.png')
            .setDescription(glizdy)
	})
	client.channels.get("721482377989324902").send({embed: new Discord.RichEmbed()
            .setColor('#E7283A')
            .setTitle("Hydra FC")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/727584954967523419/hydra.png')
            .setDescription(hydra)
	})
	client.channels.get("721482377989324902").send({embed: new Discord.RichEmbed()
            .setColor('#010101')
            .setTitle("Legacy CF")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/721719821338673252/legacy.png')
            .setDescription(legacy)
	})
	client.channels.get("721482377989324902").send({embed: new Discord.RichEmbed()
            .setColor('#959595')
            .setTitle("Masters FC")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/726860275776487554/masters.png')
            .setDescription(masters)
	})
	client.channels.get("721482377989324902").send({embed: new Discord.RichEmbed()
            .setColor('#fefefe')
            .setTitle("QN Runners")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/724716092131639406/qnrunners.png')
            .setDescription(qnrunners)
	})
	client.channels.get("721482377989324902").send({embed: new Discord.RichEmbed()
            .setColor('#f7d627')
            .setTitle("SBR FC")
            .setThumbnail('http://cdn.discordapp.com/attachments/706641802374938644/722225682712756294/sbrB.png')
            .setDescription(sbr)
	})
	/*client.channels.get("721482377989324902").send({embed: new Discord.RichEmbed()
            .setColor('#0267ab')
            .setTitle("Inter FC")
            .setThumbnail('http://cdn.discordapp.com/attachments/706641802374938644/721717027244474388/inter.png')
            .setDescription(inter)
	})*/
	/*client.channels.get("721482377989324902").send({embed: new Discord.RichEmbed()
            .setColor('#2A4CA5')
            .setTitle("Gamba Osaka")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/722855201278656623/gambaosaka.png')
            .setDescription(gambaosaka)
	})*/
	/*client.channels.get("721482377989324902").send({embed: new Discord.RichEmbed()
            .setColor('#FFA300')
            .setTitle("FC Gaston")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/722854245996560514/gastonfc.png')
            .setDescription(gaston)
	})*/
	/*client.channels.get("721482377989324902").send({embed: new Discord.RichEmbed()
            .setColor('#b900ae')
            .setTitle("HTH Idolo FC")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/722550751842402305/hthidolofc.png')
            .setDescription(hthidolo)
	})*/
	/*client.channels.get("721482377989324902").send({embed: new Discord.RichEmbed()
            .setColor('#C99545')
            .setTitle("TryAgain")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/723108631335272508/tryagain.png')
            .setDescription(tryagain)
	})*/
	  	
	/*client.channels.get("721482377989324902").send({embed: new Discord.RichEmbed()
            .setColor('#722c38')
            .setTitle("The Eagles")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/721718721500151848/eagles.png')
            .setDescription(eagles)
	})*/
	    
	client.channels.get("731094652748562453").send({embed: new Discord.RichEmbed()
            .setColor('#010101')
            .setTitle("Legacy CF")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/731131075211952160/legacy.png')
            .setDescription(legacy)
	})
	client.channels.get("731094652748562453").send({embed: new Discord.RichEmbed()
            .setColor('#c6040f')
            .setTitle("Niño Joker")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/731131551085101106/ninojoker.png')
            .setDescription(ninojoker)
	})
	client.channels.get("731094652748562453").send({embed: new Discord.RichEmbed()
            .setColor('#dd0202')
            .setTitle("Red Dragons")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/731131600968089640/reddragons.png')
            .setDescription(reddragons)
	})
	client.channels.get("731094652748562453").send({embed: new Discord.RichEmbed()
            .setColor('#f7d627')
            .setTitle("SBR FC")
            .setThumbnail('http://cdn.discordapp.com/attachments/706641802374938644/731131638381281280/sbrFC.png')
            .setDescription(sbr)
	})
	    
	    /*

        var a = new Date()

        var ahoh = ""
        var ahom = ""

        if(a.getUTCHours() < 10){
            ahoh = "0"
        }
        if(a.getUTCMinutes() < 10){
            ahom = "0"
        }

        if(a.getUTCMonth() == 0){
            theMonth = "January"
        }
        if(a.getUTCMonth() == 1){
            theMonth = "February"
        }
        if(a.getUTCMonth() == 2){
            theMonth = "March"
        }
        if(a.getUTCMonth() == 3){
            theMonth = "April"
        }
        if(a.getUTCMonth() == 4){
            theMonth = "May"
        }
        if(a.getUTCMonth() == 5){
            theMonth = "June"
        }
        if(a.getUTCMonth() == 6){
            theMonth = "July"
        }
        if(a.getUTCMonth() == 7){
            theMonth = "August"
        }
        if(a.getUTCMonth() == 8){
            theMonth = "September"
        }
        if(a.getUTCMonth() == 9){
            theMonth = "October"
        }
        if(a.getUTCMonth() == 10){
            theMonth = "Novemeber"
        }
        if(a.getUTCMonth() == 11){
            theMonth = "December"
        }

        if(a.getUTCDate() == 1 || a.getUTCDate() == 21 || a.getUTCDate() == 31){
            commitement = "st"
        }
        if(a.getUTCDate() == 2 || a.getUTCDate() == 22){
            commitement = "nd"
        }
        if(a.getUTCDate() == 3 || a.getUTCDate() == 23){
            commitement = "rd"
        }
        if(a.getUTCDate() != 3 && a.getUTCDate() != 2 && a.getUTCDate() != 1 && a.getUTCDate() != 21 && a.getUTCDate() != 22 && a.getUTCDate() != 23 && a.getUTCDate() != 31){
            commitement = "th"
        }
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#fefefe')
            .setTitle("Last Update: " + a.getUTCDate() + commitement + " " + theMonth + " at " + ahoh + a.getUTCHours() + ":" + ahom + a.getUTCMinutes())
        })*/
    } else if(message.author.id != "634872299069374488"){message.react('❌')
    }
break;
    
case "registration":
    if(message.channel.id == "705539473378639935"){
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#00A5A5')
            .setTitle("Registrations criteria:")
            .addField('Name:', `Main criterion. Your team for sure must have a name.`)
            .addField('Players:', `Important criterion. We only accept teams with a minimum of 6 players and a maximum of 16 players.`)
            .addField('Logo:', `A Logo to represent your rare from it kind team. We prefer logos transparent background and a size that is not less than 600x600. Don't copy other teams' logos or you won't be accepted in league.`)
            .addField('Captains:', `Team must have 1 main captain and vice captains. Team can't have more than 3 vice captains.`)
            .addField('Kits:', `Kits that will represent your team. Only home and away kits are allowed, no less and no more.`)
            .setFooter('Command used by ' + message.author.username + "#" + message.author.discriminator)
        })
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#00A5A5')
            .setTitle("Registrations instructions:")
            .addField('Check:', `First, you need to check if your team presentation document respects all the criteria included above.`)
            .addField('Prepare:', `Next, you need to prepare a document/text where you display all the informations of your team (Name, logo, roster, captain).`)
            .addField('Send:', `Afterwards, you must send your document/text to a moderator/admin.`)
            .addField('Wait:', `And now, wait for the decision of league staff who will manage your quest for joining the league. This step usually doesn't take so much time.`)
            .setFooter('Command used by ' + message.author.username + "#" + message.author.discriminator)
        })
    
    } else if(message.channel.id != "705539473378639935"){
        //message.delete();;
        message.react('❌')
    }

break;
		   
    }
        }  
if(bugProtectMode == "on"){
	
    if (message.author.equals(client.user)) return;


    if (!message.content.startsWith(PREFIX)) return;
    var args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0].toLowerCase()) {
	

case "rules":
    
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#00A5A5')
            .setTitle("Bot is being fixed")
	    .setDescription(`The bot is currently being fixed. Maybe it has ran into a bug or an error and an administrator turned this mode on. You can wait until the bot protection mode is turned off again.
If you think you are seeing this by mistake, please notify an admin.`)
        })

break;

case "register":
        
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#00A5A5')
            .setTitle("Bot is being fixed")
	    .setDescription(`The bot is currently being fixed. Maybe it has ran into a bug or an error and an administrator turned this mode on. You can wait until the bot protection mode is turned off again.
If you think you are seeing this by mistake, please notify an admin.`)
        })
break;

case "help":
    
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#00A5A5')
            .setTitle("Bot is being fixed")
	    .setDescription(`The bot is currently being fixed. Maybe it has ran into a bug or an error and an administrator turned this mode on. You can wait until the bot protection mode is turned off again.
If you think you are seeing this by mistake, please notify an admin.`)
        })

break;

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
    
case "registration":
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#00A5A5')
            .setTitle("Bot is being fixed")
	    .setDescription(`The bot is currently being fixed. Maybe it has ran into a bug or an error and an administrator turned this mode on. You can wait until the bot protection mode is turned off again.
If you think you are seeing this by mistake, please notify an admin.`)
        })

break;
}
        }    
});


//ROSTERS

// SEASON 2 (CURRENT)

var legacy = `:flag_pl: DominoPL (C)
:flag_pl: Banananas (Co)
:flag_ie: Mr.Worldwide
:flag_rs: Providini
:flag_es: dj66
:flag_be: Exca
:flag_pl: zer
:flag_pk: DELUXE
:flag_nl: zDog
:flag_white: Redhood
:flag_pt: chicao
:flag_white: wee`;

var ninojoker = `:flag_nl: Itachi (C)
:flag_nl: 58 (C)
:flag_gb: nightking' (Co)
:flag_fr: doliprune (Co)
:flag_cz: IKV
:flag_ba: lisko
:flag_pt: Anime
:flag_ro: Juni
:flag_nl: MR.ABC
:flag_cp: Hooper.fr
:flag_nl: Stoutpoop
:flag_fr: Sosa
:flag_nl: Xichema
:flag_gb: JNB
:flag_nl: tsukuyomi.`;

var reddragons = `**MrScandalReformed / Boban** (C)
**HazardRafYT** (C)
**y9** (Co)
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
:flag_be: Yi (Co)
:flag_pl: **eve jaa**
:flag_gb: **Larry**
:flag_nl: Yujio
:flag_gb: Mac
:flag_gb: **n?**
:scotland: **Kenzo**
:flag_pl: Zain
:flag_de: Didi
:flag_fr: Shisui`;







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

var participations = ``;

client.login(process.env.TOKEN);
