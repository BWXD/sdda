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

var exactly = "";

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

    var dato = new Date;

    exactly = "" + (15 - dato.getUTCDate) + "";

    /*var leftHours = 24 - (dato.getUTCHours() + 2);
    var leftMinutes = 60 - dato.getUTCMinutes();

    client.user.setActivity(leftHours + 'h ' + leftMinutes + 'min.',{type: "PLAYING"});*/
    //client.user.setGame("X")
    
    /*if(60 > dato.getUTCMinutes() > 44){
        client.user.setActivity(`${client.users.size} users.`,{type: "WATCHING"});
    }
    if(45 > dato.getUTCMinutes() > 29){
        client.user.setActivity(15 - dato.getUTCDate() + ' days left!',{type: "PLAYING"})
    }
    if(30 > dato.getUTCMinutes() > 14){
        client.user.setActivity(`${client.users.size} users.`,{type: "WATCHING"});
    }
    if(15 > dato.getUTCMinutes() > -1){
        client.user.setActivity(15 - dato.getUTCDate() + ' days left!',{type: "PLAYING"})
    }*/
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
        //client.user.setActivity(`${client.users.size - 1} users`,{type: "WATCHING"});
        client.user.setActivity(`> BW <`,{type: "WATCHING"});
        //client.user.setActivity(`out danger.`,{type: "WATCHING"});
        //client.channels.get("709799876225007637").send("https://cdn.discordapp.com/attachments/672390624389103620/682158027125817374/SRV77tH.png")
        //client.channels.get("709799876225007637").bulkDelete(10)
        //client.channels.get("709799876225007637").send("That's a permenant invite link btw.")
        //client.channels.get("").send("https://discord.gg/33MZZs8")
//client.channels.get("711063373562904629").bulkDelete(1)
       /* client.channels.get("711063373562904629").send(`**SBR B**
Decayy' aka Samir
Kuba
Lingoes 
Aninos 
Rasterinho
HaxMaster

**VarnaTeam FC**
Monstact 

**WFF**
Maio
Lethal
Demi-God
DanHuy

**Crvena Zvezda** 
Manijak
myname
** **> BW <

**Eagles Of Carthage**
ja3bek 
mlody 

**BlackOut**
TIAGO 
Marqzou 
Mesut 

**Inter FC**
BRAIN DEAD 

**GLIZDY**

**Nix**
zar1
Merc
thing'e
Ferna tm
lewa
Adi Popa (Popica)

**FC Gaston**
Akira
Lilian
Furya
Pax
Creamberry

These players are the missing players who must confirm in #confirm.
Form: "confirm {team name}"`)
*/




/*VERIFY MEMBERS*/

        //client.guilds.get("704799551193874474").members.get("").addRole("704827988973453415")
        //client.guilds.get("704799551193874474").members.get("").removeRole("704830837501460481")

        
/*MAKE BASIC MESSAGE PARAMETERS*/

        //client.guilds.get("704799551193874474").channels.get("").bulkDelete(1)
        //client.guilds.get("704799551193874474").channels.get("").send("")























        //client.guilds.get("704799551193874474").members.get("[member.id that I want to verify 2]").addRole("704827988973453415")
        //client.guilds.get("704799551193874474").members.get("[member.id that I want to verify 2]").removeRole("704830837501460481")
        //client.user.setActivity(exactly + ' days left!',{type: "PLAYING"});
        //client.channels.get("704837693594665020").join()

    
    //}) //????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????



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


/*client.guilds.get("704799551193874474").channels.get("709800088234491916").send({embed: new Discord.RichEmbed()
    .setColor("#2ACBED")
    .setTitle("Last News:")
    .setDescription(`- In the start, we wanna introduce you, once again, to the schedule and ranking of the league published in the website.
http://futsal-stars-league.rf.gd/schedule
http://futsal-stars-league.rf.gd/tables
- Team (FC Gaston) has been replaced with (Wanderers), but that doesn't affect the progress of the league matches scheduling.
- Player confirmations, and aswell as transfers, will be closed in under one hour, so make sure you have confirmed that you are playing for your team.
- Schedules and tables will be available in <#705195005094133861> and <#705194990204223524> soon.
- Tomorrow, the opener match will be streamed in the discord.`)
    //.setFooter("http://futsal-stars-league.rf.gd/schedule")
})*/


//client.channels.get("709800088234491916").lastMessage.react("<:Stars:709102646266560513>")


























