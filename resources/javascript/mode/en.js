// # DIFFICULTY MODES #
// English Version

// ## CARD SYNTAX ##
/*
{
  // TEXTS
   words : 'Morning', // words/phrases you want the player to type
  helper : '', // [OPTIONAL] helper texts, primarily for romaji IMEs and things similar to them
  
  // IMAGES
     img : '067', // [OPTIONAL] image you want to display
  folder : 'mishy-emoji', // [OPTIONAL] changes the folder where the image is taken from (defaults to mishy_sticker; see images/game for options)
  custom : 'LINK_TO_IMAGE', // [OPTIONAL] custom link of the image you want to show (recommended to use getPaths() as the base, if a local image. Example: getPaths() + 'resources/images/mishy-thumb.png'; this is required for other languages, such as the English ver.)
  
  // TIME
    time : 30, // [OPTIONAL] sets a custom time for the card in seconds (ignored in Infinity mode)
   pause : true // [OPTIONAL] pauses the time for the card until the player types (ignored in Infinity mode)
},
*/
(function (window, document) {
  'use strict';
  
  if (!window.Mishy) return;
  
  Mishy.mode = new Object();
  Mishy.mode.ja = true;
  
  
  // Easy Mode - "Mishy's Daily Life"
  Mishy.mode.easy = [
    {
      words : 'Morning',
      img : '067',
      pause : true // pause the first card for easy mode, so the player can read the hint and warm up
    },
    
    {
      words : 'Good morning',
      img : '105'
    },
    
    {
      words : 'breakfast',
      img : '003',
      folder : 'mishy-anime'
    },
    
    {
      words : 'bathroom',
      img : '087'
    },
    
    {
      words : 'phone',
      img : '088'
    },
    
    {
      words : "I'm heading out",
      img : '045'
    },
    
    {
      words : 'Have a good day!!',
      img : '101'
    },
    
    {
      words : 'sunny',
      img : '258'
    },
    
    {
      words : 'walking',
      img : '004',
      folder : 'mishy-anime'
    },
    
    {
      words : 'animals',
      img : '238'
    },
    
    {
      words : 'watch',
      img : '049'
    },
    
    {
      words : 'I gotta hurry',
      img : '046'
    },
    
    {
      words : 'car',
      img : '093'
    },
    
    {
      words : 'train',
      img : '047'
    },
    
    {
      words : 'Where am I??',
      img : '050'
    },
    
    {
      words : 'wrong way',
      img : '051'
    },
    
    {
      words : 'Help!',
      img : '084'
    },
    
    {
      words : "It's okay",
      img : '112'
    },
    
    {
      words : 'Thanks',
      img : '065'
    },
    
    {
      words : 'Thank you',
      img : '115'
    },
    
    {
      words : "You're welcome",
      img : '066'
    },
    
    {
      words : 'Hello',
      img : '106'
    },
    
    {
      words : "I'm Mishy!",
      img : '236'
    },
    
    {
      words : 'Nice to meet you',
      img : '119'
    },
    
    {
      words : 'Likewise',
      img : '117'
    },
    
    {
      words : "I'll do my best",
      img : '130'
    },
    
    {
      words : "I'm hungry",
      img : '055'
    },
    
    {
      words : 'embarrassing',
      img : '080'
    },
    
    {
      words : 'lunch',
      img : '244'
    },
    
    {
      words : "I'm stuffed",
      img : '056'
    },
    
    {
      words : 'strolling',
      img : '085'
    },
    
    {
      words : 'standing in line',
      img : '086'
    },
    
    {
      words : "Let's go together",
      img : '134'
    },
    
    {
      words : "It's getting late",
      img : '211'
    },
    
    {
      words : 'Time to hurry up!',
      img : '135'
    },
    
    {
      words : 'phew',
      img : '229'
    },
    
    {
      words : 'hot',
      img : '260'
    },
    
    {
      words : 'drink',
      img : '005',
      folder : 'mishy-anime'
    },
    
    {
      words : 'idea',
      img : '027'
    },
    
    {
      words : 'airplane',
      img : '262'
    },
    
    {
      words : 'goal',
      img : '069'
    },
    
    {
      words : 'Yaaay!!',
      img : '029'
    },
    
    {
      words : 'WHAM',
      img : '076'
    },
    
    {
      words : 'HAHAHA',
      img : '077'
    },
    
    {
      words : 'mad',
      img : '075'
    },
    
    {
      words : "I'm sorry",
      img : '052'
    },
    
    {
      words : 'Evil Mishy',
      img : '103'
    },
    
    {
      words : 'computer',
      img : '095'
    },
    
    {
      words : '*stare*',
      img : '081'
    },
    
    {
      words : 'difficult',
      img : '079'
    },
    
    {
      words : 'Please wait a moment...',
      img : '096'
    },
    
    {
      words : 'Good work',
      img : '043'
    },
    
    {
      words : "I'm looking forward to tonight",
      img : '133'
    },
    
    {
      words : '*excited noises*',
      img : '015',
      folder : 'mishy-anime'
    },
    
    {
      words : 'bow tie',
      img : '167'
    },
    
    {
      words : 'Good evening',
      img : '107'
    },
    
    {
      words : 'siblings',
      img : '054'
    },
    
    {
      words : "Mishy's little sister",
      img : '002',
      folder : 'mishy-emoji'
    },
    
    {
      words : "Mee hee hee, I'm Mishette!",
      img : '255'
    },
    
    {
      words : "Let's do our best!!",
      img : '166'
    },
    
    {
      words : 'smile',
      img : '219'
    },
    
    {
      words : 'shopping',
      img : '090'
    },
    
    {
      words : 'Happy Birthday!!',
      img : '210'
    },
    
    {
      words : 'cake',
      img : '022',
      folder : 'mishy-anime'
    },
    
    {
      words : 'karaoke',
      img : '252'
    },
    
    {
      words : 'dance',
      img : '078'
    },
    
    {
      words : 'movie',
      img : '263'
    },
    
    {
      words : 'popcorn',
      img : '291'
    },
    
    {
      words : '*clapping*',
      img : '020',
      folder : 'mishy-anime'
    },
    
    {
      words : 'dinner',
      img : '207'
    },
    
    {
      words : 'Cheers!!',
      img : '016',
      folder : 'mishy-anime'
    },
    
    {
      words : 'rain',
      img : '259'
    },
    
    {
      words : 'lightning',
      img : '300'
    },
    
    {
      words : "I don't feel too good..",
      img : '097'
    },
    
    {
      words : 'Go to the hospital, Mishy.',
      img : '165'
    },
    
    {
      words : '*siblings fighting*',
      img : '230'
    },
    
    {
      words : "Fine.. I'll go.",
      img : '161'
    },
    
    {
      words : 'doctor',
      img : '223'
    },
    
    {
      words : 'Please get well soon',
      img : '141'
    },
    
    {
      words : 'NOOOO!!',
      img : '222'
    },
    
    {
      words : 'run',
      img : '196'
    },
    
    {
      words : 'fear',
      img : '201'
    },
    
    {
      words : "I'm home",
      img : '102'
    },
    
    {
      words : 'hand washing',
      img : '002',
      folder : 'mishy-anime'
    },
    
    {
      words : 'free time',
      img : '226'
    },
    
    {
      words : 'poking shoji',
      img : '010',
      folder : 'mishy-anime'
    },
    
    {
      words : 'fight!',
      img : '246'
    },
    
    {
      words : 'Mishy News Network',
      img : '277'
    },
    
    {
      words : "9 o'clock",
      img : '174'
    },
    
    {
      words : 'bath',
      img : '091'
    },
    
    {
      words : 'sleepy',
      img : '058'
    },
    
    {
      words : 'bed time',
      img : '059'
    },
    
    {
      words : 'shooting star',
      img : '290'
    },
    
    {
      words : "good night",
      img : '024',
      folder : 'mishy-anime'
    },
    
    {
      words : 'sleeping...',
      img : '221'
    },
    
    {
      words : 'dream',
      img : '224'
    },
    
    {
      words : 'sick day',
      img : '057'
    },
    
    {
      words : 'bye bye',
      img : '184'
    },
    
    {
      words : 'See you again!',
      img : '061'
    },
    
    {
      words : "Let's enjoy Mishy!",
      img : '253'
    }
  ];
  
  
  // Normal Mode - "Mishy's Dream"
  Mishy.mode.normal = [
    
  ];
  
  
  // Hard Mode
  Mishy.mode.hard = [
    
  ];
  
  
  // Nightmare Mode
  Mishy.mode.nightmare = [
    
  ];
  
  
  // Infinity Mode
  // contains exclusive infinity mode cards + all cards from prior modes (order is completely randomized)
  Mishy.mode.infinity = [
    
  ].concat(Mishy.mode.easy, Mishy.mode.normal, Mishy.mode.hard, Mishy.mode.nightmare);
  
  
}(window, document));