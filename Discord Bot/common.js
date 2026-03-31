import { REST, Routes } from 'discord.js';

const commands = [
  {
    name: 'create',
    description: 'Creates a new short URL',
  },
];

const rest = new REST({ version: '10' }).setToken( "MTQ4ODQ5NDIzNjg2MDE1Mzg4OA.GKW7Nf.5Evk7LO8MYGzplRHaPAcf4lqS0gosVVgQBwYZs");

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands('1488494236860153888'), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}