/*Round 1:			Round 4:			Round 7:		
Black Out x Crvena Zvezda			GLIZDY x Black Out			Black Out x Nix		
VarnaTeam FC x Inter FC			Eagles Of Carthage x VarnaTeam FC			VarnaTeam FC x SBR B		
SBR B x WWF			FC Gaston x SBR B			Inter FC x FC Gaston		
Nix x GLIZDY			Crvena Zvezda x Nix			WWF x Eagles Of Carthage		
FC Gaston x Eagles Of Carthage			WWF x Inter FC			GLIZDY x Crvena Zvezda		
								
Round 2:			Round 5:			Round 8:		
Inter FC x Black Out			Black Out x Eagles Of Carthage			SBR B x Black Out		
WWF x VarnaTeam FC			VarnaTeam FC x FC Gaston			Crvena Zvezda x VarnaTeam FC		
GLIZDY x SBR B			SBR B x Nix			Nix x Inter FC		
Eagles Of Carthage x Nix			Inter FC x GLIZDY			FC Gaston x WWF		
Crvena Zvezda x FC Gaston			WWF x Crvena Zvezda			Eagles Of Carthage x GLIZDY		
								
Round 3:			Round 6:			Round 9:		
Black Out x WWF			FC Gaston x Black Out			Black Out x VarnaTeam FC		
VarnaTeam FC x GLIZDY			Nix x VarnaTeam FC			Inter FC x SBR B		
SBR B x Eagles Of Carthage			Crvena Zvezda x SBR B			WWF x Nix		
Nix x FC Gaston			Eagles Of Carthage x Inter FC			GLIZDY x FC Gaston		
Inter FC x Crvena Zvezda			GLIZDY x WWF			Eagles Of Carthage x Crvena Zvezda		
*/


































        /*var a = new Date()

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
        client.channels.get("710972037782437888").send({embed: new Discord.RichEmbed()
            .setColor('#fefefe')
            .setTitle("Last Update: " + a.getUTCDate() + commitement + " " + theMonth + " at " + ahoh + a.getUTCHours() + ":" + ahom + a.getUTCMinutes())
        })
*/

        


        /*client.guilds.get("704799551193874474").channels.get("711074019096526849").send(`<@431480753616977920> 
:free: Free Player   :arrow_right:    Inter FC`)*/

        






       // client.user.setAvatar("https://cdn.discordapp.com/attachments/704829826002845787/712101122596143174/blurpleFSL.jpg")

















        /*client.users.get("150694344825765888").send({embed: new Discord.RichEmbed()
            .setColor("#fc8dac")
            .setTitle("Hello.")
            .setDescription(`In order to register you team WWF in Futsal Stars League Season 1, you need to publish your team roster in <#709799876225007637> and give a link to your team's logo picture.
Unfortunately, you can't participe in the league if you don't send the roster and tell all your players to confirm in <#707650492204974140>.

Thanks, > BW <.`)
        })*/





        /*client.guilds.get("704799551193874474").members.get("664820340563771444").addRole("705194267680833557")
        client.guilds.get("704799551193874474").members.get("664820340563771444").setNickname("zar1")*/
    
        /*const channel = client.channels.get("704837693594665020");
        if (!channel)
            return console.error("The channel does not exist!");
        channel.join().then(connection => {
          // Yay, it worked!
          console.log("Successfully connected.");
        }).catch(e => {
          // Oh no, it errored! Let's log it to console :)
          console.error(e);
        });*/ //matchmade

        //client.channels.get("704829826002845787").send("Rodra! Help me! I can't send any message from my account please help this is so scary all message turn red connection is good but idk why I cant send please rodra please :sob: <@585839295479152640>")
        //client.channels.get("704829826002845787").send("Rodra it's me BW <@585839295479152640> please do something every message I send gets red and I feel like my discord is not normal and so many weird things happening like my accounts spotify yt... all disappearing and authetntiatcions being removed please please help me if it was peter hacked my discord report him please please please :sob:")
        //client.channels.get("704829826002845787").send("AND IF ANARCHY ROOMS CLOSED GO TO ANY ROOMS JUST IN PORTUGAL OR FUTHAX OR ANY THING JUST GO PLEASE I DONT WANNA NOT SEE YOU ANYMORE IF DISCORD HAS SHUT DOWN")
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
        message.channel.bulkDelete(20)
        /*message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#010101')
            .setTitle("Arm Breakers")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/707307781023203338/legbreakers.png')
            .setDescription(legbreakers)
            //.setFooter("" + confirmedlegbreakers + '/9 players confirmed')
        })
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#74bcfc')
            .setTitle("Balls Too Big")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706891133002711081/ballsTooBig.png')
            .setDescription(ballstoobig)
            //.setFooter("" + confirmedballstoobig + '/12 players confirmed')
        })
        //message.channel.lastMessage.react("<:varna:706670647790665789>")
        message.channel.send({embed: new Discord.RichEmbed()
            //.setColor('#010101')
            .setColor('#c6000e')
            .setTitle("Blackout")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706662392192565329/blackout.png')
            .setDescription(blackout)
            //.setFooter("" + confirmedblackout + '/11 players confirmed')
        }) //????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        /*message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#6c7550')
            .setTitle("Cotnarii")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706677233376297001/cotnarii.png')
            .setDescription(cotnarii)
            .setFooter("" + confirmedcotnarii + '/6 players confirmed')
        })*/
        /*message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#d90512')
            .setTitle("Crvena Zvezda")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/707577909979906068/crvenazvezda.png')
            .setDescription(crvenazvezda)
            //.setFooter("" + confirmedcrvenazvezda + '/8 players confirmed')
        })
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#ae0725')
            .setTitle("Eagles Of Carthage")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/708522834649153606/eaglesofcarthage.png')
            .setDescription(eaglesOfCarthage)
            //.setFooter("" + confirmedeaglesofcarthage + '/14 players confirmed')
        })
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#149d3c')
            .setTitle("GLIZDY")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/707310392703189012/glizdy.png')
            .setDescription(glizdy)
            //.setFooter("" + confirmedglizdy + '/7 players confirmed')
        })
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#0267ab')
            .setTitle("Inter FC")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706672577170374796/inter.png')
            .setDescription(inter)
            //.setFooter("" + confirmedinter + '/8 players confirmed')
        })
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#00c000')
            .setTitle("QnA")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706642496767262790/area.png')
            .setDescription(qna)
            //.setFooter("" + confirmedqna + '/9 players confirmed')
        })
        /*message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#fdeec7')
            .setTitle("SBR A")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706885682185896057/sbrA.png')
            .setDescription(sbra)
            //.setFooter("" + confirmedsbra + '/11 players confirmed')
        })*/
        /*message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#6b6e8f')
            .setTitle("SBR B FC")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706885704449261729/sbrB.png')
            .setDescription(sbrb)
            //.setFooter("" + confirmedsbrb + '/7 players confirmed')
        })*/
        /*message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#9602fb')
            .setTitle("Scary Bats")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706894868328349824/scarybats1.png')
            .setDescription(scarybats)
            .setFooter("" + confirmedscarybats + '/7 players confirmed')
        })*/
        /*message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#7fd858')
            .setTitle("Two Left Feet")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706665715612123157/twoleftfeet.png')
            .setDescription(twoleftfeet)
            //.setFooter("" + confirmedtwoleftfeet + '/10 players confirmed')
        })
        /*message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#7092bf')
            .setTitle("UD Melilla")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706652055548461056/UD_Melilla.png')
            .setDescription(udmelilla)
            .setFooter("" + confirmedudmelilla + '/12 players confirmed')
        })*/
        /*message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#b672ff')
            .setTitle("VarnaTeam FC")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706651727402762400/varna.png')
            .setDescription(varnateamfc)
            //.setFooter("" + confirmedvarna + '/8 players confirmed')
        })

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
        /*message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#fefefe')
            .setTitle("Last Update: " + a.getUTCDate() + commitement + " " + theMonth + " at " + ahoh + a.getUTCHours() + ":" + ahom + a.getUTCMinutes())
        })*/

        
        /*message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#010101')
            .setTitle("Arm Breakers")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/707307781023203338/legbreakers.png')
            .setDescription(armbreakers)
        })*/
        message.channel.send({embed: new Discord.RichEmbed()
            //.setColor('#010101')
            .setColor('#c6000e')
            .setTitle("Blackout   :trophy:")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706662392192565329/blackout.png')
            .setDescription(blackout)
        }) //????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
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
        /*message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#a27921')
            .setTitle("FC Gaston")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/711005166530461786/fcgaston.png')
            .setDescription(fcgaston)
        })*/
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
        /*message.channel.send({embed: new Discord.RichEmbed()
            .setColor("#a71930")
            .setTitle("Nix")
            .setThumbnail("https://cdn.discordapp.com/attachments/592721126162169870/711732196720902315/nix.png")
            .setDescription(nix)
        }quattrojoker)*/
        /*message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#6b6e8f')
            .setTitle("SBR B FC")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706885704449261729/sbrB.png')
            .setDescription(sbrb)
        })*/
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
        /*message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#202225')
            .setTitle("WWF")
            .setThumbnail('https://cdn.discordapp.com/attachments/646469539051077653/712009175076700251/wwf.png')
            .setDescription(wwf)
        })*//*

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

case "eaglesofcarthage":
    if(message.channel.id == "705539473378639935" || message.channel.id == "706632639569854505"){
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#ae0725')
            .setTitle("Eagles Of Carthage")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/708522834649153606/eaglesofcarthage.png')
            .setDescription(eaglesOfCarthage)
        })} else if(message.channel.id != "705539473378639935" && message.channel.id != "706632639569854505"){message.react('❌')
    }
break;


/*case "scarybats":
    if(message.channel.id == "705539473378639935" || message.channel.id == "706632639569854505"){
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#9602fb')
            .setTitle("Scary Bats")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706894868328349824/scarybats1.png')
            .setDescription(scarybats)
        })} else if(message.channel.id != "705539473378639935" && message.channel.id != "706632639569854505"){message.react('❌')
    }
break;*/

