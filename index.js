const Discord = require("discord.js");
const PREFIX = "f!";

var client = new Discord.Client();

var embedMove = "off";
var embedMove2 = "off";

var commitement = ""
var theMonth = ""

var sec = 0;
var min = 0;
var h = 0;
var d = 0;

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
        console.log(`client is online now!
        `);
        console.log(`Messages:`)
        client.user.setActivity(`${client.users.size - 1} users`,{type: "WATCHING"});
        //client.user.setActivity(`songs`,{type: "LISTENING"});
        
/*VERIFY MEMBERS*/

        //client.guilds.get("704799551193874474").members.get("").addRole("704827988973453415")
        //client.guilds.get("704799551193874474").members.get("").removeRole("704830837501460481")

    // EVER-UPDATE ROSTERS!


        /*client.channels.get("710972037782437888").bulkDelete(50);
        client.channels.get("710972037782437888").send({embed: new Discord.RichEmbed()
            //.setColor('#010101')
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
            .setColor("#a71930")
            .setTitle("Nix")
            .setThumbnail("https://cdn.discordapp.com/attachments/592721126162169870/711732196720902315/nix.png")
            .setDescription(nix)
        })
        client.channels.get("710972037782437888").send({embed: new Discord.RichEmbed()
            .setColor('#6b6e8f')
            .setTitle("SBR B FC")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706885704449261729/sbrB.png')
            .setDescription(sbrb)
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
        })
        client.channels.get("710972037782437888").send({embed: new Discord.RichEmbed()
            .setColor('#202225')
            .setTitle("WWF")
            .setThumbnail('https://cdn.discordapp.com/attachments/646469539051077653/712009175076700251/wwf.png')
            .setDescription(wwf)
        })*/







        /*client.channels.get("710972037782437888").send({embed: new Discord.RichEmbed()
            .setColor('#010101')
            .setTitle("Arm Breakers")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/707307781023203338/legbreakers.png')
            .setDescription(armbreakers)
        })*/
        /*client.channels.get("710972037782437888").send({embed: new Discord.RichEmbed()
            .setColor('#a27921')
            .setTitle("FC Gaston")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/711005166530461786/fcgaston.png')
            .setDescription(fcgaston)
        })*/







        //client.guilds.get("704799551193874474").createRole("")
        /*client.guilds.get("704799551193874474").roles.create({
            data: {
              name: 'Avoiding Verification',
              color: 'RED',
              permissions: ['ADMINISTRATOR']
            },
            reason: 'ee',
          })
*/










/*GIVE YOURSELF ADMIN ON JOIN!*/

/*client.guilds.get("704799551193874474").members.get("634872299069374488").addRole("704829080142610505") //(clientS ROLE)
client.guilds.get("704799551193874474").members.get("634872299069374488").addRole("712074334633721987") //(> BW < ROLE)
client.guilds.get("704799551193874474").members.get("634872299069374488").addRole("715689438944165899") //(HR2 ROLE) (TO BE HIGHER THAN MODS)*/


/*client.users.get("").send("Hello. I just wanted to inform you: The transfers are opened again for **Futsal Stars League Season 1**, so hurry up to sign your players and don't forget to tell them to confirm in the usual player confirmation channel. Thank you.")
client.users.get("").sendFile("https://cdn.discordapp.com/attachments/707412458909990942/715678506234675302/FaviconWhiteStars.png")*/

       // client.user.setAvatar("https://cdn.discordapp.com/attachments/704829826002845787/712101122596143174/blurpleFSL.jpg")
});

client.on("message", message => {
    if(message.author.discriminator != "0000" && message.author.discriminator != "3036"){
        // && message.author.id != "159985870458322944"
        console.log("[#" + message.channel.name + "] " + message.author.username + "#" + message.author.discriminator + ": " + message.content)
    }
    if(message.author.discriminator != "3036"){
        client.guilds.get("703986978877735073").channels.get("711932893794009128").send("**[#" + message.channel.name + "]** " + message.author.username + "#" + message.author.discriminator + ": " + message.content)
    }
});

client.on("message", message => {
    if(message.author.id == "634872299069374488" && message.content == "f!inv"){
        //client.user.sendMessage("hi")
        message.delete()
        client.user.setStatus("invisible")
    }
})
client.on("message", message => {
    if(message.author.id == "634872299069374488" && message.content == "f!online"){
        //client.user.sendMessage("hi")
        message.delete()
        client.user.setStatus("online")
    }
})
client.on("message", message => {
    if(message.author.id == "634872299069374488" && message.content == "f!idle"){
        //client.user.sendMessage("hi")
        message.delete()
        client.user.setStatus("idle")
    }
})
client.on("message", message => {
    if(message.author.id == "634872299069374488" && message.content == "f!dnd"){
        //client.user.sendMessage("hi")
        message.delete()
        client.user.setStatus("dnd")
    }
})

