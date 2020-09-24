const { MessageEmbed, Client } = require("discord.js");
const client = new Client();
const prefix = "+";
const { get } = require('axios');
const API = "API AUTH.GG";
const invite_discord_Old =  "https://discord.gg/3t2568W";
const idsalon = "ID SALON";
const id_oldmodz95 = "346049979863007232";
const salon_predefini = "You cannot use this command here. A private lounge is available to use the controls.";

client.on('ready', function() {
	console.log("100% ready to use.\nDevelopper par OldModz95#7213\n\ndiscord.gg/3t2568W\noldmodz95.me\nBOT DISORD OFFICIEL: https://botdiscord.oldmodz95.me")
	setInterval(async () => {
		try {
			//--------STATUS INFOS--------//
			const statuslist = [
				`${prefix}help | ${client.guilds.size} serveurs`,
				`${prefix}help | ${client.channels.size} channels`,
				`${prefix}help | ${client.users.size} user`
			];
			const random = Math.floor(Math.random() * statuslist.length);
			//------STATUS URL TWITCH------//
			const statusurl = [
				`https://www.twitch.tv/oldmodz95off`
			];
			const randomurl = Math.floor(Math.random() * statusurl.length);
			client.user.setPresence({ game: { name: statuslist[random]}, status: 'online' })
		} catch (error) {
			(console.log)
		};
	}, 10000);
});

