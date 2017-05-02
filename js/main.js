//creating the characters and scenes for the game, these all need to be created at once so the content can be used to populate the stats & info page
var storyCheck = true;
var prevActor;
var activeActor = "Ichiro";
var choiceActor = "Ichiro";

var ichStep = function (a){
  console.log(a);
  actor.Ichiro.takeStep(a);
};
var sukiStep = function(a){
  actor.Suki.takeStep(a);
};
var timokoStep = function(a){
  actor.Timoko.takeStep(a);
};
var aikoStep = function(a){
  actor.Aiko.takeStep(a);
};
var miyakiStep = function(a){
  actor.Miyaki.takeStep(a);
};


var actor = {
	//basic attributes of actors
    name: 'actor',
    convoScore: 1,
    bio: "empty",
    likes: "empty",
    convo: [],
    shift: 0,

    responseWipe: function(){
      var actorName = this.name
      document.getElementById("convo_opt_1").style.display = "none";
      document.getElementById("convo_opt_2").style.display = "none";
    },

    actSpawn: function(pos) {
      var actorImg = document.createElement("IMG");
      actorImg.setAttribute("id", this.name + "_img");
      actorImg.setAttribute("src", "images/" + this.name + ".png");
      actorImg.style.display = "block";
      actorImg.style.height = "100vh";
      actorImg.style.zIndex = "1";
      actorImg.style.position = "absolute";
      actorImg.style.bottom = "-15%";

      var name = this.name;
      var thisActor = document.getElementById(name +'_img');
      switch(pos) {
        case "mid":
          document.getElementById("actor_box_mid").appendChild(actorImg);

        break;
        case "left":
          document.getElementById("actor_box_left").appendChild(actorImg);

        break;
        case "right":
          document.getElementById("actor_box_right").appendChild(actorImg);
      };
    },

    actRemove: function(pos) {
      var actor = document.getElementById(this.name + "_img")
      switch(pos) {
        case "mid":
          document.getElementById("actor_box_mid").removeChild(actor);

        break;
        case "left":
          document.getElementById("actor_box_left").removeChild(actor);

        break;
        case "right":
          document.getElementById("actor_box_right").removeChild(actor);
      };
    },

    convoAdd: function(score) {
      convoScore + score;
    },

    takeStep: function(a){
      var actorName = this.name;
      if (!actor[actorName].steps){
        actor[actorName].steps = 0;
      };
      if(a > 0){
        var steps = actor[actorName].steps;
        console.log(steps);
        var steps = steps + a;
      } else {
        var steps = actor[actorName].steps;
      }
      var storyBit = actor[actorName].convo[steps];
      if(storyBit.doSomething){
          storyBit.doSomething();
      };
      //first item in story array
      var textBox = document.getElementById('text_box');
      //check if the number of steps is enough for the story piece to show

      console.log(storyBit.text)
      textBox.innerHTML = "<p>" + storyBit.text + "</p>";
      steps++;
      actor[actorName].steps = steps;
    },

    convoOption: function(p){
      var c1 = document.getElementById("convo_opt_1");
      var c2 = document.getElementById("convo_opt_2");
      var c3 = document.getElementById("convo_opt_3");
      var c4 = document.getElementById("convo_opt_4");
      if (p.length == 4){
        c1.style.display = "inline-block";
        c2.style.display = "inline-block";
        c3.style.display = "inline-block";
        c4.style.display = "inline-block";
        c1.innerHTML = p.p1;
        c2.innerHTML = p.p2;
        c3.innerHTML = p.p3;
        c4.innerHTML = p.p4;
      } else {
        c1.style.display = "inline-block";
        c2.style.display = "inline-block";
        c1.innerHTML = p.p1;
        c2.innerHTML = p.p2;
      }
    },
};