case "crvenazvezda":
    if(message.channel.id == "705539473378639935" || message.channel.id == "706632639569854505"){
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#d90512')
            .setTitle("Crvena Zvezda")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/707577909979906068/crvenazvezda.png')
            .setDescription(crvenazvezda)
        })} else if(message.channel.id != "705539473378639935" && message.channel.id != "706632639569854505"){message.react('❌')
    }
break;

//case "vote":
    //message.delete();
    /*message.channel.messages.get("711388810386342010").react("✅")
    message.channel.messages.get("711388361482436618").react("✅")
    message.channel.messages.get("711388236106432543").react("✅")
    message.channel.messages.get("711388033705836574")/*/
    //message.channel.messages.get("711394647468933120").react("✅")
    //message.channel.messages.get("711388033705836574").react('✅')
//break;

/*case "sbrb":
    if(message.channel.id == "705539473378639935" || message.channel.id == "706632639569854505"){
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#6b6e8f')
            .setTitle("SBR B")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706885704449261729/sbrB.png')
            .setDescription(sbrb)
        })} else if(message.channel.id != "705539473378639935" && message.channel.id != "706632639569854505"){message.react('❌')
    }
break;*/

/*case "sbra":
    if(message.channel.id == "705539473378639935" || message.channel.id == "706632639569854505"){
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#fdeec7')
            .setTitle("SBR A")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706885682185896057/sbrA.png')
            .setDescription(sbra)
        })} else if(message.channel.id != "705539473378639935" && message.channel.id != "706632639569854505"){message.react('❌')
    }
break;*/

case "inter":
    if(message.channel.id == "705539473378639935" || message.channel.id == "706632639569854505"){
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#0267ab')
            .setTitle("Inter FC")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706672577170374796/inter.png')
            .setDescription(inter)
        })} else if(message.channel.id != "705539473378639935" && message.channel.id != "706632639569854505"){message.react('❌')
    }
break;

case "legbreakers":
    if(message.channel.id == "705539473378639935" || message.channel.id == "706632639569854505"){
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#010101')
            .setTitle("Leg Breakers")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/707307781023203338/legbreakers.png')
            .setDescription(armbreakers)
        })} else if(message.channel.id != "705539473378639935" && message.channel.id != "706632639569854505"){message.react('❌')
    }
break;

