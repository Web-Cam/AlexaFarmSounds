'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.b8b4f1f0-a37e-4eba-9b29-a12993efa671"; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Farm Sounds';
var sheep = '<audio src="https://s3.amazonaws.com/alexafarmsounds/sheep.mp3"/>'; // Here are all the sounds, if you try to make your own remember to change rate to 16000 and 48kbs
var dog = '<audio src="https://s3.amazonaws.com/alexafarmsounds/Dog.mp3"/>';
var cat = '<audio src="https://s3.amazonaws.com/alexafarmsounds/Cat.mp3"/>';
var duck = '<audio src="https://s3.amazonaws.com/alexafarmsounds/Duck.mp3"/>';
var rooster = '<audio src="https://s3.amazonaws.com/alexafarmsounds/Rooster2.mp3"/>';
var cow = '<audio src="https://s3.amazonaws.com/alexafarmsounds/cow.mp3"/>';
var horse = '<audio src="https://s3.amazonaws.com/alexafarmsounds/horse.mp3"/>';
var chicken = '<audio src="https://s3.amazonaws.com/alexafarmsounds/chicken.mp3"/>';
var last = "none"; // Last means last function called
var tries = 0; // This functions a bit wonky, will fix 
var randomanimal = ['SayCow','SayCat','SaySheep','SayHorse','SayDuck','SayRooster','SayChicken']; //the array of functions that say the sounds
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = { // Starting function once you say Start Farm Sounds
    'LaunchRequest': function () {
        this.emit(':ask',"Welcome to farm sounds........ Say Start to begin"); //need to say start becasue I rely on utternaces
		last = "none";
    },

'SayRooster': function () { // Begin the functions of different animal sounds
     this.emit(':ask',"what animal makes this sound?......"+`${rooster}`, "here's a hint .... they can wake you up");
	 last = "rooster";
	},
	 'RoosterCheck': function () { //Checkers are called Via utternaces, while Say functions are called by random function at bottom
	 if (last === "rooster"){
	 this.emit(':ask',"Correct! The rooster goes COCK A DOOODLE DOOOOO ....... When your ready for the Next animal Say Next");
	 tries = 0;
	 }else{
	tries +=1;
	this.emit('Incorrect'); // Go to incorrect function
	 }
	},

	
	'SayChicken': function () {
     this.emit(':ask',"what animal makes this sound?......"+`${chicken}`, "here's a hint .... they have feathers");
	 last = "chicken";
	},
	 'ChickenCheck': function () {
	 if (last === "chicken"){
	 this.emit(':ask',"Correct! The chicken goes BOCK BOCK BOCK ....... When your ready for the Next animal Say Next");
	 tries = 0;
	 }else{
	tries +=1;
	this.emit('Incorrect');
	 }
	},
	
	'SayHorse': function () {
     this.emit(':ask',"what animal makes this sound?......"+`${horse}`, "here's a hint .... they gallop");
	 last = "horse";
	},
	 'HorseCheck': function () {
	 if (last === "horse"){
	 this.emit(':ask',"Correct! The horse goes NEIGH ....... When your ready for the Next animal Say Next");
	 tries = 0;
	 }else{
	tries +=1;
	this.emit('Incorrect');
	 }
	 },

	
	'SayDuck': function () {
     this.emit(':ask',"what animal makes this sound?......"+`${duck}`, "here's a hint .... you can feed them bread");
	 last = "duck";
	},
	 'DuckCheck': function () {
	 if (last === "duck"){
	 this.emit(':ask',"Correct! The Duck goes Quack....Quack ....... When your ready for the Next animal Say Next");
	 tries = 0;
	 }else{
	tries +=1;
	this.emit('Incorrect');
	 }
	},


    'SayCow': function () {
     this.emit(':ask',"what animal makes this sound?......"+`${cow}`, "here's a hint it is big and is black and white");
	 last = "cow";
	},
	 'CowCheck': function () {
	 if (last === "cow"){
	 this.emit(':ask',"Correct! The cow goes MOOOOOO ....... When your ready for the Next animal Say Next");
	 tries = 0;
	 }else{
	tries +=1;
	this.emit('Incorrect');
	 }
	},
	 

	 'SayCat': function () {
     this.emit(':ask',"what animal makes this sound?......"+`${cat}`, "You may have one at home.");
	 last = "cat";
	},
	'CatCheck': function () {
	 if (last === "cat"){
	 this.emit(':ask',"Correct! The cat goes MEOW ............... When your ready for the Next animal.......... Say Next");
	 tries = 0;
	 }else{
	tries +=1;
	this.emit('Incorrect');
	 }
	},
	 
	 
	 'SaySheep': function () {
     this.emit(':ask',"what animal makes this sound?......"+`${sheep}`, "There fur can keep you Warm.");
	 last = "Sheep";
	},
	'SheepCheck': function () {
	 if (last === "Sheep"){
	 this.emit(':ask',"Correct! The sheep goes BAAAAAAAAAA ............... When your ready for the Next animal.......... Say Next");
	 tries = 0;
	 }else{
	tries +=1;
	this.emit('Incorrect');
	 }
	},
	
	    'SayDog': function () {
     this.emit(':ask',"what animal makes this sound?......"+`${dog}`, "here's a hint they go ....BARK");
	 last = "dog";
	},
	 'DogCheck': function () {
	 if (last === "dog"){
	 this.emit(':ask',"Correct! The Dog goes Bark ....... When your ready for the Next animal Say Next");
	 tries = 0;
	 }else{
	tries +=1;
	this.emit('Incorrect');
	}
	 },
	
	
	'ListSounds': function () {
     this.emit(':ask',"test")
    },
	
	
	
	'Incorrect': function () { // Should make this into a switch this got way carried away.
     if (last === "dog"){
		if (tries <= 2){ // Tries really dont matter just a way to switch it between hints tries a bit messed up 
				tries +=3 
	 this.emit(':ask','Not quite ........ Here is a hint, the animal likes bones, and starts with D.......can you guess it now??');
		}else{ 
	 this.emit(':ask',"Almost there, you may have one of these animals at home");
	 }
	}
	     else if (last === "cat"){
		if (tries <= 2){ 
	 this.emit(':ask','Not quite ........ Here is a hint, the animal is small, and starts with C .......can you guess it now??');
		tries +=3 
		}else{ 
	 this.emit(':ask',"Almost there, These animals love to drink Milk");//Alexa says milk wierd, maybe change?
	 }
	}
	
	
	   else if (last === "Sheep"){
		if (tries <= 2){ 
	 this.emit(':ask','Not quite ........ Here is a hint, the animal is medium size, and starts with an S .......can you guess it now??');	
		tries +=3 
		}else{ 
	 this.emit(':ask',"Almost there, An adult is known as a ram");
	 }
	}
	
	
	 else if (last === "cow"){
		if (tries <= 2){ 
	 this.emit(':ask','Not quite ........ Here is a hint, the animal has spots, and starts with C.......can you guess it now');	 
	 		tries +=3 
		}else{ 
	 this.emit(':ask',"Almost there, These animals give us milk!");
	 }
	}
	
	
	 else if (last === "duck"){
		if (tries <= 2){ 
	 this.emit(':ask','Not quite ........ Here is a hint,  they like to float in ponds. It begins with D ');	 
	 		tries +=3 
		}else{ 
	 this.emit(':ask',"Almost there, Think of an animal that plays follow the leader!");
	 }
	}
	
		 else if (last === "horse"){
		if (tries <= 2){ 
	 this.emit(':ask','Not quite ........ Here is a hint, you can ride this animal. It begins with H');	 
	 		tries +=3 
		}else{ 
	 this.emit(':ask',"Almost there, Almost there, Think of an animal that gallops!");
	 }
	}
	
	
		 else if (last === "rooster"){
		if (tries <= 2){ 
	 this.emit(':ask','Not quite ........ Here is a hint this animal has feathers. It begins with r');	 
	 		tries +=3 
				}else{ 
	 this.emit(':ask',"Almost there, Think of an animal that can wake you up!");
	 }
	}

			 else if (last === "chicken"){
		if (tries <= 2){ 
	 this.emit(':ask','Not quite ........ Here is a hint this animal lays eggs. It begins with c');	 
	 		tries +=3 
				}else{ 
	 this.emit(':ask',"Almost there, Think of an animal that has feaathers !");
	 }
	}
			
	
	else{
		this.emit(':ask','I have not given you a sound yet! please say Start to begin!');// a bit of error handling
	}
	},
	
	
	'SayRandom': function () {
     var lineIndex = Math.floor(Math.random() * randomanimal.length);
     var random = randomanimal[lineIndex];
	 this.emit(random)
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', "Simply ask me to give you an animal sound! and then try to guess it");
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
	'Unhandled': function () {
    this.emit(':ask', "Say Next animal OR exit to exit.")
  },
    'AMAZON.StopIntent': function () {
        this.emit(':ask', "Ok the sound is stopped. Say Exit or Guess the animal");
    }
};