actor.Timoko = Object.create(actor);
actor.Timoko.name = 'Timoko';
actor.Timoko.bio = 'Timoko';
actor.Timoko.convo = [
  {steps: 0, text: 'Timoko: Erm… do I know you?',
    doSomething: function(){
      activeActor = "Timoko";
    }
  },
  {steps: 1, text: ' ',
    doSomething: function(){
      activeActor = "none";
      choiceActor = "Timoko";
      actor.Timoko.convoOption({p1: 'Hi I\'m Bob, I just transferred here.', p2: 'Erm... no I don\'t think so'});
    }
  },
  {steps: 2, text: 'Timoko: I\’m Timoko, good to meet you! ^_^',
   doSomething: function(){
      actor.Timoko.responseWipe();
      setTimeout(function(){
        choiceActor = "none";
        activeActor = "Timoko";
      }, 500);
      var steps = actor.Timoko.steps;
      i = 3;
      actor.Timoko.convo.splice(i, 1);
    }
  },
  {steps: 3, text: 'Timoko: K then...',
    doSomething: function(){
      setTimeout(function(){
        choiceActor = "none";
        activeActor = "Timoko";
      }, 500);
    }
  },
  {steps: 4, text: '(An awkward silence begins to develop)',
    doSomething: function(){
      activeActor = "none";
      choiceActor = "Timoko";
      actor.Timoko.convoOption({p1: 'You look really cute in your sports gear.', p2: 'I can\'t wait to finish and go have a smoke'});
    }
  },
  {steps: 5, text: 'Timoko: Aw thanks, I love sports! My daddy bought me this outfit, he wants me to be a professional tennis player!',
    doSomething: function(){
      actor.Timoko.responseWipe();
      i = 5;
      actor.Timoko.convo.splice(i, 1);
      setTimeout(function(){
        choiceActor = "none";
        activeActor = "Timoko";
      }, 500);
    }
  },
  {steps: 5, text: 'Timoko: Why are you even here?',
    doSomething: function(){
      actor.Timoko.responseWipe();
      setTimeout(function(){
        choiceActor = "none";
        activeActor = "Timoko";
      }, 500);
    }
  },
  {steps: 6, text: 'Timoko: Looks like we\’re playing basketball today. Do you wanna be on my team?',
    doSomething: function(){
      activeActor = "none";
      choiceActor = "Timoko";
      actor.Timoko.convoOption({p1: 'Yes', p2: 'No'});
    }
  },
  {steps: 7, text: 'Timoko: Haha we destroyed the other team, good choice sticking with me. I\’m not just good at tennis you know!',
    doSomething: function(){
      i = 7;
      actor.Timoko.convo.splice(i, 1);
      setTimeout(function(){
        choiceActor = "none";
        activeActor = "Timoko";
      }, 500);
    }
  },
  {steps: 7, text: 'Timoko: Your team was destroyed, that\’s what you get for ditching me.',
    doSomething: function(){
      setTimeout(function(){
        actor.Suki.responseWipe();
        choiceActor = "none";
        activeActor = "Timoko";
      }, 500);
    }
  },
  {steps: 9, text: '',
    doSomething: function(){
      activeActor = "none";
      choiceActor = "Timoko";
      actor.Timoko.convoOption({p1: 'That was a good game, you were amazing out there!', p2: '*pant* I’m really out of breath after that. I should work out more.'});
    }
  },
  {steps: 10, text: 'Thanks! Maybe we should play tennis sometime… Try asking me later.',
    doSomething: function(){
      i = 10;
      actor.Timoko.convo.splice(i, 1);
      actor.Suki.responseWipe();
      setTimeout(function(){
        choiceActor = "none";
        activeActor = "Timoko";
      }, 500);
    }
  },
  {steps: 10, text: 'Timoko: Wow, you should go to the gym more. I go almost every day to the one downtown!',
    doSomething: function(){
      actor.Suki.responseWipe();
      setTimeout(function(){
        choiceActor = "none";
        activeActor = "Timoko";
      }, 500);
    }
  },
  {steps: 11, text: 'Timoko: The bell for next class is about to go, I should get changed. See you later, it was nice to meet you!’'},
  {steps: 12, text: '',
    doSomething: function(){
      actor.Timoko.actRemove("mid");
      actor.Ichiro.actSpawn("right");
      scene.hallwayday.sceneSpawn();
      activeActor = "Ichiro";
      console.log(actor.Timoko.convoScore)
    }
  },

]

