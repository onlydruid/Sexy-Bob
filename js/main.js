//creating the characters and scenes for the game, these all need to be created at once so the content can be used to populate the stats & info page
var activeActor;
var storyCheck = true;
var prevActor = "Ichiro";
function ichStep(){
  actor.Ichiro.takeStep();
};
var actor = {
	//basic attributes of actors
    name: 'actor',
    convoScore: 0,
    bio: "empty",
    likes: "empty",
    convo: [],
    shift: 0,


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

    takeStep: function(listener){
      var actorName = this.name;

      console.log(actorName);
      if (!actor[actorName].steps){
        actor[actorName].steps = 0;
      };
      steps = actor[actorName].steps;
      console.log(steps);
      var x = actor[actorName].steps
      var storyBit = actor[actorName].convo[steps];
      if(storyBit.doSomething){
          storyBit.doSomething(listener);
      };
      //first item in story array
      var textBox = document.getElementById('text_box');
      //check if the number of steps is enough for the story piece to show
      
      console.log(storyBit.text)
      textBox.innerHTML = "<p>" + storyBit.text + "</p>";
      actor[actorName].steps++;
    },

    convoOption: function(p){
      var c1 = document.getElementById("convo_opt_1");
      var c2 = document.getElementById("convo_opt_2");
      var c3 = document.getElementById("convo_opt_3");
      var c4 = document.getElementById("convo_opt_4");
      if (p.length == 4){
        c1.style.display = "block";
        c2.style.display = "block";
        c3.style.display = "block";
        c4.style.display = "block";
        c1.innerHTML = p.p1;
        c2.innerHTML = p.p2;
        c3.innerHTML = p.p3;
        c4.innerHTML = p.p4;

        c1.style.border =  "1px solid grey;"
        c1.style.width= "40%";
        c2.style.border =  "1px solid grey;"
        c2.style.width= "40%";
        c3.style.border =  "1px solid grey;"
        c3.style.width= "40%";
        c4.style.border =  "1px solid grey;"
        c4.style.width= "40%";      } else {
        c1.style.display = "block";
        c2.style.display = "block";
        c1.innerHTML = p.p1;
        c2.innerHTML = p.p2;
        c1.style.border =  "1px solid grey";
        c1.style.width= "40%";
        c2.style.border =  "1px solid grey";
        c2.style.width= "40%";
      }
    },

    storySwitch: function(){
      document.getElementById("story_box").removeEventListener('click', function(){
        actor[prevActor].takeStep();
      });
    document.getElementById("story_box").addEventListener('click', function(){
        actor[actorName].takeStep();
      });
      prevActor = this.name;
    },
};

actor.Timoko = Object.create(actor);
actor.Timoko.name = 'Timoko';
actor.Timoko.bio = 'Timoko';
actor.Timoko.convo = [
]

actor.Suki = Object.create(actor);
actor.Suki.name = 'Suki';
actor.Suki.bio = 'Timoko';
actor.Suki.convo = [
]

actor.Aiko = Object.create(actor);
actor.Aiko.name = 'Aiko';
actor.Aiko.bio = 'Timoko';
actor.Aiko.convo = [
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
]

actor.Ichiro = Object.create(actor);
actor.Ichiro.name = 'Ichiro';
actor.Ichiro.bio = 'Ichiro is Bob\'s old best friend from elementary school. He was always the smart kid in class, but was never very good at talking to girls.';
actor.Ichiro.convo = [
  { steps: 0, text: 'Ichiro: Bob...? Is that you? Remember me? We went to elementary school together! It\'s me, Ichiro!', 
  doSomething: function() {
    actor.Ichiro.actSpawn("left");} 
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
    document.getElementById("story_box").removeEventListener('click', ichStep);

    document.getElementById('convo_opt_1').addEventListener('click', function(){
      actor.Ichiro.takeStep();
    });
    document.getElementById('convo_opt_2').addEventListener('click', function(){
      actor.Ichiro.steps = 20;
      actor.Ichiro.takeStep();
    });
  }},
  { steps: 9, text: 'Ichiro: Okay, first of all here\'s the school menu, where you can pick your classes for the day.',
    doSomething:  function() { 
      document.getElementById("convo_opt_1").style.display = "none";
      document.getElementById("convo_opt_2").style.display = "none";
      scene.schoolMenu.sceneSpawn();
      actor.Ichiro.actRemove("left");
      actor.Ichiro.actSpawn("right");
      setInterval(function(){document.getElementById("story_box").addEventListener('click', ichStep), 1000});
    }
  },
  { steps: 10, text: 'Ichiro: At this school you must go to each class at least once a week to pass, you\'ll be kicked out if you don\'t!'},
  { steps: 11, text: 'Ichiro: I can\'t tell you much about Music, I didn\'t take it this year, but I can tell you there are a lot of cute girls taking Gym and Art class.' },
  { steps: 12, text: 'Ichiro: Here\'s the after-school menu where you can head downtown and do something during the evening.'},
  { steps: 13, text: 'Ichiro: Hey, you could even come and work at my Dad\'s restaurant with me. We could use all the help we can get, some of our waiting staff just got poached by Linguini\'s, our rival restaurant.' },
];

var scene = {
  name: "scene",
  image: " ",

  menuSpawn: function(menu) {
    switch(menu) {
      case "night":
      break;
      case "day":
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

document.getElementById("story_box").addEventListener('click', ichStep);