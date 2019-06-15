const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = ".";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : e2k`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : e2k ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Tomatoe I .help `,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});



client.on('message', message => {
  if (message.content.startsWith("رابط")) {

message.channel.createInvite({
      thing: true,
      maxUses: 2,
      maxAge: 86400
  }).then(invite =>
    message.author.sendMessage(invite.url)
  )
message.channel.send("**تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 2**`)


  }
});


  const snekfetch = require("snekfetch");
  client.on('message', async message => {
if(message.author.bot) return;
if (message.channel.guild) {
if (message.content.startsWith(prefix + `cat`)) {
            const { body } = await snekfetch.get("http://aws.random.cat/meow");
            return message.channel.send({ file: body.file });
}}});
  




client.on('message', msg => {
  if(msg.content.startsWith('.link')) {
  if(msg.channel.type === 'dm') return;
const user = msg.mentions.users.first();
if(!user) return msg.channel.send('``' + '**قم بتحديد بوت**' + '``')
if(!user.bot) return msg.reply('\`منشن بوت\`');
msg.channel.send(`**Bot InviteURL : ** https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=384064`)
  }
});



client.on('message', msg => {
  if(msg.content === '.buy')
  msg.channel.send('**افتح تكت عن طريقه .new لكي تحصل علي رتبه بائع**')
});





client.on('message', async message => {
  if(message.content.startsWith(prefix + "msg")) {
    let i = client.users.size;
    if(message.author.id !== '428568185277775872') return message.channel.send('❎ » هذا الأمر مخصص لصاحب البوت فقط');
    var args = message.content.split(' ').slice(1).join(' ');
    if(!args) return message.channel.send('❎ » يجب عليك كتابة الرسالة')
    setTimeout(() => {
      message.channel.send(`تم الارسال لـ ${i} شخص`)
    }, client.users.size * 500);
    client.users.forEach(s => {
      s.send(args).catch(e => i--);
    });
  }
});
  



client.on('message', message => {
  if(message.content == '.bans'){
      message.guild.fetchBans().then(bans => {
          bans.forEach(user => {
             message.channel.send('\`#\` <@'+ user.id + '>');
          });
      });
  }
});


client.on('message', function(msg) {
  if(msg.content.startsWith (prefix + 'server')) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .addField(':globe_with_meridians: **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
    .addField(':earth_africa: ** موقع السيرفر :**',`**[ ${msg.guild.region} ]**`,true)
    .addField(':military_medal:** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
    .addField(':bust_in_silhouette:** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
    .addField(':white_check_mark:** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
    .addField(':pencil:** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
    .addField(':loud_sound:** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
    .addField(':crown:** صاحب السيرفر :**',`**[ ${msg.guild.owner} ]**`,true)
    .addField(':id:** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
    .addField(':date:** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});


client.on('message', message => {
var args = message.content.split(" ").slice(1);
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;
let n = d.toLocaleString();
let x;
let y;

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()// By Vaniet. (VanietSystem.)
.setColor("RANDOM")// By Vaniet. (VanietSystem.)
.addField('**🔱| الاسم:**',`**<@` + `${z.id}` + `>**`, true)// By Vaniet. (VanietSystem.)
.addField('**📠 | الايدي الخاص به**:', "**"+ `${z.id}` +"**",true)// By Vaniet. (VanietSystem.)
.addField('**🎮 | اللعبة الحالية:**','**'+y+'**' , true)// By Vaniet. (VanietSystem.)
.addField('**🤖| نوع حسابه:**',"**"+ w + "**",true)// By Vaniet. (VanietSystem.)
.addField('**📛| التاق الأساسي الخاص به :**',"**#" +  `${z.discriminator}**`,true)// By Vaniet. (VanietSystem.)
.addField('** تاريخ انشاء حسابه | 📆 :** ' ,year + "-"+ month +"-"+ day)// By Vaniet. (VanietSystem.)
.addField("**تاريخ حضوره في السيرفر | ⌚   :**", message.member.joinedAt.toLocaleString())// By Vaniet. (VanietSystem.)
.setThumbnail(`${z.avatarURL}`)// By Vaniet. (VanietSystem.)
.setFooter(message.author.username, message.author.avatarURL)// By Vaniet. (VanietSystem.)

message.channel.send({embed});// By Vaniet. (VanietSystem.)
  if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);// By Vaniet. (VanietSystem.)


}

});




client.on('guildMemberAdd', (member) => {
  let channel = client.channels.get('482594359750164480')
  if(member.user.bot) {
  channel.send(`${member} ولكم يا عمو البوت`)
  }
  })
  


  client.on('typingStart', (ch, user) => {
    if(user.presence.status === 'offline') {
        
        ch.send(`${user} هاهاهاا , كشفتك وانت تكتب ي اوف لاين`)
        .then(msg => {
            msg.delete(10000)
        })
    }
})




client.on('message', async message => {
  if(message.content.includes('discord.gg')){ 
      if(message.member.hasPermission("MANAGE_GUILD")) return;
if(!message.channel.guild) return;
message.delete()
var command = message.content.split(" ")[0];
let muterole = message.guild.roles.find(`name`, "Muted");
if(!muterole){
try{
muterole = await message.guild.createRole({
name: "Muted",
color: "#000000",
permissions:[]
})
message.guild.channels.forEach(async (channel, id) => {
await channel.overwritePermissions(muterole, {
  SEND_MESSAGES: false,
  ADD_REACTIONS: false
});
});
}catch(e){
console.log(e.stack);
}
}
 if(!message.channel.guild) return message.reply('** This command only for servers**');
message.member.addRole(muterole);
const embed500 = new Discord.RichEmbed()
.setTitle("Muted Ads")
  .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
  .setColor("c91616")
  .setThumbnail(`${message.author.avatarURL}`)
  .setAuthor(message.author.username, message.author.avatarURL)
.setFooter(`${message.guild.name} `)
message.channel.send(embed500)
message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');


}
})





client.on('message', message => {
  if(message.content.startsWith(prefix + "invites")) {
   message.guild.fetchInvites().then(invs => {
     let user = message.mentions.users.first() || message.author
     let personalInvites = invs.filter(i => i.inviter.id === user.id);
     let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
              let mmmmEmbed = new Discord.RichEmbed()
                        .setAuthor(client.user.username)
                        .setThumbnail(message.author.avatarURL)
.addField(` لقد قمت بدعوة :`, ` ${inviteCount} `)
          .setFooter(`- Requested By: ${message.author.tag}`);
          message.channel.send(mmmmEmbed)
});
 }
});
 



    client.on('message' , message => {
    if (message.content === '.help') {
             let embed = new Discord.RichEmbed()

          .setThumbnail(message.author.avatarURL)
          .addField("**🌐 الأوامر العامه**","** **")
          .addField("**.avatar**","**عرض صورتك الشخصية**")
          .addField("**.server**","**عرض جميع معلومات السيرفر**")
           .addField("**.id**","**عرض معلومات عنك**")
       .addField("**.help**","**ارسال هذه الأوامر للعضو في الخاص**")
       .addField("**.Bping**","** عرض سرعة اتصال البوت**")
       .addField("**.cat**","** لصوره قطط**")
       .addField("**هل تعلم**","** لعبه هل تعلم**")
       .addField("**رابط**","** لجب رابط السيرفر**")
    .setColor('RANDOM')
      message.author.sendEmbed(embed);
        }
    });


    client.on('message', message => {
                if (message.content.startsWith(".help")) {
         let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .addField('     Help ' ,' روح شيك خاصك  ✉  ')
    .setColor('#B101FC')
      message.channel.sendEmbed(embed);
        }
    });








    client.on('message' , message => {
    if (message.content === '.help') {
             let embed = new Discord.RichEmbed()

          .setThumbnail(message.author.avatarURL)
.addField("**:tools:  الأوامر الادرايه**","** **")
           .addField("**.mute**","**لعطاء شخص ميوت**")
           .addField("**.unmute**","**لفك الميوت عن احد**")
       .addField("**.clear - مسح**","** لمسح الشات**")
       .addField("**.bc**","** لارسال رساله الي جميع من ف السيرفر**")
    .setColor('RANDOM')
      message.author.sendEmbed(embed);
        }
    });


    client.on('message', message => {
                if (message.content.startsWith("kosamkafasdgj,.,.,.help")) {
         let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .addField('     Help ' ,' روح شيك خاصك  ✉  ')
    .setColor('#B101FC')
      message.channel.sendEmbed(embed);
        }
    });






client.on('message', message => {
  if (message.author.id === client.user.id) return;
          if (message.content.startsWith(prefix + "ping")) {
      message.channel.sendMessage(':ping_pong: Pong! In `' + `${client.ping}` + ' ms`');
  }
});


client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});



  client.on("guildCreate", guild => {
client.channels.get("487172306574245888").send(' ***  BOT  ***   **Join To**   ***[ ' + `${guild.name}` + ' ]***   ,   **  Owner  **  ' + ' ***[ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]***  **|**  ***[ ' + '<' + `${guild.owner.user.username}` + '>' + ' ]***')
});

client.on("guildDelete", guild => {
client.channels.get("487172306574245888").send(' ***  BOT  ***   **Leave From**   ***[ ' + `${guild.name}` + ' ]***   ,   **  Owner  **  ' + ' ***[ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]***  **|**  ***[ ' + '<' + `${guild.owner.user.username}` + '>' + ' ]***')
});






client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**أنت لا تملك الخصائص اللازمة . يجب توفر خاصية `Manage Roles`**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**أنا لا املك الخصائص الكافية . يلزم خصائص `Manage Roles` للقيام بهذا الامر**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let mention = message.mentions.members.first();
    if(!mention) return message.reply('**منشن عضو لأسكاته ( لأعطائة ميوت ) كتابي**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**لا يمكنك اعطاء لميوت شخص رتبته اعلى منك**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('**لا يمكنني اعطاء ميوت لشخص رتبته اعلى مني**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.id === message.author.id) return message.reply('**لا يمكنك اعطاء ميوت  لنفسك**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let duration = args[2];
    if(!duration) return message.reply('**حدد وقت زمني لفك الميوت عن الشخص**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(isNaN(duration)) return message.reply('**حدد وقت زمني صحيح**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = "غير محدد";

    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('تم اغطائك ميوت بسيرفر')
    .setThumbnail(mention.user.avatarURL)
    .addField('# - السيرفر',message.guild.name,true)
    .addField('# - تم اعطائك ميوت بواسطة',message.author,true)
    .addField('# - السبب',reason)

    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false,
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      });
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username} muted in the server ! :zipper_mouth:  **  `);
      mention.setMute(true);
    });
    setTimeout(() => {
      if(duration === 0) return;
      if(!mention.has.roles(role)) return;
      mention.setMute(false);
      mention.removeRole(role);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `);
    },duration * 60000);
  } else if(message.content.startsWith(prefix + "unmute")) {
    let mention = message.mentions.members.first();
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**أنت لا تملك الخصائص اللازمة . يجب توفر خاصية `Manage Roles`**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**أنا لا املك الخصائص الكافية . يلزم خصائص `Manage Roles` للقيام بهذا الامر**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!mention) return message.reply('**منشن الشخص لفك الميوت عنه**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

      mention.removeRole(role);
      mention.setMute(false);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `);
  }
});





var cats = [

  "https://cdn.discordapp.com/attachments/479044877745782801/479045993132720128/download_1.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046003937247253/download_2.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046011956887552/download_3.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046019904962562/download_4.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046030214692864/download_5.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046039794352151/download_6.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046055581974549/download_7.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046065367154712/download.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046084442980354/images_1.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046105674547216/images_4.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046113945583639/images_5.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046119838580756/images_6.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046131796672513/images_7.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046143318425621/images_8.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046152491368448/images_9.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046158979825686/images_10.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046162247188498/images_11.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046196434960416/images_12.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046214571130882/images_13.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046219528929290/images_14.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479072892022161408/images_15.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046222045511685/images_16.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046225086382081/images_18.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046228047560736/images_19.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046230794829834/images_20.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046233533710336/images_21.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479074274850766863/images_22.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046289477337089/images_23.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046293436629041/images_24.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046294925606914/images_25.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046303330992169/images_26.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046307072311317/images_27.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046315100340224/images_28.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046325619392537/images_29.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046333114875907/images_30.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046334825889807/images_31.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046338718466058/images_32.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046340379148288/images_33.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046342795198484/images_34.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046349644365827/images.jpg"
  ]
      client.on('message', message => {
          var args = message.content.split(" ").slice(1);
      if(message.content.startsWith(prefix + 'هل تعلم')) {
           var cat = new Discord.RichEmbed()
  .setImage(cats[Math.floor(Math.random() * cats.length)])
  message.channel.sendEmbed(cat);
      }
  });


client.on('message', message => {
  if (message.content.startsWith(".avatar")) {
      var mentionned = message.mentions.users.first();
  var x5bzm;
    if(mentionned){
        var x5bzm = mentionned;
    } else {
        var x5bzm = message.author;
        
    }
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setImage(`${x5bzm.avatarURL}`)
    message.channel.sendEmbed(embed);
  }
});




client.on('message', msg => {
  if(msg.content === '.ce')
  msg.reply('**هذا الامر سوف يكون متاح قريبا جدا انتظرو!**')
});
  

client.on('message', message => {
  let args = message.content.split(' ').slice(1);
if(message.content.split(' ')[0] == '.color'){
   const embedd = new Discord.RichEmbed()
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**لا يوجد لون بهذا الأسم ** :x: `)
.setColor(`ff0000`)

if(!isNaN(args) && args.length > 0)


if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


var a = message.guild.roles.find("name",`${args}`)
        if(!a)return;
const embed = new Discord.RichEmbed()
           
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**Done , تم تغير لونك . :white_check_mark: **`)

.setColor(`${a.hexColor}`)
message.channel.sendEmbed(embed);
  if (!args)return;
setInterval(function(){})
          let count = 0;
          let ecount = 0;
for(let x = 1; x < 201; x++){
   
    message.member.removeRole(message.guild.roles.find("name",`${x}`))
 
    }
        message.member.addRole(message.guild.roles.find("name",`${args}`));

   
}
});
client.on('message', ra3d => {

if (ra3d.content ===  prefix + 'cc'){
      if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**');
      ra3d.channel.send("**✅ | يتم عمل الالوان**");
          setInterval(function(){})
            let count = 0;
            let ecount = 0;
  for(let x = 1; x < 141; x++){
    ra3d.guild.createRole({name:x,
      color: 'RANDOM'})
      }
    }
});


client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "bot owner") {


message.author.sendMessage(`
__~~Speical System .~~__
╱╭╮╭╮╱╱╱╱╭╮╭━╮╱╱╱╱╱╱╭━━╮╱╱╱
♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ 
__created By__: @!                     - e2k.k ♪#4211 
Server Support : https://discord.gg/jYdSQr
bot link :   https://discordapp.com/oauth2/authorize?client_id=487160671704973312&scope=bot&permissions=384064
`);

message.channel.send('**تم الارسال في الخاص**');

  }
});






  client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** من جد تنشر لي خاص؟ ترا انا بوت يحمار ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** ممنوع نشر روابط يا عمو! :angry: !**`)
    }
}
});

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "452191687159185409") return;
 
 
  if (message.content.startsWith(prefix + 'setwatch')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`Watch Now: **${argresult}`)
}
 
 
  if (message.content.startsWith(prefix + 'setlis')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`LISTENING Now: **${argresult}`)
}
 
 
if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
}
 