client.on('message', async function(message) {
	////////-------////////
	//--A NE PAS TOUCHER-//
	////////-------////////
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;
	////////////////////
	////////////////////
	if (!message.content.startsWith(prefix)) return;

	if(message.content.startsWith(prefix + "setup")){
		message.delete(message.author);
		let embed_hhwid = new MessageEmbed()
			.setColor('random')
			.setTitle(`Setup Of Bot`)
			.setImage("https://media.discordapp.net/attachments/755487927588618274/756826026557964328/bannergif.gif")
			.setDescription(`Create a **private** lounge then copy their ID.\nOnly the manager of the Auth.gg account must see the lounge.\nFor security concerns in terms of personal information that will be visible !\nGo to the bot files .\nGo to the **index.js** file\nAdd it to **line 7**.\nGo to your Auth.gg account, then to one of your applications that you want to manage.\nGo to settings from your application then copy the API.\nPaste your API to **line 5**.\nClose the index.js file, launch the bot and try a command.\n\nIf you have any questions contact OldModz95.`)
			.setTimestamp()
			.setFooter(`Ask by ${message.author.tag}`)
		message.channel.send(embed_hhwid);
	}


	if(message.content.startsWith(prefix + "dev")){
		message.delete(message.author);
		let embed_hhwid = new MessageEmbed()
			.setColor('random')
			.setTitle(`Developped Of Bot`)
			.setImage("https://media.discordapp.net/attachments/755487927588618274/756826026557964328/bannergif.gif")
			.setDescription(`Owner Projet: **OldModz95#7213**\nStaff Projet: **POLYNESIA_972#8023**\nServer Discord: https://discord.gg/3t2568W`)
			.setTimestamp()
			.setFooter(`Ask by ${message.author.tag}`)
		message.channel.send(embed_hhwid);
	}

	if(message.content.startsWith(prefix + "contact")){
		message.delete(message.author);
		let embed_hhwid = new MessageEmbed()
			.setColor('random')
			.setTitle(`Contact Us`)
			.setImage("https://media.discordapp.net/attachments/755487927588618274/756826026557964328/bannergif.gif")
			.setDescription(`Server Discord: https://discord.gg/3t2568W\nSite Web: https://oldmodz95.me\nYouTube: https://youtube.com/oldmodz95\nInvite Our Official Bot: https://botdiscord.oldmodz95.me`)
			.setTimestamp()
			.setFooter(`Ask by ${message.author.tag}`)
		message.channel.send(embed_hhwid);
	}



	if(message.content.startsWith(prefix + "help")){
		message.delete(message.author);
		let embed_help = new MessageEmbed()
			.setColor('random')
			.setTitle(`Help Menu`)
			.setImage("https://media4.giphy.com/media/SXISye6qGJwkQgTiXD/giphy.gif")
			.setThumbnail("https://s7.gifyu.com/images/authgg.gif")
			.setDescription('Bot Auth.gg Who manages your applications')
			.addField(`\`${prefix}setup \``, "Configure the Auth.gg Bot.")
			.addField(`\`${prefix}help\``, "Displays the help command.")
			.addField(`\`${prefix}huser\``, "Show user commands.")
			.addField(`\`${prefix}hlicense\``, "Show license commands.")
			.addField(`\`${prefix}hhwid\``, "Show HWID commandes")
			.addField(`\`${prefix}contact\``, "Show information Bot.")
			.addField(`\`${prefix}dev \``, "Show Developer.")
			.setTimestamp()
			.setFooter(`Ask by ${message.author.tag}`)
		message.channel.send(embed_help);
	}



	if(message.content.startsWith(prefix + "huser")){
		message.delete(message.author);
		let embed_huser = new MessageEmbed()
			.setColor('random')
			.setTitle(`Menu Help Commande User`)
			.setImage("https://media3.giphy.com/media/lNS9w4bloaHsobH4Zy/giphy.gif")
			.setDescription(`Need help ? Fact **${prefix}excommande**`)
			.setThumbnail("https://s7.gifyu.com/images/authgg.gif")
			.addField(`\`${prefix}userinfos\``, "View a user's information.")
			.addField(`\`${prefix}deleteuser\``, "Delete User")
			.addField(`\`${prefix}pass\``, "Change a user's password.")
			.addField(`\`${prefix}variable\``, "Add/Change a user's variable.")
			.addField(`\`${prefix}usercount\``, "Display the number of users on the application.")
			.addField(`\`${prefix}infousernum\``, "Display the information of a user number.")
			.setTimestamp()
			.setFooter(`Ask by ${message.author.tag}`)
		message.channel.send(embed_huser);
	}


	if(message.content.startsWith(prefix + "hlicense")){
		message.delete(message.author);
		let embed_hlicense = new MessageEmbed()
			.setColor('random')
			.setTitle(`Menu Help Commande License`)
			.setImage("https://media2.giphy.com/media/XbPNJZUm7x10CUIlXp/giphy.gif")
			.setDescription(`Need help ? Fact **${prefix}excommande**`)
			.setThumbnail("https://s7.gifyu.com/images/authgg.gif")
			.addField(`\`${prefix}key\``, "Display license information.")
			.addField(`\`${prefix}deletekey\``, "Delete License")
			.addField(`\`${prefix}usekey\``, "Change the license to **Use**")
			.addField(`\`${prefix}unusekey\``, "Change the license to **Unuse**")
			.addField(`\`${prefix}generate\``, "Generate New License")
			.addField(`\`${prefix}countkey\``, "Display the number of licenses created.")
			.setTimestamp()
			.setFooter(`Ask by ${message.author.tag}`)
		message.channel.send(embed_hlicense);
	}


	if(message.content.startsWith(prefix + "hhwid")){
		message.delete(message.author);
		let embed_hhwid = new MessageEmbed()
			.setColor('random')
			.setTitle(`Menu Help Commande HWID`)
			.setImage("https://media3.giphy.com/media/kd9k2KsosKu6Er9RTH/giphy.gif")
			.setDescription(`Need help ? Fact **${prefix}excommande**`)
			.setThumbnail("https://s7.gifyu.com/images/authgg.gif")
			.addField(`\`${prefix}resethwid\``, "Removes the present HWID.")
			.addField(`\`${prefix}infohwid\``, "View the user's HWID.")
			.setTimestamp()
			.setFooter(`Ask by ${message.author.tag}`)
		message.channel.send(embed_hhwid);
	}


	if(message.content.startsWith(prefix + "excommande")){
		message.delete(message.author);
		let embed_excommande = new MessageEmbed()
			.setColor('random')
			.setTitle(`Menu Help All Commandes`)
			.setImage("https://media3.giphy.com/media/KzEbSenNKrXFjrubm0/giphy.gif")
			.setDescription(`Need Help ? Contact **OldModz95**`)
			.setThumbnail("https://s7.gifyu.com/images/authgg.gif")
			.addField(`\`${prefix}key\``, ";key LICENSE")
			.addField(`\`${prefix}deletekey\``, ";deletekey LICENSE")
			.addField(`\`${prefix}usekey\``, ";usekey LICENSE")
			.addField(`\`${prefix}unusekey\``, ";unusekey LICENSE")
			.addField(`\`${prefix}generate\``, ";generate 1 `(1 = number of days)`")
			.addField(`\`${prefix}countkey\``, ";countkey")
			.addField(`\`${prefix}resethwid\``, ";resethwid username")
			.addField(`\`${prefix}infohwid\``, ";infohwid username")
			.addField(`\`${prefix}userinfos\``, ";userinfos username")
			.addField(`\`${prefix}deleteuser\``, ";deleteuser username")
			.addField(`\`${prefix}pass\``, ";pass username password")
			.addField(`\`${prefix}variable\``, ";variable username variable")
			.addField(`\`${prefix}usercount\``, ";usercount")
			.addField(`\`${prefix}infousernum\``, ";infousernum 8 `(8 = user 8, if it does not exist it displays nothing.)`\n\nIf you have any questions feel free to order dev and contact **OldModz95**")
			.setTimestamp()
			.setFooter(`Ask by ${message.author.tag}`)
		message.channel.send(embed_excommande);
	}

/////////////////////////////////////////////////////
/////////////////COMMANDE USER//////////////////////
///////////////////////////////////////////////////


if(message.content.startsWith(prefix + "infousernum")){
	message.delete(message.author);
	if(message.channel.id != idsalon){// This command can only be used in this channel
		let embed_Send = new MessageEmbed()
		.setURL(invite_discord_Old)
		.setTitle('[Join Server Discord OldModz95]')
		.setColor("RANDOM")
		.setDescription(`${salon_predefini}`)
		.setThumbnail(client.user.avatarURL)
		.setTimestamp()
		.setFooter(`Ask by ${message.author.username}`)
	message.channel.send(embed_Send)
	} else {
		let content = message.content.split(" ");
	let args = content.slice(1);
	const name_infousernum = args.join(" ");
	if(!name_infousernum) {
		return message.reply("Please enter a valid name !");
	}
	get(`https://developers.auth.gg/USERS/?type=fetchall&authorization=${API}`, {
		headers: {
			'Content-Type': "application/json",
		}
	}).then( (res) => {
		//-----------------------------//
		//           STATS             //
		//-----------------------------//
		try {
		let Istats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`All User Information`)
				.setDescription(`Username: ${res.data[`${name_infousernum}`].username}\nEmail: ${res.data[`${name_infousernum}`].email}\nHWID: ${res.data[`${name_infousernum}`].hwid}\nRank: ${res.data[`${name_infousernum}`].rank}\nVariable: ${res.data[`${name_infousernum}`].variable}\nLast Login: ${res.data[`${name_infousernum}`].lastlogin}\nLast IP: ${res.data[`${name_infousernum}`].lastip}\nExpiry Date: ${res.data[`${name_infousernum}`].expiry_date}
				
				If undefined = Username no valid.`)
				
				.setTimestamp()
				.setFooter(`Ask by ${message.author.tag}`)
			message.channel.send({embed: Istats});
		}catch(error)  {
			//console.log(res.data)
			let Estats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`No Found For ${name_userinfos}`)
				.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
				.setTimestamp()
				.setFooter(`Ask by ${message.author.tag}`)
				message.channel.send({embed: Estats});
		
			}
	}).catch ((error) => {
		return message.channel.send(`:x: User did not find !.`);
	})
}
}




