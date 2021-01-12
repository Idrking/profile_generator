const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = {};

rl.question('What\'s your name? Nicknames are also acceptable :) \n', (answer) => {
  answers.name = answer;
  
  rl.question('What\'s an activity you like doing? \n', (answer) => {
    answers.activity = answer;

    rl.question('What do you listen to while doing that? \n', answer => {
      answers.music = answer;
      
      rl.question('Which meal is your favourite? (Dinner, brunch, etc) \n', answer => {
        answers.meal = answer;
        
        rl.question('What is your favourite thing to eat for that meal? \n', answer => {
          answers.food = answer;
          
          rl.question('Which sport is your absolute favourite? \n', answer => {
            answers.sport = answer;

            rl.question('What is your superpower? In a few words, tell us what you are amazing at? \n', answer => {
              answers.superpower = answer;

              let profile = `${answers.name} loves listening to ${answers.music} while ${answers.activity}, devouring ${answers.food} for ${answers.meal}, prefers ${answers.sport} over any other sport, and is amazing at ${answers.superpower}.`;

              console.log(profile);
              rl.close();
            });
          });
        });
      });
    });
  });
});
