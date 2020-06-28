const Discord = require("discord.js");
const PREFIX = "f!";

var client = new Discord.Client();

var usersInGuild = client.users.size - 4;

client.on("guildMemberAdd", function(){
    client.user.setActivity(`${client.users.size - 4} users`,{type: "WATCHING"});
})

client.on("guildMemberRemove", function(){
    client.user.setActivity(`${client.users.size - 4} users`,{type: "WATCHING"});
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
		    
case "teams":
	if(message.author.id == "634872299069374488"){
		message.channel.send({embed: new Discord.RichEmbed()
			.setColor("#89cf24")
			.setTitle("Teams Abbreviations:")
			.setDescription(`<:blackout:706670687783354429> [BLA] BlackOut
<:crvenazvezda:723249483177263175> [CRV][CVZ] Crvena Zvezda
<:glizdy:724247937315504148> [GLI][GLZ] GLIZDY
<:inter:706989671112114296> [INT] Inter FC
<:legacy:725797821923459072> [LEG][LGC] Legacy
<:masters:726860432715022386> [MAS] Master FC
<:qnrunners:724714425541591050> [QNR] QN Runners
<:sbr:722461133025443910> [SBR] SBR FC`)
		})
	}
break;
		    
case "modify":
	
//SEASON 2
	if(message.author.id == "634872299069374488"){
		message.delete();
		
		//TRYAGAIN
		/*if(args[1] == "TRY"){
			var roster = message.content.split("f!modify TRY ").slice(1,2000);
			tryagain = roster;
		}if(args[1] == "try"){
			var roster = message.content.split("f!modify try ").slice(1,2000);
			tryagain = roster;
		}if(args[1] == "Try"){
			var roster = message.content.split("f!modify Try ").slice(1,2000);
			tryagain = roster;
		}if(args[1] == "TRYAGAIN"){
			var roster = message.content.split("f!modify TRYAGAIN ").slice(1,2000);
			tryagain = roster;
		}if(args[1] == "TryAgain"){
			var roster = message.content.split("f!modify TryAgain ").slice(1,2000);
			tryagain = roster;
		}if(args[1] == "tryagain"){
			var roster = message.content.split("f!modify tryagain ").slice(1,2000);
			tryagain = roster;
		}if(args[1] == "Try_Again"){
			var roster = message.content.split("f!modify Try_Again ").slice(1,2000);
			tryagain = roster;
		}if(args[1] == "try_again"){
			var roster = message.content.split("f!modify try_again ").slice(1,2000);
			tryagain = roster;
		}if(args[1] == "TRY_AGAIN"){
			var roster = message.content.split("f!modify TRY_AGAIN" ).slice(1,2000);
			tryagain = roster;
		}if(args[1] == "Tryagain"){
			var roster = message.content.split("f!modify Tryagain ").slice(1,2000);
			tryagain = roster;
		}*/
		
		//SBR FC
		if(args[1] == "SBR"){
			var roster = message.content.split("f!modify SBR ").slice(1,2000);
			sbr = roster;
		}if(args[1] == "SBR_FC"){
			var roster = message.content.split("f!modify SBR_FC ").slice(1,2000);
			sbr = roster;
		}if(args[1] == "Sbr_fc"){
			var roster = message.content.split("f!modify Sbr_fc ").slice(1,2000);
			sbr = roster;
		}if(args[1] == "sbr_fc"){
			var roster = message.content.split("f!modify sbr_fc ").slice(1,2000);
			sbr = roster;
		}if(args[1] == "sbr"){
			var roster = message.content.split("f!modify sbr ").slice(1,2000);
			sbr = roster;
		}if(args[1] == "Sbr_FC"){
			var roster = message.content.split("f!modify Sbr_FC ").slice(1,2000);
			sbr = roster;
		}
		
		//QN RUNNERS
		if(args[1] == "QNR"){
			var roster = message.content.split("f!modify QNR ").slice(1,2000);
			qnrunners = roster;
		}if(args[1] == "qnr"){
			var roster = message.content.split("f!modify qnr ").slice(1,2000);
			qnrunners = roster;
		}if(args[1] == "Qnr"){
			var roster = message.content.split("f!modify Qnr ").slice(1,2000);
			qnrunners = roster;
		}if(args[1] == "QNr"){
			var roster = message.content.split("f!modify QNr ").slice(1,2000);
			qnrunners = roster;
		}if(args[1] == "qnR"){
			var roster = message.content.split("f!modify qnR ").slice(1,2000);
			qnrunners = roster;
		}if(args[1] == "QnR"){
			var roster = message.content.split("f!modify QnR ").slice(1,2000);
			qnrunners = roster;
		}if(args[1] == "QN_RUNNERS"){
			var roster = message.content.split("f!modify QN_RUNNERS ").slice(1,2000);
			qnrunners = roster;
		}if(args[1] == "QN_Runners"){
			var roster = message.content.split("f!modify QN_Runners ").slice(1,2000);
			qnrunners = roster;
		}if(args[1] == "qn_runners"){
			var roster = message.content.split("f!modify qn_runners ").slice(1,2000);
			qnrunners = roster;
		}if(args[1] == "QNRUNNERS"){
			var roster = message.content.split("f!modify QNRUNNERS ").slice(1,2000);
			qnrunners = roster;
		}if(args[1] == "QNRunners"){
			var roster = message.content.split("f!modify QNRunners ").slice(1,2000);
			qnrunners = roster;
		}if(args[1] == "qnrunners"){
			var roster = message.content.split("f!modify qnrunners" ).slice(1,2000);
			qnrunners = roster;
		}if(args[1] == "QNrunners"){
			var roster = message.content.split("f!modify QNrunners ").slice(1,2000);
			qnrunners = roster;
		}if(args[1] == "QN_runners"){
			var roster = message.content.split("f!modify QN_runners ").slice(1,2000);
			qnrunners = roster;
		}
		
		//QUATTRO JOKER
		/*if(args[1] == "QUA"){
			var roster = message.content.split("f!modify QUA ").slice(1,2000);
			quattrojoker = roster;
		}if(args[1] == "Quattro_Joker"){
			var roster = message.content.split("f!modify Quattro_Joker ").slice(1,2000);
			quattrojoker = roster;
		}if(args[1] == "Quattro_joker"){
			var roster = message.content.split("f!modify Quattro_joker ").slice(1,2000);
			quattrojoker = roster;
		}if(args[1] == "quattro_joker"){
			var roster = message.content.split("f!modify quattro_joker ").slice(1,2000);
			quattrojoker = roster;
		}if(args[1] == "qua"){
			var roster = message.content.split("f!modify qua ").slice(1,2000);
			quattrojoker = roster;
		}if(args[1] == "QUATTRO_JOKER"){
			var roster = message.content.split("f!modify QUATTRO_JOKER ").slice(1,2000);
			quattrojoker = roster;
		}*/

		//LEGACY
		if(args[1] == "LEG"){
			var roster = message.content.split("f!modify LEG ").slice(1,2000);
			legacy = roster;
		}if(args[1] == "leg"){
			var roster = message.content.split("f!modify leg ").slice(1,2000);
			legacy = roster;
		}
		if(args[1] == "LGC"){
			var roster = message.content.split("f!modify LGC ").slice(1,2000);
			legacy = roster;
		}if(args[1] == "lgc"){
			var roster = message.content.split("f!modify lgc ").slice(1,2000);
			legacy = roster;
		}
		if(args[1] == "Leg"){
			var roster = message.content.split("f!modify Leg ").slice(1,2000);
			legacy = roster;
		}if(args[1] == "Lgc"){
			var roster = message.content.split("f!modify Lgc ").slice(1,2000);
			legacy = roster;
		}if(args[1] == "LEGACY"){
			var roster = message.content.split("f!modify LEGACY ").slice(1,2000);
			legacy = roster;
		}if(args[1] == "Legacy"){
			var roster = message.content.split("f!modify Legacy ").slice(1,2000);
			legacy = roster;
		}if(args[1] == "legacy"){
			var roster = message.content.split("f!modify legacy ").slice(1,2000);
			legacy = roster;
		}if(args[1] == "Legacy_CF"){
			var roster = message.content.split("f!modify Legacy_CF ").slice(1,2000);
			legacy = roster;
		}if(args[1] == "legacy_cf"){
			var roster = message.content.split("f!modify legacy_cf ").slice(1,2000);
			legacy = roster;
		}if(args[1] == "LEGACY_CF"){
			var roster = message.content.split("f!modify LEGACY_CF" ).slice(1,2000);
			legacy = roster;
		}if(args[1] == "Legacy_cf"){
			var roster = message.content.split("f!modify Legacy_cf ").slice(1,2000);
			legacy = roster;
		}
		
		//INTER
		if(args[1] == "INT"){
			var roster = message.content.split("f!modify INT ").slice(1,2000);
			inter = roster;
		}if(args[1] == "Inter"){
			var roster = message.content.split("f!modify Inter ").slice(1,2000);
			inter = roster;
		}if(args[1] == "inter"){
			var roster = message.content.split("f!modify inter ").slice(1,2000);
			inter = roster;
		}if(args[1] == "INTER"){
			var roster = message.content.split("f!modify INTER ").slice(1,2000);
			inter = roster;
		}if(args[1] == "int"){
			var roster = message.content.split("f!modify int ").slice(1,2000);
			inter = roster;
		}if(args[1] == "Inter_FC"){
			var roster = message.content.split("f!modify Inter_FC ").slice(1,2000);
			inter = roster;
		}if(args[1] == "inter_fc"){
			var roster = message.content.split("f!modify inter_fc ").slice(1,2000);
			inter = roster;
		}if(args[1] == "INTER_FC"){
			var roster = message.content.split("f!modify INTER_FC ").slice(1,2000);
			inter = roster;
		}
		
		//HTH IDOLO FC
		/*if(args[1] == "HTH"){
			var roster = message.content.split("f!modify HTH ").slice(1,2000);
			hthidolo = roster;
		}if(args[1] == "hth"){
			var roster = message.content.split("f!modify hth ").slice(1,2000);
			hthidolo = roster;
		}
		if(args[1] == "IDO"){
			var roster = message.content.split("f!modify IDO ").slice(1,2000);
			hthidolo = roster;
		}if(args[1] == "ido"){
			var roster = message.content.split("f!modify ido ").slice(1,2000);
			hthidolo = roster;
		}
		if(args[1] == "Ido"){
			var roster = message.content.split("f!modify Ido ").slice(1,2000);
			hthidolo = roster;
		}if(args[1] == "Hth"){
			var roster = message.content.split("f!modify Hth ").slice(1,2000);
			hthidolo = roster;
		}if(args[1] == "HTH_IDOLO"){
			var roster = message.content.split("f!modify HTH_IDOLO ").slice(1,2000);
			hthidolo = roster;
		}if(args[1] == "Hth_idolo"){
			var roster = message.content.split("f!modify Hth_idolo ").slice(1,2000);
			hthidolo = roster;
		}if(args[1] == "hth_idolo"){
			var roster = message.content.split("f!modify hth_idolo ").slice(1,2000);
			hthidolo = roster;
		}if(args[1] == "Hth_Idolo"){
			var roster = message.content.split("f!modify Hth_Idolo ").slice(1,2000);
			hthidolo = roster;
		}if(args[1] == "hth_idolo_fc"){
			var roster = message.content.split("f!modify hth_idolo_fc ").slice(1,2000);
			hthidolo = roster;
		}if(args[1] == "HTH_IDOLO_FC"){
			var roster = message.content.split("f!modify HTH_IDOLO_FC" ).slice(1,2000);
			hthidolo = roster;
		}if(args[1] == "Hth_Idolo_Fc"){
			var roster = message.content.split("f!modify Hth_Idolo_Fc ").slice(1,2000);
			hthidolo = roster;
		}/*/
		
		//FC GASTON
		/*if(args[1] == "GAS"){
			var roster = message.content.split("f!modify GAS ").slice(1,2000);
			gaston = roster;
		}if(args[1] == "gas"){
			var roster = message.content.split("f!modify gas ").slice(1,2000);
			gaston = roster;
		}
		if(args[1] == "GST"){
			var roster = message.content.split("f!modify GST ").slice(1,2000);
			gaston = roster;
		}if(args[1] == "gst"){
			var roster = message.content.split("f!modify gst ").slice(1,2000);
			gaston = roster;
		}
		if(args[1] == "Gas"){
			var roster = message.content.split("f!modify Gas ").slice(1,2000);
			gaston = roster;
		}if(args[1] == "Gst"){
			var roster = message.content.split("f!modify Gst ").slice(1,2000);
			gaston = roster;
		}if(args[1] == "GASTON"){
			var roster = message.content.split("f!modify GASTON ").slice(1,2000);
			gaston = roster;
		}if(args[1] == "Gaston"){
			var roster = message.content.split("f!modify Gaston ").slice(1,2000);
			gaston = roster;
		}if(args[1] == "gaston"){
			var roster = message.content.split("f!modify gaston ").slice(1,2000);
			gaston = roster;
		}if(args[1] == "Gaston_FC"){
			var roster = message.content.split("f!modify Gaston_FC ").slice(1,2000);
			gaston = roster;
		}if(args[1] == "gaston_fc"){
			var roster = message.content.split("f!modify gaston_fc ").slice(1,2000);
			gaston = roster;
		}if(args[1] == "GASTON_FC"){
			var roster = message.content.split("f!modify GASTON_FC" ).slice(1,2000);
			gaston = roster;
		}if(args[1] == "Gaston_fc"){
			var roster = message.content.split("f!modify Gaston_fc ").slice(1,2000);
			gaston = roster;
		}*/
		
		//GLIZDY
		if(args[1] == "GLZ"){
			var roster = message.content.split("f!modify GLZ ").slice(1,2000);
			glizdy = roster;
		}if(args[1] == "Glizdy"){
			var roster = message.content.split("f!modify Glizdy ").slice(1,2000);
			glizdy = roster;
		}if(args[1] == "glizdy"){
			var roster = message.content.split("f!modify glizdy ").slice(1,2000);
			glizdy = roster;
		}if(args[1] == "GLIZDY"){
			var roster = message.content.split("f!modify GLIZDY ").slice(1,2000);
			glizdy = roster;
		}if(args[1] == "glz"){
			var roster = message.content.split("f!modify glz ").slice(1,2000);
			glizdy = roster;
		}if(args[1] == "gli"){
			var roster = message.content.split("f!modify gli ").slice(1,2000);
			glizdy = roster;
		}if(args[1] == "GLI"){
			var roster = message.content.split("f!modify GLI ").slice(1,2000);
			glizdy = roster;
		}
		
		//GAMBA OSAKA
		/*if(args[1] == "Gamba"){
			var roster = message.content.split("f!modify Gamba ").slice(1,2000);
			gambaosaka = roster;
		}if(args[1] == "gamba"){
			var roster = message.content.split("f!modify gamba ").slice(1,2000);
			gambaosaka = roster;
		}if(args[1] == "Gao"){
			var roster = message.content.split("f!modify Gao ").slice(1,2000);
			gambaosaka = roster;
		}if(args[1] == "gao"){
			var roster = message.content.split("f!modify gao ").slice(1,2000);
			gambaosaka = roster;
		}if(args[1] == "GAO"){
			var roster = message.content.split("f!modify GAO ").slice(1,2000);
			gambaosaka = roster;
		}if(args[1] == "Gmo"){
			var roster = message.content.split("f!modify Gmo ").slice(1,2000);
			gambaosaka = roster;
		}if(args[1] == "gmo"){
			var roster = message.content.split("f!modify gmo ").slice(1,2000);
			gambaosaka = roster;
		}if(args[1] == "GMO"){
			var roster = message.content.split("f!modify GMO ").slice(1,2000);
			gambaosaka = roster;
		}if(args[1] == "GAMBA"){
			var roster = message.content.split("f!modify GAMBA ").slice(1,2000);
			gambaosaka = roster;
		}if(args[1] == "gamba_osaka"){
			var roster = message.content.split("f!modify gamba_osaka ").slice(1,2000);
			gambaosaka = roster;
		}if(args[1] == "Gamba_osaka"){
			var roster = message.content.split("f!modify Gamba_osaka ").slice(1,2000);
			gambaosaka = roster;
		}if(args[1] == "Gamba_Osaka"){
			var roster = message.content.split("f!modify Gamba_Osaka ").slice(1,2000);
			gambaosaka = roster;
		}if(args[1] == "GAMBA_OSAKA"){
			var roster = message.content.split("f!modify GAMBA_OSAKA ").slice(1,2000);
			gambaosaka = roster;
		}if(args[1] == "gamba_Osaka"){
			var roster = message.content.split("f!modify gamba_Osaka ").slice(1,2000);
			gambaosaka = roster;
		}if(args[1] == "gambaosaka"){
			var roster = message.content.split("f!modify gambaosaka ").slice(1,2000);
			gambaosaka = roster;
		}if(args[1] == "GAMBAOSAKA"){
			var roster = message.content.split("f!modify GAMBAOSAKA ").slice(1,2000);
			gambaosaka = roster;
		}if(args[1] == "Gambaosaka"){
			var roster = message.content.split("f!modify Gambaosaka ").slice(1,2000);
			gambaosaka = roster;
		}*/
		
		//DREAMING PIRATES
		/*if(args[1] == "Dreaming"){
			var roster = message.content.split("f!modify Dreaming ").slice(1,2000);
			dreamingpirates = roster;
		}if(args[1] == "dreaming"){
			var roster = message.content.split("f!modify dreaming ").slice(1,2000);
			dreamingpirates = roster;
		}if(args[1] == "Dp"){
			var roster = message.content.split("f!modify Dp ").slice(1,2000);
			dreamingpirates = roster;
		}if(args[1] == "dp"){
			var roster = message.content.split("f!modify dp ").slice(1,2000);
			dreamingpirates = roster;
		}if(args[1] == "DP"){
			var roster = message.content.split("f!modify DP ").slice(1,2000);
			dreamingpirates = roster;
		}if(args[1] == "DREAMING"){
			var roster = message.content.split("f!modify DREAMING ").slice(1,2000);
			dreamingpirates = roster;
		}if(args[1] == "dreaming_pirates"){
			var roster = message.content.split("f!modify dreaming_pirates ").slice(1,2000);
			dreamingpirates = roster;
		}if(args[1] == "Dreaming_pirates"){
			var roster = message.content.split("f!modify Dreaming_pirates ").slice(1,2000);
			dreamingpirates = roster;
		}if(args[1] == "Dreaming_Pirates"){
			var roster = message.content.split("f!modify Dreaming_Pirates ").slice(1,2000);
			dreamingpirates = roster;
		}if(args[1] == "DREAMING_PIRATES"){
			var roster = message.content.split("f!modify DREAMING_PIRATES ").slice(1,2000);
			dreamingpirates = roster;
		}if(args[1] == "dreaming_Pirates"){
			var roster = message.content.split("f!modify dreaming_Pirates ").slice(1,2000);
			dreamingpirates = roster;
		}if(args[1] == "dreamingpirates"){
			var roster = message.content.split("f!modify dreamingpirates ").slice(1,2000);
			dreamingpirates = roster;
		}if(args[1] == "DREAMINGPIRATES"){
			var roster = message.content.split("f!modify DREAMINGPIRATES ").slice(1,2000);
			dreamingpirates = roster;
		}if(args[1] == "Dreamingpirates"){
			var roster = message.content.split("f!modify Dreamingpirates ").slice(1,2000);
			dreamingpirates = roster;
		}*/
		
		//CRVENA ZVEZDA
		if(args[1] == "CRV"){
			var roster = message.content.split("f!modify CRV ").slice(1,2000);
			crvenazvezda = roster;
		}if(args[1] == "crv"){
			var roster = message.content.split("f!modify crv ").slice(1,2000);
			crvenazvezda = roster;
		}if(args[1] == "CVZ"){
			var roster = message.content.split("f!modify CVZ ").slice(1,2000);
			crvenazvezda = roster;
		}if(args[1] == "cvz"){
			var roster = message.content.split("f!modify cvz ").slice(1,2000);
			crvenazvezda = roster;
		}if(args[1] == "CRVENA_ZVEZDA"){
			var roster = message.content.split("f!modify CRVENA_ZVEZDA ").slice(1,2000);
			crvenazvezda = roster;
		}if(args[1] == "Crvena_Zvezda"){
			var roster = message.content.split("f!modify Crvena_Zvezda ").slice(1,2000);
			crvenazvezda = roster;
		}if(args[1] == "crvena_zvezda"){
			var roster = message.content.split("f!modify crvena_zvezda ").slice(1,2000);
			crvenazvezda = roster;
		}if(args[1] == "Crvena"){
			var roster = message.content.split("f!modify Crvena ").slice(1,2000);
			crvenazvezda = roster;
		}if(args[1] == "crvena"){
			var roster = message.content.split("f!modify crvena ").slice(1,2000);
			crvenazvezda = roster;
		}if(args[1] == "Zvezda"){
			var roster = message.content.split("f!modify Zvezda" ).slice(1,2000);
			crvenazvezda = roster;
		}if(args[1] == "zvezda"){
			var roster = message.content.split("f!modify zvezda ").slice(1,2000);
			crvenazvezda = roster;
		}

		//BLACKOUT
		if(args[1] == "BLA"){
			var roster = message.content.split("f!modify BLA ").slice(1,2000);
			blackout = roster;
		}if(args[1] == "bla"){
			var roster = message.content.split("f!modify bla ").slice(1,2000);
			blackout = roster;
		}if(args[1] == "Bla"){
			var roster = message.content.split("f!modify Bla ").slice(1,2000);
			blackout = roster;
		}if(args[1] == "BLACKOUT"){
			var roster = message.content.split("f!modify BLACKOUT ").slice(1,2000);
			blackout = roster;
		}if(args[1] == "BlackOut"){
			var roster = message.content.split("f!modify BlackOut ").slice(1,2000);
			blackout = roster;
		}if(args[1] == "blackout"){
			var roster = message.content.split("f!modify blackout ").slice(1,2000);
			blackout = roster;
		}if(args[1] == "Black_Out"){
			var roster = message.content.split("f!modify Black_Out ").slice(1,2000);
			blackout = roster;
		}if(args[1] == "black_out"){
			var roster = message.content.split("f!modify black_out ").slice(1,2000);
			blackout = roster;
		}if(args[1] == "BLACK_OUT"){
			var roster = message.content.split("f!modify BLACK_OUT" ).slice(1,2000);
			blackout = roster;
		}if(args[1] == "Blackout"){
			var roster = message.content.split("f!modify Blackout ").slice(1,2000);
			blackout = roster;
		}
		
		//ANONYMOUS FC
		/*if(args[1] == "ANO"){
			var roster = message.content.split("f!modify ANO ").slice(1,2000);
			anonymous = roster;
		}if(args[1] == "ano"){
			var roster = message.content.split("f!modify ano ").slice(1,2000);
			anonymous = roster;
		}if(args[1] == "Ano"){
			var roster = message.content.split("f!modify Ano ").slice(1,2000);
			anonymous = roster;
		}if(args[1] == "ANY"){
			var roster = message.content.split("f!modify ANY ").slice(1,2000);
			anonymous = roster;
		}if(args[1] == "any"){
			var roster = message.content.split("f!modify any ").slice(1,2000);
			anonymous = roster;
		}if(args[1] == "Any"){
			var roster = message.content.split("f!modify Any ").slice(1,2000);
			anonymous = roster;
		}if(args[1] == "ANONYMOUS"){
			var roster = message.content.split("f!modify ANONYMOUS ").slice(1,2000);
			anonymous = roster;
		}if(args[1] == "Anonymous"){
			var roster = message.content.split("f!modify Anonymous ").slice(1,2000);
			anonymous = roster;
		}if(args[1] == "anonymous"){
			var roster = message.content.split("f!modify anonymous ").slice(1,2000);
			anonymous = roster;
		}if(args[1] == "Anonymous_FC"){
			var roster = message.content.split("f!modify Anonymous_FC ").slice(1,2000);
			anonymous = roster;
		}if(args[1] == "anonymous_fc"){
			var roster = message.content.split("f!modify anonymous_fc ").slice(1,2000);
			anonymous = roster;
		}if(args[1] == "ANONYMOUS_FC"){
			var roster = message.content.split("f!modify ANONYMOUS_FC" ).slice(1,2000);
			anonymous = roster;
		}if(args[1] == "anonymous_FC"){
			var roster = message.content.split("f!modify anonymous_FC ").slice(1,2000);
			anonymous = roster;
		}*/
		
	}	    
		    
//SEASON 1
	/*if(message.author.id == "634872299069374488"){
		message.delete();
		//WANDERERS
		if(args[1] == "WAN"){
			var roster = message.content.split("f!modify WAN ").slice(1,2000);
			wanderers = roster;
		}if(args[1] == "Wanderers"){
			var roster = message.content.split("f!modify WAN ").slice(1,2000);
			wanderers = roster;
		}if(args[1] == "wanderers"){
			var roster = message.content.split("f!modify WAN ").slice(1,2000);
			wanderers = roster;
		}if(args[1] == "WANDERERS"){
			var roster = message.content.split("f!modify WANDERERS ").slice(1,2000);
			wanderers = roster;
		}if(args[1] == "wan"){
			var roster = message.content.split("f!modify WAN ").slice(1,2000);
			wanderers = roster;
		}
		
		//VARNATEAM FC
		if(args[1] == "VAR"){
			var roster = message.content.split("f!modify VAR ").slice(1,2000);
			varnateamfc = roster;
		}if(args[1] == "VarnaTeam_FC"){
			var roster = message.content.split("f!modify VarnaTeam_FC ").slice(1,2000);
			varnateamfc = roster;
		}if(args[1] == "varnateam_fc"){
			var roster = message.content.split("f!modify varnateam_fc ").slice(1,2000);
			varnateamfc = roster;
		}if(args[1] == "var"){
			var roster = message.content.split("f!modify var ").slice(1,2000);
			varnateamfc = roster;
		}if(args[1] == "Varna"){
			var roster = message.content.split("f!modify Varna ").slice(1,2000);
			varnateamfc = roster;
		}if(args[1] == "varna"){
			var roster = message.content.split("f!modify varna ").slice(1,2000);
			varnateamfc = roster;
		}if(args[1] == "Varna_FC"){
			var roster = message.content.split("f!modify Varna_FC ").slice(1,2000);
			varnateamfc = roster;
		}if(args[1] == "varna_fc"){
			var roster = message.content.split("f!modify varna_fc ").slice(1,2000);
			varnateamfc = roster;
		}if(args[1] == "VARNA"){
			var roster = message.content.split("f!modify VARNA ").slice(1,2000);
			varnateamfc = roster;
		}
		
		/*///TRYAGAIN
		/*if(args[1] == "TRY"){
			var roster = message.content.split("f!modify TRY ").slice(1,2000);
			tryagain = roster;
		}if(args[1] == "Try_Again"){
			var roster = message.content.split("f!modify Try_Again ").slice(1,2000);
			tryagain = roster;
		}if(args[1] == "Try_again"){
			var roster = message.content.split("f!modify Try_again ").slice(1,2000);
			tryagain = roster;
		}if(args[1] == "try_again"){
			var roster = message.content.split("f!modify try_again ").slice(1,2000);
			tryagain = roster;
		}if(args[1] == "try"){
			var roster = message.content.split("f!modify try ").slice(1,2000);
			tryagain = roster;
		}if(args[1] == "TRY_AGAIN"){
			var roster = message.content.split("f!modify TRY_AGAIN ").slice(1,2000);
			tryagain = roster;
		}if(args[1] == "TRYAGAIN"){
			var roster = message.content.split("f!modify TRYAGAIN ").slice(1,2000);
			tryagain = roster;
		}if(args[1] == "TryAgain"){
			var roster = message.content.split("f!modify TryAgain ").slice(1,2000);
			tryagain = roster;
		}if(args[1] == "tryagain"){
			var roster = message.content.split("f!modify tryagain ").slice(1,2000);
			tryagain = roster;
		}*/
		
		//SCARY BATS
		/*if(args[1] == "SCB"){
			var roster = message.content.split("f!modify SCB ").slice(1,2000);
			scarybats = roster;
		}if(args[1] == "SCARY_BATS"){
			var roster = message.content.split("f!modify SCARY_BATS ").slice(1,2000);
			scarybats = roster;
		}if(args[1] == "Scary_Bats"){
			var roster = message.content.split("f!modify Scary_Bats ").slice(1,2000);
			scarybats = roster;
		}if(args[1] == "scb"){
			var roster = message.content.split("f!modify scb ").slice(1,2000);
			scarybats = roster;
		}if(args[1] == "Scary"){
			var roster = message.content.split("f!modify Scary ").slice(1,2000);
			scarybats = roster;
		}if(args[1] == "scary"){
			var roster = message.content.split("f!modify scary ").slice(1,2000);
			scarybats = roster;
		}if(args[1] == "Bats"){
			var roster = message.content.split("f!modify Bats" ).slice(1,2000);
			scarybats = roster;
		}if(args[1] == "bats"){
			var roster = message.content.split("f!modify bats ").slice(1,2000);
			scarybats = roster;
		}if(args[1] == "SCA"){
			var roster = message.content.split("f!modify SCA" ).slice(1,2000);
			scarybats = roster;
		}if(args[1] == "sca"){
			var roster = message.content.split("f!modify sca ").slice(1,2000);
			scarybats = roster;
		}
		
		//QUATTRO JOKER
		if(args[1] == "QUA"){
			var roster = message.content.split("f!modify QUA ").slice(1,2000);
			quattrojoker = roster;
		}if(args[1] == "Quattro_Joker"){
			var roster = message.content.split("f!modify Quattro_Joker ").slice(1,2000);
			quattrojoker = roster;
		}if(args[1] == "Quattro_joker"){
			var roster = message.content.split("f!modify Quattro_joker ").slice(1,2000);
			quattrojoker = roster;
		}if(args[1] == "quattro_joker"){
			var roster = message.content.split("f!modify quattro_joker ").slice(1,2000);
			quattrojoker = roster;
		}if(args[1] == "qua"){
			var roster = message.content.split("f!modify qua ").slice(1,2000);
			quattrojoker = roster;
		}if(args[1] == "QUATTRO_JOKER"){
			var roster = message.content.split("f!modify QUATTRO_JOKER ").slice(1,2000);
			quattrojoker = roster;
		}
		
		//INTER
		if(args[1] == "INT"){
			var roster = message.content.split("f!modify INT ").slice(1,2000);
			inter = roster;
		}if(args[1] == "Inter"){
			var roster = message.content.split("f!modify Inter ").slice(1,2000);
			inter = roster;
		}if(args[1] == "inter"){
			var roster = message.content.split("f!modify inter ").slice(1,2000);
			inter = roster;
		}if(args[1] == "INTER"){
			var roster = message.content.split("f!modify INTER ").slice(1,2000);
			inter = roster;
		}if(args[1] == "int"){
			var roster = message.content.split("f!modify int ").slice(1,2000);
			inter = roster;
		}if(args[1] == "Inter_FC"){
			var roster = message.content.split("f!modify Inter_FC ").slice(1,2000);
			inter = roster;
		}if(args[1] == "inter_fc"){
			var roster = message.content.split("f!modify inter_fc ").slice(1,2000);
			inter = roster;
		}if(args[1] == "INTER_FC"){
			var roster = message.content.split("f!modify INTER_FC ").slice(1,2000);
			inter = roster;
		}
		
		//GLIZDY
		if(args[1] == "GLZ"){
			var roster = message.content.split("f!modify GLZ ").slice(1,2000);
			glizdy = roster;
		}if(args[1] == "Glizdy"){
			var roster = message.content.split("f!modify Glizdy ").slice(1,2000);
			glizdy = roster;
		}if(args[1] == "glizdy"){
			var roster = message.content.split("f!modify glizdy ").slice(1,2000);
			glizdy = roster;
		}if(args[1] == "GLIZDY"){
			var roster = message.content.split("f!modify GLIZDY ").slice(1,2000);
			glizdy = roster;
		}if(args[1] == "glz"){
			var roster = message.content.split("f!modify glz ").slice(1,2000);
			glizdy = roster;
		}if(args[1] == "gli"){
			var roster = message.content.split("f!modify gli ").slice(1,2000);
			glizdy = roster;
		}if(args[1] == "GLI"){
			var roster = message.content.split("f!modify GLI ").slice(1,2000);
			glizdy = roster;
		}
		
		//EAGLES OF CARTHAGE
		if(args[1] == "EAC"){
			var roster = message.content.split("f!modify EAC ").slice(1,2000);
			eaglesOfCarthage = roster;
		}if(args[1] == "Eagles_Of_Carthage"){
			var roster = message.content.split("f!modify Eagles_Of_Carthage ").slice(1,2000);
			eaglesOfCarthage = roster;
		}if(args[1] == "eagles_of_carthage"){
			var roster = message.content.split("f!modify eagles_of_carthage ").slice(1,2000);
			eaglesOfCarthage = roster;
		}if(args[1] == "EAGLES_OF_CARTHAGE"){
			var roster = message.content.split("f!modify EAGLES_OF_CARTHAGE ").slice(1,2000);
			eaglesOfCarthage = roster;
		}if(args[1] == "eac"){
			var roster = message.content.split("f!modify eac ").slice(1,2000);
			eaglesOfCarthage = roster;
		}if(args[1] == "eag"){
			var roster = message.content.split("f!modify eag ").slice(1,2000);
			eaglesOfCarthage = roster;
		}if(args[1] == "EAG"){
			var roster = message.content.split("f!modify EAG ").slice(1,2000);
			eaglesOfCarthage = roster;
		}if(args[1] == "EAGLES"){
			var roster = message.content.split("f!modify EAGLES ").slice(1,2000);
			eaglesOfCarthage = roster;
		}if(args[1] == "CARTHAGE"){
			var roster = message.content.split("f!modify CARTHAGE ").slice(1,2000);
			eaglesOfCarthage = roster;
		}if(args[1] == "eagles"){
			var roster = message.content.split("f!modify eagles ").slice(1,2000);
			eaglesOfCarthage = roster;
		}if(args[1] == "carthage"){
			var roster = message.content.split("f!modify carthage ").slice(1,2000);
			eaglesOfCarthage = roster;
		}if(args[1] == "Eagles"){
			var roster = message.content.split("f!modify Eagles ").slice(1,2000);
			eaglesOfCarthage = roster;
		}if(args[1] == "Carthage"){
			var roster = message.content.split("f!modify Carthage ").slice(1,2000);
			eaglesOfCarthage = roster;
		}
		
		//CRVENA ZVEZDA
		if(args[1] == "CRV"){
			var roster = message.content.split("f!modify CRV ").slice(1,2000);
			crvenazvezda = roster;
		}if(args[1] == "crv"){
			var roster = message.content.split("f!modify crv ").slice(1,2000);
			crvenazvezda = roster;
		}if(args[1] == "CVZ"){
			var roster = message.content.split("f!modify CVZ ").slice(1,2000);
			crvenazvezda = roster;
		}if(args[1] == "cvz"){
			var roster = message.content.split("f!modify cvz ").slice(1,2000);
			crvenazvezda = roster;
		}if(args[1] == "CRVENA_ZVEZDA"){
			var roster = message.content.split("f!modify CRVENA_ZVEZDA ").slice(1,2000);
			crvenazvezda = roster;
		}if(args[1] == "Crvena_Zvezda"){
			var roster = message.content.split("f!modify Crvena_Zvezda ").slice(1,2000);
			crvenazvezda = roster;
		}if(args[1] == "crvena_zvezda"){
			var roster = message.content.split("f!modify crvena_zvezda ").slice(1,2000);
			crvenazvezda = roster;
		}if(args[1] == "Crvena"){
			var roster = message.content.split("f!modify Crvena ").slice(1,2000);
			crvenazvezda = roster;
		}if(args[1] == "crvena"){
			var roster = message.content.split("f!modify crvena ").slice(1,2000);
			crvenazvezda = roster;
		}if(args[1] == "Zvezda"){
			var roster = message.content.split("f!modify Zvezda" ).slice(1,2000);
			crvenazvezda = roster;
		}if(args[1] == "zvezda"){
			var roster = message.content.split("f!modify zvezda ").slice(1,2000);
			crvenazvezda = roster;
		}
		
		//BLACKOUT
		if(args[1] == "BLA"){
			var roster = message.content.split("f!modify BLA ").slice(1,2000);
			blackout = roster;
		}if(args[1] == "bla"){
			var roster = message.content.split("f!modify bla ").slice(1,2000);
			blackout = roster;
		}if(args[1] == "BLACKOUT"){
			var roster = message.content.split("f!modify BLACKOUT ").slice(1,2000);
			blackout = roster;
		}if(args[1] == "BlackOut"){
			var roster = message.content.split("f!modify BlackOut ").slice(1,2000);
			blackout = roster;
		}if(args[1] == "blackout"){
			var roster = message.content.split("f!modify blackout ").slice(1,2000);
			blackout = roster;
		}if(args[1] == "Black_Out"){
			var roster = message.content.split("f!modify Black_Out ").slice(1,2000);
			blackout = roster;
		}if(args[1] == "black_out"){
			var roster = message.content.split("f!modify black_out ").slice(1,2000);
			blackout = roster;
		}if(args[1] == "BLACK_OUT"){
			var roster = message.content.split("f!modify BLACK_OUT" ).slice(1,2000);
			blackout = roster;
		}if(args[1] == "Blackout"){
			var roster = message.content.split("f!modify Blackout ").slice(1,2000);
			blackout = roster;
		}
		
		
	}	*/	    
//break;
		/*    
	    
case "add":
	if(message.author.id == "634872299069374488"){
		message.delete();
		//WANDERERS
		if(args[1] == "WAN"){
			var roster = message.content.split("f!modify WAN ").slice(1,2000);
			wanderers += `
` + roster;
		}if(args[1] == "Wanderers"){
			var roster = message.content.split("f!modify WAN ").slice(1,2000);
			wanderers += `
` + roster;
		}if(args[1] == "wanderers"){
			var roster = message.content.split("f!modify WAN ").slice(1,2000);
			wanderers += `
` + roster;
		}if(args[1] == "WANDERERS"){
			var roster = message.content.split("f!modify WANDERERS ").slice(1,2000);
			wanderers += `
` + roster;
		}if(args[1] == "wan"){
			var roster = message.content.split("f!modify WAN ").slice(1,2000);
			wanderers += `
` + roster;
		}
		
		//VARNATEAM FC
		if(args[1] == "VAR"){
			var roster = message.content.split("f!modify VAR ").slice(1,2000);
			varnateamfc += `
` + roster;
		}if(args[1] == "VarnaTeam_FC"){
			var roster = message.content.split("f!modify VarnaTeam_FC ").slice(1,2000);
			varnateamfc += `
` + roster;
		}if(args[1] == "varnateam_fc"){
			var roster = message.content.split("f!modify varnateam_fc ").slice(1,2000);
			varnateamfc += `
` + roster;
		}if(args[1] == "var"){
			var roster = message.content.split("f!modify var ").slice(1,2000);
			varnateamfc += `
` + roster;
		}if(args[1] == "Varna"){
			var roster = message.content.split("f!modify Varna ").slice(1,2000);
			varnateamfc += `
` + roster;
		}if(args[1] == "varna"){
			var roster = message.content.split("f!modify varna ").slice(1,2000);
			varnateamfc += `
` + roster;
		}if(args[1] == "Varna_FC"){
			var roster = message.content.split("f!modify Varna_FC ").slice(1,2000);
			varnateamfc += `
` + roster;
		}if(args[1] == "varna_fc"){
			var roster = message.content.split("f!modify varna_fc ").slice(1,2000);
			varnateamfc += `
` + roster;
		}if(args[1] == "VARNA"){
			var roster = message.content.split("f!modify VARNA ").slice(1,2000);
			varnateamfc += `
` + roster;
		}
		
		//TRYAGAIN
		/*if(args[1] == "TRY"){
			var roster = message.content.split("f!modify TRY ").slice(1,2000);
			tryagain = roster;
		}if(args[1] == "Try_Again"){
			var roster = message.content.split("f!modify Try_Again ").slice(1,2000);
			tryagain += `
` + roster;
		}if(args[1] == "Try_again"){
			var roster = message.content.split("f!modify Try_again ").slice(1,2000);
			tryagain += `
` + roster;
		}if(args[1] == "try_again"){
			var roster = message.content.split("f!modify try_again ").slice(1,2000);
			tryagain += `
` + roster;
		}if(args[1] == "try"){
			var roster = message.content.split("f!modify try ").slice(1,2000);
			tryagain += `
` + roster;
		}if(args[1] == "TRY_AGAIN"){
			var roster = message.content.split("f!modify TRY_AGAIN ").slice(1,2000);
			tryagain += `
` + roster;
		}if(args[1] == "TRYAGAIN"){
			var roster = message.content.split("f!modify TRYAGAIN ").slice(1,2000);
			tryagain += `
` + roster;
		}if(args[1] == "TryAgain"){
			var roster = message.content.split("f!modify TryAgain ").slice(1,2000);
			tryagain += `
` + roster;
		}if(args[1] == "tryagain"){
			var roster = message.content.split("f!modify tryagain ").slice(1,2000);
			tryagain += `
` + roster;
		}-*//*
		
		//SCARY BATS
		/*if(args[1] == "SCB"){
			var roster = message.content.split("f!modify SCB ").slice(1,2000);
			scarybats += `
` + roster;
		}if(args[1] == "SCARY_BATS"){
			var roster = message.content.split("f!modify SCARY_BATS ").slice(1,2000);
			scarybats += `
` + roster;
		}if(args[1] == "Scary_Bats"){
			var roster = message.content.split("f!modify Scary_Bats ").slice(1,2000);
			scarybats += `
` + roster;
		}if(args[1] == "scb"){
			var roster = message.content.split("f!modify scb ").slice(1,2000);
			scarybats += `
` + roster;
		}if(args[1] == "Scary"){
			var roster = message.content.split("f!modify Scary ").slice(1,2000);
			scarybats += `
` + roster;
		}if(args[1] == "scary"){
			var roster = message.content.split("f!modify scary ").slice(1,2000);
			scarybats += `
` + roster;
		}if(args[1] == "Bats"){
			var roster = message.content.split("f!modify Bats" ).slice(1,2000);
			scarybats += `
` + roster;
		}if(args[1] == "bats"){
			var roster = message.content.split("f!modify bats ").slice(1,2000);
			scarybats += `
` + roster;
		}if(args[1] == "SCA"){
			var roster = message.content.split("f!modify SCA" ).slice(1,2000);
			scarybats += `
` + roster;
		}if(args[1] == "sca"){
			var roster = message.content.split("f!modify sca ").slice(1,2000);
			scarybats += `
` + roster;
		}
		
		//QUATTRO JOKER
		if(args[1] == "QUA"){
			var roster = message.content.split("f!modify QUA ").slice(1,2000);
			quattrojoker += `
` + roster;
		}if(args[1] == "Quattro_Joker"){
			var roster = message.content.split("f!modify Quattro_Joker ").slice(1,2000);
			quattrojoker += `
` + roster;
		}if(args[1] == "Quattro_joker"){
			var roster = message.content.split("f!modify Quattro_joker ").slice(1,2000);
			quattrojoker += `
` + roster;
		}if(args[1] == "quattro_joker"){
			var roster = message.content.split("f!modify quattro_joker ").slice(1,2000);
			quattrojoker += `
` + roster;
		}if(args[1] == "qua"){
			var roster = message.content.split("f!modify qua ").slice(1,2000);
			quattrojoker += `
` + roster;
		}if(args[1] == "QUATTRO_JOKER"){
			var roster = message.content.split("f!modify QUATTRO_JOKER ").slice(1,2000);
			quattrojoker += `
` + roster;
		}
		
		//INTER
		if(args[1] == "INT"){
			var roster = message.content.split("f!modify INT ").slice(1,2000);
			inter += `
` + roster;
		}if(args[1] == "Inter"){
			var roster = message.content.split("f!modify Inter ").slice(1,2000);
			inter += `
` + roster;
		}if(args[1] == "inter"){
			var roster = message.content.split("f!modify inter ").slice(1,2000);
			inter += `
` + roster;
		}if(args[1] == "INTER"){
			var roster = message.content.split("f!modify INTER ").slice(1,2000);
			inter += `
` + roster;
		}if(args[1] == "int"){
			var roster = message.content.split("f!modify int ").slice(1,2000);
			inter += `
` + roster;
		}if(args[1] == "Inter_FC"){
			var roster = message.content.split("f!modify Inter_FC ").slice(1,2000);
			inter += `
` + roster;
		}if(args[1] == "inter_fc"){
			var roster = message.content.split("f!modify inter_fc ").slice(1,2000);
			inter += `
` + roster;
		}if(args[1] == "INTER_FC"){
			var roster = message.content.split("f!modify INTER_FC ").slice(1,2000);
			inter += `
` + roster;
		}
		
		//GLIZDY
		if(args[1] == "GLZ"){
			var roster = message.content.split("f!modify GLZ ").slice(1,2000);
			glizdy += `
` + roster;
		}if(args[1] == "Glizdy"){
			var roster = message.content.split("f!modify Glizdy ").slice(1,2000);
			glizdy += `
` + roster;
		}if(args[1] == "glizdy"){
			var roster = message.content.split("f!modify glizdy ").slice(1,2000);
			glizdy += `
` + roster;
		}if(args[1] == "GLIZDY"){
			var roster = message.content.split("f!modify GLIZDY ").slice(1,2000);
			glizdy += `
` + roster;
		}if(args[1] == "glz"){
			var roster = message.content.split("f!modify glz ").slice(1,2000);
			glizdy += `
` + roster;
		}if(args[1] == "gli"){
			var roster = message.content.split("f!modify gli ").slice(1,2000);
			glizdy += `
` + roster;
		}if(args[1] == "GLI"){
			var roster = message.content.split("f!modify GLI ").slice(1,2000);
			glizdy += `
` + roster;
		}
		
		//EAGLES OF CARTHAGE
		if(args[1] == "EAC"){
			var roster = message.content.split("f!modify EAC ").slice(1,2000);
			eaglesOfCarthage += `
` + roster;
		}if(args[1] == "Eagles_Of_Carthage"){
			var roster = message.content.split("f!modify Eagles_Of_Carthage ").slice(1,2000);
			eaglesOfCarthage += `
` + roster;
		}if(args[1] == "eagles_of_carthage"){
			var roster = message.content.split("f!modify eagles_of_carthage ").slice(1,2000);
			eaglesOfCarthage += `
` + roster;
		}if(args[1] == "EAGLES_OF_CARTHAGE"){
			var roster = message.content.split("f!modify EAGLES_OF_CARTHAGE ").slice(1,2000);
			eaglesOfCarthage += `
` + roster;
		}if(args[1] == "eac"){
			var roster = message.content.split("f!modify eac ").slice(1,2000);
			eaglesOfCarthage += `
` + roster;
		}if(args[1] == "eag"){
			var roster = message.content.split("f!modify eag ").slice(1,2000);
			eaglesOfCarthage += `
` + roster;
		}if(args[1] == "EAG"){
			var roster = message.content.split("f!modify EAG ").slice(1,2000);
			eaglesOfCarthage += `
` + roster;
		}if(args[1] == "EAGLES"){
			var roster = message.content.split("f!modify EAGLES ").slice(1,2000);
			eaglesOfCarthage += `
` + roster;
		}if(args[1] == "CARTHAGE"){
			var roster = message.content.split("f!modify CARTHAGE ").slice(1,2000);
			eaglesOfCarthage += `
` + roster;
		}if(args[1] == "eagles"){
			var roster = message.content.split("f!modify eagles ").slice(1,2000);
			eaglesOfCarthage += `
` + roster;
		}if(args[1] == "carthage"){
			var roster = message.content.split("f!modify carthage ").slice(1,2000);
			eaglesOfCarthage += `
` + roster;
		}if(args[1] == "Eagles"){
			var roster = message.content.split("f!modify Eagles ").slice(1,2000);
			eaglesOfCarthage += `
` + roster;
		}if(args[1] == "Carthage"){
			var roster = message.content.split("f!modify Carthage ").slice(1,2000);
			eaglesOfCarthage += `
` +  roster;
		}
		
		//CRVENA ZVEZDA
		if(args[1] == "CRV"){
			var roster = message.content.split("f!modify CRV ").slice(1,2000);
			crvenazvezda += `
` +  roster;
		}if(args[1] == "crv"){
			var roster = message.content.split("f!modify crv ").slice(1,2000);
			crvenazvezda += `
` +  roster;
		}if(args[1] == "CVZ"){
			var roster = message.content.split("f!modify CVZ ").slice(1,2000);
			crvenazvezda += `
` +  roster;
		}if(args[1] == "cvz"){
			var roster = message.content.split("f!modify cvz ").slice(1,2000);
			crvenazvezda += `
` +  roster;
		}if(args[1] == "CRVENA_ZVEZDA"){
			var roster = message.content.split("f!modify CRVENA_ZVEZDA ").slice(1,2000);
			crvenazvezda += `
` +  roster;
		}if(args[1] == "Crvena_Zvezda"){
			var roster = message.content.split("f!modify Crvena_Zvezda ").slice(1,2000);
			crvenazvezda += `
` +  roster;
		}if(args[1] == "crvena_zvezda"){
			var roster = message.content.split("f!modify crvena_zvezda ").slice(1,2000);
			crvenazvezda += `
` +  roster;
		}if(args[1] == "Crvena"){
			var roster = message.content.split("f!modify Crvena ").slice(1,2000);
			crvenazvezda += `
` +  roster;
		}if(args[1] == "crvena"){
			var roster = message.content.split("f!modify crvena ").slice(1,2000);
			crvenazvezda += `
` +  roster;
		}if(args[1] == "Zvezda"){
			var roster = message.content.split("f!modify Zvezda" ).slice(1,2000);
			crvenazvezda += `
` +  roster;
		}if(args[1] == "zvezda"){
			var roster = message.content.split("f!modify zvezda ").slice(1,2000);
			crvenazvezda += `
` +  roster;
		}
		
		//BLACKOUT
		if(args[1] == "BLA"){
			var roster = message.content.split("f!modify BLA ").slice(1,2000);
			blackout += `
` +  roster;
		}if(args[1] == "bla"){
			var roster = message.content.split("f!modify bla ").slice(1,2000);
			blackout += `
` +  roster;
		}if(args[1] == "BLACKOUT"){
			var roster = message.content.split("f!modify BLACKOUT ").slice(1,2000);
			blackout += `
` +  roster;
		}if(args[1] == "BlackOut"){
			var roster = message.content.split("f!modify BlackOut ").slice(1,2000);
			blackout += `
` +  roster;
		}if(args[1] == "blackout"){
			var roster = message.content.split("f!modify blackout ").slice(1,2000);
			blackout += `
` +  roster;
		}if(args[1] == "Black_Out"){
			var roster = message.content.split("f!modify Black_Out ").slice(1,2000);
			blackout += `
` +  roster;
		}if(args[1] == "black_out"){
			var roster = message.content.split("f!modify black_out ").slice(1,2000);
			blackout += `
` + roster;
		}if(args[1] == "BLACK_OUT"){
			var roster = message.content.split("f!modify BLACK_OUT" ).slice(1,2000);
			blackout += `
` + roster;
		}if(args[1] == "Blackout"){
			var roster = message.content.split("f!modify Blackout ").slice(1,2000);
			blackout += `
` + roster;
		}
		
    
	}		    
break;		    
		    
		    
/*case "start":
    message.channel.send({embed: new Discord.RichEmbed()
        .setColor('#00FFFF')
        .setImage('https://cdn.discordapp.com/attachments/704829826002845787/705155997156507789/FSL_WELCOME.png')
       })

                      const embed = new Discord.RichEmbed()
                      .setColor('#FF00FF')
                      .setTitle("Welcome in the official discord server of Futsal Stars League.")
                      .addField('Automatic verification', `You will be automatically verified after 3 hours. After being verified you will be able to access other channels and categories.`)
                      .addField('Rules to obey to', `While waiting to be verified, you must read <#704843204440358944> and <#704832990227857429> multiple times to understand them. And for sure you need to respect them.`)
                      .addField('Criticization or a wonder', ` If you have any problem or questions then pm one of the <@&704824437295415438> about it.`)
                      .addField('In the end', `Thank you for your patience.`)
                      message.channel.send({embed});

                      message.channel.send({embed: new Discord.RichEmbed()
                          .setColor('#903DEA')
                          .setTitle('Invite your friends:')
                          .setDescription('https://discord.gg/33MZZs8')
                         })

    break;*/

case "rules":
    commandsUsed++;
    if(message.channel.id == "704843204440358944"){
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#00A5A5')
            .setTitle("Rules:")
            .addField('Text channels rules:', `**I.** Respect members and staff in the server.
**II.** Don't be toxic to members or staff. Don't misbehave.
**III.** Spam is forbidden. Ghost pinging is prohibited.
**IV.** Advertising isn't allowed in the server. We prefer you don't post any nonsense picture.
**V.** Please don't harass members or swear so much. You can't use so many caps in your message.`)
            .addField('Voice channels rules:', `**I.** Respect members and staff in the server.
**II.** Don't insult somebody or record them while talking to threat them.
**III.** No narcissism. Music voice channels are made for everyone, not just for you.
**IV.** Don't use bad songs or censored ones (e.g. Ear rape, dirty rap).
**V.** You shouldn't force others to listen to a "youtube video vocally" instead of songs.`)
            //.setFooter('Command used by ' + message.author.username + "#" + message.author.discriminator)
           })
    } else if(message.channel.id != "704843204440358944"){
        //message.delete();;
        message.react('❌')
    }

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
	client.channels.get("721482377989324902").send({embed: new Discord.RichEmbed()
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
	client.channels.get("721482377989324902").send({embed: new Discord.RichEmbed()
            .setColor('#149d3c')
            .setTitle("GLIZDY")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/724245331797213184/glizdy.png')
            .setDescription(glizdy)
	})
	client.channels.get("721482377989324902").send({embed: new Discord.RichEmbed()
            .setColor('#0267ab')
            .setTitle("Inter FC")
            .setThumbnail('http://cdn.discordapp.com/attachments/706641802374938644/721717027244474388/inter.png')
            .setDescription(inter)
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

// SEASON 2

var blackout = `:flag_pt: **Tiago** (C)
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
:flag_ba: **Xaroth**
:flag_nl: **stoutpoop**`;

var inter = `:flag_pk: **DELUXE** (C)
:flag_iq: **T**
:flag_us: **9ine**
:flag_nl: **zDog**
:flag_pt: **Chazeiro**`;

var legacy = `:flag_pl: **Domino** (C)
:flag_ie: Mr.Worldwide (Co)
:flag_gb: Lcn131 (Co)
:flag_be: **Exca**
:flag_rs: **Providini**
:flag_pt: **Dominus**
:flag_pl: **BananaSS**
:flag_nl: **Itachi**
:flag_es: Dj666
:flag_white: redhood
:flag_ba: Asano`;

var masters = `:flag_nl: **Decayy'** (C)
:flag_de: **Lucas°**
:flag_dz: **Deku**
:flag_nl: xDanny
:flag_nl: ImGay123
:flag_de: Olivier Giroud
:flag_ie: hamzaa
:flag_rs: dindindindi
:flag_nl: D3
:flag_ba: Ogulin`;

var qnrunners = `:flag_ro: **Raress** (C)
:flag_ro: **vali.valentin/s.** (Co)
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
:flag_fr: **Doliprune**
:flag_gb: **Mac**
:flag_gb: **Larry**
:flag_nl: **Yujio**
:flag_gb: **n?**
:scotland: **Kenzo**
:flag_de: **mY_ruleZ^**`;

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
