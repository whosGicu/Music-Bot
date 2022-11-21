const Discord = require("discord.js")
const { version } = require("discord.js")
const os = require("os")

module.exports = {
    name: "botinfo",
    description: "See detailed info about the client",
    timeout: 10000,
    run: async (interaction, client) => {
        
		const days = Math.floor(client.uptime / 86400000)
        const hours = Math.floor(client.uptime / 3600000) % 24
        const minutes = Math.floor(client.uptime / 60000) % 60
        const seconds = Math.floor(client.uptime / 1000) % 60
        
        const embed = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle("Bot Stats")
            .setColor("#000dff")
            .addFields(
                {
                    name: "Owners",
                    value: `<@907974428577652737>`,
                    inline: true
                },
                {
                    name: "Servers",
                    value: `Serving over ${client.guilds.cache.size} servers.`,
                    inline: true
                },
                {
                    name: "Channels",
                    value: `I'm watching over ${client.channels.cache.size} channels.`,
                    inline: true
                },
                {
                    name: "Users",
                    value: `I currently own ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} users.`,
                    inline: true
                },
                {
                    name: "Discord.js Version",
                    value: `${version}`,
                    inline: true
                },
                {
                    name: "Node.js Version",
                    value: `${process.version}`,
                    inline: true
                },
                {
                    name: "Bot Version",
                    value: `v2.0.1`,
                    inline: true
                },
                {
                    name: "Platform",
                    value: `\`${os.platform()}\``,
                    inline: true
                },
                {
                    name: "Memory",
                    value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb`,
                    inline: true
                },
                {
                    name: "CPU",
                    value: `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,
                    inline: true
                },
                {
                    name: "Uptime",
                    value: ` ${days} days ${hours} hrs ${minutes} min ${seconds} sec`,
                    inline: true
                },
            )
        interaction.reply({ embeds: [embed] })
    }
}