case "ballstoobig":
    if(message.channel.id == "705539473378639935" || message.channel.id == "706632639569854505"){
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#74bcfc')
            .setTitle("Balls Too Big")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706891133002711081/ballsTooBig.png')
            .setDescription(ballstoobig)
        })} else if(message.channel.id != "705539473378639935" && message.channel.id != "706632639569854505"){message.react('❌')
    }
break;

case "twoleftfeet":
    if(message.channel.id == "705539473378639935" || message.channel.id == "706632639569854505"){
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#7fd858')
            .setTitle("Two Left Feet")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706665715612123157/twoleftfeet.png')
            .setDescription(twoleftfeet)
        })} else if(message.channel.id != "705539473378639935" && message.channel.id != "706632639569854505"){message.react('❌')
    }
break;

case "glizdy":
    if(message.channel.id == "705539473378639935" || message.channel.id == "706632639569854505"){
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#149d3c')
            .setTitle("GLIZDY")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/707310392703189012/glizdy.png')
            .setDescription(glizdy)
        })} else if(message.channel.id != "705539473378639935" && message.channel.id != "706632639569854505"){message.react('❌')
    }
break;

case "blackout":
    if(message.channel.id == "705539473378639935" || message.channel.id == "706632639569854505"){
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            //.setColor('#010101')
            .setColor('#c6000e')
            .setTitle("Blackout :trophy:")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706662392192565329/blackout.png')
            .setDescription(blackout)
        })} else if(message.channel.id != "705539473378639935" && message.channel.id != "706632639569854505"){message.react('❌')
    }
break;

case "varnateamfc":
    if(message.channel.id == "705539473378639935" || message.channel.id == "706632639569854505"){
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#b672ff')
            .setTitle("VarnaTeam FC")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706651727402762400/varna.png')
            .setDescription(varnateamfc)
        })} else if(message.channel.id != "705539473378639935" && message.channel.id != "706632639569854505"){message.react('❌')
    }
break;

/*case "udmelilla":
    if(message.channel.id == "705539473378639935" || message.channel.id == "706632639569854505"){
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#7092bf')
            .setTitle("UD Melilla")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706652055548461056/UD_Melilla.png')
            .setDescription(udmelilla)
        })} else if(message.channel.id != "705539473378639935" && message.channel.id != "706632639569854505"){message.react('❌')
    }
break;*/
/*ROUND 1:

**GROUP A**
:sbrA: **SBR A** x **Crvena Zvezda** :crvenazvezda: 
:sbrB: **SBR B** x **Inter FC** :Inter: 

**GROUP B**
:eaglesofcarthage: **Eagles Of Carthage** x  **GLIZDY** :glizdy: 
:qna: **QnA** x  **Balls Too Big** :ballstoobig:

**GROUP C**
:varna: **VarnaTeam FC** x **Arm Breakers** :legbreakers: 
:twoleftfeet: **Two Left Feet** x ** Blackout** :blackout:*/

case "round1":
    if(message.channel.id == "705194969576636447"){
        message.delete();
        /*message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#181818')
            .setTitle("Note:")
            .setDescription(`Time used in schedule is in CET which is UTC + 2.`)
        })*/ //**f!time**: To get server time.
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#fece5e')
            .setTitle("Round 1:")
        })
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#fa3a3a')
            .setTitle("Group A:")
            .addField("<:sbrA:706989943192551504> **SBR A** x **Crvena Zvezda** <:crvenazvezda:707580253966696469>", "10/05/2020 at **21:00**")
            .addField("<:sbrB:706990042220069025> **SBR B** x **Inter FC** <:Inter:706989671112114296>", "10/05/2020")
        })
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#3afa3a')
            .setTitle("Group B:")
            .addField("<:eaglesofcarthage:708524666943438918> **Eagles Of Carthage** x  **GLIZDY** <:glizdy:707317065303982091>  ", "10/05/2020 at **21:00**")
            .addField("<:qna:706670547487948820> **QnA** x  **Balls Too Big**  <:ballstoobig:706990171010367578>", "10/05/2020 at **22:15**")
        })
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#4a7afa')
            .setTitle("Group C:")
            .addField("<:varna:706670647790665789> **VarnaTeam FC** x **Arm Breakers**  <:legbreakers:707317188964647052>", "10/05/2020 at **21:00**")
            .addField("<:twoleftfeet:706990277386174606>  **Two Left Feet** x ** Blackout** <:blackout:706670687783354429>", "10/05/2020")
        })
    
    } else if(message.channel.id != "705194969576636447"){
        //message.delete();;
        message.react('❌')
    }

