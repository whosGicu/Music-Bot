const Discord = require("discord.js")

module.exports = {
    name: "invite",
    description: "invite url link",
    timeout: 10000,
    run: async (interaction, client) => {
        if (process.env.oauthv2link === undefined) {
            interaction.reply({ content: "Missing `oauthv2link` in .env", ephemeral: true })
        } else {
            if (!process.env.oauthv2link.toString().startsWith("https://discord.com/")) {
                interaction.reply({ content: "Please provides a vaild OAuth2 link", ephemeral: true })
            } else {
                const embed = new Discord.MessageEmbed()
                .setTitle("Invite the bot below!")
                    .setThumbnail(client.user.displayAvatarURL())
                    .setColor("#000dff")
                    .setDescription(`[Click here!](${process.env.oauthv2link})`)
                interaction.reply({ embeds: [embed] })
            }
        }
    }
}
