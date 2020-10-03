(function (window, document) {
  'use strict';
  
  // Mishy runs the entire game for us behind the scenes. Thank you, Mishy!
  window.Mishy = { // みしし
    
    // general states
    playing : false, // tells Mishy if the game has already started and is being played
    paused : false, // tells Mishy if the game has been paused
    changingCards : false, // tells Mishy if he's currently changing the cards
    noHelper : false, // tells Mishy if helpers should be disabled (enabled for Hard mode and higher)
    
    
    // game progress
    gameMode : '', // tells Mishy what difficulty you're playing on
    progress : 0, // tells Mishy what card you're on
    words : '', // tells Mishy the words that need to be typed
    
    
    // timing
    multiplier : 1, // tells Mishy how much he should multiply or divide your time by
    multiType : '*', // tells Mishy whether to multiply or divide your typing time (* OR /; multiplication OR division)
    time : 0, // tells Mishy how much time you get for typing a card
    timeLeft : 0, // tells Mishy how much time remains before he shows the next one ( (timeLeft / time) * 100; this returns the percentage of the time remaining, used for the timer bar)
    
    
    // preferences
    //music : true, // tells Mishy if the player likes listening to music
    romaji : true, // tells Mishy if romaji input is preferred (default; increases time needed to type when ON)
    
    
    // misc
    mainBG : [0], // tells Mishy how many backgrounds you've unlocked
    debug : /debug=true/.test(window.location.search), // tells Mishy if debug mode is enabled
    
    
    // player stats
    stats : {
      score : 0, // tells Mishy your total score
      
      correct : 0, // tells Mishy how many cards you finished typing
      missed : 0, // tells Mishy how many cards you failed to type in time
      great : 0, // tells Mishy how many GREAT cards you got
      good : 0, // tells Mishy how many GOOD cards you got
      okay : 0, // tells Mishy how many OKAY cards you got
      
      wpm : 0, // tells Mishy how many words you can type per minute (gross calculation; no penalties)
      strokes : 0, // tells Mishy your total number of keystrokes
      time : 0, // tells Mishy how long you've been playing
      
      hp : 100, // tells Mishy how much HP he has left
      chain : 0, // tells Mishy your current chain (cards completed back-to-back without missing any)
      chainMax : 0 // tells Mishy your highest chain record (get a high chain to impress Mishy!)
    },
    
    
    // cached HTML nodes
    cache : {
      // background music node
      //music : document.getElementById('music'),
      
      // card for showing Mishy and typing words/phrases
      card : document.getElementById('mishy-card'),
      
      // container for showing completion grades
      grade : document.getElementById('mishy-grade'),
      
      // chain counter
      chain : document.getElementById('mishy-chain'),
      chainCount : document.getElementById('chain-count'),
      
      // text input
      input : document.getElementById('game-input'),
      
      // typing hint
      hint : document.getElementById('mishy-hint'),
      
      // main menu
      logo : document.getElementById('logo'),
      
      bonusArt : document.getElementById('clear-bonus-art'),
      
      // main menu
      main : document.getElementById('menu-main'),
      
      // game zone
      game : document.getElementById('game'),
      
      // ending screen
      gameEnd : document.getElementById('game-end'),
      gameEndStats : document.getElementById('game-end-stats')
    },
    
    
    // Starts the game in the selected mode
    startGame : function (mode) {
      Mishy.gameMode = mode;
      
      switch (mode) {
        case 'easy':
          // time multipliers
          Mishy.multiplier = 2;
          Mishy.multiType = '*';
          
          // score multiplier
          Mishy.score.multi = 1;
          
          // show hint for easy mode
          Mishy.cache.hint.style.display = '';
          
          // play background music
          /*Mishy.play.music('Mishelam Wonderland', {
            start : 0,
            end : 98.5
          });*/
          break;
          
        case 'normal':
          // time multipliers
          Mishy.multiplier = 1.5;
          Mishy.multiType = '*';
          
          // score multiplier
          Mishy.score.multi = 2;
                    
          // show hint for normal mode (no more hints after this)
          Mishy.cache.hint.style.display = '';
          
          // play background music
          /*Mishy.play.music('Paper-Thin Offense and Defense', {
            start : 12.80,
            end : 113.80
          });*/
          break;
          
        case 'hard':
          // time multipliers
          Mishy.multiplier = 1;
          Mishy.multiType = '*';
          
          // score multiplier
          Mishy.score.multi = 3;
          
          // disable helpers
          Mishy.noHelper = true;
          
          // play background music
          /*Mishy.play.music('Get Over The Barrier! -Roaring Version-', {
            start : 0,
            end : 0
          });*/
          break;
          
        case 'nightmare':
          // time multipliers
          Mishy.multiplier = 1.5;
          Mishy.multiType = '/';
          
          // score multiplier
          Mishy.score.multi = 4;
          
          // disable helpers
          Mishy.noHelper = true;
          
          // play background music
          /*Mishy.play.music('Inevitable Struggle -Super Arrange-', {
            start : 0,
            end : 0
          });*/
          break;
          
        case 'infinity':
          // time multipliers
          Mishy.multiplier = 2;
          Mishy.multiType = '/';
          
          // score multiplier
          Mishy.score.multi = 5;
          
          // disable helpers
          Mishy.noHelper = true;
          
          // play background music
          /*Mishy.play.music('Silver Will -Super Arrange-', {
            start : 0,
            end : 0
          });*/
          
          // clean up the arrays for infinity mode
          if (!Mishy.infinityCleaned) {
            for (var i = 0, j = Mishy.mode.infinity.length; i < j; i++) {
              // deletes the custom time parameter (this way all cards are super fast!)
              if (Mishy.mode.infinity[i].time) delete Mishy.mode.infinity[i].time;

              // deletes the pause parameter (only way you're catching a break is the pause button!)
              if (Mishy.mode.infinity[i].pause) delete Mishy.mode.infinity[i].pause;
            }
            
            // mark that the infinity array was cleaned so that it doesn't do a second pass
            Mishy.infinityCleaned = true;
          }
          
          // infinity was originally going to be randomized, however, upon careful consideration I decided to keep the order of each mode
          // this way you get to replay all 4 stories (+a bonus story), challenging yourself at super high speed!
          // # remnant code below #
          // randomize the contents of the infinity array
          /*var randomizedInfinity = [], n = 0;

          while (Mishy.mode.infinity.length) {
            // get random index
            n = Math.floor(Math.random() * Mishy.mode.infinity.length);

            // deletes the custom time parameter (this way all cards are super fast!)
            if (Mishy.mode.infinity[n].time) delete Mishy.mode.infinity[n].time;
            
            // deletes the pause parameter (only way you're catching a break is the pause button!)
            if (Mishy.mode.infinity[n].pause) delete Mishy.mode.infinity[n].pause;

            // push random card to the shuffled array
            randomizedInfinity.push(Mishy.mode.infinity[n]);

            // remove card and repeat
            Mishy.mode.infinity.splice(n, 1);
          }

          // clone the randomized array and done!
          Mishy.mode.infinity = randomizedInfinity.slice();*/
          break;
          
        default:
          break;
      }
      
      // mark that the game is currently being played
      Mishy.playing = true;
      
      // hide menus and show the game zone
      document.getElementById('menu-mode').style.display = 'none';
      Mishy.cache.logo.style.display = 'none';
      Mishy.cache.bonusArt.style.display = 'none';
      Mishy.cache.game.style.display = '';
      
      // remove main background image
      document.body.style.backgroundImage = '';
      
      // remove main-menu class from the body and add 'playing-game + DIFFICULTY-mode'
      document.body.className = document.body.className.replace('main-menu', 'playing-game ' + mode + '-mode');
      
      // show the first card
      Mishy.nextCard();
      
      // track total play time
      Mishy.playTime = setInterval(function() {
        if (Mishy.paused) return;
        Mishy.stats.time++;
      }, 1000);
    },
    
    
    // proceeds to the next word/phrase to be typed
    nextCard : function () {
      if (Mishy.stats.hp <= 0 || !Mishy.playing) return; // don't show next card if HP is 0, because the game is over :(
      
      // next card
      var card = Mishy.mode[Mishy.gameMode][Mishy.progress];
      Mishy.timer.stop(); // stop timer countdown
      
      // show the next card if there is one
      if (card) {
        Mishy.words = card.words; // cache words for comparison/highlighting
        
        // create new card
        Mishy.cache.card.innerHTML = '<div class="mishy-card">'+
          (card.img || card.custom ? '<div class="card-image-container"><img class="card-image" src="' + (card.custom ? card.custom : getPaths() + 'resources/images/game/' + (card.folder || 'mishy-sticker') + '/' + card.img + '.png') + '" alt="Mishy"></div>' : '')+
          '<div class="word-zone">'+
            '<div id="card-words" class="words">' + card.words + '</div>'+
            (card.helper && Mishy.romaji && !Mishy.noHelper ? '<div class="helper">' + card.helper + '</div>' : '')+
          '</div>'+
        '</div>';
        
        // cache words for highlighter
        Mishy.cache.words = document.getElementById('card-words');
        
        // automatically calculate typing time based on number of characters (if no time is specified with the card)
        // for japanese version, we're expecting romaji input, so we calculate the time based on the helper (with white space removed)
        if (!card.time) {
          Mishy.time = (Mishy.mode.ja && card.helper && Mishy.romaji ? card.helper.replace(/\s/g, '') : card.words).length * 1000;

          // multiply or divide the time
          switch (Mishy.multiType) {
            case '*': // multiply time
              Mishy.time = Math.ceil(Mishy.time * Mishy.multiplier);
              break;

            case '/': // divide time
              Mishy.time = Math.ceil(Mishy.time / Mishy.multiplier);
              break;

            default:
              break;
          }

          // lowest possible time should be 2 seconds
          if (Mishy.time < 2000) Mishy.time = 2000;
        }
        
        // if set, use the time included with the card
        else {
          Mishy.time = card.time * 1000;
        }
        
        // set time remaining for the timer
        Mishy.timeLeft = Mishy.time;
        
        // pause timer if the card contains the 'pause' parameter (mostly for reading the hints in easy and normal)
        if (card.pause) Mishy.paused = true;
        
        // start the countdown
        Mishy.timer.start();
      } 
      
      // end the game if there's no more cards
      else {
        return Mishy.endGame();
      }
      
      // hide hint
      if (Mishy.progress == 1) {
        Mishy.cache.hint.style.display = 'none';
      }
      
      // increment progress for next card
      Mishy.progress++;
      
      // restore input area for typing
      Mishy.cache.input.disabled = false;
      Mishy.cache.input.focus();
    },
    
    
    // highlights the text typed on the card
    highlightText : function (caller) {
      var match = [],
          written = caller.value.split(''),
          words = Mishy.words.split(''),
          i = 0, j = written.length;
      
      // find where the match ends
      for (; i < j; i++) {
        // add matching letters to the match array
        if (written[i] == words[i]) {
          match.push(written[i]);
        } 
        
        // break out of the loop when the letters don't match
        else {
          break;
        }
      }
      
      // wrap the letters that match with the highlighter tag
      match = match.join('');
      
      // only apply the updated html if there's a change (prevents constant reparsing)
      if (!new RegExp('<span class="highlighted">' + match.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '</span>').test(Mishy.cache.words.innerHTML)) {
        Mishy.cache.words.innerHTML = Mishy.words.replace(match, '<span class="highlighted">' + match + '</span>');
        
        // fallback override for marking the answer as correct (multiple input of two different keys at once can screw up checkAnswer()'s answer checking)
        if (match == Mishy.words) Mishy.checkAnswer(null, true);
      }
    },
    
    
    // object for calculating gross words per minute
    WPM : {
      CPM : [], // characters typed per minute
      
      // updates strokes/cpm, then calculates wpm
      update : function () {
        Mishy.stats.strokes++; // increment overall keystrokes
        Mishy.WPM.CPM.push(Mishy.stats.time); // push new character time to CPM
        Mishy.WPM.calculate(); // calculate WPM
      },
      
      // calculates wpm
      calculate : function () {
        // loops through CPM and removes older entries
        for (var i = 0, j = Mishy.WPM.CPM.length, currentTime = Mishy.stats.time; i < j; i++) {
          // remove character if it's older than 1 minute (60 seconds)
          if ((currentTime - Mishy.WPM.CPM[i]) > 60) {
            Mishy.WPM.CPM.splice(i, 1); // remove character from the array
            
            // update the loop's index/length to compensate for the removed character
            i--;
            j = Mishy.WPM.CPM.length;
          }
        }
        
        // calculate WPM
        Mishy.stats.wpm = Math.round(Mishy.WPM.CPM.length / 5);
      }
    },
    
    
    // checks the typed words to see if they match Mishy.words
    checkAnswer : function (caller, correct) {
      // unpause the timer if it was paused
      if (Mishy.paused) Mishy.paused = false;
      
      // check if the written text matches the card
      if ((caller && caller.value == Mishy.words && !Mishy.changingCards) || (correct && !Mishy.changingCards)) {
        Mishy.changingCards = true;
        Mishy.stats.correct++; // increment correctly typed cards
        Mishy.timer.stop();
        Mishy.showGrade(); // show the completion grade for the card and award HP
        
        // force the IME to close and remove the typed words
        Mishy.cache.input.blur();
        Mishy.cache.input.disabled = true;
        Mishy.cache.input.value = '';
        
        // add a slight delay so the last letter is highlighted
        window.setTimeout(function() {
          Mishy.nextCard();
          Mishy.changingCards = false;
        }, 100);
      }
    },
    
    
    // Mishy grades your typing time
    // completed @ 75% or higher time: GREAT; HP+5
    // completed @ 26%-74% time: GOOD; HP+3
    // completed @ 25% or less time: OKAY; HP+1
    // missed: MISS; -25HP to -60HP based on the difficulty
    showGrade : function () {
      var time = (Mishy.timeLeft / Mishy.time) * 100, // get time percentage
          card = document.createElement('DIV'), // creation of the grade card container
          
          // determines the grade card content (changes based on time percentage)
          grade =         time > 75 ? { img : '014', txt : MishyLang.grade.great, tag : 'great', pts : 100, hp : 5 } : 
            time <= 75 && time > 25 ? { img : '001', txt : MishyLang.grade.good, tag : 'good', pts : 50, hp : 3 } :
             time <= 25 && time > 0 ? { img : '007', txt : MishyLang.grade.okay, tag : 'okay', pts : 25, hp : 1 } : 
                                      { img : '009', txt : MishyLang.grade.miss, tag : 'miss', pts : 0,
                                       hp : { // HP lost is based on the difficulty
                                             'easy' : 20,
                                           'normal' : 30,
                                             'hard' : 40,
                                        'nightmare' : 50,
                                         'infinity' : 60
                                        }[Mishy.gameMode]
                                      };
      
      // increase grade related stat
      Mishy.stats[grade.tag == 'miss' ? 'missed' : grade.tag]++;
      
      // increase chain or decrease chain based on the time
      Mishy.chain(time > 0);
      
      // increase points based on the clear grade
      if (grade.tag != 'miss') {
        Mishy.score.add(grade.pts);
      }
      
      // restore 1-5HP depending on the grade; lose 25HP if the card was a miss
      Mishy.HP[time > 0 ? 'gain' : 'loss'](grade.hp);
      
      // setup the card content
      card.className = 'mishy-grade-card grade-' + grade.tag;
      card.innerHTML = '<img class="mishy-grade-image" src="' +  getPaths() + 'resources/images/game/mishy-emoji/' + grade.img + '.png">'+
                       '<div class="mishy-grade-text">' + grade.txt + '</div>';
      
      // removes the old grade if animations are not turned on (otherwise removal is handled via the timeout below)
      if (storageOK && localStorage['mishy-cssanime'] == 'OFF' && Mishy.cache.grade.firstChild) {
        Mishy.cache.grade.innerHTML = '';
      }
      
      // show the player their grade for the last card
      Mishy.cache.grade.appendChild(card);
      
      // remove the card after 5 seconds
      setTimeout(function () {
        if (card && card.parentNode) { // check before removing, just in case the card was removed via endGame, quitGame, or the condition above.
          Mishy.cache.grade.removeChild(card);
        }
      }, 5000);
    },
    
    
    // increase or decrease Mishy's HP
    HP : {
      // cached elements for the life bar
      life : document.getElementById('mishy-life'),
      inner : document.getElementById('mishy-life-inner'),
      bar : document.getElementById('mishy-life-bar'),
      face : document.getElementById('mishy-face'),
      
      
      // heals Mishy by n
      gain : function (n) {
        Mishy.stats.hp = Mishy.stats.hp + n > 100 ? 100 : Mishy.stats.hp + n;
        Mishy.HP.life.className = 'hp-gain';
        Mishy.HP.inner.style.width = Mishy.stats.hp + 'px';
        Mishy.HP.bar.style.width = Mishy.stats.hp + 'px';
        Mishy.HP.changeFace();
      },
      
      
      // reduce Mishy's HP by n
      loss : function (n) {
        Mishy.stats.hp = Mishy.stats.hp - n < 0 ? 0 : Mishy.stats.hp - n;
        Mishy.HP.life.className = 'hp-loss';
        Mishy.HP.inner.style.width = Mishy.stats.hp + 'px';
        Mishy.HP.bar.style.width = Mishy.stats.hp + 'px';
        Mishy.HP.changeFace();
        
        // game over if Mishy's HP reaches 0!
        if (Mishy.stats.hp <= 0) {
          Mishy.endGame(true);
        }
      },
      
      
      // changes Mishy's face base on how much HP he has
      changeFace : function () {
        var HP = Mishy.stats.hp;
        
        Mishy.HP.face.src = getPaths() + 'resources/images/game/mishy-emoji/' + (
          HP > 75 ? '001' : 
          HP <= 75 && HP > 50 ? '007' :
          HP <= 50 && HP > 25 ? '009' :
          HP <= 25 && HP > 0 ? '020' : '072'
        ) + '.png';
      }
    },
    
    
    score : {
      multi : 1, // score multiplier (changes based on difficulty)
      
      //
      count : document.getElementById('mishy-score'),
      
      // increase the score by n
      add : function (n) {
        // increment score
        Mishy.stats.score += Math.round((n * Mishy.score.multi) * Mishy.stats.chain);
        
        // show score in game
        Mishy.score.count.innerHTML = '<span data-score-anime="' + Mishy.stats.score + '">' + Mishy.stats.score + '</span>';
        
        // remove the data attribute used for playing the score increase animation
        if (Mishy.score.timeout) clearTimeout(Mishy.score.timeout); // remove old timeout (in case user can complete a card in 300ms)
        
        // set new timeout
        Mishy.score.timeout = setTimeout(function () {
          if (Mishy.score.count.firstChild) { // in case score resets
            delete Mishy.score.count.firstChild.dataset.scoreAnime;
          }
          delete Mishy.score.timeout;
        }, 300);
      }
    },
    
    
    // increase or reset the chain
    chain : function (increase) {
      // increase the chain
      if (increase) {
        // increase chain and chain record if the current chain is the highest
        if (++Mishy.stats.chain > Mishy.stats.chainMax) {
          Mishy.stats.chainMax = Mishy.stats.chain;
        }
        
        // show chain counter
        if (Mishy.stats.chain > 0 && /none/.test(Mishy.cache.chain.style.display)) {
          Mishy.cache.chain.style.display = '';
        }

        // update chain count in game
        Mishy.cache.chainCount.innerHTML = '<span data-chain-anime="' + Mishy.stats.chain + '">' + Mishy.stats.chain + '</span>';
        
        // remove the data attribute used for playing the chain increase animation
        if (Mishy.chainTimeout) clearTimeout(Mishy.chainTimeout); // remove old timeout (in case user can complete a card in 300ms)
        
        // set new timeout
        Mishy.chainTimeout = setTimeout(function () {
          if (Mishy.cache.chainCount.firstChild) { // in case chain resets
            delete Mishy.cache.chainCount.firstChild.dataset.chainAnime;
          }
          delete Mishy.chainTimeout;
        }, 300);
      }
      
      // reset the chain
      else {
        Mishy.stats.chain = 0;
        Mishy.cache.chainCount.innerHTML = Mishy.stats.chain;
        Mishy.cache.chain.style.display = 'none';
      }
    },
    
    
    // timing functions
    timer : {
      // cached time bar elements
      bar : document.getElementById('mishy-time-bar'),
      text : document.getElementById('mishy-time'),
      
      // updates the time bar
      updateTimeBar : function () {
        Mishy.timer.bar.style.width = ((Mishy.timeLeft / Mishy.time) * 100) + '%';
        Mishy.timer.text.innerText = (Mishy.timeLeft / 1000).toFixed(2);
      },
      
      
      // start the countdown
      start : function () {
        if (Mishy.timer.clock) Mishy.timer.stop(); // kill existing clocks if they're running
        
        // setup the clock and bar used for counting down
        Mishy.timer.clock = setInterval(Mishy.timer.countdown, 10);
        Mishy.timer.updateTimeBar();
      },
      
      
      // stop the countdown
      stop : function () {
        if (Mishy.timer.clock) {
          clearInterval(Mishy.timer.clock);
          delete Mishy.timer.clock;
        }
      },
      
      
      // count down the remaining time left for typing the current word
      countdown : function () {
        if (Mishy.paused) return; // stop countdown when game is paused
        
        Mishy.timeLeft -= 10; // subtract 100ms
        
        // time has run out!
        if (Mishy.timeLeft <= 0) {
          Mishy.showGrade(); // show the "MISS" grade
          
          // force the IME to close and remove the typed words
          Mishy.cache.input.blur();
          Mishy.cache.input.disabled = true;
          Mishy.cache.input.value = '';
          
          // show zero before changing the card
          Mishy.timer.stop();
          Mishy.timer.updateTimeBar();
          Mishy.cache.input.blur();
          Mishy.cache.input.disabled = true;
          Mishy.changingCards = true;
          
          // show next card after a slight delay so "0" is visible
          setTimeout(function() {
            Mishy.changingCards = false;
            Mishy.nextCard();
          }, 150);
        }
        
        // still time left!
        else {
          Mishy.timer.updateTimeBar(); // display the updated time
        }
      }
    },
    
    
    // ends the game (passing true as the param indicates Mishy's HP reached 0)
    endGame : function (gameOver) {
      Mishy.playing = false; // game is over
      
      // update background image
      document.body.className = document.body.className.replace('playing-game ' + Mishy.gameMode + '-mode', gameOver ? 'game-over' : 'game-clear');
      
      // unfocus and disable the input zone
      Mishy.cache.input.blur();
      Mishy.cache.input.disabled = true;
      Mishy.cache.input.value = '';
      
      // stop counting current play time
      clearInterval(Mishy.playTime);
          
      // stop timer
      Mishy.timer.stop();
      
      // show win/loss alert
      GenkiModal.open({
        title : gameOver ? MishyLang.game_over : MishyLang.game_clear,
        content : '<p class="center">'+
          '<span id="game-end-texts">' + MishyLang[gameOver ? 'game_lose' : 'game_win'] + '</span><br>' +
          '<img src="' + getPaths() + 'resources/images/game/mishy-sticker/' + (gameOver ? '031' : '063') + '.png">'+
        '</p>',
        
        callback : function () {
          // show the ending stats screen
          Mishy.cache.game.style.display = 'none';
          Mishy.cache.gameEnd.style.display = '';
          Mishy.cache.logo.style.display = '';
          
          // calculate play time
          var h = Math.floor(Mishy.stats.time / 3600), // hours
              m = Math.floor(Mishy.stats.time % 3600 / 60), // minutes
              s = Math.floor(Mishy.stats.time % 3600 % 60); // seconds
          
          // calculate score bonus based on completion time (no bonus if game over)
          if (!gameOver) {
            // determine the total time based on the total amount of characters to type. (so, 1 char = 1 second)
            for (var i = 0, j = Mishy.mode[Mishy.gameMode].length, bonus = 0; i < j; i++) {
              if (Mishy.mode.ja && Mishy.mode[Mishy.gameMode][i].helper && Mishy.romaji) {
                bonus += Mishy.mode[Mishy.gameMode][i].helper.replace(/\s/g, '').length;
              }
              
              else {
                bonus += Mishy.mode[Mishy.gameMode][i].words.length;
              }
            }
            
            bonus *= 1.5; // multiply the bonus time requirement by 1.5 to add a slight margin of error

            // determine the bonus multiplier
            bonus = Mishy.stats.time <= Math.round(bonus / 5) ? 5 :
                    Mishy.stats.time <= Math.round(bonus / 4) ? 4 :
                    Mishy.stats.time <= Math.round(bonus / 3) ? 3 :
                    Mishy.stats.time <= Math.round(bonus / 2) ? 2 :
                                                               1.5; // standard completion bonus if no time bonus
          }
          
          // parse stats
          Mishy.cache.gameEndStats.innerHTML = '<ul class="menu-list">'+
            '<li><span class="label">' + MishyLang.stats.score + '</span>' + (gameOver ? Mishy.stats.score : Math.round(Mishy.stats.score * bonus)) + '</span></li>'+
            '<li><span class="label">' + MishyLang.stats.mode + '</span><span class="game-mode mode-' + Mishy.gameMode + '">' + Mishy.gameMode.charAt(0).toUpperCase() + Mishy.gameMode.slice(1) + '</span></li>'+
            '<li><span class="label">' + MishyLang.stats.time + '</span>' + (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s) + '</li>'+
            '<li><span class="label">' + MishyLang.stats.keystrokes + '</span>' + Mishy.stats.strokes + '</li>'+
            '<li><span class="label">' + MishyLang.stats.keyspeed + '</span>' + Mishy.stats.wpm + '<small>wpm</small></li>'+
            '<li><span class="label">' + MishyLang.stats.max_chain + '</span>' + Mishy.stats.chainMax + '</li>'+
            '<li><span class="label">' + MishyLang.stats.cards_complete + '</span>' + Mishy.stats.correct + '/' + Mishy.mode[Mishy.gameMode].length + (Mishy.stats.correct == Mishy.mode[Mishy.gameMode].length ? '<span id="perfect-clear">' + MishyLang.stats.perfect + '</span>' : '') + '</li>'+
            '<ul class="menu-list" id="grade-listing">'+
              '<li>'+
                '<span class="label"><span class="mishy-grade-card grade-great">'+
                  '<img class="mishy-grade-image" src="' +  getPaths() + 'resources/images/game/mishy-emoji/014.png">'+
                  '<div class="mishy-grade-text">' + MishyLang.grade.great + '</div>'+
                '</span></span>' + Mishy.stats.great +
              '</li>'+
            
              '<li>'+
                '<span class="label"><span class="mishy-grade-card grade-good">'+
                  '<img class="mishy-grade-image" src="' +  getPaths() + 'resources/images/game/mishy-emoji/001.png">'+
                  '<div class="mishy-grade-text">' + MishyLang.grade.good + '</div>'+
                '</span></span>' + Mishy.stats.good +
              '</li>'+
            
              '<li>'+
                '<span class="label"><span class="mishy-grade-card grade-okay">'+
                  '<img class="mishy-grade-image" src="' +  getPaths() + 'resources/images/game/mishy-emoji/007.png">'+
                  '<div class="mishy-grade-text">' + MishyLang.grade.okay + '</div>'+
                '</span></span>' + Mishy.stats.okay +
              '</li>'+
              
              '<li>'+
                '<span class="label"><span class="mishy-grade-card grade-miss">'+
                  '<img class="mishy-grade-image" src="' +  getPaths() + 'resources/images/game/mishy-emoji/009.png">'+
                  '<div class="mishy-grade-text">' + MishyLang.grade.miss + '</div>'+
                '</span></span>' + Mishy.stats.missed +
              '</li>'+
            '</ul>'+
          '</ul>';
        },
        
        noClose : true,
        buttonText : MishyLang.view_score
      })
      
      // play victory/game over music
      /*Mishy.play.music(gameOver ? "Nayuta, Don't Give Up" : 'Stage Clear', {
        start : gameOver ? 34 : 2.35,
        end : gameOver ? 113 : 114.5
      });*/
      
      // save victory status
      if (storageOK && !gameOver) {
        // update existing clear status
        if (localStorage.mishyClear) {
          var a = localStorage.mishyClear.split(',');
          
          // update clear flag
          a[{ // numbers == array index (see ELSE statement below for order)
                 'easy' : 0,
               'normal' : 1,
                 'hard' : 2,
            'nightmare' : 3,
             'infinity' : 4
          }[Mishy.gameMode]] = 1;
          
          // save to storage
          localStorage.mishyClear = a.join(',');
        } 
        
        // set clear flag
        else {
          localStorage.mishyClear = (Mishy.gameMode == 'easy' ? 1 : 0) + ','+
                                  (Mishy.gameMode == 'normal' ? 1 : 0) + ','+
                                    (Mishy.gameMode == 'hard' ? 1 : 0) + ','+
                               (Mishy.gameMode == 'nightmare' ? 1 : 0) + ','+
                                (Mishy.gameMode == 'infinity' ? 1 : 0);
        }
      }
      
      // set the clear banners
      Mishy.setClearFlags();
    },
    
    
    // sets a clear flag on cleared modes
    setClearFlags : function () {
      if (storageOK && localStorage.mishyClear) {
        var clear = localStorage.mishyClear.split(','), // cleared modes
            bg = [0],
            mode = document.querySelectorAll('.mishy-mode-opt'), // difficulty buttons
            i = 0,
            j = mode.length;
        
        for (; i < j; i++) {
          if (clear[i] == '1' && !/mode-clear/.test(mode[i].className)) {
            mode[i].className += ' mode-clear'; // add clear banner to dfficulty button
            Mishy.cache.bonusArt.querySelector('img[data-clear-flag="' + i + '"]').style.display = ''; // show bonus artwork
            bg.push(i + 1); // add special background to the random background pool
          }
        }
        
        // update random bgs
        Mishy.mainBG = bg.slice();
      }
    },
    
    
    // randomly sets the main BG using a pool of unlocked backgrounds
    // pass along a number (0-5) to set the background manually
    setMainBG : function (custom) {
      document.body.style.backgroundImage = 'url(' + getPaths() + 'resources/images/background/main/' + (custom ? custom : Mishy.mainBG[Math.floor(Math.random() * Mishy.mainBG.length)]) + '.png)';
    },
    
    
    // resets the game after viewing the clear/game over stats
    resetGame : function () {
      // set the background based on the following cleared modes (random if game-over)
      Mishy.setMainBG(/game-clear/.test(document.body.className) ? {
             'easy' : 1,
           'normal' : 2,
             'hard' : 3,
        'nightmare' : 4,
         'infinity' : 5
      }[Mishy.gameMode] : null);
      
      // reset stats and states
      Mishy.resetGameState();
      
      // re-enable the input zone for a new game
      Mishy.cache.input.disabled = false;

      // hide game and show the main menu
      Mishy.cache.main.style.display = '';
      Mishy.cache.bonusArt.style.display = '';
      Mishy.cache.gameEnd.style.display = 'none';

      // remove game-over/end class from the body
      document.body.className = document.body.className.replace(/game-over|game-clear/, 'main-menu');

      // stop music for now until we find main menu music
      //Mishy.stop.music();
      
      // play main menu music
      /*Mishy.play.music('main-menu', {
        start : 0,
        end : 98.5
      });*/
    },
    
    
    // quits the game and returns to the main menu
    quitGame : function () {
      GenkiModal.open({
        title : 'Quit Game',
        content : '<p class="med-text center">' + MishyLang.quit_game_prompt + '</p>',
        callback : function () {
          // hide game and show the main menu
          Mishy.cache.main.style.display = '';
          Mishy.cache.logo.style.display = '';
          Mishy.cache.bonusArt.style.display = '';
          Mishy.cache.game.style.display = 'none';
          Mishy.cache.hint.style.display = 'none';

          // remove playing-game class from the body
          document.body.className = document.body.className.replace('playing-game ' + Mishy.gameMode + '-mode', 'main-menu');
          
          // stop counting current playtime
          clearInterval(Mishy.playTime);
          
          // stop timer
          Mishy.timer.stop();
          
          // stop music
          //Mishy.stop.music();
          
          // reset stats/states/etc
          Mishy.resetGameState();
          
          // randomly set the main background
          Mishy.setMainBG();
        },
        
        focus : '#genki-modal-close',
        buttonText : MishyLang.yes,
        closeButtonText : MishyLang.no
      });
    },
    
    
    // resets various properties to their default values
    resetGameState : function () {
      // general states
      Mishy.playing = false;
      Mishy.paused = false;
      Mishy.changingCards = false;
      Mishy.noHelper = false;

      // game progress/mode
      Mishy.gameMode = '';
      Mishy.multiplier = 1,
      Mishy.progress = 0;
      Mishy.words = '';
      Mishy.time = 0;

      // players stats
      Mishy.stats = {
        score : 0,
        
        correct : 0,
        missed : 0,
        great : 0,
        good : 0,
        okay : 0,
        
        wpm : 0,
        strokes : 0,
        time : 0,
        
        hp : 100,
        chain : 0,
        chainMax : 0
      };
      
      Mishy.cache.grade.innerHTML = ''; // empty grade row of grade cards
      Mishy.WPM.CPM = []; // reset CPM
      Mishy.chain(false); // hide/reset chain
      Mishy.score.add(0); // reset score
      Mishy.HP.gain(100); // reset HP
    },
    
    
    // pauses the game
    pause : function () {
      Mishy.paused = true;
      Mishy.cache.main.style.display = '';
      Mishy.cache.logo.style.display = '';
      Mishy.cache.game.style.display = 'none';
      
      // removes the grade on pause (prevents animation replay)
      if (Mishy.cache.grade.firstChild) {
        Mishy.cache.grade.innerHTML = '';
      }
    },
    
    
    // resumes the game
    resume : function () {
      Mishy.paused = false;
      Mishy.cache.main.style.display = 'none';
      Mishy.cache.logo.style.display = 'none';
      Mishy.cache.game.style.display = '';
      
      // re-focus input
      Mishy.cache.input.focus();
    },
    
    
    // shows the selected menu and hides the previous one
    showMenu : function (id, caller) {
      var menu = document.getElementById('menu-' + id); // gets new menu
      
      // find caller menu
      while (!/^menu-/.test(caller.id)) {
        caller = caller.parentNode;
        
        // fallback if menu not found
        if (caller.tagName == 'BODY') {
          return; // breaks out of loop and doesn't execute the code below
        }
      }
      
      // hide the caller menu (where the button was pressed)
      caller.style.display = 'none';
      
      // show the new menu
      menu.style.display = '';
    },
    
    
    // toggles various options and things
    toggle : {
      
      // shared functionality for toggling options
      option : function (type, o) {
        o = o || {};
        
        var state = (storageOK && localStorage['mishy-' + type]) || (new RegExp(type + '-off').test(document.body.className) ? 'OFF' : 'ON'),
            button = document.getElementById('toggle-' + type);
        
        // return if option not found (some options are exclusive to the Japanese version, such as furigana/romaji)
        if (!button) return;
        
        // runs on initialization only
        if (o.init && state == 'OFF') {
          // default state is ON, so if the saved preference is OFF, change the state to ON so the option is turned off
          state = 'ON';
        } 
        
        // do nothing if the option is already on
        else if (o.init && state == 'ON') {
          return;
        }
        
        // switch the active state
        switch (state) {
          // turn off option if it's on
          case 'ON':
            document.body.className += ' ' + type + '-off';
            button.className += ' opt-off';
            button.innerHTML = 'OFF';
            state = 'OFF';
            o.optionOff && o.optionOff(); // callback function to perfom when an option is turned off
            break;
            
          // turn on option if it's off
          case 'OFF':
            document.body.className = document.body.className.replace(' ' + type + '-off', '');
            button.className = button.className.replace(' opt-off', '');
            button.innerHTML = 'ON';
            state = 'ON';
            o.optionOn && o.optionOn(); // callback function to perfom when an option is turned on
            break;
            
          default:
            break;
        }
        
        // save setting to local storage
        if (storageOK && !o.init) {
          localStorage['mishy-' + type] = state;
        }
      },
      
      
      // toggles furigana on/off
      furigana : function (init) {
        this.option('furigana', {
          init : init
        });
      },
      
      
      // toggles romaji on/off
      romaji : function (init) {
        this.option('romaji', {
          init : init,
          
          optionOn : function () {
            Mishy.romaji = true;
          },
          
          optionOff : function () {
            Mishy.romaji = false;
          }
        });
      },
      
      
      // toggles music on/off
      /*music : function (init) {
        this.option('music', {
          init : init,
          
          // jobs to perform when music is enabled
          optionOn : function () {
            Mishy.music = true; // enable music playback
            
            // resume playing music
            if (Mishy.playing) {
              Mishy.play.music();
            }
          },
          
          // jobs to perform when music is disabled
          optionOff : function () {
            Mishy.music = false; // disable music playback
            
            // stop music that is currently playing
            Mishy.stop.music();
          }
        });
      },*/
      
      
      // toggles CSS3 animations on/off
      cssAnime : function (init) {
        this.option('cssanime', {
          init : init
        });
      }
    },
    
    
    // play audio
    /*play : {
      
      // music was originally going to be added, however, to respect Falcom's free music declaration, I decided not to.
      // feel free to use the code below (and its remnants throughout the script as reference material for playing/looping audio)
      // play music
      music : function (filename, loop) {
        var music = Mishy.cache.music;
        
        // set new music file
        if (filename) {
          music.src = getPaths() + 'resources/audio/music/' + filename + '.mp3';

          // add loop points for seamlessly looping the music
          if (loop) {
            music.dataset.loopStart = loop.start;
            music.dataset.loopEnd = loop.end;

          } else {
            delete music.dataset.loopStart;
            delete music.dataset.loopEnd;
          }

          // playing events
          music.ontimeupdate = function () {
            // log time for debugging
            if (Mishy.debug) {
              console.log(this.currentTime);
            } 

            // seamlessly loop the music
            if (this.currentTime >= +this.dataset.loopEnd) {
              this.currentTime = +this.dataset.loopStart;
            }
          }
        }
        
        // begin playing if music is enabled
        if (Mishy.music) {
          music.play();
        }
      },
      
      
      // play sound effects
      sfx : function () {
        
      }
    },
    
    
    // stop audio
    stop : {
      
      // stops music
      music : function () {
        Mishy.cache.music.pause();
      },
      
      // stops sfx
      sfx : function () {
        
      }
      
    },*/
    
    
    // changes game language
    changeLang : function (caller) {
      var a = caller.querySelector('A'); // get link
      
      if (a) { // check if it exists
        // check if offline
        if (window.location.protocol == 'file:' && !/index\.html/.test(a.href)) {
          a.href += 'index.html'; // add index.html to the link if offline
        }
        
        // finally, click the link
        a.click();
      }
    },
    
    
    // functions for preloading game assets
    preload : {
      imgPath : getPaths() + 'resources/images/',
      
      // main preloader
      assets : function () {
        var images = [
          // grades
          'game/mishy-emoji/014.png', 'game/mishy-emoji/001.png', 'game/mishy-emoji/007.png', 'game/mishy-emoji/009.png', 'game/mishy-emoji/023.png', 
          // HP faces
          'game/mishy-emoji/020.png', 'game/mishy-emoji/072.png', 
          // Win/Loss prompt
          'game/mishy-sticker/031.png', 'game/mishy-sticker/063.png', 
          // backgrounds
          'background/main/0.png', 'background/main/1.png', 'background/main/2.png', 'background/main/3.png', 'background/main/4.png', 'background/main/5.png', 
          'background/game/easy.png', 'background/game/normal.png', 'background/game/hard.png', 'background/game/nightmare.png', 'background/game/infinity.png', 'background/game/game-clear.png', 'background/game/game-over.png', 
          // background extras
          'game/mishy-emoji/078.png', 'game/mishy-sticker/093.png', 'background/extra/grass.png', 'game/mishy-sticker/103.png', 'game/mishy-sticker/011.png', 'game/mishy-sticker/239-clean.png', 'game/kiseki/tio-01.png', 'game/kiseki/tio-02.png', 'background/extra/confetti.png', 'game/mishy-sticker/126-clean.png', 'game/mishy-sticker/041-clean.png', 
          'game/mishy-sticker/004.png', 'game/kiseki/tio-06.png', 'background/extra/clouds.png',
          // misc
          'game/mishy-emoji/039.png'
        ], i, j, k, img;

        // loop through modes and gather images that require preloading
        for (i in Mishy.mode) {
          for (k in Mishy.mode[i]) {
            img = 'game/' + (Mishy.mode[i][k].folder ? Mishy.mode[i][k].folder : 'mishy-sticker') + '/' + Mishy.mode[i][k].img + '.png';

            // only add the image if it's not present
            if (images.indexOf(img) == -1) images.push(img);
          }
        }

        // finally, preload all the images
        for (i = 0, j = images.length; i < j; i++) {
          Mishy.preload.image(images[i]);
        }
        
        // log preload list to console for debugging (debug mode only)
        if (Mishy.debug) {
          Mishy.preload.list = images;
        }
      },

      // preloads an image
      image : function (src) {
        var img = new Image();
        img.src = Mishy.preload.imgPath + src;
      }
    },
    
    
    // removes the loading placeholder
    stopLoading : function () {
      if (/loading/.test(document.body.className) && !/fade-loader-out/.test(document.body.className)) {
        // gracefully fade the loading placeholder out
        document.body.className += ' fade-loader-out';

        // finally wipe the loading placeholder from existence after 1 second of glory
        window.setTimeout(function() {
          document.body.className = document.body.className.replace(/ loading| fade-loader-out/g, '');
        }, 1000);
        
        // clear the fallback timeout
        if (Mishy.loaderTimeout) {
          window.clearTimeout(Mishy.loaderTimeout);
          delete Mishy.loaderTimeout;
        }
      }
    },
    
    
    // sets up Mishy's functionality
    init : function () {
      // preload assets
      Mishy.preload.assets();
      
      // reapply saved settings
      for (var i in Mishy.toggle) {
        if (i != 'option') {
          Mishy.toggle[i](true);
        }
      }
      
      // set clear banners on cleared modes
      Mishy.setClearFlags();
      
      // set random background
      Mishy.setMainBG();
      
      // show beta test option (mode that is currently in development) and special debug options
      if (Mishy.debug) {
        var beta = document.getElementById('beta-test');
        if (beta) beta.style.display = '';
        
        // special debug functions
        Mishy.debugTools = {
          // go to previous card
          prev : function () {
            Mishy.progress = Mishy.progress - 2 <= -1 ? 0 : Mishy.progress - 2;
            Mishy.nextCard();
            Mishy.cache.debugCardIndex.value = Mishy.progress;
            Mishy.cache.debugCardIndex.max = Mishy.mode[Mishy.gameMode].length;
            Mishy.paused = true;
          },
          
          // go to the next card
          next : function () {
            Mishy.nextCard();
            Mishy.cache.debugCardIndex.value = Mishy.progress;
            Mishy.cache.debugCardIndex.max = Mishy.mode[Mishy.gameMode].length;
            Mishy.paused = true;
          }
        };
        
        // create prev/next button for cycling through cards
        var debug = document.createElement('DIV');
        
        debug.id = 'mishy-debugger';
        debug.innerHTML = 
          '<button class="button" onmousedown="Mishy.debugTools.prev(); window.CardChange = setInterval(Mishy.debugTools.prev, 200);" onmouseup="window.CardChange && clearInterval(CardChange);" onmouseout="window.CardChange && clearInterval(CardChange);">Prev</button>'+
          '<input id="debug-card-index" type="number" onchange="Mishy.progress = this.value; this.max = Mishy.mode[Mishy.gameMode].length;" min="0" value="1">'+
          '<button class="button" onmousedown="Mishy.debugTools.next(); window.CardChange = setInterval(Mishy.debugTools.next, 200);" onmouseup="window.CardChange && clearInterval(CardChange);" onmouseout="window.CardChange && clearInterval(CardChange);">Next</button>';
        
        document.getElementById('input-zone').insertBefore(debug, document.getElementById('mishy-hint'));
        Mishy.cache.debugCardIndex = document.getElementById('debug-card-index');
      }
    }
  };
  
  
  // remove loading placeholder on page load
  window.onload = Mishy.stopLoading;
  
  // fallback that removes the loading placeholder after 10 seconds of waiting
  Mishy.loaderTimeout = window.setTimeout(Mishy.stopLoading, 10000);
}(window, document));