break;
/*case "g1":
    if(message.channel.id == "705194969576636447"){
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#fa3a3a')
            .setTitle("Group A:")
            /*.setDescription(`<:sbrA:706989943192551504> **SBR A** x **Crvena Zvezda** <:crvenazvezda:707580253966696469>  
<:sbrB:706990042220069025> **SBR B** x **Inter FC** <:Inter:706989671112114296> `)*//*
            .addField("<:sbrA:706989943192551504> **SBR A** x **Crvena Zvezda** <:crvenazvezda:707580253966696469>", "10/05/2020")
            .addField("<:sbrB:706990042220069025> **SBR B** x **Inter FC** <:Inter:706989671112114296>", "10/05/2020")
        })
    
    } else if(message.channel.id != "705194969576636447"){
        //message.delete();;
        message.react('❌')
    }

break;
case "g2":
    if(message.channel.id == "705194969576636447"){
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#3afa3a')
            .setTitle("Group B:")
            /*.setDescription(`<:eaglesofcarthage:708524666943438918> **Eagles Of Carthage** x  **GLIZDY** <:glizdy:707317065303982091>  
<:qna:706670547487948820> **QnA** x  **Balls Too Big** <:ballstoobig:706990171010367578> `)*//*
            .addField("<:eaglesofcarthage:708524666943438918> **Eagles Of Carthage** x  **GLIZDY** <:glizdy:707317065303982091>  ", "10/05/2020")
            .addField("<:qna:706670547487948820> **QnA** x  **Balls Too Big** <:ballstoobig:706990171010367578>", "10/05/2020 **22:15**")
        })
    
    } else if(message.channel.id != "705194969576636447"){
        //message.delete();;
        message.react('❌')
    }

break;
case "g3":
    if(message.channel.id == "705194969576636447"){
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#4a7afa')
            .setTitle("Group C:")
            /*.setDescription(`<:varna:706670647790665789> **VarnaTeam FC** x **Arm Breakers** <:legbreakers:707317188964647052> 
<:twoleftfeet:706990277386174606>  **Two Left Feet** x ** Blackout** <:blackout:706670687783354429>`)*//*
            .addField("<:varna:706670647790665789> **VarnaTeam FC** x **Arm Breakers** <:legbreakers:707317188964647052>", "10/05/2020 **21:00**")
            .addField("<:twoleftfeet:706990277386174606>  **Two Left Feet** x ** Blackout** <:blackout:706670687783354429>", "10/05/2020")
        })
    
    } else if(message.channel.id != "705194969576636447"){
        //message.delete();;
        message.react('❌')
    }

break;
case"timesss":
message.delete()
message.channel.send({embed: new Discord.RichEmbed()
    .setColor('#181818')
    .setTitle("Note:")
    .setDescription(`Time used in schedule is in CET which is UTC + 2.`)
})
break;*/
case "g1pp":
    if(message.channel.id == "705194969576636447"){
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#fa3a3a')
            .setTitle("Group A:")
            .setDescription(`<:sbrA:706989943192551504> x <:crvenazvezda:707580253966696469>  
<:sbrB:706990042220069025> x <:Inter:706989671112114296> `)
        })
    
    } else if(message.channel.id != "705194969576636447"){
        //message.delete();;
        message.react('❌')
    }

break;
case "g2pp":
    if(message.channel.id == "705194969576636447"){
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#3afa3a')
            .setTitle("Group B:")
            .setDescription(`<:eaglesofcarthage:707317124028432517> x <:glizdy:707317065303982091>  
<:qna:706670547487948820> x <:ballstoobig:706990171010367578> `)
        })
    
    } else if(message.channel.id != "705194969576636447"){
        //message.delete();;
        message.react('❌')
    }

break;
case "g3pp":
    if(message.channel.id == "705194969576636447"){
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#4a7afa')
            .setTitle("Group C:")
            .setDescription(`<:varna:706670647790665789> x <:legbreakers:707317188964647052> 
<:twoleftfeet:706990277386174606> x <:blackout:706670687783354429>`)
        })
    
    } else if(message.channel.id != "705194969576636447"){
        //message.delete();;
        message.react('❌')
    }

break;

case "qna":
    if(message.channel.id == "705539473378639935" || message.channel.id == "706632639569854505"){
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#00c000')
            .setTitle("QnA")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706642496767262790/area.png')
            .setDescription(qna)
        })
    
    } else if(message.channel.id != "705539473378639935" && message.channel.id != "706632639569854505"){
        //message.delete();;
        message.react('❌')
    }

break;

/*case "cotnarii":
    if(message.channel.id == "705539473378639935" || message.channel.id == "706632639569854505"){
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#6c7550')
            .setTitle("Cotnarii")
            .setThumbnail('https://cdn.discordapp.com/attachments/706641802374938644/706677233376297001/cotnarii.png')
            .setDescription(cotnarii)
        })
    
    } else if(message.channel.id != "705539473378639935" && message.channel.id != "706632639569854505"){
        //message.delete();;
        message.react('❌')
    }

break;*/
    
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


/*case "help":
    message.channel.send({embed: new Discord.RichEmbed()
        .setColor('RED')
        .addField('```Here is the client command list: ```','↓')
        .addField('**Misc commands :roclient:**','↓')
        .addField('`help`','Shows this message again')
        .addField('`ping`','Get the current ping')
        .addField('`info`**{user}**','Get the info of an user')
        .addField('`client`','Get the info of the client')
        .addField('**Fun Commands :balloon:**','↓')
        .addField('`8ball`','Ask the wizzard 8Ball !')
        .addField('**Moderation roles :tools:**','↓')
        .addField('`kick`','Kicks the user')
        .addField('`ban`','Bans the user')
    })
break;*/

/*case "partneriat":
    if(message.channel.id == "706232054303555615"){
        message.delete();
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#0060fb')
            .setTitle("Extreme International League")
            .setDescription(`EIL is another upcoming futsal league. Register your team before the season start!`)
        })
    
    } else if(message.channel.id != "706232054303555615"){
        //message.delete();;
        message.react('❌')
    }

break;

case "ae":
    
        message.delete();
        message.channel.send('https://discord.gg/8ZNJmKH')
    break;*/

