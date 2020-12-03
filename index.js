"use strict";

const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

client.login(process.env.BOT_TOKEN);

var prefix = '!';

client.on('ready', () => {
    console.log("I'm ready.");
});

client.on('message', msg => {
    if (msg.content.startsWith(`${prefix}ping`)) {
        const embed = new Discord.MessageEmbed()
            .setTitle('🏓 pong!')
            .setColor('#FF0000')
            .setDescription(`${Date.now() - msg.createdTimestamp}ms`)
        msg.channel.send(embed);
    }
});