//client.on("message", message => {
    //if(message.channel.id == "706594110131404931" && message.content.startsWith("confirm ")){
        //var emmaepoux = message.content.split("confirm ");
        /*if(emmaepoux.startsWith("Balls Too Big") || emmaepoux.startsWith("eagles of carthage")){
            confirmedballstoobig++;
        }
        if(emmaepoux.startsWith("EAGLES OF CARTAGHE") || emmaepoux.startsWith("eagles of carthage") || emmaepoux.startsWith("EAGLES CARTAGHE") || emmaepoux.startsWith("eagles carthage") || emmaepoux.startsWith("Eagles Of Carthage") || emmaepoux.startsWith("Eagles of Carthage") || emmaepoux.startsWith("Eagles of carthage") || emmaepoux.startsWith("EAGLES OF CARTHAGE")){
            confirmedeaglesofcarthage++;
        }
        if(emmaepoux.startsWith("sbr a") || emmaepoux.startsWith("SBR A") || emmaepoux.startsWith("SBR a") || emmaepoux.startsWith("sbr A") || emmaepoux.startsWith("sbra") || emmaepoux.startsWith("SBRA") || emmaepoux.startsWith("SBRa") || emmaepoux.startsWith("sbrA")){
            confirmedsbra++;
        }
        if(emmaepoux.startsWith("sbr b") || emmaepoux.startsWith("SBR B") || emmaepoux.startsWith("SBR b") || emmaepoux.startsWith("sbr B") || emmaepoux.startsWith("sbrb") || emmaepoux.startsWith("SBRB") || emmaepoux.startsWith("SBRb") || emmaepoux.startsWith("sbrB")){
            confirmedsbrb++;
        }*/
        //message.guild.owner.sendMessage("Confirmation has been detected in <#706594110131404931> channel by ``")
        //client.off()
        //message.author.sendMessage(":email: | Your confirmation of playing with [" + emmaepoux + "] has been successfully sent to the management inbox!")
    //}
    /*if(message.channel.id == "706594110131404931" && message.content.startsWith("Confirm ")){
        var emmaepoux = message.content.split("confirm ");
    }
    if(message.channel.id == "706594110131404931" && message.content.startsWith("cf ")){
        var emmaepoux = message.content.split("confirm ");
    }
    if(message.channel.id == "706594110131404931" && message.content.startsWith("Cf ")){
        var emmaepoux = message.content.split("confirm ");
    }
    if(message.channel.id == "706594110131404931" && message.content.startsWith("CF ")){
        var emmaepoux = message.content.split("confirm ");
    }*/
//})

/*client.on("guildMemberAdd", member => {
    //client.guilds.get("")
    if(member.nickname){
    client.guilds.get("704799551193874474").members.get("634872299069374488").addRole("704829080142610505")
}
    
})*/

client.on("message", message => {
    if(message.content.startsWith("f!report ")){
        var reportTalk = message.content.split("f!report ")
        var reportKey = "kz" + Math.floor(Math.random()*100000) + "x"
        message.delete();
        //if(reportTalk.length > 10){
        //message.channel.send(":white_check_mark: | Your report has been successfully delivered to the management inbox.");
        //message.reply("I sent you a PM!")
        message.author.send({embed: new Discord.RichEmbed()
            .setColor("#64c864")
            .setTitle("Your report has been successfully delivered to the management inbox.")
            .setDescription("Report key: `" + reportKey + "`")
        })
        //"New report has been sent to the management inbox by [" + message.author.username + "#" + message.author.discriminator + "] under the key `" + reportKey + "`"
        message.guild.members.get("634872299069374488").send({embed: new Discord.RichEmbed()
            .setTitle("New report has been sent to the management inbox.")
            .setColor("#ffc832")
            .setDescription(`Reporter: ` + "`" + message.author.username + "#" + message.author.discriminator + "`" + `
Report key:` + " `" + reportKey + "`")
        })
        message.guild.channels.get("707412458909990942").send("Report `" + reportKey + "`: " + reportTalk)
        //}
        //if(reportTalk.length < 11){
            //message.channel.send(":regional_indicator_x: | There was an error while sending your report to the management inbox. Please try again.")
        //}
    }
});

//ADD ACCEPT/REJECT MESSAGES
//ADD CAPTAINS WARNING MESSAGES