/*case "season1":
    message.channel.send({embed: new Discord.RichEmbed()
        .setColor('#42A59C')
        .setTitle("Futsal Stars League Season 1:")
        .addField('System:', `Check <#704832990227857429> for more informations.`)
        .addField('Registration:', `Check <#704860914075172884> for more informations.`)
        .addField('Deadline:', `Monday 18th May at 00:00 CET.`)
        .addField('Confirmation:', `Check <#707650492204974140>.`)
        .addField('Deadline:', `Monday 18th May at 18:30 CET.`)
        .addField('Draft Date:', `Monday 18th May at 19:30 CET.`)
        .addField('Start Date:', `Tuesday 19th May at 19:00 CET.`)
    })
    break;*/

    /*case "cup":
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor('#C07285')
            .setTitle("Futsal Stars League Cup:")
            .addField('System:', `Check <#704832990227857429> for more informations.`)
            .addField('Deadline:', `Friday, 8th May, 2020`)
            //.addField('Max Teams:', `The max amount of participant teams in (Futsal Stars League Cup) is not specified yet.`)
            .addField('Start Date:', `Saturday, 9th May, 2020`)
            .addField('Registration:', `PM a moderator/admin about your request to join.`)
        })
        break;*/

        /*case "eaea":
            message.channel.send({embed: new Discord.RichEmbed()
                .setColor('#9A3BCD')
                .setTitle('Futsal Stars League map:')
            })
            //message.channel.sendFile('http://athletic-reconnaissance.rf.gd/website/FSL_Map.hbs')
            break;*/
/*case "a":
                      const embed = new Discord.RichEmbed()
                      .setColor('#006f86')
                      .setTitle("About Futsal Stars League:")
                      .setThumbnail(message.guild.iconURL)
                      .addField('Definition', `Futsal Stars League is a haxball 4v4 futsal league.`)
                      .addField('Owners', `<@585839295479152640>, <@634872299069374488>`)
                      message.channel.send({embed});

    break;*/
    /*case "b":
        message.channel.send({embed: new Discord.RichEmbed()
                          .setColor('#06bedc')
                          .setTitle("Criteria of Futsal Stars League matches:")
                          //.addField('Registration', `Read <#704860914075172884> for more informations.`)
                          //.addField('Seasons', `Futsal Stars League will have multiple seasons.`)
                          //.addField('Organisation', `The matches and schedule of Futsal Stars League will be oraganized.`)
                          .addField('Matches', `There are two halves every match. Each half takes 7 minutes.`)
                          .addField('Room', `Match can't be simulated neither in a concerned player's room, nor in a laggy host which contains problems.`)
                          .addField('Players', `Inside match, including the captain/coach, only 8 players can come.`)
                          .addField('Confirm', `Players need to have confirmed in player confirmations channel in the player confirmation grace.`)
                          .addField('Room Admin', `Only the main captains will be given admin rights in game. If a captain abused it, his team gets a deflose on the match.`)
                          .addField('Map', `Captains can download map from <#704867031396253778> channel. Every league match should be played at the official league map.`)
                          .addField('Pauses', `Team should pause only in need. You could be warned in useless pauses.`)
                          .addField('Match Time', `clienth teams must come at the accorded time of match. If a team comes late 15 minutes from match time, they get deflose.`)
                          .addField('Postponing', `Only captain and co-captain can postpone the match. clienth teams have the right to postpone the game for only once. If team wants to postpone a certain match, he should inform the opponent team before 24 hours of the accorded time.`)
                          .addField('Recording', `If your game wasn't testified by a referee, clienth captains must record the match, from the start to the end, in one recording without stop.`)
                          .addField("Situations", `While encountering any puzzling situation that no captains know how to react to, they could invite a referee/moderator over.`)
                          .addField("Website", `All the matches being played in the league will be displayed in the website.`)
                          .addField("Streaming", `Every round, the best match will be choosed to be streamed at the discord server by the referee.`)
                          .addField("Sponsors", `Between the halves, in streamings, there might be advertisements of sponsorised projects or products.`)
                        
                         })
            message.channel.send({embed: new Discord.RichEmbed()
                              .setColor('#00A5A5')
                              .setTitle('Website:')
                              .setDescription("http://futsal-stars-league.rf.gd/")
                             })
    
        break;*/
        /*case "c":
            message.channel.send({embed: new Discord.RichEmbed()
                              .setColor('#00A5A5')
                              .setTitle('NEW!!')
                              .addField("Streaming", `Every round, the best match will be choosed to be streamed at the discord server by the referee.`)
                              .addField("Website", `All the matches being played in the league will be displayed in the website.`)
                              .addField("Sponsors", `Between the halves, there might be advertisements of sponsors projects.`)
                             })
        
            break;
        case "d":
            message.channel.send({embed: new Discord.RichEmbed()
                              .setColor('#00A5A5')
                              .setTitle('Website:')
                              .setDescription("http://futsal-stars-league.rf.gd/")
                             })
        
            break;*/
        }    
});
/*var confirmedballstoobig = 5;
var confirmedblackout = 6;
//var confirmedcotnarii = 3;
var confirmedcrvenazvezda = 7;
var confirmedeaglesofcarthage = 14;
var confirmedglizdy = 7;
var confirmedinter = 8;
var confirmedlegbreakers = 9;
var confirmedqna = 8;
var confirmedsbra = 3;
var confirmedsbrb = 4;
//var confirmedsbrc = 0;
//var confirmedscarybats = 2;
var confirmedtwoleftfeet = 6;
//var confirmedudmelilla = 2;
var confirmedvarna = 8;*/

/*var ballstoobig = `:flag_pt: Sterling (C)
:flag_pt: Ben Simmons
:flag_pt: Darth vader
:flag_pt: Goten
:flag_pt: Tibbers RW
:flag_pt: Traça
:flag_pt: wozal
:flag_pt: X1ZO
:flag_md: Moldova
:flag_pt: Chicao
:flag_pt: Icardi
:flag_pt: james`

var blackout = `:flag_pt: Tiago (C)
:flag_pt: Dallano (Co)
:flag_pt: irv1
:flag_pt: Jove
:flag_pt: Marqzou
:flag_pt: Mesut
:flag_pt: monteiro
:flag_de: ozo jaa
:flag_de: Son 7
:flag_pt: Súarez
:flag_pt: Blastoyz`

/*var cotnarii = `Fire (C) 
Sebi c (Co)
AMp 
Juni10
Ramos
Makeks`*/

