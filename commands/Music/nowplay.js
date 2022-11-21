const Discord = require("discord.js")
const status = (queue) => `Volume: \`${queue.volume}%\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\` | Filter: \`${queue.filters.join(", ") || "Off"}\``
module.exports = {
    name: "nowplay",
    description: "Show the current song playing.",
    timeout: 5000,
    run: async (interaction, client) => {
        const queue = await client.distube.getQueue(interaction)
        const voiceChannel = interaction.member.voice.channel
        if (!voiceChannel) {
            return interaction.reply({ content: "Please join a voice channel!", ephemeral: true })
        }
        if (!queue) {
            const queueError = new Discord.MessageEmbed()
                .setDescription("There is Nothing Playing")
                .setColor("#000dff")
            return interaction.reply({ embeds: [queueError] })
        }
        if (interaction.member.guild.me.voice.channelId !== interaction.member.voice.channelId) {
            return interaction.reply({ content: "You are not on the same voice channel as me!", ephemeral: true })
        }
        const song = queue.songs[0]
        const embed = new Discord.MessageEmbed()
            .setAuthor({ name: "Now Playing", iconURL: "https://media.discordapp.net/attachments/902194524430938118/935471553209040956/music.gif" })
            .setDescription(`[${song.name}](${song.url})`)
            .addField("**Views:**", song.views.toString(), true)
            .addField("**Likes:**", song.likes.toString(), true)
            .addField("**Duration:**", `${queue.formattedCurrentTime} / ${song.formattedDuration}`)
            .addField("**Link**", `[Download This Song](${song.streamURL})`)
            .addField("**Status**", status(queue).toString())
            .setThumbnail(song.thumbnail)
            .setColor("#000dff")
            .setFooter({ text: `Requested by ${song.user.username}`, iconURL: song.user.avatarURL() })
            .setTimestamp()
        return interaction.reply({ embeds: [embed] })
    }
}