if(message.content.startsWith(prefix + "userinfos")){
	message.delete(message.author);
	if(message.channel.id != idsalon){// This command can only be used in this channel
		let embed_Send = new MessageEmbed()
		.setURL(invite_discord_Old)
		.setTitle('[Join Server Discord OldModz95]')
		.setColor("RANDOM")
		.setDescription(`${salon_predefini}`)
		.setThumbnail(client.user.avatarURL)
		.setTimestamp()
		.setFooter(`Ask by ${message.author.username}`)
	message.channel.send(embed_Send)
	} else {
	let content = message.content.split(" ");
	let args = content.slice(1);
	const name_userinfos = args.join(" ");
	if(!name_userinfos) {
		return message.reply("Please enter a valid name !");
	}
	get(`https://developers.auth.gg/USERS/?type=fetch&authorization=${API}&user=${name_userinfos}`, {
		headers: {
			'Content-Type': "application/json",
		}
	}).then( (res) => {
		//-----------------------------//
		//           STATS             //
		//-----------------------------//
		try {
		//console.log(res.data)
			let Istats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`Info User : ${res.data.username}`)
				.setDescription(`Status: ${res.data.status}\nUsername: ${res.data.username}\nEmail: ${res.data.email}\nRank: ${res.data.rank}\n\n**Information Subcription**\nLast Login: ${res.data.lastlogin}\nExpiry: ${res.data.expiry}\n\n**Other Information**\nLast IP: ${res.data.lastip}\nVariable: ${res.data.variable}\nHWID: ${res.data.hwid}
				
				If undefined = Username no valid.`)
				
				.setTimestamp()
				.setFooter(`Ask by ${message.author.tag}`)
			message.channel.send({embed: Istats});
		}catch(error)  {
			//console.log(res.data)
			let Estats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`No Found For ${name_userinfos}`)
				.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
				.setTimestamp()
				.setFooter(`Ask by ${message.author.tag}`)
				message.channel.send({embed: Estats});
		
			}
	}).catch ((error) => {
		return message.channel.send(`:x: User did not find !.`);
	})
}
}