actor.Suki = Object.create(actor);
actor.Suki.name = 'Suki';
actor.Suki.bio = 'Suki is a bad biker girl who likes to skip class. Word is she hangs out at a biker bar after school';
actor.Suki.convo = [
  {steps: 0, text: 'I haven\'t seen you around here before. Either you\’re a nerd or you\’re new in town. Which is it?'},
  {steps: 1, text: '',
    doSomething: function(){
      activeActor = "none";
      choiceActor = "Suki";
      actor.Suki.convoOption({p1: 'I just moved back last week. I\'m only at school so my parents stay off my back.', p2: 'I just came out back because I feel sick, first day nerves I guess.'});
    }
  },
  {steps: 3, text: "Suki: Cool, well you’re welcome to join me and my friends. Here, take a smoke. <span style=\"color: red;\">(CIGARETTE +1)</span> What’s your name?",
    doSomething: function(){
      actor.Suki.responseWipe();
      i = 3;
      actor.Suki.convo.splice(i, 1);
      setTimeout(function(){
          choiceActor = "none";
          activeActor = "Suki";
        }, 500);
    }
  },
  {steps: 4, text: "Suki: Uh. Okay. Here maybe this will calm your nerves. <span style=\"color: red;\">(CIGARETTE +1)</span> What's your name?",
    doSomething: function(){
      actor.Suki.responseWipe();
      setTimeout(function(){
          choiceActor = "none";
          activeActor = "Suki";
        }, 500);
    }
  },
  {steps: 5, text: "My mama\’s never around so I pretty much do whatever I want, whenever I want. You like my motorbike? I saved up all summer for it."},
  {steps: 6, text: " ",
    doSomething: function(){
      actor.Suki.convoOption({p1: 'Is that a model V62? Pretty intense.', p2: 'Truthfully, I\’m not really into motorbikes, but it looks cool.'});
    }
  },
  {steps: 7, text: "Maybe you can take a ride on it sometime.",
    doSomething: function(){
      i = 6;
      actor.Suki.convo.splice(i, 1);
      actor.Suki.responseWipe();
      setTimeout(function(){
          choiceActor = "none";
          activeActor = "Suki";
        }, 500);
    }
  },
  {steps: 7, text: "Oh, nevermind then.",
    doSomething: function(){
      actor.Suki.responseWipe();
      setTimeout(function(){
          choiceActor = "none";
          activeActor = "Suki";
        }, 500);
    }
  },
  {steps: 8, text: 'Anyway I\’m gonna head downtown, I know a bar where I can get served without ID. See you around, new guy.'},
  {steps: 8, text: ' ',
    doSomething: function(){
        actor.Suki.actRemove("mid");
        actor.Ichiro.actSpawn("right");
        scene.hallwayday.sceneSpawn();
        activeActor = "Ichiro";
    }
  }

]

actor.Aiko = Object.create(actor);
actor.Aiko.name = 'Aiko';
actor.Aiko.bio = 'Timoko';
actor.Aiko.convo = [
  { steps: 0, text: 'Aiko: Oh hi… hehe… you remind me of Senpai.',},
  { steps: 1, text: ' ',
    doSomething: function() {
      actor.Aiko.convoOption({p1: 'What... who are you? (This girl is weird.)', p2: 'Hi, I’m Bob. You\’re looking smoking!'});
      choiceActor = "Aiko";
      activeActor = "none";
    }
  },
  { steps: 2, text: '(Aiko stares intently at Sexy Bob) Aiko: Hehe.. *blush*',
    doSomething: function(){
      actor.Aiko.responseWipe();
      i = 3;
      actor.Aiko.convo.splice(i, 1);
      setTimeout(function(){
        choiceActor = "none";
        activeActor = "Aiko";
      }, 500);
    }
  },
  { steps: 2, text: 'Aiko: Oh, maybe you\'re not so much like senpai.',
    doSomething: function(){
      actor.Aiko.responseWipe();
      setTimeout(function(){
        choiceActor = "none";
        activeActor = "Aiko";
      }, 500);
    }
  },
  { steps: 2, text: 'Bob: (This girl is strange but intriguing.)'},
  { steps: 2, text: 'Aiko: Hehe. I have to go now. *runs away*'},
  { steps: 3, text: ' ', doSomething: function(){
      actor.Aiko.actRemove("mid");
      actor.Ichiro.actSpawn("right");
      scene.hallwayday.sceneSpawn();
      activeActor = "Ichiro";
    }
  },
]

actor.Bob = Object.create(actor);
actor.Bob.name = 'Bob';
actor.Bob.bio = 'Timoko';
actor.Bob.convo = [
]

