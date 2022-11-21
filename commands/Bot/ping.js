const Discord = require("discord.js")

module.exports = {
    name: "ping",
    description: "Returns latency and API ping",
    run: async (interaction, client) => {
        const embed = new Discord.MessageEmbed()
            .setColor("#000dff")
            .setThumbnail(client.user.displayAvatarURL())
            .addFields(
                { name: "Latency", value: `\`${Date.now() - interaction.createdTimestamp}ms\`` },
                { name: "API Latency", value: `\`${Math.round(client.ws.ping)}ms\`` }
            )
        interaction.reply({ embeds: [embed] })
    }
}