if(message.content.startsWith(prefix + "deleteuser")){
	message.delete(message.author);
	if(message.channel.id != idsalon){// This command can only be used in this channel
		let embed_Send = new MessageEmbed()
		.setURL(invite_discord_Old)
		.setTitle('[Join Server Discord OldModz95]')
		.setColor("RANDOM")
		.setDescription(`${salon_predefini}`)
		.setThumbnail(client.user.avatarURL)
		.setTimestamp()
		.setFooter(`Ask by ${message.author.username}`)
	message.channel.send(embed_Send)
	} else {
	let content = message.content.split(" ");
	let args = content.slice(1);
	const name_deleteuser = args.join(" ");
	if(!name_deleteuser) {
		return message.reply("Please enter a valid name !");
	}
	get(`https://developers.auth.gg/USERS/?type=delete&authorization=${API}&user=${name_deleteuser}`, {
		headers: {
			'Content-Type': "application/json",
		}
	}).then( (res) => {
		//-----------------------------//
		//           STATS             //
		//-----------------------------//
		try {
		//console.log(res.data)
			let Istats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`User Delete : ${name_deleteuser}`)
				.setDescription(`Status: ${res.data.status}\nInfo: ${res.data.info}
				
				If undefined = Username no valid.`)
				
				.setTimestamp()
				.setFooter(`Ask by ${message.author.tag}`)
			message.channel.send({embed: Istats});
		}catch(error)  {
			//console.log(res.data)
			let Estats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`No Found For ${name_deleteuser}`)
				//.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
				.setTimestamp()
				.setFooter(`Ask by ${message.author.tag}`)
				message.channel.send({embed: Estats});
		
			}
	}).catch ((error) => {
		return message.channel.send(`:x: User did not find !.`);
	})
}
}



if(message.content.startsWith(prefix + "pass")){
	message.delete(message.author);
	if(message.channel.id != idsalon){// This command can only be used in this channel
		let embed_Send = new MessageEmbed()
		.setURL(invite_discord_Old)
		.setTitle('[Join Server Discord OldModz95]')
		.setColor("RANDOM")
		.setDescription(`${salon_predefini}`)
		.setThumbnail(client.user.avatarURL)
		.setTimestamp()
		.setFooter(`Ask by ${message.author.username}`)
	message.channel.send(embed_Send)
	} else {
	const user = message.content.split(" ")[1];
	const new_pass = message.content.split(" ")[2];
	if(!user) {
		return message.reply("Please enter a valid username !");
	}
	if(!new_pass) {
		return message.reply("Veuillez entrez un mot de passe !");
	}
	get(`https://developers.auth.gg/USERS/?type=changepw&authorization=${API}&user=${user}&password=${new_pass}`, {
		headers: {
			'Content-Type': "application/json",
		}
	}).then( (res) => {
		//-----------------------------//
		//           STATS             //
		//-----------------------------//
		try {
		//console.log(res.data)
			let Istats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`Password Update`)
				.setDescription(`Status: ${res.data.status}\nInfo: ${res.data.info}
				
				If undefined = user invalid.`)
				
				.setTimestamp()
				.setFooter(`Ask by ${message.author.tag}`)
			message.channel.send({embed: Istats});

			let MPstats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`Password Update`)
				.setDescription(`Status: ${res.data.status}\nUsername: ${user}\nNew Password: **${new_pass}**`)
				.setTimestamp()
				.setFooter(`Ask by ${message.author.tag}`)
			message.author.send({embed: MPstats}).catch(error => message.channel.send(`:x: Unable to send messages to this user! :x:`)
			.then(m => m.delete({timeout: 3000})))
		}catch(error)  {
		//console.log(res.data)
			let Estats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`Password Update Failed`)
				.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
				.setTimestamp()
				.setFooter(`Ask by ${message.author.tag}`)
				message.channel.send({embed: Estats});
		
			}
	}).catch ((error) => {
		return message.channel.send(`:x: User did not find !.`);
	})
}
}




