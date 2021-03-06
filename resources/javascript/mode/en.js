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
  
  
  // Easy Mode - "Day with Mishy"
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
      words : "Meeheehee, I'm Mishette!",
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
  
  
  // Normal Mode - "Dream with Mishy"
  Mishy.mode.normal = [
    {
      words : 'Mishy is sleeping',
      img : '004',
      pause : true // pause the first card for normal mode, so the player can read the hint and warm up
    },
    
    {
      words : 'dreaming of snowboarding',
      img : '012'
    },
    
    {
      words : 'after that he took a dip in the hot springs',
      img : '013'
    },
    
    {
      words : 'drinking milk',
      img : '014'
    },
    
    {
      words : 'very yummy',
      img : '010'
    },
    
    {
      words : "What's that?",
      img : '100'
    },
    
    {
      words : "Waheehee, I'll be taking Mishette.",
      img : '103-abduction'
    },
    
    {
      words : 'NOOO!!',
      img : '222'
    },
    
    {
      words : 'wake up',
      img : '001',
      folder : 'mishy-anime'
    },
    
    {
      words : 'That was scary!',
      img : '034'
    },
    
    {
      words : 'I want breakfast..',
      img : '024'
    },
    
    {
      words : 'Misheeette!',
      img : '025-clean'
    },
    
    {
      words : 'Huh?',
      img : '026'
    },
    
    {
      words : 'Where is Mishette!?',
      img : '050'
    },
    
    {
      words : 'That dream...',
      img : '053-dream'
    },
    
    {
      words : "I'll try looking for her.",
      img : '131'
    },
    
    {
      words : "Let's save Mishette!!",
      img : '068'
    },
    
    {
      words : 'driving a car',
      img : '093'
    },
    
    {
      words : 'Excuse me, have you seen Mishette?',
      img : '106-clean'
    },
    
    {
      words : 'AH, MISHY!!',
      img : 'tio-01',
      folder : 'kiseki'
    },
    
    {
      words : 'WOAH!',
      img : '034',
    },
    
    {
      words : '*cough* excuse me.',
      img : 'tio-kao-05',
      folder : 'kiseki'
    },
    
    {
      words : 'I am Tio Plato. Nice to meet you.',
      img : 'tio-03',
      folder : 'kiseki'
    },
    
    {
      words : "(Tio is Mishy's biggest fan)",
      img : '020'
    },
    
    {
      words : "You're searching for Mishette?",
      img : 'tio-kao-01',
      folder : 'kiseki'
    },
    
    {
      words : "Yes! Evil Mishy took her!",
      img : '114'
    },
    
    {
      words : 'Understood. Leave it to me.',
      img : 'tio-kao-02',
      folder : 'kiseki'
    },
    
    {
      words : 'Aeon System, activate!',
      img : 'tio-kao-08',
      folder : 'kiseki'
    },
    
    {
      words : 'amazing',
      img : '124'
    },
    
    {
      words : 'phew',
      img : 'tio-kao-07',
      folder : 'kiseki'
    },
    
    {
      words : 'I sensed two individuals in Mishelam Wonderland.',
      img : 'tio-kao-04',
      folder : 'kiseki'
    },
    
    {
      words : "They're at the theme park!?",
      img : '122'
    },
    
    {
      words : "Yes, let's go!",
      img : 'tio-kao-02',
      folder : 'kiseki'
    },
    
    {
      words : 'roger',
      img : '032'
    },
    
    {
      words : 'Mishelam Wonderland',
      img : 'mwl-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Where are they?',
      img : '071'
    },
    
    {
      words : 'Inside the Horror Coaster.',
      img : 'tio-kao-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Horror..?',
      img : '079'
    },
    
    {
      words : 'Horror Coaster',
      img : 'horror-coaster',
      folder : 'kiseki'
    },
    
    {
      words : '*shivering*',
      img : '209'
    },
    
    {
      words : 'Look over there, Mishy!',
      img : 'tio-kao-08',
      folder : 'kiseki'
    },
    
    {
      words : 'EEK',
      img : '154'
    },
    
    {
      words : "Oh, it's Evil Mishy and Mishette!",
      img : '103-found'
    },
    
    {
      words : 'Let Mishette go!',
      img : '075'
    },
    
    {
      words : 'Waheehee',
      img : '103'
    },
    
    {
      words : 'Be careful!',
      img : 'tio-kao-08',
      folder : 'kiseki'
    },
    
    {
      words : 'WHAM!',
      img : '076'
    },
    
    {
      words : 'Please help meee!',
      img : '129'
    },
    
    {
      words : '...I told you to be careful.',
      img : 'tio-04',
      folder : 'kiseki'
    },
    
    {
      words : 'Ether Buster!',
      img : 'tio-scraft-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Thanks for saving me!',
      img : '153-clean'
    },
    
    {
      words : "Let's do our best, Mishy!",
      img : 'tio-to-mishy',
      folder : 'kiseki'
    },
    
    {
      words : 'Zero Field',
      img : 'tio-scraft-02',
      folder : 'kiseki'
    },
    
    {
      words : 'Thanks, Tio!',
      img : '186-zero-field'
    },
    
    {
      words : 'Leave it to me!',
      img : '042-clean'
    },
    
    {
      words : '*moving quickly*',
      img : '170'
    },
    
    {
      words : '*spinning*',
      img : '303-clean'
    },
    
    {
      words : 'Mishy Rocket!',
      img : '303-rocket'
    },
    
    {
      words : 'Mishette Punch!',
      img : '103-finisher'
    },
    
    {
      words : 'Wha!?',
      img : '188'
    },
    
    {
      words : 'K.O.',
      img : '103-ko'
    },
    
    {
      words : 'Status, all green.',
      img : 'tio-kao-05',
      folder : 'kiseki'
    },
    
    {
      words : 'Yay!',
      img : '255-clean'
    },
    
    {
      words : 'Nice punch, Mishette!',
      img : '157'
    },
    
    {
      words : 'Thank goodness...',
      img : 'tio-kao-10',
      folder : 'kiseki'
    },
    
    {
      words : 'Congrats!!',
      img : '182'
    },
    
    {
      words : 'Wa',
      img : 'black'
    },
    
    {
      words : 'ke',
      img : '257-ki'
    },
    
    {
      words : 'up',
      img : '257-te'
    },
    
    {
      words : 'Wake up, Mishy.',
      img : '257-clean'
    },
    
    {
      words : 'Huh?',
      img : '067-clean'
    },
    
    {
      words : 'It was just a dream...',
      img : '072-clean'
    },
    
    {
      words : 'eating breakfast',
      img : '003',
      folder : 'mishy-anime'
    },
    
    {
      words : 'I wonder where Tio is..?',
      img : '030',
    },
    
    {
      words : 'See you later!',
      img : '101-clean'
    },
    
    {
      words : 'Take care!',
      img : '044-clean'
    },
    
    {
      words : 'Please wait!',
      img : 'tio-05-hidden',
      folder : 'kiseki'
    },
    
    {
      words : 'You forgot your lunch.',
      img : 'tio-05',
      folder : 'kiseki'
    },
    
    {
      words : "It wasn't a dream!?",
      img : '188-clean'
    },
    
    {
      words : 'Happy Ending',
      img : '021'
    }
  ];
  
  
  // Hard Mode - "Date with Mishy"
  Mishy.mode.hard = [
    {
      words : 'One day at Mishelam Wonderland',
      img : 'mwl-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Hiya! Welcome to Mishelam Wonderland.',
      img : '002'
    },
    
    {
      words : 'Meeheehee, have fun!',
      img : '003'
    },
    
    {
      words : 'break time',
      img : '175'
    },
    
    {
      words : 'Good work, Mishy.',
      img : '165'
    },
    
    {
      words : 'thanks',
      img : '097'
    },
    
    {
      words : "I'm tired",
      img : '058-clean'
    },
    
    {
      words : "I'll take a nap",
      img : '176-clean'
    },
    
    {
      words : "Don't oversleep",
      img : '257-clean'
    },
    
    {
      words : 'Special Support Section',
      img : 'sss-01',
      folder : 'kiseki'
    },
    
    {
      words : '*NUDGE NUDGE NUDGE*',
      img : 'black'
    },
    
    {
      words : '*yawn*...huh...an earthquake?',
      img : 'lloyd-kao-22',
      folder : 'kiseki'
    },
    
    {
      words : 'Lloyd Bannings',
      img : 'lloyd-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Output: minimum, Power Level: low.',
      img : 'black'
    },
    
    {
      words : 'Freezing process...begin.',
      img : 'black'
    },
    
    {
      words : 'C-COLD!?',
      img : 'lloyd-kao-27',
      folder : 'kiseki'
    },
    
    {
      words : 'Good morning, Lloyd.',
      img : 'tio-kao-15',
      folder : 'kiseki'
    },
    
    {
      words : 'Tio Plato',
      img : 'tio-03',
      folder : 'kiseki'
    },
    
    {
      words : 'Ah, good morning.',
      img : 'lloyd-kao-18',
      folder : 'kiseki'
    },
    
    {
      words : 'Actually, why are you even in my room?',
      img : 'lloyd-kao-21',
      folder : 'kiseki'
    },
    
    {
      words : "It's almost time to go to Mishelam Wonderland",
      img : 'tio-kao-05',
      folder : 'kiseki'
    },
    
    {
      words : 'so I came to wake you up.',
      img : 'tio-kao-04',
      folder : 'kiseki'
    },
    
    {
      words : "Oh, I didn't realize how late it was.",
      img : 'lloyd-kao-21',
      folder : 'kiseki'
    },
    
    {
      words : 'Haha. Still, you must be looking forward to the theme park, huh?',
      img : 'lloyd-kao-25',
      folder : 'kiseki'
    },
    
    {
      words : 'But of course.',
      img : 'tio-kao-05',
      folder : 'kiseki'
    },
    
    {
      words : "I'm looking forward to meeting Mishy.",
      img : 'tio-kao-03',
      folder : 'kiseki'
    },
    
    {
      words : 'Hey Tio Tot. Is Lloyd up yet?',
      img : 'randy-kao-06',
      folder : 'kiseki'
    },
    
    {
      words : 'Randy Orlando',
      img : 'randy-01',
      folder : 'kiseki'
    },
    
    {
      words : "Breakfast is almost ready, so let's eat.",
      img : 'elie-kao-03',
      folder : 'kiseki'
    },
    
    {
      words : 'Elie MacDowell',
      img : 'elie-01',
      folder : 'kiseki'
    },
    
    {
      words : 'I want to kick Mishy!',
      img : 'kea-kao-11',
      folder : 'kiseki'
    },
    
    {
      words : 'KeA Bannings',
      img : 'kea-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Woof!',
      img : 'zeit-kao-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Zeit',
      img : 'zeit-01',
      folder : 'kiseki'
    },
    
    {
      words : 'After breakfast, everyone went to the theme park.',
      img : 'mwl-02',
      folder : 'kiseki'
    },
    
    {
      words : 'Wooooow...!',
      img : 'kea-kao-10',
      folder : 'kiseki'
    },
    
    {
      words : 'So this is Mishelam Wonderland...',
      img : 'lloyd-kao-03',
      folder : 'kiseki'
    },
    
    {
      words : '*moved to tears*',
      img : 'tio-kao-04',
      folder : 'kiseki'
    },
    
    {
      words : 'They sure do have a lot of attractions.',
      img : 'randy-kao-10',
      folder : 'kiseki'
    },
    
    {
      words : "The Castle of Mirrors is like this theme park's monument.",
      img : 'castle-of-mirrors-01',
      folder : 'kiseki'
    },
    
    {
      words : "I heard there's a mirror on the top floor that grants wishes.",
      img : 'castle-of-mirrors-02',
      folder : 'kiseki'
    },
    
    {
      words : 'They say that, after ringing the bell, wishes made in front of the mirror will come true.',
      img : 'castle-of-mirrors-03',
      folder : 'kiseki'
    },
    
    {
      words : "I bet it's real popular with couples and families.",
      img : 'randy-kao-05',
      folder : 'kiseki'
    },
    
    {
      words : "After all, there's handles on both sides of the bell for ringing it.",
      img : 'randy-kao-05',
      folder : 'kiseki'
    },
    
    {
      words : 'Y-Yeah, ringing it by yourself sounds kinda difficult.',
      img : 'lloyd-kao-12',
      folder : 'kiseki'
    },
    
    {
      words : 'Hey!',
      img : 'kea-kao-02',
      folder : 'kiseki'
    },
    
    {
      words : 'Does anyone live in that mansion over there?',
      img : 'horror-coaster-01',
      folder : 'kiseki'
    },
    
    {
      words : "That's the Horror Coaster.",
      img : 'horror-coaster-02',
      folder : 'kiseki'
    },
    
    {
      words : 'It appears to be both a terrifying and exciting attraction utilizing the latest technology.',
      img : 'horror-coaster-03',
      folder : 'kiseki'
    },
    
    {
      words : 'S-So they made something like that, did they...',
      img : 'elie-kao-07',
      folder : 'kiseki'
    },
    
    {
      words : "...On that subject, you can't miss chasing after Mishy.",
      img : 'tio-kao-04',
      folder : 'kiseki'
    },
    
    {
      words : 'The idea is to chase after him as he goes around the park.',
      img : 'tio-kao-02',
      folder : 'kiseki'
    },
    
    {
      words : "If you're lucky, you can even meet Mishy's little sister, Mishette..!",
      img : 'tio-kao-08',
      folder : 'kiseki'
    },
    
    {
      words : 'I-I see.',
      img : 'lloyd-kao-13',
      folder : 'kiseki'
    },
    
    {
      words : "Damn, Tio Tot's hella serious about Mishy.",
      img : 'randy-kao-02',
      folder : 'kiseki'
    },
    
    {
      words : 'Welcome to Mishelam Wonderland!',
      img : '003'
    },
    
    {
      words : '...Mishy!',
      img : 'tio-kao-08',
      folder : 'kiseki'
    },
    
    {
      words : 'T-Tio?',
      img : 'lloyd-kao-06',
      folder : 'kiseki'
    },
    
    {
      words : "*cough* I'm going on a date with Mishy.",
      img : 'tio-kao-05',
      folder : 'kiseki'
    },
    
    {
      words : 'D-Date!?',
      img : '188-date'
    },
    
    {
      words : "Well that was outta the blue. Then again, this IS Tio Tot we're talkin' about here.",
      img : 'randy-kao-06',
      folder : 'kiseki'
    },
    
    {
      words : "Haha, true. That's our Tio for you though. When it comes to liking Mishy, she's unrivaled.",
      img : 'lloyd-kao-10',
      folder : 'kiseki'
    },
    
    {
      words : "Well then, let's get going, Mishy.",
      img : 'tio-kao-03',
      folder : 'kiseki'
    },
    
    {
      words : 'I want to ride the Horror Coaster together.',
      img : 'tio-kao-08',
      folder : 'kiseki'
    },
    
    {
      words : 'Horror Coaster?',
      img : '079'
    },
    
    {
      words : '*running away, screaming*',
      img : '196'
    },
    
    {
      words : '*sigh* Seems I have no choice then.',
      img : 'tio-kao-12',
      folder : 'kiseki'
    },
    
    {
      words : 'Brother~',
      img : 'tio-mishette',
      folder : 'kiseki'
    },
    
    {
      words : 'Oh, Mishett-',
      img : '028-clean'
    },
    
    {
      words : 'Got you!',
      img : 'tio-kao-02',
      folder : 'kiseki'
    },
    
    {
      words : 'Horror Coaster...START!',
      img : 'horror-coaster',
      folder : 'kiseki'
    },
    
    {
      words : 'a',
      img : 'horror-coaster-04',
      folder : 'kiseki'
    },
    
    {
      words : 'i',
      img : 'horror-coaster-05',
      folder : 'kiseki'
    },
    
    {
      words : 'u',
      img : 'horror-coaster-06',
      folder : 'kiseki'
    },
    
    {
      words : 'e',
      img : 'horror-coaster-07',
      folder : 'kiseki'
    },
    
    {
      words : 'o',
      img : 'horror-coaster-08',
      folder : 'kiseki'
    },
    
    {
      words : 'Good job, Mishy.',
      img : 'tio-kao-05',
      folder : 'kiseki'
    },
    
    {
      words : 'That was s-scary...',
      img : '031'
    },
    
    {
      words : "Let's go to the Castle of Mirrors next.",
      img : 'tio-kao-03',
      folder : 'kiseki'
    },
    
    {
      words : 'Castle of Mirrors',
      img : 'castle-of-mirrors',
      folder : 'kiseki'
    },
    
    {
      words : 'Found you!',
      img : 'lloyd-kao-03',
      folder : 'kiseki'
    },
    
    {
      words : 'Eek! You found me~',
      img : '255-clean'
    },
    
    {
      words : "Meeheehee, you're totally different from my stupid brother Mishy~",
      img : '257-clean'
    },
    
    {
      words : 'Mishette is pretty harsh towards Mishy, huh...',
      img : 'lloyd-kao-07',
      folder : 'kiseki'
    },
    
    {
      words : 'ACHOO!',
      img : '010'
    },
    
    {
      words : 'Sooo pretty',
      img : 'castle-of-mirrors-04-mishy',
      folder : 'kiseki'
    },
    
    {
      words : "It's like a castle out of a fairytale.",
      img : 'castle-of-mirrors-04-tio',
      folder : 'kiseki'
    },
    
    {
      words : "Oh that's right, there's a mirror that grants wishes in here somewhere.",
      img : '027'
    },
    
    {
      words : 'I believe it was on the top floor...',
      img : 'tio-kao-01',
      folder : 'kiseki'
    },
    
    {
      words : "In that case, let's head to the top floor and look for it.",
      img : '100'
    },
    
    {
      words : "Yes, let's.",
      img : 'tio-kao-01',
      folder : 'kiseki'
    },
    
    {
      words : 'top floor',
      img : 'castle-of-mirrors-05',
      folder : 'kiseki'
    },
    
    {
      words : 'wish granting mirror',
      img : 'castle-of-mirrors-06',
      folder : 'kiseki'
    },
    
    {
      words : "Now that I'm here, I'm getting kind of nervous.",
      img : 'tio-kao-05',
      folder : 'kiseki'
    },
    
    {
      words : "Well then, let's try ringing the bell together.",
      img : '106-clean'
    },
    
    {
      words : 'ringing the bell',
      img : 'castle-of-mirrors-07',
      folder : 'kiseki'
    },
    
    {
      words : "Alright, let's stand in front of the mirror next.",
      img : '005',
      folder : 'mishy-emoji'
    },
    
    {
      words : "Let's make a wish.",
      img : 'castle-of-mirrors-08-mishy',
      folder : 'kiseki'
    },
    
    {
      words : "Agreed, let's give it a try.",
      img : 'castle-of-mirrors-08-tio',
      folder : 'kiseki'
    },
    
    {
      words : '..........',
      img : 'castle-of-mirrors-08',
      folder : 'kiseki'
    },
    
    {
      words : '...That should do it.',
      img : '042-clean'
    },
    
    {
      words : "Yes, I'm finished as well.",
      img : 'tio-kao-05',
      folder : 'kiseki'
    },
    
    {
      words : 'What did you wish for, Mishy?',
      img : 'tio-kao-01',
      folder : 'kiseki'
    },
    
    {
      words : "That I can continue to protect Mishelam Wonderland and the smiles of those who visit.",
      img : '005'
    },
    
    {
      words : "I see...that's very like you, Mishy.",
      img : 'tio-kao-01',
      folder : 'kiseki'
    },
    
    {
      words : 'So what did you wish for, Tio?',
      img : '026'
    },
    
    {
      words : 'That I can always be with you, Mishy.',
      img : 'tio-kao-05',
      folder : 'kiseki'
    },
    
    {
      words : 'I love you.',
      img : 'tio-kao-10',
      folder : 'kiseki'
    },
    
    {
      words : 'T-Tio',
      img : 'lloyd-kao-06',
      folder : 'kiseki'
    },
    
    {
      words : 'Lloyd!? Why are you here..?',
      img : 'tio-kao-06',
      folder : 'kiseki'
    },
    
    {
      words : 'Where did Mishy go!?',
      img : 'tio-kao-08',
      folder : 'kiseki'
    },
    
    {
      words : 'W-Well..',
      img : 'lloyd-kao-12',
      folder : 'kiseki'
    },
    
    {
      words : 'Never mind. Forget I said anything.',
      img : 'tio-kao-04',
      folder : 'kiseki'
    },
    
    {
      words : "R-Right, let's head back.",
      img : 'lloyd-kao-03',
      folder : 'kiseki'
    },
    
    {
      words : '...agreed.',
      img : 'tio-kao-04',
      folder : 'kiseki'
    },
    
    {
      words : "I could've sworn you were Mishy, but regardless I had fun touring the castle together.",
      img : 'tio-kao-03',
      folder : 'kiseki'
    },
    
    {
      words : "I'll excuse myself for now.",
      img : 'tio-kao-03',
      folder : 'kiseki'
    },
    
    {
      words : 'Yeah, later.',
      img : 'lloyd-kao-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Yes, see you later.',
      img : 'tio-kao-01',
      folder : 'kiseki'
    },
    
    {
      words : 'No matter what trial may appear, my love for Mishy will never fade.',
      img : '020'
    }
  ];
  
  
  // Nightmare Mode - "Trails with Mishy"
  Mishy.mode.nightmare = [
    {
      words : 'My favorite game series is...',
      img : '226-clean'
    },
    
    {
      words : 'the Trails series!',
      img : 'kiseki-series',
      folder : 'kiseki'
    },
    
    {
      words : 'The Legend of Heroes: Trails with Mishy',
      img : '193-clean'
    },
    
    {
      words : "Let's meet some characters!",
      img : '213-clean'
    },
    
    {
      words : 'Trails in the Sky',
      img : 'sora-no-kiseki',
      folder : 'kiseki'
    },    
    
    {
      words : "I didn't make an appearance in the Sky trilogy...",
      img : '036'
    },
    
    {
      words : 'Whoa, say what, now?!',
      img : 'andesutte',
      folder : 'kiseki'
    },
    
    {
      words : 'Liberl Kingdom',
      img : 'liberl',
      folder : 'kiseki'
    },
    
    {
      words : 'Estelle Bright',
      img : 'estelle-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Joshua Bright',
      img : 'joshua-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Cassius Bright',
      img : 'cassius-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Scherazard Harvey',
      img : 'schera-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Olivier Lenheim',
      img : 'olivier-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Kloe Rinz',
      img : 'kloe-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Agate Crosner',
      img : 'agate-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Tita Russell',
      img : 'tita-02',
      folder : 'kiseki'
    },
    
    {
      words : 'Zin Vathek',
      img : 'zin-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Kilika Rouran',
      img : 'kilika-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Kevin Graham',
      img : 'kevin-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Ries Argent',
      img : 'ries-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Renne',
      img : 'renne-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Leonhardt',
      img : 'loewe-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Josette Capua',
      img : 'josette-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Anelace Elfead',
      img : 'anelace-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Julia Schwarz',
      img : 'julia-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Alan Richard',
      img : 'alan-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Mueller Vander',
      img : 'mueller-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Trails to Azure',
      img : 'ao-no-kiseki',
      folder : 'kiseki'
    },
    
    {
      words : 'Crossbell City',
      img : 'crossbell',
      folder : 'kiseki'
    },
    
    {
      words : 'I have my own theme park in Crossbell.',
      img : '106-clean'
    },
    
    {
      words : "For those who do not know, Mishy is the mascot of Mishelam Wonderland.",
      img : 'tio-kao-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Lloyd Bannings',
      img : 'lloyd-02',
      folder : 'kiseki'
    },
    
    {
      words : 'Elie MacDowell',
      img : 'elie-02',
      folder : 'kiseki'
    },
    
    {
      words : 'Tio Plato',
      img : '021'
    },
    
    {
      words : 'Randy Orlando',
      img : 'randy-02',
      folder : 'kiseki'
    },
    
    {
      words : 'Sergei Lou',
      img : 'sergei-01',
      folder : 'kiseki'
    },
    
    {
      words : 'KeA',
      img : 'kea-02',
      folder : 'kiseki'
    },
    
    {
      words : 'Zeit',
      img : 'zeit-02',
      folder : 'kiseki'
    },
    
    {
      words : 'Fran Seeker',
      img : 'fran-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Noel Seeker',
      img : 'noel-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Wazy Hemisphere',
      img : 'wazy-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Rixia Mao',
      img : 'rixia-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Alex Dudley',
      img : 'dudley-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Arios MacLaine',
      img : 'arios-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Guy Bannings',
      img : 'guy-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Trails of Cold Steel',
      img : 'sen-no-kiseki',
      folder : 'kiseki'
    },
    
    {
      words : 'I appeared in Mishy Panic in the first Cold Steel. Be sure to play it!',
      img : '009'
    },
    
    {
      words : 'Which one of these am I supposed to hit..?',
      img : 'alisa-02',
      folder : 'kiseki'
    },
    
    {
      words : 'Oh no!',
      img : '154'
    },
    
    {
      words : 'Erebonia Empire',
      img : 'erebonia',
      folder : 'kiseki'
    },
    
    {
      words : 'Rean Schwarzer',
      img : 'rean-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Alisa Reinford',
      img : 'alisa-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Elliot Craig',
      img : 'elliot-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Laura S. Arseid',
      img : 'laura-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Machias Regnitz',
      img : 'machias-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Jusis Albarea',
      img : 'jusis-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Emma Millstein',
      img : 'emma-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Fie Claussell',
      img : 'fie-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Gaius Worzel',
      img : 'gaius-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Millium Orion',
      img : 'millium-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Crow Armbrust',
      img : 'crow-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Sara Valestein',
      img : 'sara-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Towa Herschel',
      img : 'towa-01',
      folder : 'kiseki'
    },
    
    {
      words : 'George Nome',
      img : 'george-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Angelica Rogner',
      img : 'angelica-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Elise Schwarzer',
      img : 'elise-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Alfin Reise Arnor',
      img : 'alfin-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Olivert Reise Arnor',
      img : 'olivert-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Victor S. Arseid',
      img : 'victor-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Sharon Kreuger',
      img : 'sharon-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Claire Rieveldt',
      img : 'claire-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Toval Randonneur',
      img : 'toval-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Celine',
      img : 'celine-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Those are some amazing heroes..',
      img : '053-clean'
    },
    
    {
      words : 'I want to be a hero, too!',
      img : '213-clean'
    },
    
    {
      words : "Waheehee, you'll never be a hero.",
      img : '103'
    },
    
    {
      words : 'DIE.',
      img : '103-evil'
    },
    
    {
      words : 'EEK, SOMEONE SAVE ME!',
      img : '196'
    },
    
    {
      words : 'This ends here!',
      img : 'estelle-02',
      folder : 'kiseki'
    },
    
    {
      words : 'Tiger Charge!',
      img : 'lloyd-03',
      folder : 'kiseki'
    },
    
    {
      words : "Eight Leaves One Blade's second form: Gale!",
      img : 'rean-02',
      folder : 'kiseki'
    },
    
    {
      words : 'Gyaaah!',
      img : '103-fading'
    },
    
    {
      words : 'Piece of cake',
      img : 'estelle-03',
      folder : 'kiseki'
    },
    
    {
      words : 'Nice work, everyone.',
      img : 'lloyd-kao-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Are you alright, Mishy?',
      img : 'rean-03',
      folder : 'kiseki'
    },
    
    {
      words : 'Yes, thank you!',
      img : '115'
    },
    
    {
      words : 'Wha?',
      img : '067-clean'
    },
    
    {
      words : 'It was another dream!',
      img : '075'
    },
    
    {
      words : "I've been playing too many of these games...",
      img : '058-clean'
    },
    
    {
      words : "But one day, I'll become a hero just like them!",
      img : '213-clean'
    }
  ];
  
  
  // Infinity Mode - "Challenge with Mishy"
  Mishy.mode.infinity = [].concat(Mishy.mode.easy, Mishy.mode.normal, Mishy.mode.hard, Mishy.mode.nightmare, [
    // ??? = Countdown with Mishy
    {
      words : 'Ten',
      img : '10',
      folder : 'infinity'
    },
    
    {
      words : 'Nine',
      img : '09',
      folder : 'infinity'
    },
    
    {
      words : 'Eight',
      img : '08',
      folder : 'infinity'
    },
    
    {
      words : 'Seven',
      img : '07',
      folder : 'infinity'
    },
    
    {
      words : 'Six',
      img : '06',
      folder : 'infinity'
    },
    
    {
      words : 'Five',
      img : '05',
      folder : 'infinity'
    },
    
    {
      words : 'Four',
      img : '04',
      folder : 'infinity'
    },
    
    {
      words : 'Three',
      img : '03',
      folder : 'infinity'
    },
    
    {
      words : 'Two',
      img : '02',
      folder : 'infinity'
    },
    
    {
      words : 'One',
      img : '01',
      folder : 'infinity'
    },
    
    {
      words : 'Congratulations on clearing Infinity!',
      img : 'clear',
      folder : 'infinity'
    }
  ]);
  
  
}(window, document));