actor.Miyaki = Object.create(actor);
actor.Miyaki.name = 'Miyaki';
actor.Miyaki.bio = 'Timoko';
actor.Miyaki.convo = [
  { steps: 0, text: 'Miyaki: Hey, haven\’t seen you around here before. We\’re doing life drawings today, do you want to sit next to me?'},
  { steps: 1, text: ' ',
    doSomething: function(){
      actor.Miyaki.convoOption({p1: 'Yeah that\’s cool. What\’s your name girl?', p2: 'I guess it\’s the only seat left...'});
    }
  },
  { steps: 2, text: 'I\’m Miyaki. Anyway, you didn\’t tell me your name?’ (He\’s cute.)',
    doSomething: function(){
      actor.Miyaki.responseWipe();
    }
  },
  { steps: 3, text: '',
    doSomething: function(){
      actor.Miyaki.responseWipe();
      setTimeout(function(){
        actor.Miyaki.convoOption({p1: 'Hey there! I’m Bob. Nice to meet you.', p2: '...'});
        choiceActor = "Miyaki";
        activeActor = "none";
      }, 500);
    }
  },
  { steps: 4, text: 'Miyaki: So are you much of an artist?',
    doSomething: function(){
      actor.Miyaki.responseWipe();
        setTimeout(function(){
          choiceActor = "none";
          activeActor = "Miyaki";
        }, 500);
      }
    },
  { steps: 5, text: ' ', 
    doSomething: function(){
      actor.Miyaki.responseWipe();
      actor.Miyaki.convoOption({p1: 'Yeah I’ve been painting since I was a kid. Who’s your favourite artist?', p2: 'Nah I just took this for an easy pass'});
      choiceActor = "Miyaki";
      activeActor = "none";
    }
  },
  { steps: 6, text: 'Miyaki: Oh! Not many boys in this school are into art, usually people just take this class for an easy pass. I’d say my favourite artist is probably Dali.', 
    doSomething: function(){
      i = 7;
      actor.Suki.convo.splice(i, 1);
      setTimeout(function(){
        actor.Miyaki.responseWipe();
        choiceActor = "none";
        activeActor = "Miyaki";
      }, 500);
    }
  },
  { steps: 7, text: 'Miyaki: Oh, yeah you and everyone else',
    doSomething: function(){
      setTimeout(function(){
        actor.Miyaki.responseWipe();
        choiceActor = "none";
        activeActor = "Miyaki";
      }, 500);
    }
  },
  { steps: 8, text: 'Miyaki: Anyway I have to go print some of my work, see you soon?'},
  { steps: 9, text: 'Bob: Okay, yeah I’ll see you next time. Bye!'},
  { steps: 10, text: ' ', 
    doSomething: function(){
      actor.Miyaki.actRemove("mid");
      actor.Ichiro.actSpawn("right");
      scene.hallwayday.sceneSpawn();
      activeActor = "Ichiro";
    }
  }
]

