const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require('./settings.json');
const help = require('./help.json');
var moment = require('moment');
//Var
  //F1 Races
  var australia = "2017-03-26T08:00:00+01:00";
  var china = "2017-04-09T09:00:00+01:00";
  var bharian = "2017-04-16T18:00:00+01:00";
  var russia = "2017-04-30T15:00:00+01:00";
  var spain = "2017-05-14T15:00:00+01:00";
  var monaco = "2017-05-28T15:00:00+01:00";
  var canada = "2017-06-11T21:00:00+01:00";
  var azerbaijan = "2017-06-25T16:00:00+01:00";
  var austria = "2017-07-09T15:00:00+01:00";
  var british = "2017-07-16T15:00:00+01:00";
  var hungary = "2017-07-30T15:00:00+01:00";
  var belgium = "2017-08-27T15:00:00+01:00";
  var italy = "2017-09-03T15:00:00+01:00";
  var singapore = "2017-09-17T15:00:00+01:00";
  var malaysia = "2017-10-01T10:00:00+01:00";
  var japan = "2017-10-08T08:00:00+01:00";
  var us = "2017-10-22T22:00:00+01:00";
  var mexico = "2017-10-29T21:00:00+00:00";
  var brazil = "2017-11-12T18:00:00+00:00";
  //var uae = ;
  //Prefix
  var prefix = "=";
  //Other
  var du = "Days to the Race: ";
  var trsa = ". The Race starts at ";
//Login
client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
  client.user.setGame('=help');
});
//Message
client.on('message', message => {
    let args = message.content.split("  ").slice(1);
    var argsresult = args.join("  ");
    if (message.author.bot)return;
    if (!message.content.startsWith(prefix))return;
    if (message.content.startsWith(prefix + 'ping'))
    {
        message.channel.send('Pong!');
    }
    if (message.content.startsWith(prefix + 'help'))
    {
        message.channel.send(help.help)
    }
    if (message.content.startsWith(prefix + "f1"))
    {
        var startDate = moment(new Date()).format("YYYY-MM-DD");
        if (message.content.match(prefix + "f1 australia"))
        {
            var endDate = moment(new Date(australia)).format("YYYY-MM-DD");
            var remainingDate = moment(endDate).diff(startDate, 'days');
            message.channel.send(du + remainingDate + trsa + "2am.");
        }
        if (message.content.match(prefix + "f1 china"))
        {
            var endDate = moment(new Date(spain)).format("YYYY-MM-DD");
            var remainingDate = moment(endDate).diff(startDate, 'days');
            message.channel.send(du + remainingDate + trsa + "2am.");
        }
        if (message.content.match(prefix + "f1 bharian"))
        {
            var endDate = moment(new Date(bharian)).format("YYYY-MM-DD");
            var remainingDate = moment(endDate).diff(startDate, 'days');
            message.channel.send(du + remainingDate + trsa + "4pm.");
        }
        if (message.content.match(prefix + "f1 russia"))
        {
            var endDate = moment(new Date(russia)).format("YYYY-MM-DD");
            var remainingDate = moment(endDate).diff(startDate, 'days');
            message.channel.send(du + remainingDate + trsa + "1pm.");
        }
        if (message.content.match(prefix + "f1 spain"))
        {
            var endDate = moment(new Date(spain)).format("YYYY-MM-DD");
            var remainingDate = moment(endDate).diff(startDate, 'days');
            message.channel.send(du + remainingDate + trsa + "1pm.");
        }
        if (message.content.match(prefix + "f1 monaco"))
        {
            var endDate = moment(new Date(monaco)).format("YYYY-MM-DD");
            var remainingDate = moment(endDate).diff(startDate, 'days');
            message.channel.send(du + remainingDate + trsa + "1pm.");
        }
        if (message.content.match(prefix + "f1 canada"))
        {
            var endDate = moment(new Date(canada)).format("YYYY-MM-DD");
            var remainingDate = moment(endDate).diff(startDate, 'days');
            message.channel.send(du + remainingDate + trsa + "7pm.");
        }
        if (message.content.match(prefix + "f1 azerbaijan"))
        {
            var endDate = moment(new Date(azerbaijan)).format("YYYY-MM-DD");
            var remainingDate = moment(endDate).diff(startDate, 'days');
            message.channel.send(du + remainingDate + trsa + "2pm.");
        }
        if (message.content.match(prefix + "f1 austria"))
        {
            var endDate = moment(new Date(austria)).format("YYYY-MM-DD");
            var remainingDate = moment(endDate).diff(startDate, 'days');
            message.channel.send(du + remainingDate + trsa + "1pm.");
        }
        if (message.content.match(prefix + "f1 british"))
        {
            var endDate = moment(new Date(british)).format("YYYY-MM-DD");
            var remainingDate = moment(endDate).diff(startDate, 'days');
            message.channel.send(du + remainingDate + trsa + "1pm.");
        }
        if (message.content.match(prefix + "f1 hungary"))
        {
            var endDate = moment(new Date(hungary)).format("YYYY-MM-DD");
            var remainingDate = moment(endDate).diff(startDate, 'days');
            message.channel.send(du + remainingDate + trsa + "1pm.");
        }
        if (message.content.match(prefix + "f1 italy"))
        {
            var endDate = moment(new Date(italy)).format("YYYY-MM-DD");
            var remainingDate = moment(endDate).diff(startDate, 'days');
            message.channel.send(du + remainingDate + trsa + "1pm.");
        }
        if (message.content.match(prefix + "f1 singapore"))
        {
            var endDate = moment(new Date(singapore)).format("YYYY-MM-DD");
            var remainingDate = moment(endDate).diff(startDate, 'days');
            message.channel.send(du + remainingDate + trsa + "1pm.");
        }
        if (message.content.match(prefix + "f1 malaysia"))
        {
            var endDate = moment(new Date(malaysia)).format("YYYY-MM-DD");
            var remainingDate = moment(endDate).diff(startDate, 'days');
            message.channel.send(du + remainingDate + trsa + "8am.");
        }
        if (message.content.match(prefix + "f1 japan"))
        {
            var endDate = moment(new Date(japan)).format("YYYY-MM-DD");
            var remainingDate = moment(endDate).diff(startDate, 'days');
            message.channel.send(du + remainingDate + trsa + "6am.");
        }
        if (message.content.match(prefix + "f1 us"))
        {
            var endDate = moment(new Date(us)).format("YYYY-MM-DD");
            var remainingDate = moment(endDate).diff(startDate, 'days');
            message.channel.send(du + remainingDate + trsa + "8pm.");
        }
        if (message.content.match(prefix + "f1 mexico"))
        {
            var endDate = moment(new Date(mexico)).format("YYYY-MM-DD");
            var remainingDate = moment(endDate).diff(startDate, 'days');
            message.channel.send(du + remainingDate + trsa + "7pm.");
        }
        if (message.content.match(prefix + "f1 brazil"))
        {
            var endDate = moment(new Date(brazil)).format("YYYY-MM-DD");
            var remainingDate = moment(endDate).diff(startDate, 'days');
            message.channel.send(du + remainingDate + trsa + "4pm.");
        }
        if (message.content.match(prefix + "f1 uae"))
        {
            message.channel.send("TBC");
            //var endDate = moment(new Date(uae)).format("YYYY-MM-DD");
            //var remainingDate = moment(endDate).diff(startDate, 'days');
            //message.channel.send(du + remainingDate + trsa + "1pm.");
        }
    }
});

client.login(settings.token);
