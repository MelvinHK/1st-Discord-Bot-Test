"use strict";

const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    console.log("I'm ready.");
});

client.on('message', msg => {
    if (msg.content === '!ping') {
        msg.channel.send('pong!');
    }
});