if(message.content.startsWith(prefix + "variable")){
	message.delete(message.author);
	if(message.channel.id != idsalon){// This command can only be used in this channel
		let embed_Send = new MessageEmbed()
		.setURL(invite_discord_Old)
		.setTitle('[Join Server Discord OldModz95]')
		.setColor("RANDOM")
		.setDescription(`${salon_predefini}`)
		.setThumbnail(client.user.avatarURL)
		.setTimestamp()
		.setFooter(`Ask by ${message.author.username}`)
	message.channel.send(embed_Send)
	} else {
	const user = message.content.split(" ")[1];
	const variable = message.content.split(" ")[2];
	if(!user) {
		return message.reply("Please enter a valid username !");
	}
	if(!variable) {
		return message.reply("Please enter a variable !");
	}
	get(`https://developers.auth.gg/USERS/?type=editvar&authorization=${API}&user=${user}&value=${variable}`, {
		headers: {
			'Content-Type': "application/json",
		}
	}).then( (res) => {
		//-----------------------------//
		//           STATS             //
		//-----------------------------//
		try {
		//console.log(res.data)
			let Istats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`Variable Update`)
				.setDescription(`Status: ${res.data.status}\nInfo: ${res.data.info}
				
				If undefined = user invalid.`)
				
				.setTimestamp()
				.setFooter(`Ask by ${message.author.tag}`)
			message.channel.send({embed: Istats});

			let MPstats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`Variable Update`)
				.setDescription(`Status: ${res.data.status}\nUsername: ${user}\nNew Variable: **${variable}**`)
				.setTimestamp()
				.setFooter(`Ask by ${message.author.tag}`)
			message.author.send({embed: MPstats}).catch(error => message.channel.send(`:x: Unable to send messages to this user! :x:`)
			.then(m => m.delete({timeout: 3000})))
		}catch(error)  {
		//console.log(res.data)
			let Estats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`Variable Update Failed`)
				.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
				.setTimestamp()
				.setFooter(`Ask by ${message.author.tag}`)
				message.channel.send({embed: Estats});
		
			}
	}).catch ((error) => {
		return message.channel.send(`:x: User did not find !.`);
	})
}
}



if(message.content.startsWith(prefix + "usercount")){
	message.delete(message.author);
	if(message.channel.id != idsalon){// This command can only be used in this channel
		let embed_Send = new MessageEmbed()
		.setURL(invite_discord_Old)
		.setTitle('[Join Server Discord OldModz95]')
		.setColor("RANDOM")
		.setDescription(`${salon_predefini}`)
		.setThumbnail(client.user.avatarURL)
		.setTimestamp()
		.setFooter(`Ask by ${message.author.username}`)
	message.channel.send(embed_Send)
	} else {
	get(`https://developers.auth.gg/USERS/?type=count&authorization=${API}`, {
		headers: {
			'Content-Type': "application/json",
		}
	}).then( (res) => {
		//-----------------------------//
		//           STATS             //
		//-----------------------------//
		try {
		//console.log(res.data)
			let Istats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`User Count`)
				.setDescription(`Status: ${res.data.status}\nNumber of users: ${res.data.value}\nInfo: ${res.data.info}\n\nIf undefined (Info) = No Error`)
				
				.setTimestamp()
				.setFooter(`Ask by ${message.author.tag}`)
			message.channel.send({embed: Istats});
		}catch(error)  {
			//console.log(res.data)
			let Estats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`No Found For User Count`)
				//.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
				.setTimestamp()
				.setFooter(`Ask by ${message.author.tag}`)
				message.channel.send({embed: Estats});
		
			}
	}).catch ((error) => {
		return message.channel.send(`:x: User did not find !.`);
	})
}
}

/////////////////////////////////////////////////////
///////////////END COMMANDE USER////////////////////
///////////////////////////////////////////////////