if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}
 
if (message.content.startsWith(prefix + 'setstream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/KiNg66S");
     console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`)
}
if (message.content.startsWith(prefix + 'setplay')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`Playing: **${argresult}`)
}
 
 
 
});


client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "مسح") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});


client.on('message' , message => {
  var prefix = ".";
  if(message.content.startsWith(prefix + 'تذكره')) {
      message.channel.send('`تم عمل التذكره`');
      client.users.get('428568185277775872').send({embed: new Discord.RichEmbed()
      .setDescription(`**<@${message.author.id}> لديه دعوة تذكرة له**`)
      });
  }
});    


client.on("message", message => {
  if (message.content === ".Bping") {
    const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle('**Pong ! **')
.addField('**`بنق البوت`**' , `${Date.now() - message.createdTimestamp}` + ' `ms`')
message.channel.sendEmbed(embed);
}
});




client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "428568185277775872")
return;


  if (message.content.startsWith(prefix + 'setwatch')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`Watch Now: **${argresult}**`)
}


  if (message.content.startsWith(prefix + 'setlis')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`LISTENING Now: **${argresult}**`)
}


if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`تم تغيير الاسم بنجاح الى :white_check_mark:  **${argresult}**`)
}

if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`تم تغيير الصورة بنجاح الى :white_check_mark:  **${argresult}**`);
}

if (message.content.startsWith(prefix + 'setstream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/9ivv");
     console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}**`)
}
if (message.content.startsWith(prefix + 'setplay')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`Playing: **${argresult}**`)
}



});



