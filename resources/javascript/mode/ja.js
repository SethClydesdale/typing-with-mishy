// # DIFFICULTY MODES #
// Japanese Version

// ## CARD SYNTAX ##
/*
{
  // TEXTS
   words : 'おはよう', // words/phrases you want the player to type
  helper : 'o ha yo u', // [OPTIONAL] helper texts, primarily for romaji IMEs and things similar to them
  
  // IMAGES
     img : '067', // [OPTIONAL] image (filename) you want to display
  folder : 'mishy-emoji', // [OPTIONAL] changes the folder where the image is taken from (defaults to mishy_sticker; see images/game for more options)
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
  
  
  // Easy Mode - "みっしぃと日常"
  Mishy.mode.easy = [
    {
      words : 'おはよう',
      helper : 'o ha yo u',
      img : '067',
      pause : true // pause the first card for easy mode, so the player can read the hint and warm up
    },
    
    {
      words : 'おはようございます',
      helper : 'o ha yo u go za i ma su',
      img : '105'
    },
    
    {
      words : 'あさごはん',
      helper : 'a sa go ha nn',
      img : '003',
      folder : 'mishy-anime'
    },
    
    {
      words : 'といれ',
      helper : 'to i re',
      img : '087'
    },
    
    {
      words : 'でんわ',
      helper : 'de n wa',
      img : '088'
    },
    
    {
      words : 'いってきます',
      helper : 'i tte ki ma su',
      img : '045'
    },
    
    {
      words : 'いってらっしゃい！！',
      helper : 'i tte ra ssha i ! !',
      img : '101'
    },
    
    {
      words : 'はれ',
      helper : 'ha re',
      img : '258'
    },
    
    {
      words : 'あるく',
      helper : 'a ru ku',
      img : '004',
      folder : 'mishy-anime'
    },
    
    {
      words : 'どうぶつ',
      helper : 'do u bu tsu',
      img : '238'
    },
    
    {
      words : 'とけい',
      helper : 'to ke i',
      img : '049'
    },
    
    {
      words : 'いそぐね',
      helper : 'i so gu ne',
      img : '046'
    },
    
    {
      words : 'くるま',
      helper : 'ku ru ma',
      img : '093'
    },
    
    {
      words : 'でんしゃ',
      helper : 'de n sha',
      img : '047'
    },
    
    {
      words : 'どこ？？',
      helper : 'do ko ? ?',
      img : '050'
    },
    
    {
      words : 'まちがえです',
      helper : 'ma chi ga e de su',
      img : '051'
    },
    
    {
      words : 'たすけって！',
      helper : 'ta su ke tte !',
      img : '084'
    },
    
    {
      words : 'だいじょうぶです',
      helper : 'da i jo u bu de su',
      img : '112'
    },
    
    {
      words : 'ありがとう',
      helper : 'a ri ga to u',
      img : '065'
    },
    
    {
      words : 'ありがとうございます',
      helper : 'a ri ga to u go za i ma su',
      img : '115'
    },
    
    {
      words : 'どういたしまして',
      helper : 'do u i ta shi ma shi te',
      img : '066'
    },
    
    {
      words : 'こんにちは',
      helper : 'ko nn ni chi ha',
      img : '106'
    },
    
    {
      words : 'ぼく、みっしぃだよ。',
      helper : 'bo ku , mi sshi xi da yo .',
      img : '236'
    },
    
    {
      words : 'よろしくおねがいします',
      helper : 'yo ro shi ku o ne ga i shi ma su',
      img : '119'
    },
    
    {
      words : 'こちらこそ',
      helper : 'ko chi ra ko so',
      img : '117'
    },
    
    {
      words : 'がんばります',
      helper : 'ga n ba ri ma su',
      img : '130'
    },
    
    {
      words : 'おなかがすいた',
      helper : 'o na ka ga su i ta',
      img : '055'
    },
    
    {
      words : 'はずかしい',
      helper : 'ha zu ka shi i',
      img : '080'
    },
    
    {
      words : 'ひるごはん',
      helper : 'hi ru go ha nn',
      img : '244'
    },
    
    {
      words : 'おなかがいっぱい',
      helper : 'o na ka ga i ppa i',
      img : '056'
    },
    
    {
      words : 'ぶらぶらしてます',
      helper : 'bu ra bu ra shi te ma su',
      img : '085'
    },
    
    {
      words : 'ならんでます',
      helper : 'na ra n de ma su',
      img : '086'
    },
    
    {
      words : 'いっしょにいきましょう',
      helper : 'i ssho ni i ki ma sho u',
      img : '134'
    },
    
    {
      words : 'ちこくです',
      helper : 'chi ko ku de su',
      img : '211'
    },
    
    {
      words : 'いそぎます！',
      helper : 'i so gi ma su !',
      img : '135'
    },
    
    {
      words : 'ほっ',
      helper : 'ho xtsu',
      img : '229'
    },
    
    {
      words : 'あつい',
      helper : 'a tsu i',
      img : '260'
    },
    
    {
      words : 'のみもの',
      helper : 'no mi mo no',
      img : '005',
      folder : 'mishy-anime'
    },
    
    {
      words : 'あいであ',
      helper : 'a i de a',
      img : '027'
    },
    
    {
      words : 'ひこうき',
      helper : 'hi ko u ki',
      img : '262'
    },
    
    {
      words : 'ごーる',
      helper : 'go - ru',
      img : '069'
    },
    
    {
      words : 'やったー！！',
      helper : 'ya tta - ! !',
      img : '029'
    },
    
    {
      words : 'がーん',
      helper : 'ga - nn',
      img : '076'
    },
    
    {
      words : 'わらう',
      helper : 'wa ra u',
      img : '077'
    },
    
    {
      words : 'おこる',
      helper : 'o ko ru',
      img : '075'
    },
    
    {
      words : 'ごめんなさい',
      helper : 'go me nn na sai',
      img : '052'
    },
    
    {
      words : 'わるみっしぃ',
      helper : 'wa ru mi sshi xi',
      img : '103'
    },
    
    {
      words : 'こんぴゅーたー',
      helper : 'ko n pyu - ta -',
      img : '095'
    },
    
    {
      words : 'じーっ',
      helper : 'ji - xtsu',
      img : '081'
    },
    
    {
      words : 'むずかしい',
      helper : 'mu zu ka shi i',
      img : '079'
    },
    
    {
      words : 'しょうしょうおまちください',
      helper : 'sho u sho u o ma chi ku da sa i',
      img : '096'
    },
    
    {
      words : 'おつかれさま',
      helper : 'o tsu ka re sa ma',
      img : '043'
    },
    
    {
      words : 'たのしみにしてます',
      helper : 'ta no shi mi ni shi te ma su',
      img : '133'
    },
    
    {
      words : 'わくわく',
      helper : 'wa ku wa ku',
      img : '015',
      folder : 'mishy-anime'
    },
    
    {
      words : 'ぼうたい',
      helper : 'bo u ta i',
      img : '167'
    },
    
    {
      words : 'こんばんは',
      helper : 'ko n ba n ha',
      img : '107'
    },
    
    {
      words : 'きょうだい',
      helper : 'kyo u da i',
      img : '054'
    },
    
    {
      words : 'みっしぃのいもうと',
      helper : 'mi sshi xi no i mo u to',
      img : '002',
      folder : 'mishy-emoji'
    },
    
    {
      words : 'みししっ、みーしぇだよ。',
      helper : 'mi shi shi xtsu , mi - she da yo .',
      img : '255'
    },
    
    {
      words : 'がんばろうね！！',
      helper : 'ga n ba ro u ne ! !',
      img : '166'
    },
    
    {
      words : 'にっこり',
      helper : 'ni kko ri',
      img : '219'
    },
    
    {
      words : 'かいもの',
      helper : 'ka i mo no',
      img : '090'
    },
    
    {
      words : 'おたんじょうびおめでとう！！',
      helper : 'o ta n jo u bi o me de to u ! !',
      img : '210'
    },
    
    {
      words : 'けーき',
      helper : 'ke - ki',
      img : '022',
      folder : 'mishy-anime'
    },
    
    {
      words : 'からおけ',
      helper : 'ka ra o ke',
      img : '252'
    },
    
    {
      words : 'おどる',
      helper : 'o do ru',
      img : '078'
    },
    
    {
      words : 'えいが',
      helper : 'e i ga',
      img : '263'
    },
    
    {
      words : 'ぽっぷこーん',
      helper : 'po ppu ko - nn',
      img : '291'
    },
    
    {
      words : 'ぱちぱち',
      helper : 'pa chi pa chi',
      img : '020',
      folder : 'mishy-anime'
    },
    
    {
      words : 'ばんごはん',
      helper : 'ba n go ha nn',
      img : '207'
    },
    
    {
      words : 'かんぱい！！',
      helper : 'ka n pa i ! !',
      img : '016',
      folder : 'mishy-anime'
    },
    
    {
      words : 'あめ',
      helper : 'a me',
      img : '259'
    },
    
    {
      words : 'いなずま',
      helper : 'i na zu ma',
      img : '300'
    },
    
    {
      words : 'きぶんがわるい',
      helper : 'ki bu n ga wa ru i',
      img : '097'
    },
    
    {
      words : 'びょういんにいきなさい、みっしぃ。',
      helper : 'byo u i nn ni i ki na sa i',
      img : '165'
    },
    
    {
      words : 'ばちばち',
      helper : 'ba chi ba chi',
      img : '230'
    },
    
    {
      words : 'しかたないよ',
      helper : 'shi ka ta na i yo',
      img : '161'
    },
    
    {
      words : 'いしゃ',
      helper : 'i sha',
      img : '223'
    },
    
    {
      words : 'おだいじにしてください',
      helper : 'o da i ji ni shi te ku da sa i',
      img : '141'
    },
    
    {
      words : 'のー！！',
      helper : 'no - ! !',
      img : '222'
    },
    
    {
      words : 'はしる',
      helper : 'ha shi ru',
      img : '196'
    },
    
    {
      words : 'しんぱい',
      helper : 'shi n pa i',
      img : '201'
    },
    
    {
      words : 'きたくしました',
      helper : 'ki ta ku shi ma shi ta',
      img : '102'
    },
    
    {
      words : 'てあらい',
      helper : 'te a ra i',
      img : '002',
      folder : 'mishy-anime'
    },
    
    {
      words : 'ひまです',
      helper : 'hi ma de su',
      img : '226'
    },
    
    {
      words : 'しょうじ',
      helper : 'sho u ji',
      img : '010',
      folder : 'mishy-anime'
    },
    
    {
      words : 'いくさ',
      helper : 'i ku sa',
      img : '246'
    },
    
    {
      words : 'にゅーす',
      helper : 'nyu - su',
      img : '277'
    },
    
    {
      words : 'くじ',
      helper : 'ku ji',
      img : '174'
    },
    
    {
      words : 'おふろ',
      helper : 'o fu ro',
      img : '091'
    },
    
    {
      words : 'ねむい',
      helper : 'ne mu i',
      img : '058'
    },
    
    {
      words : 'ねる',
      helper : 'ne ru',
      img : '059'
    },
    
    {
      words : 'ながれぼし',
      helper : 'na ga re bo shi',
      img : '290'
    },
    
    {
      words : 'おやすみ',
      helper : 'o ya su mi',
      img : '024',
      folder : 'mishy-anime'
    },
    
    {
      words : 'ねてました。。',
      helper : 'ne te ma shi ta . .',
      img : '221'
    },
    
    {
      words : 'ゆめ',
      helper : 'yu me',
      img : '224'
    },
    
    {
      words : 'やすみます',
      helper : 'ya su mi ma su',
      img : '057'
    },
    
    {
      words : 'ばいばい',
      helper : 'ba i ba i',
      img : '184'
    },
    
    {
      words : 'またねー',
      helper : 'ma ta ne -',
      img : '061'
    },
    
    {
      words : 'れっつえんじょーいみっしぃ！',
      helper : 're ttsu e n jo - i mi sshi xi !',
      img : '253'
    }
  ];
  
  
  // Normal Mode - "みっしぃと夢"
  Mishy.mode.normal = [
    {
      words : 'みっしぃはねています',
      helper : 'mi sshi ha ne te i ma su',
      img : '004',
      pause : true // pause the first card for normal mode, so the player can read the hint and warm up
    },
    
    {
      words : 'すのーぼーどするのをゆめみています',
      helper : 'su no - bo - do su ru no wo yu me mi te i ma su',
      img : '012'
    },
    
    {
      words : 'それから、おんせんにはいりました',
      helper : 'so re ka ra , o n se nn ni ha i ri ma shi ta',
      img : '013'
    },
    
    {
      words : 'ぎゅうにゅうをのんでいます',
      helper : 'gyu u nyu u wo no n de i ma su',
      img : '014'
    },
    
    {
      words : 'すごくおいしいだよ',
      helper : 'su go ku o i shi i da yo',
      img : '010'
    },
    
    {
      words : 'あれ？',
      helper : 'a re ?',
      img : '100'
    },
    
    {
      words : 'わるしし、みーしぇをらちする',
      helper : 'wa ru shi shi , mi - she wo ra chi su ru',
      img : '103-abduction'
    },
    
    {
      words : 'のー！！',
      helper : 'no - ! !',
      img : '222'
    },
    
    {
      words : 'おきます',
      helper : 'o ki ma su',
      img : '001',
      folder : 'mishy-anime'
    },
    
    {
      words : 'こわかった！',
      helper : 'ko wa ka tta !',
      img : '034'
    },
    
    {
      words : 'ちょうしょくをたべたい',
      helper : 'cho u sho ku wo ta be ta i',
      img : '024'
    },
    
    {
      words : 'みーしぇぇぇ！',
      helper : 'mi - she xe xe !',
      img : '025-clean'
    },
    
    {
      words : 'なに？',
      helper : 'na ni ?',
      img : '026'
    },
    
    {
      words : 'みーしぇはどこですか！？',
      helper : 'mi - she ha do ko de su ka',
      img : '050'
    },
    
    {
      words : 'あのゆめ。。。',
      helper : 'a no yu me . . .',
      img : '053-dream'
    },
    
    {
      words : 'さがしてみます',
      helper : 'sa ga shi te mi ma su',
      img : '131'
    },
    
    {
      words : 'みーしぇをたすけましょう！！',
      helper : 'mi - she wo ta su ke ma sho u ! !',
      img : '068'
    },
    
    {
      words : 'くるまをうんてんしています',
      helper : 'ku ru ma wo u n te n shi te i ma su',
      img : '093'
    },
    
    {
      words : 'すみません、みーしぇをみましたか。',
      helper : 'su mi ma se n , mi - she wo mi ma shi ta ka .',
      img : '106-clean'
    },
    
    {
      words : 'あっ、みっしぃ！！',
      helper : 'a xtsu , mi sshi xi ! !',
      img : 'tio-01',
      folder : 'kiseki'
    },
    
    {
      words : 'うおっ！',
      helper : 'u o xtsu !',
      img : '034',
    },
    
    {
      words : 'こほん、すみません。',
      helper : 'ko ho n , su mi ma se n .',
      img : 'tio-kao-05',
      folder : 'kiseki'
    },
    
    {
      words : 'てぃお・ぷらとーです。よろしく。',
      helper : 'te xi o / pu ra to - de su . yo ro shi ku .',
      img : 'tio-03',
      folder : 'kiseki'
    },
    
    {
      words : '（てぃおはみっしぃのだいふぁんですよ）',
      helper : '( te xi o ha mi sshi xi no dai fa n de su yo )',
      img : '020'
    },
    
    {
      words : 'みーしぇをさがしていますか。',
      helper : 'mi - she wo sa ga shi te i ma su ka .',
      img : 'tio-kao-01',
      folder : 'kiseki'
    },
    
    {
      words : 'はい！わるみっしぃはみーしぇをらちしました。',
      helper : 'ha i ! wa ru mi sshi xi ha mi - she wo ra chi shi ma shi ta .',
      img : '114'
    },
    
    {
      words : 'わかりました。わたしにまかせてください。',
      helper : 'wa ka ri ma shi ta . wa ta shi ni ma ka se te ku da sa i .',
      img : 'tio-kao-02',
      folder : 'kiseki'
    },
    
    {
      words : 'えいおんしすてむきどう！',
      helper : 'e i o n shi su te mu ki do u !',
      img : 'tio-kao-08',
      folder : 'kiseki'
    },
    
    {
      words : 'すごいですね',
      helper : 'su go i de su ne',
      img : '124'
    },
    
    {
      words : 'ふう',
      helper : 'fu u',
      img : 'tio-kao-07',
      folder : 'kiseki'
    },
    
    {
      words : 'みしゅらむわんだーらんどでふたりをかんちしました。',
      helper : 'mi shu ra mu wa n da - ra n do de fu ta ri wo ka n chi shi ma shi ta .',
      img : 'tio-kao-04',
      folder : 'kiseki'
    },
    
    {
      words : 'ほんとうですか！？',
      helper : 'ho n to u de su ka ! ?',
      img : '122'
    },
    
    {
      words : 'ええ、いきましょう！',
      helper : 'e e , i ki ma sho u !',
      img : 'tio-kao-02',
      folder : 'kiseki'
    },
    
    {
      words : 'らじゃー',
      helper : 'ra ja -',
      img : '032'
    },
    
    {
      words : 'みしゅらむわんだーらんど',
      helper : 'mi shu ra mu wa n da - ra n do',
      img : 'mwl-01',
      folder : 'kiseki'
    },
    
    {
      words : 'みーしぇは？',
      helper : 'mi - she ha ?',
      img : '071'
    },
    
    {
      words : 'ほらーこーすたーです。',
      helper : 'ho ra - ko - su ta - de su .',
      img : 'tio-kao-01',
      folder : 'kiseki'
    },
    
    {
      words : 'ほらー？',
      helper : 'ho ra - ?',
      img : '079'
    },
    
    {
      words : 'ほらーこーすたー',
      helper : 'ho ra - ko - su ta -',
      img : 'horror-coaster',
      folder : 'kiseki'
    },
    
    {
      words : 'ぞわぞわ',
      helper : 'zo wa zo wa',
      img : '209'
    },
    
    {
      words : 'みっしぃ、あちらをみてください！',
      helper : 'mi sshi xi , a chi ra wo mi te ku da sa i !',
      img : 'tio-kao-08',
      folder : 'kiseki'
    },
    
    {
      words : 'きゃー',
      helper : 'kya -',
      img : '154'
    },
    
    {
      words : 'あ、わるみっしぃとみーしぇ！',
      helper : 'a , wa ru mi sshi xi to mi - she !',
      img : '103-found'
    },
    
    {
      words : 'みーしぇをかいほうしなさいよ！',
      helper : 'mi - she wo ka i ho u shi na sa i yo !',
      img : '075'
    },
    
    {
      words : 'わるしし',
      helper : 'wa ru shi shi',
      img : '103'
    },
    
    {
      words : 'きをつけてください！',
      helper : 'ki wo tsu ke te ku da sa i !',
      img : 'tio-kao-08',
      folder : 'kiseki'
    },
    
    {
      words : 'がーん！',
      helper : 'ga - n !',
      img : '076'
    },
    
    {
      words : 'おたすけてくださーい！',
      helper : 'o ta su ke te ku da sa - i !',
      img : '129'
    },
    
    {
      words : '。。。まったく。',
      helper : '. . . ma tta ku .',
      img : 'tio-04',
      folder : 'kiseki'
    },
    
    {
      words : 'えーてるばすたー！',
      helper : 'e - te ru ba su ta - !',
      img : 'tio-scraft-01',
      folder : 'kiseki'
    },
    
    {
      words : 'たすかりました！',
      helper : 'ta su ka ri ma shi ta !',
      img : '153-clean'
    },
    
    {
      words : 'がんばりましょう、みっしぃ！',
      helper : 'ga n ba ri ma sho u , mi sshi xi !',
      img : 'tio-to-mishy',
      folder : 'kiseki'
    },
    
    {
      words : 'ぜろ・ふぃーるど',
      helper : 'ze ro / fi - ru do',
      img : 'tio-scraft-02',
      folder : 'kiseki'
    },
    
    {
      words : 'ありがとう、てぃお！',
      helper : 'a ri ga to u , te xi o !',
      img : '186-zero-field'
    },
    
    {
      words : 'まかせて！',
      helper : 'ma ka se te !',
      img : '042-clean'
    },
    
    {
      words : 'さささ',
      helper : 'sa sa sa',
      img : '170'
    },
    
    {
      words : 'くるくる',
      helper : 'ku ru ku ru',
      img : '303-clean'
    },
    
    {
      words : 'みっしぃ・ろけっと！',
      helper : 'mi sshi xi / ro ke tto !',
      img : '303-rocket'
    },
    
    {
      words : 'みーしぇ・ぱんち！',
      helper : 'mi - she / pa n chi !',
      img : '103-finisher'
    },
    
    {
      words : 'えー',
      helper : 'e -',
      img : '188'
    },
    
    {
      words : 'けーおー',
      helper : 'ke - o -',
      img : '103-ko'
    },
    
    {
      words : 'すてーたす、おーるぐりーんです。',
      helper : 'su te - ta su , o - ru gu ri - n de su .',
      img : 'tio-kao-05',
      folder : 'kiseki'
    },
    
    {
      words : 'いぇい！',
      helper : 'i xe i !',
      img : '255-clean'
    },
    
    {
      words : 'ないすぱんち、みーしぇ！',
      helper : 'na i su pa n chi , mi - she !',
      img : '157'
    },
    
    {
      words : 'よかった。。。',
      helper : 'yo ka tta . . .',
      img : 'tio-kao-10',
      folder : 'kiseki'
    },
    
    {
      words : 'おめでとうー！！',
      helper : 'o me de to u - ! !',
      img : '182'
    },
    
    {
      words : 'お',
      helper : 'o',
      img : 'black'
    },
    
    {
      words : 'き',
      helper : 'ki',
      img : '257-ki'
    },
    
    {
      words : 'て',
      helper : 'te',
      img : '257-te'
    },
    
    {
      words : 'おきて、みっしぃ。',
      helper : 'o ki te , mi sshi xi .',
      img : '257-clean'
    },
    
    {
      words : 'えー？',
      helper : 'e - ?',
      img : '067-clean'
    },
    
    {
      words : 'ゆめでした。。。',
      helper : 'yu me de shi ta . . .',
      img : '072-clean'
    },
    
    {
      words : 'ちょうしょくをたべています',
      helper : 'cho u sho ku wo ta be te i ma su',
      img : '003',
      folder : 'mishy-anime'
    },
    
    {
      words : 'てぃおはどこかな？',
      helper : 'te xi o ha do ko ka na ?',
      img : '030'
    },
    
    {
      words : 'いってきます！',
      helper : 'i tte ki ma su !',
      img : '101-clean'
    },
    
    {
      words : 'いってらっしゃい！',
      helper : 'i tte ra ssha i !',
      img : '044-clean'
    },
    
    {
      words : 'まってください！',
      helper : 'ma tte ku da sa i !',
      img : 'tio-05-hidden',
      folder : 'kiseki'
    },
    
    {
      words : 'おべんとうをわすれました。',
      helper : 'o be n to u wo wa su re ma shi ta .',
      img : 'tio-05',
      folder : 'kiseki'
    },
    
    {
      words : 'ゆめじゃなかった！？',
      helper : 'yu me ja na ka tta ! ?',
      img : '188-clean'
    },
    
    {
      words : 'はっぴーえんど',
      helper : 'ha ppi - e n do',
      img : '021'
    }
  ];
  
  
  // Hard Mode - "みっしぃとデート"
  Mishy.mode.hard = [
    {
      words : 'あるひ、みしゅらむわんだーらんどで',
      helper : 'a ru hi , mi shu ra mu wa n da - ra n do de',
      img : 'mwl-01',
      folder : 'kiseki'
    },
    
    {
      words : 'こんにちは！わんだーらんどにようこそっ。',
      helper : 'ko nn ni chi ha ! wa n da - ra n do ni yo u ko so xtsu .',
      img : '002'
    },
    
    {
      words : 'みししっ、たのしんでいってね～！',
      helper : 'mi shi shi xtsu , ta no shi n de i tte ne ~ !',
      img : '003'
    },
    
    {
      words : 'やすみじかん',
      helper : 'ya su mi ji ka nn',
      img : '175'
    },
    
    {
      words : 'みっしぃ、おしごとおつかれさま。',
      helper : 'mi sshi xi , o shi go to o tsu ka re sa ma .',
      img : '165'
    },
    
    {
      words : 'ありがとう',
      helper : 'a ri ga to u',
      img : '097'
    },
    
    {
      words : 'つかれています',
      helper : 'tsu ka re te i ma su',
      img : '058-clean'
    },
    
    {
      words : 'ひるねをします',
      helper : 'hi ru ne wo shi ma su',
      img : '176-clean'
    },
    
    {
      words : 'ねすぎないでください',
      helper : 'ne su gi na i de ku da sa i',
      img : '257-clean'
    },
    
    {
      words : 'とくむしえんか',
      helper : 'to ku mu shi e n ka',
      img : 'sss-01',
      folder : 'kiseki'
    },
    
    {
      words : 'ゆさゆさ、ゆさゆさ、ゆさゆさ',
      helper : 'yu sa yu sa , yu sa yu sa , yu sa yu sa',
      img : 'black'
    },
    
    {
      words : 'ん。。なんだ。。。じしん？',
      helper : 'n . . na n da . . . ji shi n ?',
      img : 'lloyd-kao-22',
      folder : 'kiseki'
    },
    
    {
      words : 'ろいど・ばにんぐす',
      helper : 'ro i do / ba ni n gu su',
      img : 'lloyd-01',
      folder : 'kiseki'
    },
    
    {
      words : 'しゅつりょくみにまむ、ごくしょうれべる。',
      helper : 'shu tsu ryo ku mi ni ma mu , go ku sho u re be ru .',
      img : 'black'
    },
    
    {
      words : 'とうけつぷろせすてんかい。。。はつどう。',
      helper : 'to u ke tsu pu ro se su te n ka i . . . ha tsu do u .',
      img : 'black'
    },
    
    {
      words : 'つめたっ！？',
      helper : 'tsu me ta xtsu ! ?',
      img : 'lloyd-kao-27',
      folder : 'kiseki'
    },
    
    {
      words : 'おはようございます。ろいどさん。',
      helper : 'o ha yo u go za i ma su . ro i do sa n .',
      img : 'tio-kao-15',
      folder : 'kiseki'
    },
    
    {
      words : 'てぃお・ぷらとー',
      helper : 'te xi o / pu ra to -',
      img : 'tio-03',
      folder : 'kiseki'
    },
    
    {
      words : 'ああ、おはよう。。。',
      helper : 'a a , o ha yo u . . .',
      img : 'lloyd-kao-18',
      folder : 'kiseki'
    },
    
    {
      words : 'なんでてぃおがここに。。？',
      helper : 'na n de te xi o ga ko ko ni . . ?',
      img : 'lloyd-kao-21',
      folder : 'kiseki'
    },
    
    {
      words : 'みしゅらむにいくのじかんなのに',
      helper : 'mi shu ra mu ni i ku no ji ka nn na no ni',
      img : 'tio-kao-05',
      folder : 'kiseki'
    },
    
    {
      words : 'ろいどさんがおりてこないのでおこしにきました。',
      helper : 'ro i do sa n ga o ri te ko na i no de o ko shi ni ki ma shi ta .',
      img : 'tio-kao-04',
      folder : 'kiseki'
    },
    
    {
      words : 'あ、もうそんなじかんだったか。',
      helper : 'a , mo u so nn na ji ka n da tta ka .',
      img : 'lloyd-kao-21',
      folder : 'kiseki'
    },
    
    {
      words : 'はは。でも、やっぱりてぃおのおめあてはてーむぱーくなのか？',
      helper : 'ha ha . de mo , ya ppa ri te xi o no o me a te ha te - mu pa - ku na no ka ?',
      img : 'lloyd-kao-25',
      folder : 'kiseki'
    },
    
    {
      words : 'もちのろんです。',
      helper : 'mo chi no ro n de su .',
      img : 'tio-kao-05',
      folder : 'kiseki'
    },
    
    {
      words : 'みっしぃにあえるのがたのしみです。',
      helper : 'mi sshi xi ni a e ru no ga ta no shi mi de su .',
      img : 'tio-kao-03',
      folder : 'kiseki'
    },
    
    {
      words : 'おい、てぃおすけ。ろいどがおきてる？',
      helper : 'o i , te xi o su ke . ro i do ga o ki te ru ?',
      img : 'randy-kao-06',
      folder : 'kiseki'
    },
    
    {
      words : 'らんでぃ・おるらんど',
      helper : 'ra n de xi / o ru ra n do',
      img : 'randy-01',
      folder : 'kiseki'
    },
    
    {
      words : 'ちょうしょくのじゅんびもしてあるから、たべましょう。',
      helper : 'cho u sho ku no ju n bi mo shi te a ru kara , ta be ma sho u .',
      img : 'elie-kao-03',
      folder : 'kiseki'
    },
    
    {
      words : 'えりぃ・まくだえる',
      helper : 'e ri xi / ma ku da e ru',
      img : 'elie-01',
      folder : 'kiseki'
    },
    
    {
      words : 'きーあ、みっしぃにきっくをしたいかな～！',
      helper : 'mi sshi xi ni ki kku wo shi ta i ka na ~ !',
      img : 'kea-kao-11',
      folder : 'kiseki'
    },
    
    {
      words : 'きーあ・ばにんぐす',
      helper : 'ki - a / ba ni n gu su',
      img : 'kea-01',
      folder : 'kiseki'
    },
    
    {
      words : 'わぉん！',
      helper : 'wa o n !',
      img : 'zeit-kao-01',
      folder : 'kiseki'
    },
    
    {
      words : 'つぁいと',
      helper : 'tsu a i to',
      img : 'zeit-01',
      folder : 'kiseki'
    },
    
    {
      words : 'ちょうしょくご、みしゅらむわんだーらんどにいった。',
      helper : 'cho u sho ku go , mi shu ra mu wa n da - ra n do ni i tta .',
      img : 'mwl-02',
      folder : 'kiseki'
    },
    
    {
      words : 'うわあああっ。。。！',
      helper : 'u wa a a a xtsu . . . !',
      img : 'kea-kao-10',
      folder : 'kiseki'
    },
    
    {
      words : 'ここがみしゅらむわんだーらんど。。。',
      helper : 'ko ko ga mi shu ra mu wa n da - ra n do . . .',
      img : 'lloyd-kao-03',
      folder : 'kiseki'
    },
    
    {
      words : '。。。じいぃん',
      helper : '. . . ji i xi nn',
      img : 'tio-kao-04',
      folder : 'kiseki'
    },
    
    {
      words : 'あとらくしょんがたくさんあるねえ。',
      helper : 'a to ra ku sho n ga ta ku sa nn a ru ne e',
      img : 'randy-kao-10',
      folder : 'kiseki'
    },
    
    {
      words : 'かがみのしろ、このてーむぱーくのもにゅめんとてきなばしょだそうです。',
      helper : 'ka ga mi no shi ro , ko no te - mu pa - ku no mo nyu me n to te ki na ba sho da so u de su .',
      img : 'elie-kao-01',
      folder : 'kiseki'
    },
    
    {
      words : 'ねがいをかなえるかがみというのがさいじょうかいにおかれているらしくてっ',
      helper : 'ne ga i wo ka na e ru ka ga mi to i u no ga sa i jo u ka i ni o ka re te i ru ra shi ku te xtsu',
      img : 'elie-kao-05',
      folder : 'kiseki'
    },
    
    {
      words : 'ねがいをかなえるかがみですか。',
      helper : 'ne ga i wo ka na e ru ka ga mi de su ka .',
      img : 'tio-kao-06',
      folder : 'kiseki'
    },
    
    {
      words : 'ええ、かねをならしてかがみのまえにたつとねがいがかなうんていわれていますね。',
      helper : 'e e , ka ne wo na ra shi te ka ga mi no ma e ni ta tsu to ne ga i ga ka na u n te i wa re te i ma su ne .',
      img : 'elie-kao-03',
      folder : 'kiseki'
    },
    
    {
      words : 'ま、やっぱりかっぷるとかふぁみりーがおおいっすね。',
      helper : 'ma , ya ppa ri ka ppu ru to ka fa mi ri - ga o o i ssu ne .',
      img : 'randy-kao-05',
      folder : 'kiseki'
    },
    
    {
      words : 'なにせ、そのかねをならすはんどるがさゆうにふたつついてるくらいだし。',
      helper : 'na ni se, so no ka ne wo na ra su ha n do ru ga sa yu u ni fu ta tsu tsu i te ru ku ra i da shi .',
      img : 'randy-kao-05',
      folder : 'kiseki'
    },
    
    {
      words : 'た、たしかにそれはひとりでならすとせつなそうだな。',
      helper : 'ta , ta shi ka ni so re ha hi to ri de na ra su to se tsu na so u da na .',
      img : 'lloyd-kao-12',
      folder : 'kiseki'
    },
    
    {
      words : 'ねえねえ！',
      helper : 'ne e ne e !',
      img : 'kea-kao-02',
      folder : 'kiseki'
    },
    
    {
      words : 'あっちにみえるおやしきってだれかすんでるのー？',
      helper : 'a cchi ni mi e ru o ya shi ki tte da re ka su n de ru no - ?',
      img : 'kea-kao-11',
      folder : 'kiseki'
    },
    
    {
      words : 'ほらーこーすたーというです。',
      helper : 'ho ra - ko - su ta - to i u de su .',
      img : 'tio-kao-05',
      folder : 'kiseki'
    },
    
    {
      words : 'どうやらさいしんぎじゅつくししたおそろしいもえきさいてぃんぐなあとらくしょんのようですね。',
      helper : 'do u ya ra sa i shi n gi ju tsu ku shi shi ta o so ro shi i mo e ki sa i te xi n gu na a to ra ku sho nn no yo u de su ne.',
      img : 'tio-kao-03',
      folder : 'kiseki'
    },
    
    {
      words : 'そ、そんなものがあたらしくできたんだ。。。',
      helper : 'so , so nn na mo no ga a ta ra shi ku de ki ta n da . . .',
      img : 'elie-kao-07',
      folder : 'kiseki'
    },
    
    {
      words : '。。。それをいうならみっしぃのおっかけもはずせないのではないかと。',
      helper : '. . . so re wo i u na ra mi sshi xi no o kka ke mo ha zu se na i no de ha na i ka to .',
      img : 'tio-kao-04',
      folder : 'kiseki'
    },
    
    {
      words : 'ぱーくをじゅんかいしているかれをおいかけていくというしゅこうです。',
      helper : 'pa - ku wo ju n ka i shi te i ru ka re wo o i ka ke te i ku to i u shu ko u de su .',
      img : 'tio-kao-02',
      folder : 'kiseki'
    },
    
    {
      words : 'うんがよければかれのいもうとであるみーしぇというきゃらにもあうことができるとか。。。！',
      helper : 'u n ga yo ke re ba ka re no i mo u to de a ru mi - she to i u kya ra ni mo a u ko to ga de ki ru to ka . . . !',
      img : 'tio-kao-08',
      folder : 'kiseki'
    },
    
    {
      words : 'そ、そうなのか。',
      helper : 'so , so u na no ka .',
      img : 'lloyd-kao-13',
      folder : 'kiseki'
    },
    
    {
      words : 'てぃおすけのめがまじだぜ。。。',
      helper : 'te xi o su ke no me ga ma ji da ze . . .',
      img : 'randy-kao-02',
      folder : 'kiseki'
    },
    
    {
      words : 'わんだーらんどにようこそ。',
      helper : 'wa n da - ra n do ni yo u ko so .',
      img : '003'
    },
    
    {
      words : '。。。みっしぃ！',
      helper : '. . . mi sshi xi !',
      img : 'tio-kao-08',
      folder : 'kiseki'
    },
    
    {
      words : 'てぃ、てぃお？',
      helper : 'te xi , te xi o ?',
      img : 'lloyd-kao-06',
      folder : 'kiseki'
    },
    
    {
      words : 'こほん、みっしぃとでーとをします。',
      helper : 'ko ho n , mi sshi xi to de - to wo shi ma su .',
      img : 'tio-kao-05',
      folder : 'kiseki'
    },
    
    {
      words : 'で、でーと！？',
      helper : 'de - to ! ?',
      img : '188-date',
    },
    // Thus begins Tio's date with.. Mishy. What fate lies in store for these two!? <TO BE CONTINUED>
  ];
  
  
  // Nightmare Mode
  Mishy.mode.nightmare = [
    
  ];
  
  
  // Infinity Mode
  // contains exclusive infinity mode cards + all cards from prior modes (order is completely randomized)
  Mishy.mode.infinity = [].concat(Mishy.mode.easy, Mishy.mode.normal, Mishy.mode.hard, Mishy.mode.nightmare, [
    
  ]);
  
  
}(window, document));