/////////////////////////////////////////////////////
/////////////////COMMANDE LICENSE///////////////////
///////////////////////////////////////////////////



	if(message.content.startsWith(prefix + "key")){
		message.delete(message.author);
		if(message.channel.id != idsalon){// This command can only be used in this channel
			let embed_Send = new MessageEmbed()
            .setURL(invite_discord_Old)
            .setTitle('[Join Server Discord OldModz95]')
            .setColor("RANDOM")
            .setDescription(`${salon_predefini}`)
            .setThumbnail(client.user.avatarURL)
            .setTimestamp()
            .setFooter(`Ask by ${message.author.username}`)
        message.channel.send(embed_Send)
    	} else {
		let content = message.content.split(" ");
		let args = content.slice(1);
		const name_key = args.join(" ");
		if(!name_key) {
			return message.reply("Please enter a valid name !");
		}
		get(`https://developers.auth.gg/LICENSES/?type=fetch&authorization=${API}&license=${name_key}`, {
			headers: {
				'Content-Type': "application/json",
			}
		}).then( (res) => {
			//-----------------------------//
			//           STATS             //
			//-----------------------------//
			try {
			//console.log(res.data)
				let Istats = new MessageEmbed()
					.setColor(0x36393F)
					.setTitle(`Info Key : ${res.data.license}`)
					.setDescription(`Status: ${res.data.status}\nUsername: ${res.data.used_by}\nLicense: ${res.data.license}\nRank: ${res.data.rank}\nUsable: ${res.data.used}\nCreated: ${res.data.created}
					
					If undefined = License no valid.`)
					
					.setTimestamp()
					.setFooter(`Ask by ${message.author.tag}`)
				message.channel.send({embed: Istats});
			}catch(error)  {
				//console.log(res.data)
				let Estats = new MessageEmbed()
					.setColor(0x36393F)
					.setTitle(`No Found For ${name_key}`)
					.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
					.setTimestamp()
					.setFooter(`Ask by ${message.author.tag}`)
					message.channel.send({embed: Estats});
			
				}
		}).catch ((error) => {
			return message.channel.send(`:x: User did not find !.`);
		})
	}
	}


	if(message.content.startsWith(prefix + "deletekey")){
		message.delete(message.author);
		if(message.channel.id != idsalon){// This command can only be used in this channel
			let embed_Send = new MessageEmbed()
			.setURL(invite_discord_Old)
			.setTitle('[Join Server Discord OldModz95]')
			.setColor("RANDOM")
			.setDescription(`${salon_predefini}`)
			.setThumbnail(client.user.avatarURL)
			.setTimestamp()
			.setFooter(`Ask by ${message.author.username}`)
		message.channel.send(embed_Send)
		} else {
		let content = message.content.split(" ");
		let args = content.slice(1);
		const name_deletekey = args.join(" ");
		if(!name_deletekey) {
			return message.reply("Please enter a valid license !");
		}
		get(`https://developers.auth.gg/LICENSES/?type=delete&license=${name_deletekey}&authorization=${API}`, {
			headers: {
				'Content-Type': "application/json",
			}
		}).then( (res) => {
			//-----------------------------//
			//           STATS             //
			//-----------------------------//
			try {
			//console.log(res.data)
				let Istats = new MessageEmbed()
					.setColor(0x36393F)
					.setTitle(`License Delete`)
					.setDescription(`Status: ${res.data.status}\nInfo: ${res.data.info}\nLicense Delete: ${name_deletekey}`)
					
					.setTimestamp()
					.setFooter(`Ask by ${message.author.tag}`)
				message.channel.send({embed: Istats});
			}catch(error)  {
				//console.log(res.data)
				let Estats = new MessageEmbed()
					.setColor(0x36393F)
					.setTitle(`No Found For ${name_deletekey}`)
					.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
					.setTimestamp()
					.setFooter(`Ask by ${message.author.tag}`)
					message.channel.send({embed: Estats});
			
				}
		}).catch ((error) => {
			return message.channel.send(`:x: User did not find !.`);
		})
	}
	}



	if(message.content.startsWith(prefix + "usekey")){
		message.delete(message.author);
		if(message.channel.id != idsalon){// This command can only be used in this channel
			let embed_Send = new MessageEmbed()
			.setURL(invite_discord_Old)
			.setTitle('[Join Server Discord OldModz95]')
			.setColor("RANDOM")
			.setDescription(`${salon_predefini}`)
			.setThumbnail(client.user.avatarURL)
			.setTimestamp()
			.setFooter(`Ask by ${message.author.username}`)
		message.channel.send(embed_Send)
		} else {
		let content = message.content.split(" ");
		let args = content.slice(1);
		const name_usekey = args.join(" ");
		if(!name_usekey) {
			return message.reply("Please enter a valid license !");
		}
		get(`https://developers.auth.gg/LICENSES/?type=use&license=${name_usekey}&authorization=${API}`, {
			headers: {
				'Content-Type': "application/json",
			}
		}).then( (res) => {
			//-----------------------------//
			//           STATS             //
			//-----------------------------//
			try {
			//console.log(res.data)
				let Istats = new MessageEmbed()
					.setColor(0x36393F)
					.setTitle(`Use License`)
					.setDescription(`Status: ${res.data.status}\nInfo: ${res.data.info}\nLicense Use: ${name_usekey}`)
					
					.setTimestamp()
					.setFooter(`Ask by ${message.author.tag}`)
				message.channel.send({embed: Istats});
			}catch(error)  {
				//console.log(res.data)
				let Estats = new MessageEmbed()
					.setColor(0x36393F)
					.setTitle(`No Found For ${name_usekey}`)
					.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
					.setTimestamp()
					.setFooter(`Ask by ${message.author.tag}`)
					message.channel.send({embed: Estats});
			
				}
		}).catch ((error) => {
			return message.channel.send(`:x: User did not find !.`);
		})
	}
	}


	if(message.content.startsWith(prefix + "unusekey")){
		message.delete(message.author);
		if(message.channel.id != idsalon){// This command can only be used in this channel
			let embed_Send = new MessageEmbed()
			.setURL(invite_discord_Old)
			.setTitle('[Join Server Discord OldModz95]')
			.setColor("RANDOM")
			.setDescription(`${salon_predefini}`)
			.setThumbnail(client.user.avatarURL)
			.setTimestamp()
			.setFooter(`Ask by ${message.author.username}`)
		message.channel.send(embed_Send)
		} else {
		let content = message.content.split(" ");
		let args = content.slice(1);
		const name_unusekey = args.join(" ");
		if(!name_unusekey) {
			return message.reply("Please enter a valid license !");
		}
		get(`https://developers.auth.gg/LICENSES/?type=unuse&license=${name_unusekey}&authorization=${API}`, {
			headers: {
				'Content-Type': "application/json",
			}
		}).then( (res) => {
			//-----------------------------//
			//           STATS             //
			//-----------------------------//
			try {
			//console.log(res.data)
				let Istats = new MessageEmbed()
					.setColor(0x36393F)
					.setTitle(`Unuse License`)
					.setDescription(`Status: ${res.data.status}\nInfo: ${res.data.info}\nLicense Unuse: ${name_unusekey}`)
					
					.setTimestamp()
					.setFooter(`Ask by ${message.author.tag}`)
				message.channel.send({embed: Istats});
			}catch(error)  {
				//console.log(res.data)
				let Estats = new MessageEmbed()
					.setColor(0x36393F)
					.setTitle(`No Found For ${name_unusekey}`)
					.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
					.setTimestamp()
					.setFooter(`Ask by ${message.author.tag}`)
					message.channel.send({embed: Estats});
			
				}
		}).catch ((error) => {
			return message.channel.send(`:x: User did not find !.`);
		})
	}
	}



	if(message.content.startsWith(prefix + "countkey")){
		message.delete(message.author);
		if(message.channel.id != idsalon){// This command can only be used in this channel
			let embed_Send = new MessageEmbed()
			.setURL(invite_discord_Old)
			.setTitle('[Join Server Discord OldModz95]')
			.setColor("RANDOM")
			.setDescription(`${salon_predefini}`)
			.setThumbnail(client.user.avatarURL)
			.setTimestamp()
			.setFooter(`Ask by ${message.author.username}`)
		message.channel.send(embed_Send)
		} else {
		get(`https://developers.auth.gg/LICENSES/?type=count&authorization=${API}`, {
			headers: {
				'Content-Type': "application/json",
			}
		}).then( (res) => {
			//-----------------------------//
			//           STATS             //
			//-----------------------------//
			try {
			//console.log(res.data)
				let Istats = new MessageEmbed()
					.setColor(0x36393F)
					.setTitle(`Count License`)
					.setDescription(`You have ${res.data.value} license(s) on your application.`)
					
					.setTimestamp()
					.setFooter(`Ask by ${message.author.tag}`)
				message.channel.send({embed: Istats});
			}catch(error)  {
				//console.log(res.data)
				let Estats = new MessageEmbed()
					.setColor(0x36393F)
					.setTitle(`No Found`)
					.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
					.setTimestamp()
					.setFooter(`Ask by ${message.author.tag}`)
					message.channel.send({embed: Estats});
			
				}
		}).catch ((error) => {
			return message.channel.send(`:x: User did not find !.`);
		})
	}
	}


	if(message.content.startsWith(prefix + "generate")){
		message.delete(message.author);
		if(message.channel.id != idsalon){// This command can only be used in this channel
			let embed_Send = new MessageEmbed()
			.setURL(invite_discord_Old)
			.setTitle('[Join Server Discord OldModz95]')
			.setColor("RANDOM")
			.setDescription(`${salon_predefini}`)
			.setThumbnail(client.user.avatarURL)
			.setTimestamp()
			.setFooter(`Ask by ${message.author.username}`)
		message.channel.send(embed_Send)
		} else {
		let content = message.content.split(" ");
		let args = content.slice(1);
		const name_generate = args.join(" ");
		if(!name_generate) {
			return message.reply("Please enter a valid username !");
		}
		get(`https://developers.auth.gg/LICENSES/?type=generate&days=${name_generate}&amount=1&level=1&authorization=${API}`, {
			headers: {
				'Content-Type': "application/json",
			}
		}).then( (res) => {
			//-----------------------------//
			//           STATS             //
			//-----------------------------//
			try {
			//console.log(res.data)
				let Istats = new MessageEmbed()
					.setColor(0x36393F)
					.setTitle(`Generate License`)
					.setDescription(`License: ${res.data[0]}\nJour(s): ${name_generate}`)
					
					.setTimestamp()
					.setFooter(`Ask by ${message.author.tag}`)
				message.channel.send({embed: Istats});
			}catch(error)  {
				//console.log(res.data)
				let Estats = new MessageEmbed()
					.setColor(0x36393F)
					.setTitle(`No Found For API Admin`)
					.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
					.setTimestamp()
					.setFooter(`Ask by ${message.author.tag}`)
					message.channel.send({embed: Estats});
			
				}
		}).catch ((error) => {
			return message.channel.send(`:x: User did not find !.`);
		})
	}
	}


