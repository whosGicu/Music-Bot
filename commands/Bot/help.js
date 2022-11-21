const Discord = require("discord.js")
const { version } = require("discord.js")

module.exports = {
    name: "help",
    description: "See the bot's commands.",
    timeout: 10000,
    run: async (interaction, client) => {
        const embed = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setColor("#000dff")
  .setTitle(`${process.env.botname} Features`)
  .setDescription(`Running version v2.0.1 [Invite](${process.env.oauthv2link}) \nCheck out the support server! [Click Here](${process.env.supportlink}) \n \nFirst things off, here's some stuff about me! \n \n- You can display all the commands using /help \n- If you have any questions or suggestions, press on the words "Click Here" and join our support server! \n :deciduous_tree: We hope you'll enjoy our bot and take it with you through your adventure! :deciduous_tree: \n`)
  .addField(`Categories:`, `**Music:** (Ex: /play free no copyright music) \n Play, Stop, Skip, Loop, Queue, Nowplaying, Autoplay, Filter, Join, Jump, Leave, Pause, Resume, Seek, Shuffle, Volume`)
  .addField(`Second Categories:`, `**Info:** \n botinfo, help, invite, ping, uptime, avatar, vote`)
  .addField(`Support server not working?`, `Contact the developers ${process.env.ownerid} and chat with them!`)
  .addField(`Additional Links`, `[Support](${process.env.supportlink}) | [Invite](${process.env.oauthv2link})`)
            
        interaction.reply({ embeds: [embed] })
    }
}
