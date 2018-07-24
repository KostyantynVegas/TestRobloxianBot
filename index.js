//conect library discord.js and client.
const Discord = require("discord.js");
const bot = new Discord.Client();

//start code.
//help commands.
bot.on('message', message => {
    if (message.content =="#help") {
        message.reply("Commands:!credits, !message, !puzzle, !my avatar, !meme.");
    }
});
//credits command.
bot.on('message', message => {
   if (message.content =="!credits") {
       message.reply("Programmed on JavaScript by Roenko Kostyantyn.");
   }
});
//random message.
//variables.
bot.on('message', message => {
var joke1 = "Однажды я гулял по лесу, вижу колодец. Подхожу к нему, захожу в лифт, сажусь на велосипед, завожу мотоцикл, тут бац, ко мне кондуктор подходит и говорит: ''Дядя, уступи место''. А я говорю что не курю. Так этот ребенок как начнет плакать! Но я не растерялся, и как дал ему по роже, а он хватается за коленку и кричит: ''Моя спина! Моя спина!''. Выхожу я из этой электрички, смотрю, маршрутка стоит. Ну подхожу и говорю: ''Винстон синий и водки 0,5''. Ну она мне и дает Bond и пиво. Я беру эту приму и самогон, и убегаю от этих мусоров! Так эти пожарники меня на скорой догнали! Догнали и говорят: ''Вы сдачу забыли!''. Ну я беру килограмм яблок, и иду на базар торговать. Приношу, не успел выложить эти бананы, тут же бабка подбегает и скупает у меня все персики, и говорит чтобы все сложил в кулечек! А я думаю, что она совсем больная, как я ей 20 арбузов в сумку положу?! Взял я деньги и пошел домой! Больше я в лес не ходил... и грибы не трогал... даже курить бросил.";
var joke2 = "Что посеешь, то и пожнёшь.";
var joke3 = "Привет...";
var joke4 = "что??";
var joke5 = "message.";
var joke6 = "Го играть?";
var joke7 = "Удачного дня!";
var numbers = 7;
var randomizer = Math.floor(Math.random() * (numbers -1 +1)) +1;
   if (message.content =="!message") {
   switch (randomizer) {
    case 1: message.reply([joke1]); break;
    case 2: message.reply([joke2]); break;
    case 3: message.reply([joke3]); break;
    case 4: message.reply([joke4]); break;
    case 5: message.reply([joke5]); break;
    case 6: message.reply([joke6]); break;
    case 7: message.reply([joke7]); break;
   }   
}
});
//Author image avatar.
bot.on("message", message => {
   var avatar = message.author.avatarURL;
  if (message.content =="!my avatar") {
      message.reply("Your avatar is, " + avatar);
  }
});
//Random meme image.
bot.on("message", message => {
//variables.
var img1="https://www.lifewire.com/thmb/M1ISdSdfLsU36nAuILe3YlFcY1w=/400x400/filters:fill(auto,1)/success-56a9fd1f3df78cf772abee09.jpg";
var img2="https://nashuproar.org/wp-content/uploads/2017/09/what-is-a-meme.jpg";
var img3="https://afinde-production.s3.amazonaws.com/uploads/21b1fc21-4c0a-4c1c-be20-09b58dad8fb4.jpg";
var img4="https://orig00.deviantart.net/b00d/f/2016/118/9/b/triggered_by_yaycocoa-da0m18r.png";
var img5="https://i.kym-cdn.com/photos/images/newsfeed/000/170/791/welcome-to-the-internet-internet-demotivational-poster-1264714433.png.jpg";
var img6="https://i0.wp.com/ramenswag.com/wp-content/uploads/2016/09/14442632_1263969750313763_451636988_n-300x274.jpg?resize=300%2C274";
var img7="https://i.imgflip.com/29lhcg.jpg";
var img8="https://memepedia.ru/wp-content/uploads/2016/08/chanti-binks-mem.jpg";
var img9="https://pics.me.me/me-condoms-please-cashier-31659952.png";
var img10="http://www.dictionary.com/e/wp-content/uploads/2018/03/dank-meme.jpg";
var img11="https://i.pinimg.com/originals/85/42/d7/8542d70d068a416047f37f46822ffcb8.jpg";
var img12="http://cdn.ebaumsworld.com/thumbs/2017/11/05/044731/85508229/memes2.jpg";
var img13="https://2static4.fjcdn.com/thumbnails/comments/Well+congratulations+you+have+introduced+the+latest+jojo+meme+since+_6aa0bf2d1a5d70204eab70659aedec65.jpg";
    if(message.content == "!meme") {
var number = 13;
var random = Math.floor(Math.random() * (number - 1 +1)) +1;
    switch (random) {
    case 1:message.reply ([img1]); break;
    case 2:message.reply ([img2]); break;
    case 3:message.reply ([img3]); break;
    case 4:message.reply ([img4]); break;
    case 5:message.reply ([img5]); break;
    case 6:message.reply ([img6]); break;
    case 7:message.reply ([img7]); break;
    case 8:message.reply ([img8]); break;
    case 9:message.reply ([img9]); break;
    case 10:message.reply ([img10]); break;
    case 11:message.reply ([img11]); break;
    case 12:message.reply ([img12]); break;
    case 13:message.reply ([img13]); break;
    }
}
});

//random puzzle.
//variables.
bot.login("NDcwMjU2MTc5NzgwNjQ4OTcx.DjYCwg.S-zss2_7QtOhxkWeXiitpnHynJc");
bot.login(process.env.BOT_KEYFORROBLOX);
bot.on('message', message => {
   var p1 = "Без ног и без крыльев оно,Быстро летит, не догонишь его. Ответ писать через '!' "; Answers = "!время";
   var p2 = "Тебе дано,А люди им пользуются. Ответ писать через '!' "; Answers ="!имя";
   var p3 = "Одной ручкой всех встречает,Другой ручкой провожает. Ответ писать через '!' "; Answers = "!дверь";
   var p4 = "Себя он раскрывает, тебя он закрывает,Только дождичек пройдет — сделает наоборот. Ответ писать через '!' "; Answers = "!зонт";
   var p5 = "Синие покрывало-весь мир покрыла. Ответ писать через '!' "; Answers = "!небо";
   var Answers = "";
   var numbers = 5;

//answered.
       if (answered == false) {
       AuthorMessage = message.author;
       if (AuthorMessage == Answers) {
       message.reply('Ты выиграл! :grinning:');
       }
       else {
       message.reply('Ты проиграл! :anguished:');
       }
       answered = true; Answers=''; AuthorMessage='';
    }

   var randomizer = Math.floor(Math.random() * (numbers -1 +1)) +1;
       if (message.content =="!puzzle") {
       switch (randomizer) {
        case 1: message.reply([p1]); break;
        case 2: message.reply([p2]); break;
        case 3: message.reply([p3]); break;
        case 4: message.reply([p4]); break;
        case 5: message.reply([p5]); break;
       }   
    answered = false;
   }
   });

bot.on('ready', () => {
    console.log('BotWorks!');
    bot.user.setGame("#help");
//puzzle game vars.
    answered = true;
    Answers = "";
    AuthorMessage = "";
});

//Ответы на загадки. время,имя,дверь,зонт,небо.
//end.