/////////////////////////////////////////////////////
//////////////END COMMANDE LICENSE//////////////////
///////////////////////////////////////////////////

/////////////////////////////////////////////////////
/////////////////COMMANDE HWID//////////////////////
///////////////////////////////////////////////////

if(message.content.startsWith(prefix + "infohwid")){
	message.delete(message.author);
	if(message.channel.id != idsalon){// This command can only be used in this channel
		let embed_Send = new MessageEmbed()
		.setURL(invite_discord_Old)
		.setTitle('[Join Server Discord OldModz95]')
		.setColor("RANDOM")
		.setDescription(`${salon_predefini}`)
		.setThumbnail(client.user.avatarURL)
		.setTimestamp()
		.setFooter(`Ask by ${message.author.username}`)
	message.channel.send(embed_Send)
	} else {
	let content = message.content.split(" ");
	let args = content.slice(1);
	const name_infohwid = args.join(" ");
	if(!name_infohwid) {
		return message.reply("Please enter a valid username !");
	}
	get(`https://developers.auth.gg/HWID/?type=fetch&authorization=${API}&user=${name_infohwid}`, {
		headers: {
			'Content-Type': "application/json",
		}
	}).then( (res) => {
		//-----------------------------//
		//           STATS             //
		//-----------------------------//
		try {
		//console.log(res.data)
			let Istats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`Get HWID information`)
				.setDescription(`Status: ${res.data.status}\nUser: ${name_infohwid}\nHWID: ${res.data.value}`)
				
				.setTimestamp()
				.setFooter(`Ask by ${message.author.tag}`)
			message.channel.send({embed: Istats});
		}catch(error)  {
			//console.log(res.data)
			let Estats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`No Found For ${name_infohwid}`)
				.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
				.setTimestamp()
				.setFooter(`Ask by ${message.author.tag}`)
				message.channel.send({embed: Estats});
		
			}
	}).catch ((error) => {
		return message.channel.send(`:x: User did not find !.`);
	})
}
}