client.on('message', message => {
    if(message.content.startsWith(prefix + 'move all')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
    if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)


     }
       });
  



client.on('message', message => {/// الفا كود | Emoko#0001
     if (message.content === ".Bservers") {
         if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM") /// الفا كود | Emoko#0001
  .addField("**سيرفرات يلي البوت موجود فيها: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }/// الفا كود | Emoko#0001
});







client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "❊ Speical's");
   member.addRole (role);
  
})

client.on ("guildMemberRemove", member => {
   
})






client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='.member')  /// By KillerFox_ حقوق الفا كودز
      var IzRo = new Discord.RichEmbed() /// By KillerFox_ حقوق الفا كودز
      .setThumbnail(message.author.avatarURL)  /// By KillerFox_ حقوق الفا كودز
      .setFooter(message.author.username, message.author.avatarURL) /// الفا كودز
      .setTitle('🌷| Members info') /// By KillerFox_ حقوق الفا كودز
      .addBlankField(true)
      .addField('📗| Online',  /// By KillerFox_ حقوق الفا كودز
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)  /// By KillerFox_ حقوق الفا كودز  /// By KillerFox_ حقوق الفا كودز
      .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)  /// By KillerFox_ حقوق الفا كودز
      .addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`) /// By KillerFox_ حقوق الفا كودز
      .addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`) /// By KillerFox_ حقوق الفا كودز
      .addField('➡| Server Members',`${message.guild.memberCount}`) /// By KillerFox_ حقوق الفا كودز
      message.channel.send(IzRo);
    
    });





client.on('message', msg => {
  if(msg.content === '.')
  msg.channel.send('** Welcome To __Speical Community__ :champagne_glass: . **')
});





         client.on('message', message => {
            if (message.content.startsWith(prefix + "bot")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' السيرفرات🌐',`[${client.guilds.size}]  `)
.addField(' الاعضاء👥 ',` [${client.users.size}] `)
.addField('الرومات📚 ',`[${client.channels.size}]`) 
.addField(' البنق🚀 ',`[${Date.now() - message.createdTimestamp}]`) 
.addField('مصمم  + صاحب البوت ',`@!                     - e2k.k ♪#4211  `)
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});






client.login(process.env.BOT_TOKEN);