actor.Ichiro = Object.create(actor);
actor.Ichiro.name = 'Ichiro';
actor.Ichiro.Steps = 8;
actor.Ichiro.bio = 'Ichiro is Bob\'s old best friend from elementary school. He was always the smart kid in class, but was never very good at talking to girls.';
actor.Ichiro.convo = [
  { steps: 0, text: 'Ichiro: Bob...? Is that you? Remember me? We went to elementary school together! It\'s me, Ichiro!',
    doSomething: function() {
      actor.Ichiro.actSpawn("right");
    }
  },
  { steps: 1, text: 'Ichiro: So I guess your family just moved back into town huh? Because I never saw you during the interviews or the open day.' },
  { steps: 2, text: 'Ichiro: You look really different, you\'ve lost weight! You look good. Have you got a girlfriend?' },
  { steps: 3, text: '*Bob shakes his head*' },
  { steps: 4, text: 'Ichiro: Oh, well don\'t worry there are a ton of cute girls here. Maybe you\ll meet someone in one of your classes! What did you take this year?'},
  { steps: 5, text: 'Bob: Music, Art and Gym class.' },
  { steps: 6, text: 'Ichiro: I\'ll be in some of your classes too.' },
  { steps: 7, text: 'Ichiro: Anyway I can\'t believe you\'re here! It\'s good to see you again.' },
  { steps: 8, text: 'Ichiro: Oh, where are my manners, would you like me to show you around?',
    doSomething:  function() {
      actor.Ichiro.convoOption({p1: '\"Yeah, I should get to know the place.\"', p2: '\"Nah screw that, I won\'t be in class much anyway.\"'});
      activeActor = "none";
    }
  },
  { steps: 9, text: 'Ichiro: Okay, first of all here\'s the school menu, where you can pick your classes for the day.',
    doSomething:  function() {
      actor.Ichiro.responseWipe();
      setTimeout(function(){
        choiceActor = "none";
        activeActor = "Ichiro";
      }, 500);
      scene.schoolMenu.sceneSpawn();
    }
  },
  { steps: 10, text: 'Ichiro: At this school you must go to each class at least once a week to pass, you\'ll be kicked out if you don\'t!'},
  { steps: 11, text: 'Ichiro: I can\'t tell you much about Music, I didn\'t take it this year, but I can tell you there are a lot of cute girls taking Gym and Art class.' },
  { steps: 12, text: 'Ichiro: Here\'s the after-school menu where you can head downtown and do something during the evening.'},
  { steps: 13, text: 'Ichiro: Hey, you could even come and work at my Dad\'s restaurant with me. We could use all the help we can get, some of our waiting staff just got poached by Linguini\'s, our rival restaurant.' },
  { steps: 14, text: 'Ichiro: We\'re gonna be late to class anyway, I gotta shoot but we can meet up after school and head downtown. Just wait here for me after classes finish.',
    doSomething: function(){
      actor.Ichiro.responseWipe();
      setTimeout(function(){activeActor = "Ichiro";}, 500);
    }
  },
  { steps: 15, text: ' ',
    doSomething: function() {
      scene.hallwayday.sceneSpawn();
      scene.hallwayday.menuSpawn("day");
      actor.Ichiro.actRemove("right");
      activeActor = "none";
    }
  },
  {steps: 16, text: 'Hey, Bob! Let\'s head downtown now school\'s finished'},
  {steps: 17, text: ' Okay, I\'ll stick around with you today since you\'ve probably forgotten your way around town. Same thing as the SCHOOL MENU, just tap where you want to go.',
    doSomething: function(){
      actor.Ichiro.actSpawn("right");
    }
  },
  {steps: 18, text: 'You might see some of the girls from school around town. You should listen to their interests and see where they\'re likely to hang',
    doSomething: function(){
      scene.schoolfield.menuSpawn("night");
      scene.schoolfield.sceneSpawn();
      activeActor = "Ichiro";
    }
  },
];

/* "Scene factory" Creating an object that handles all of the functions a scene or menu might need such as spawning, removing and hiding/showing menus */

var scene = {
  name: "scene",
  image: " ",

  menuSpawn: function(menu) {
    console.log("hellofam");
    switch(menu) {
      case "night":
      storyBox.style.display = "none";
      schoolMenu = document.getElementById("town_menu");
      schoolMenu.style.display = "block";
      schoolMenu.style.position = "absolute";
      schoolMenu.style.top = "20px;";
      schoolMenu.style.left = "20px";
      storyBox = document.getElementById("story_box");
      storyBox.style.display = "none";
      document.getElementById('home').addEventListener('click', function(){
        scene.home.sceneSpawn();
        storyBox.style.display = "initial";
      });
      document.body.addEventListener('click', function(){
          document.getElementById("demo_end").style.display = "block";
          document.getElementById("demo_end").style.position = "absolute";
        });
      break;
      case "day":
        schoolMenu = document.getElementById("school_menu");
        schoolMenu.style.display = "block";
        schoolMenu.style.position = "absolute";
        schoolMenu.style.top = "20px;";
        schoolMenu.style.left = "20px";
        storyBox = document.getElementById("story_box");
        storyBox.style.display = "none";
        document.getElementById('music_class').addEventListener('click', function(){
          scene.musicRoom.sceneSpawn();
          activeActor = "Miyaki";
          actor.Miyaki.actSpawn("mid");
          schoolMenu.style.display = "none";
          storyBox.style.display = "initial";
        });
        document.getElementById('sports_class').addEventListener('click', function(){
          scene.gym.sceneSpawn();
          actor.Timoko.actSpawn("mid");
          schoolMenu.style.display = "none";
          storyBox.style.display = "initial";
          setTimeout(function(){activeActor = "Timoko"}, 500);
        });
        document.getElementById('art_class').addEventListener('click', function(){
          scene.artClass.sceneSpawn();
          actor.Aiko.actSpawn("mid");
          activeActor = "Aiko"
          schoolMenu.style.display = "none";
          storyBox.style.display = "initial";
        });
        document.getElementById('skip_class').addEventListener('click', function(){
          scene.schoolfield.sceneSpawn();
          activeActor = "Suki";
          actor.Suki.actSpawn("mid");
          schoolMenu.style.display = "none";
          storyBox.style.display = "initial";
        });
      break;
      case "gift":
      break;
    }
  },

  sceneSpawn: function() {
    var sceneStage = document.getElementById('scene_stage');
    sceneStage.style.backgroundImage = "url('"+ this.image +"')";
    console.log("success");
    console.log(this.name);
  },

  sceneRemove: function() {
    var sceneStage = document.getElementById('scene_stage');
    sceneStage.style.backgroundImage = " ";
  },
};

