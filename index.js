const Discord = require("discord.js");
const PREFIX = "f!";

var client = new Discord.Client();

client.on("guildMemberAdd", function(){
    client.user.setActivity(`${client.users.size - 1} users`,{type: "WATCHING"});
})

client.on("guildMemberRemove", function(){
    client.user.setActivity(`${client.users.size - 1} users`,{type: "WATCHING"});
})

var embedMove = "off";
var embedMove2 = "off";
var bugProtectMode = "off";

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
        /*console.log("");
        console.log("client is on!");
        console.log("");
        console.log("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬");
        console.log(`client stats:`)
        console.log(`→ ${client.guilds.size} servers.`)
        console.log(`→ ${client.users.size - 1} users.`)
        console.log("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬");*/
        /*console.log(`client is online now!
        `);
        console.log(`Messages:`)*/
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
	client.channels.get("710972037782437888").send({embed: new Discord.RichEmbed()
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
            .setColor('#0f9ac1')
            .setTitle("Letters FC")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/714114301606232144/fcletters.png')
            .setDescription(lettersfc)
        })
        client.channels.get("710972037782437888").send({embed: new Discord.RichEmbed()
            .setColor('#c7041f')
            .setTitle("Quattro Joker")
            .setThumbnail('http://cdn.discordapp.com/attachments/697867394630156300/715986168193482762/old_team.png')
            .setDescription(quattrojoker)
        })
        client.channels.get("710972037782437888").send({embed: new Discord.RichEmbed()
            .setColor('#b672ff')
            .setTitle("VarnaTeam FC")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706651727402762400/varna.png')
            .setDescription(varnateamfc)
        })
        client.channels.get("710972037782437888").send({embed: new Discord.RichEmbed()
            .setColor('#c60c31')
            .setTitle("Wanderers")
            .setThumbnail('https://cdn.discordapp.com/attachments/646469539051077653/712403302695829555/wanderers.png')
            .setDescription(wanderers)
        })*/

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
	if(malo.getUTCDate() + 1 > 9){
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
		    
/*case "ping":
        const msg = await message.channel.send('Getting my ping...')
msg.edit(`Ping: **${(msg.editedTimestamp || msg.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp)}` + "ms**")
    break;
case "start":
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

case "help":
    if(message.channel.id == "705539473378639935"){
        message.delete();
    message.channel.send({embed: new Discord.RichEmbed()
        .setColor('#cd2225')
        .setTitle("Commands:")
        .addField('**Server**', `**f!rules**: Display rules of server.
**f!report**: Report somebody who broke the rules, or a bug in the client, or a certain mistake in the system.`)
        .addField('**Bot**', `**f!online**: Displays the duration of the bot connection to the server.`)
        .addField('**League**', `**f!registration**: Shows the registeration criteria/instructions.`)
        .addField('**System**', `**f!register**: Send a request to register in Futsal Stars Member.`)
        .setFooter('Command used by ' + message.author.username + "#" + message.author.discriminator)
       })
    } else if(message.channel.id != "705539473378639935"){
        //message.delete();;
        message.react('❌')
    }

break;
		    
	    case "online":
		    
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
    if(message.channel.id == "710972037782437888"){
        message.delete();
        message.channel.bulkDelete(30)
  
        message.channel.send({embed: new Discord.RichEmbed()
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
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#0f9ac1')
            .setTitle("Letters FC")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/714114301606232144/fcletters.png')
            .setDescription(lettersfc)
        })
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#c7041f')
            .setTitle("Quattro Joker")
            .setThumbnail('http://cdn.discordapp.com/attachments/697867394630156300/715986168193482762/old_team.png')
            .setDescription(quattrojoker)
        })
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#b672ff')
            .setTitle("VarnaTeam FC")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706651727402762400/varna.png')
            .setDescription(varnateamfc)
        })
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#c60c31')
            .setTitle("Wanderers")
            .setThumbnail('https://cdn.discordapp.com/attachments/646469539051077653/712403302695829555/wanderers.png')
            .setDescription(wanderers)
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
    } else if(message.channel.id != "710972037782437888"){message.react('❌')
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

var blackout = `:flag_pt: Tiago (C)
:flag_pt: Mesut
:flag_pt: monteiro
:flag_de: ozo jaa
:flag_pt: Blastoyz
:flag_pt: Suarez
:flag_pt: irv1
:flag_pt: тidus
:flag_pt: Atlas
:flag_pt: Marqzou`;

var crvenazvezda = `:flag_rs: Alpha. (C)
:flag_nl: The Wall (Co)
:flag_nl: Pyro
:flag_ma: > BW <
:flag_nl: Davidinho
:flag_ro: DA MATTEOITME its there
:flag_nl: Itachi
:flag_cz: DAVID CECH
:flag_ma: chun`;

var eaglesOfCarthage = `:flag_tn: Jovic (C)
:flag_tn: AK-47
:flag_tn: YELLOW
:flag_tn: haxtheball
:flag_tn: Pain
:flag_pl: Gaudi_8
:flag_tn: Toni_Kroox
:flag_pl: zer
:flag_ro: google
:flag_hu: Vodkasprite
:flag_pt: Ben Simmons
:flag_us: toy
:flag_us: Cipri
:flag_us: Plot
:flag_us: Dofla`;

var glizdy = `:flag_pl: Endou (C)
:flag_pl: üb (C)
:flag_hr: pirlo (Co)
:flag_pl: zaQu
:flag_pl: yennefer
:flag_pl: omgg
:flag_pl: Meireles`;

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

var lettersfc = `vali.valentin (C)
shot (Co)
chad
SALL
αgυεяσ
sc30
REMI
Thing'E
Xcsu`;

var quattrojoker = `DominoPL (C)
TheBlob (Co)
Azrod
Autentik
Doliprune
Stereo
An00xy
Merc
virgin
Daffyd`

var varnateamfc = `aWaKeN (C)
Kea97 (Co)
Nepus
Kokain
kevin
shady
Edge
stoutpoop
Matthaus`;

var wanderers = `moß (C)
MaKeKs
Tadaum
Inter
Defender
Di Maria
Isco
Gooch
marcelo12`;

client.login(process.env.TOKEN);