/*var crvenazvezda = `eLprofesor. (C)
Akvari (Co)
The Wall
Damjan
harl
vecinhO96
martinholland
Domino`

var eaglesOfCarthage = `:flag_tn: Jovic (C)
:flag_tn: AK-47
:flag_tn: ja3bek
:flag_tn: YELLOW
:flag_tn: haxtheball
:flag_tn: ArrayList
:flag_tn: Pain
:flag_ro: DA MATTEOitsME
:flag_pl: Gaudi_8
:flag_tn: Toni_Kroox
:flag_pl: zer
:flag_ro: Claudiu
:flag_ro: google
:flag_hu: Vodkasprite`;

var glizdy = `:flag_pl:  Endou (C)
:flag_pl: üb (C)
:flag_hr: pirlo (Co)
:flag_pl: zaQu
:flag_pl: yennefer
:flag_rs: providnii
:flag_pl: Eto'opiryna PRO`

var inter = `DELUXE (C)
zDog (Co)
Toshiba (Co)
2Pac
Deku
ZQ
mY_ruleZ^
BRAINDEAD`

var legbreakers = `deni.polska (C)
Pierre Michel Lasogga (Co)
Knowledge_
didi
egg
Pain & Gains°°
lorik
Xaroth
Only Lucas °`;

var qna = `:flag_ma: > BW < (C)
:flag_pt: Rodralex10 (Co)
:flag_cz: DAVID CECH (Co)
:flag_es: Sergison
:flag_rs: 24
:flag_tr: Torrick
:flag_nl: Lol
:flag_pl: FigT
:flag_gb: TrapStar`

var sbra = `Shisui (C)
Pyro (Co)
Risky
Krkrkr
Parcé
Defender
Larry
Wakanda
Mcan
Player
Fury`

var sbrb = `:flag_nl: Decayy' (C)
:flag_nl: 58
:flag_pl: Mr. Worldwide
:scotland: Kenzo
:flag_fr: Autentik
:flag_fr: Aninos
:flag_se: Cero`

var scarybats = `SALL (C)
Rares (Co)
Lewa
Nike 
Shot
Widget
Erader`

var twoleftfeet = `:flag_pt: peter (C)
:flag_pt: rei (C)
:flag_pt: 8
:flag_pt: cristiano
:flag_pt: Creator
:flag_pt: cym
:flag_pt: kyO
:flag_pt: Pombo
:flag_pt: Isco Jaa
:flag_pt: scra`

var udmelilla = `my frinds am watch porn (C)
T (Co)
Gululussa
baper
stoutpoop 
bigbang
ph4ntom
nightshade
JavieNL
:milky_way:𝓡𝓸𝓝𝓪𝔃𝓲:milky_way:
mreren
dzonzi`

var varnateamfc = `:flag_tr: aWaKeN (C)
:flag_tr: Kea97 (Co)
:flag_tr: Nepus
:flag_tr: Kokain
:flag_tr: kevin
:flag_tr: shady
:flag_tr: Monstact
:flag_tr: Edge`*//*

var ballstoobig = `:flag_pt: Sterling (C)
:flag_pt: Ben Simmons
:flag_pt: Chicao
:flag_pt: james
:flag_pt: Traça
:flag_pt: Goten
:flag_pt: Beast!
:flag_pt: night
:flag_pt: Icardi`

var blackout = `:flag_pt: Tiago (C) 
:flag_pt: Marqzou
:flag_pt: Mesut
:flag_pt: monteiro
:flag_de: ozo jaa
:flag_de: Son 7
:flag_pt: Blastoyz
:flag_pt: Suarez
:flag_pt: irv1`

var crvenazvezda = `eLprofesor. (C)
Akvari (Co)
The Wall
harl
Damjan
vecinhO96
martinholland
Domino
Nike
Pyro`

var eaglesOfCarthage = `:flag_tn: Jovic (C)
:flag_tn: AK-47
:flag_tn: ja3bek
:flag_tn: YELLOW
:flag_tn: haxtheball
:flag_tn: ArrayList
:flag_tn: Pain
:flag_ro: DA MATTEOitsME
:flag_pl: Gaudi_8
:flag_tn: Toni_Kroox
:flag_pl: zer
:flag_ro: Claudiu
:flag_ro: google
:flag_hu: Vodkasprite
:flag_pl: Gonzinho
:flag_it: mlody`;

var glizdy = `:flag_pl:  Endou (C)
:flag_pl: üb (C)
:flag_hr: pirlo (Co)
:flag_pl: zaQu
:flag_pl: yennefer
:flag_rs: providnii
:flag_pl: Eto'opiryna PRO
:flag_pl: omgg`

var inter = `DELUXE (C)
zDog (Co)
Toshiba (Co)
2Pac
Deku
ZQ
mY_ruleZ^
BRAINDEAD
Nub
stoutpoop
dtc`

var legbreakers = `deni.polska (C)
Pierre Michel Lasogga (Co)
Knowledge_
didi
Pain & Gains°°
lorik
Xaroth
Only Lucas °`;

var qna = `:flag_ma: > BW < (C)
:flag_pt: Rodralex10 (Co)
:flag_cz: DAVID CECH (Co)
:flag_es: dj666 (Co)
:flag_es: Sergison
:flag_rs: 24
:flag_nl: Lol
:flag_pl: FigT
:flag_gb: TrapStar`*/