scene.hallwayday = Object.create(scene);
scene.hallwayday.name = "hallwayday";
scene.hallwayday.image = "images/" +scene.hallwayday.name + ".jpg";


scene.artClass = Object.create(scene);
scene.artClass.name = "artClass";
scene.artClass.image = "images/" +scene.artClass.name + ".jpg";

scene.musicRoom = Object.create(scene);
scene.musicRoom.name = "musicroom";
scene.musicRoom.image = "images/" +scene.musicRoom.name + ".jpg";

scene.timokohouse = Object.create(scene);
scene.timokohouse.name = "timokohouse";

scene.hallwaynight = Object.create(scene);
scene.hallwaynight.name = "hallwaynight";

scene.schoolfield = Object.create(scene);
scene.schoolfield.name = "schoolfield";
scene.schoolfield.image = "images/" + scene.schoolfield.name + ".jpg";

scene.schoolMenu = Object.create(scene);
scene.schoolMenu.name = "schoolMenu";
scene.schoolMenu.image = "images/" +scene.schoolMenu.name + ".jpg";

scene.gym = Object.create(scene);
scene.gym.name = "gym";
scene.gym.image = "images/" +scene.gym.name + ".jpg";

scene.bikerBar = Object.create(scene);
scene.bikerBar.name = "bikerbar"
scene.bikerBar.image = "images/" +scene.bikerBar.name + ".jpg";

scene.gymas = Object.create(scene);
scene.gymas.name = "gymas"
scene.gymas.image = "images/" +scene.gymas.name + ".jpg";

scene.concert = Object.create(scene);
scene.concert.name = "concert"
scene.concert.image = "images/" +scene.concert.name + ".jpg";

scene.gallery = Object.create(scene);
scene.gallery.name = "gallery"
scene.gallery.image = "images/" +scene.gallery.name + ".jpg";



var shopItem = {
  name: "item1",
  intendedFor: "actor"
};


document.getElementById("play_button").addEventListener('click', function(){
    document.getElementById("play_menu").style.display = "block";
    document.getElementById("play_button").style.display = "none";
  }
);

document.getElementById('new_game').addEventListener('click', function(){
    document.getElementById("menu_container").style.display = "none";
    document.getElementById("wrapper").style.backgroundImage = "none";
    document.getElementById("stage_container").style.display = "block";
    scene.schoolfield.sceneSpawn();
  }
);

document.getElementById("story_box").addEventListener('click', function(){
  switch(activeActor) {
    case "Ichiro":
      ichStep();
    break;
    case "Suki":
      sukiStep();
    break;
    case "Timoko":
      timokoStep();
    break;
    case "Aiko":
      aikoStep();
    break;
    case "Miyaki":
      miyakiStep();
    break;
    case "none":
    break;
  }
});

document.getElementById("convo_opt_1").addEventListener('click', function(){
  switch(choiceActor) {
    case "Ichiro":
      ichStep();
      actor.Ichiro.convoScore++;
    break;
    case "Suki":
      sukiStep();
      actor.Suki.convoScore++;
    break;
    case "Timoko":
      timokoStep();
      actor.Suki.convoScore++;
    break;
    case "Aiko":
      aikoStep();
      actor.Aiko.convoScore++;
    break;
    case "Miyaki":
      miyakiStep();
      actor.Aiko.convoScore++;
    break;
    case "none":
    break;
  }
});

document.getElementById("convo_opt_2").addEventListener('click', function(){
  switch(choiceActor) {
    case "Ichiro":
      ichStep(5);
      actor.Ichiro.convoScore--;
    break;
    case "Suki":
      sukiStep(1);
      actor.Suki.convoScore--;
    break;
    case "Timoko":
      timokoStep(1);
      actor.Suki.convoScore--;
    break;
    case "Aiko":
      aikoStep(1);
      actor.Aiko.convoScore--;
    break;
    case "Miyaki":
      miyakiStep(1);
      actor.Aiko.convoScore--;
    break;
    case "none":
    break;
  }
});


window.addEventListener("scroll", preventMotion, false);
window.addEventListener("touchmove", preventMotion, false);

