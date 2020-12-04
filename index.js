"use strict";

const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');
require('dotenv').config();

client.login(process.env.BOT_TOKEN);

var prefix = '!';

client.on('ready', () => {
    console.log("I'm ready.");
});

client.on('message', async msg => {
    if (!msg.content.startsWith(prefix)) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping' && !args.length) {
        const embed = new Discord.MessageEmbed()
            .setTitle('🏓 pong!')
            .setColor('#FF0000')
            .addFields(
                { name: 'your ping:', value: `${Date.now() - msg.createdTimestamp}ms`, inline: true }
            );
        msg.channel.send(embed);
    }

    if (command === 'cat' && !args.length) {
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
        msg.channel.send('here is a random cat image for you');
        msg.channel.send(file);
    }
});