/*var sbra = `Shisui (C)
Risky
Krkrkr
Defender`*/

/*var sbrb = `:flag_nl: Decayy' (C)
:flag_pl: Mr. Worldwide
:scotland: Kenzo
:flag_se: Cero
:flag_be: HAWK`*/

/*var scarybats = `SALL (C)
Rares (Co)
Lewa
Nike 
Shot
Widget
Erader`*/

/*var twoleftfeet = `:flag_pt: cristiano (C)
:flag_pt: cym (C)
:flag_pt: 8
:flag_pt: Creator
:flag_pt: Isco Jaa
:flag_pt: Darth Vader
:flag_pt: kyO
:flag_pt: Pomboz
:flag_pt: Tibbers RW`*/

/*var udmelilla = `my frinds am watch porn (C)
T (Co)
Gululussa
baper
stoutpoop 
bigbang
ph4ntom
nightshade
JavieNL
:milky_way:𝓡𝓸𝓝𝓪𝔃𝓲:milky_way:
mreren
dzonzi`*/

/*var varnateamfc = `:flag_tr: aWaKeN (C)
:flag_tr: Kea97 (Co)
:flag_tr: Nepus
:flag_tr: Kokain
:flag_tr: kevin
:flag_tr: shady
:flag_tr: Monstact
:flag_tr: Edge`-*/
















//LITERAL ROSTERS

/*var armbreakers = `POLSKA (C)
Pierre Michel Lasogga (Co)
Knowledge
Z3H1R
Ses
Xaroth
Lewandowski
Gains°
Only Lucas°`;*/

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

/*var fcgaston = `:flag_fr: Doliprune (C)
:flag_fr: Sosa
:flag_fr: Nameless
:flag_fr: Autentik
:flag_nl: Haxieball
:flag_fr: Just_Azr0d
:flag_fr: Walt Disquette
:flag_fr: Lilian
:flag_gb: Nike
:flag_fr: Creamberry
:flag_ro: Fire`;*/

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

//λ
/*var nix = `zar1 (C)
Merc
thing'e
Ferna tm
lewa
Mureaaa`;*/

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

/*var sbrb = `:flag_ie: Mr.Worldwide (C)
:flag_nl: Decayy' aka Samir (Co)
:flag_gb: NKG
:scotland: Kenzo
:flag_tr: HAWK
:flag_gb: Aninos
:flag_pl: Rasterinho
:flag_gb: HaxJNB
:flag_gb: TOBY`;*/

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

/*var wwf = `Wolf (C)
Vera (Co)
Arc
Maio
Uzu
Lethal
Demi-God
Deibi
DanHuy
Lamalapas
Sneak`;*/









//MENTIONS ROSTERS (THAT DOES APPEAR INVALID-USER IN FEW PEOPLE)

/*var armbreakers = `<@553657856927334411> (C)
<@232564845449445376> (Co)
<@287670470986432512>
<@315531683581394944>
<@536908776654241793>
<@343828169608003595>
<@450607356884156417>
<@597567022435532821>
<@632936199379746836>`;

var blackout = `:flag_pt: <@404065342512693249> (C)
:flag_pt: <@334353263937716224>
:flag_pt: <@604079304770584576>
:flag_pt: <@304993882502987784>
:flag_de: <@404458593409302528>
:flag_pt: <@306433814945726475>
:flag_pt: <@479771547687452702>
:flag_pt: <@418887334168231937>`;

var crvenazvezda = `<@622506571024302083> (C)
<@292748331648548885> (Co)
<@529016993618198529>
<@695648572829466724>
<@707681844656734358>
<@651380034157674496>
<@348151464461467670>
<@634481451454169109>
<@473730304998113301>
<@510094723265069067>
<@643879480363843585>`;

var eaglesOfCarthage = `:flag_tn: Jovic (C)
:flag_tn: AK-47
:flag_tn: ja3bek
:flag_tn: YELLOW
:flag_tn: haxtheball
:flag_tn: Pain
:flag_pl: Gaudi_8
:flag_tn: Toni_Kroox
:flag_pl: zer
:flag_ro: google
:flag_hu: Vodkasprite
:flag_it: mlody`;

var fcgaston = `:flag_fr: Doliprune (C)
:flag_fr: Sosa
:flag_fr: Rockfeller
:flag_gb: Nike
:flag_fr: Nameless
:flag_fr: Akira
:flag_fr: Autentik
:flag_nl: Haxieball
:flag_fr: Just_Azr0d
:flag_fr: Walt Disquette
:flag_fr: Lilian
:flag_fr: Citizenk
:flag_fr: Furya
:flag_cp: Pax
:flag_fr: Creamberry`;

var glizdy = `:flag_pl: Endou (C)
:flag_pl: üb (C)
:flag_hr: pirlo (Co)
:flag_pl: zaQu
:flag_pl: yennefer
:flag_pl: omgg`;

var inter = `DELUXE (C)
zDog (Co)
Toshiba (Co)
2Pac
Deku
ZQ
mY_ruleZ^
BRAINDEAD
Nub
dtc
M.Can`;

var sbrb = `:flag_ie: Mr.Worldwide (C)
:flag_nl: Decayy' aka Samir (Co)
:flag_gb: NKG
:scotland: Kenzo
:flag_fr: Kuba
:flag_ru: Lingoes
:flag_tr: HAWK
:flag_gb: Aninos
:flag_pl: Rasterinho
:flag_tr: HaxMaster`;

var varnateamfc = `aWaKeN
Kea97
Nepus
Kokain
kevin
shady
Monstact
Edge
stoutpoop`;*/

















client.login(TOKEN);