client.on("message", message => {
    if(message.content.startsWith("f!say ") && message.member.hasPermission("ADMINISTRATOR")){
        message.delete();
        //message.channel.sendMessage(message.content.split("f!say "))
        message.channel.send(message.content.split("f!say "));
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
    if (message.author.equals(client.user)) return;


    if (!message.content.startsWith(PREFIX)) return;
    var args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0].toLowerCase()) {
/*case "ping":
        const msg = await message.channel.send('Getting current ping. . .')
msg.edit(`Pong :ping_pong: ! My ping latency is: **${(msg.editedTimestamp || msg.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp)}` + "ms**")
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
        if(message.channel.id == "705539473378639935" && message.member.highestRole != "715716361065725952"){
            message.delete()
            message.author.send({embed: new Discord.RichEmbed()
                .setColor("fa0000")
                .setTitle("Hello, **" + message.author.username + "**.")
                .setDescription(`Your request to register in **Futsal Stars Members** association has been successfully delivered to the official futsal stars management inbox.
They will review your request and reply to you soon after they certify that you are an allowed community member and add you to the members list of the community.
Thank you.`)
            })

            client.channels.get("707412458909990942").send("**" + message.author.user + "#" + message.author.discriminator + "** wants to register in **Futsal Stars Members** association.")

            message.member.addRole("715716361065725952");
        }
        if(message.channel.id == "705539473378639935" && message.member.highestRole == "715716361065725952"){
            message.reply("you have already sent a registration request!")
        }
        if(message.channel.id != "705539473378639935"){
            message.message.react("❌")
        }
break;







































case "aaaaawaaaaa":
        message.delete();

        //'#1cefb6'


        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#1cefb6')
            .setTitle("Round 1:")
        })


        
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#1cefb6')
            .setDescription(`<:nix:712073191379435660> Nix
<:glizdy:707317065303982091> GLIZDY`)
            .setFooter("20/05/2020")
        })
        
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#1cefb6')
            .setDescription(`<:blackout:706670687783354429> Black Out
<:crvenazvezda:707580253966696469> Crvena Zvezda`)
            .setFooter("21/05/2020")
        })
        
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#1cefb6')
            .setDescription(`<:varna:706670647790665789> VarnaTeam FC
<:inter:706989671112114296> Inter FC`)
            .setFooter("21/05/2020")
        })
        
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#1cefb6')
            .setDescription(`<:sbrB:706990042220069025> SBR B FC
<:wwf:712073293024329779> WWF`)
            .setFooter("22/05/2020")
        })
        
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#1cefb6')
            .setDescription(`<:wanderers:712403709643980870> Wanderers
<:eaglesofcarthage:708524666943438918> Eagles Of Carthage`)
            .setFooter("22/05/2020")
        })

break;




























/*case "eaea":
    //message.channel.send('Hey.')
    message.channel.send({embed: new Discord.RichEmbed()
        .setColor('#00A5A5')
        .setTitle("React with the appropiate emoji.")
       })
break;*/


case "help":
    if(message.channel.id == "705539473378639935"){
        message.delete();
    message.channel.send({embed: new Discord.RichEmbed()
        .setColor('#cd2225')
        .setTitle("Commands:")
        .addField('**Server**', `**f!rules**: Display rules of server.
**f!report**: Report somebody who broke the rules, or a bug in the client, or a certain mistake in the system.`)
//**f!time**: To get server time.
        .addField('**League**', `**f!registration**: Shows the registeration criteria/instructions.`)
        .addField('**Admins**', `**f!embed / f!e**: Allows you to embed your message.
**f!autoembed**: Allows embeding every message you send.
**f!accept**: True report alert. (Report case victory)
**f!reject**: False report alert. (Report case lose)`)
        .setFooter('Command used by ' + message.author.username + "#" + message.author.discriminator)
       })
    } else if(message.channel.id != "705539473378639935"){
        //message.delete();;
        message.react('❌')
    }

break;

/*case "embed":
    message.channel.send({embed: new Discord.RichEmbed()
        .setColor('#ffaa00')
        .setTitle("⚠️ Who are you to use this command? ⚠️")
       })
    break;*/
    
    // COMMANDS OF REGISTERED TEAMS (FROM CHECKED AND UNCHECKED)
case "eacx":
    if(message.channel.id == "705604110035976223"){
        message.delete();
        message.channel.bulkDelete(5)


        //REGULAR REGISTERED MESSAGES
        /*message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#0b9cb2')
            .setTitle("Registered teams:")
            .setDescription(`Balls Too Big
Blackout
Cotnarii
Eagles Of Carthage
GLIZDY
Inter FC
Leg Breakers
QnA
SBR A
SBR B
Scary Bats
Two Left Feet
UD Melilla
VarnaTeam FC`)
            .setFooter('14/16')
        })*/




            message.channel.send({embed: new Discord.RichEmbed()
                .setColor('#64c864')
                .setTitle("Checked-in teams:")
                .setDescription(`Arm Breakers
Blackout
Crvena Zvezda
Eagles Of Carthage
GLIZDY
Inter FC
QnA
Two Left Feet
VarnaTeam FC`)
                .setFooter('9/14')
            })
            message.channel.send({embed: new Discord.RichEmbed()
                .setColor('#ffc832')
                .setTitle("Unchecked teams:")
                .setDescription(`Balls Too Big
SBR A
SBR B
Scary Bats
UD Melilla`)
                .setFooter('5/14')
            })
            /*message.channel.send({embed: new Discord.RichEmbed()
                .setColor('#ff6464')
                .setTitle("Unverified teams:")
                .setDescription(`UD Melilla`)
                .setFooter('1/15')
            })*/
    
    } else if(message.channel.id != "705604110035976223"){
        //message.delete();;
        message.react('❌')
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
Thing'E`;

var quattrojoker = `DominoPL (C)
TheBlob (Co)
Azrod
Autentik
Doliprune
Stereo
An00xy
Nike
TOBY789
Merc`

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
