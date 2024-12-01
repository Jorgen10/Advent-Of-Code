require("dotenv").config();
const { ownerId } = process.env;
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("returns my ping!"),
    async execute(interaction, client) {
        if (interaction.user.id !== ownerId) return interaction.reply({
            content: "You can't use this command!",
            ephemeral: true
        });
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `API Latency: ${client.ws.ping}\nClient Ping: ${message.createdTimestamp - interaction.createdTimestamp}`
        await interaction.editReply({
            content: newMessage
        });
    }
}