if(message.content.startsWith(prefix + "resethwid")){
	message.delete(message.author);
	if(message.channel.id != idsalon){// This command can only be used in this channel
		let embed_Send = new MessageEmbed()
		.setURL(invite_discord_Old)
		.setTitle('[Join Server Discord OldModz95]')
		.setColor("RANDOM")
		.setDescription(`${salon_predefini}`)
		.setThumbnail(client.user.avatarURL)
		.setTimestamp()
		.setFooter(`Ask by ${message.author.username}`)
	message.channel.send(embed_Send)
	} else {
	let content = message.content.split(" ");
	let args = content.slice(1);
	const name_resethwid = args.join(" ");
	if(!name_resethwid) {
		return message.reply("Please enter a valid username !");
	}
	get(`https://developers.auth.gg/HWID/?type=reset&authorization=${API}&user=${name_resethwid}`, {
		headers: {
			'Content-Type': "application/json",
		}
	}).then( (res) => {
		//-----------------------------//
		//           STATS             //
		//-----------------------------//
		try {
		//console.log(res.data)
			let Istats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`Reset HWID`)
				.setDescription(`Status: ${res.data.status}\nUser: ${name_resethwid}\nAction: ${res.data.info}`)
				
				.setTimestamp()
				.setFooter(`Ask by ${message.author.tag}`)
			message.channel.send({embed: Istats});
		}catch(error)  {
			//console.log(res.data)
			let Estats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`No Found For ${name_resethwid}`)
				.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
				.setTimestamp()
				.setFooter(`Ask by ${message.author.tag}`)
				message.channel.send({embed: Estats});
		
			}
	}).catch ((error) => {
		return message.channel.send(`:x: User did not find !.`);
	})
}
}

/////////////////////////////////////////////////////
///////////////END COMMANDE HWID////////////////////
///////////////////////////////////////////////////



})//

client.login("TOKEN");