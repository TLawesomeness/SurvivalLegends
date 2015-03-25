/* global _ */
'use strict';

$(document).ready();

$(function() {

  var row = '';
  var rows;
  var cols;
  var rowCount = 0;
  var countId = 0;
  //creating gameboard
  for (rows = 0; rows < 9; rows++) {
    row = $('<div id="gameBoardRow' + rowCount++ + '" class="row"></div>');
    row.append('<div class="col-md-2></div>"');
    for (cols = 0; cols < 8; cols++) {
      row.append($('<div id="' + countId++ + '" class="col-md-2 gameSquare"></div>'));
    }
    $('#gameboard').append(row);
  }

  //create preset game pieces load display
  // var set1combo1 = [$('#0'), $('#1'), $('#2'), $('#3'), $('#4'), $('#5'), $('#6'),
  //               $('#7'), $('#8'), $('#9'), $('#10'), $('#11'), $('#12'), $('#13'),
  //               $('#14'), $('#15'), $('#16'), $('#17'), $('#19'), $('#20'), $('#22'),
  //               $('#23')];

  // var set2combo1 = [$('#48'), $('#49'), $('#51'), $('#52'), $('#54'), $('#55'), $('#56'),
  //               $('#57'), $('#58'), $('#59'), $('#60'), $('#61'), $('#62'), $('#63'),
  //               $('#64'), $('#65'), $('#66'), $('#67'), $('#68'), $('#69'), $('#70'),
  //               $('#71')];

  //specifying board pieces

  // $('#3').addClass('nexus');
  // $('#4').addClass('nexus');
  // $('#67').addClass('nexus');
  // $('#68').addClass('nexus');
  // $('.nexus').html('Base');

  $('#33').addClass('river');
  $('#34').addClass('river');
  $('#37').addClass('river');
  $('#38').addClass('river');
  $('.river').html('River');

  // $('#11').addClass('tower');
  // $('#12').addClass('tower');
  $('#16').addClass('tower');
  $('#23').addClass('tower');
  $('#48').addClass('tower');
  $('#55').addClass('tower');
  $('#18').addClass('tower');
  $('#21').addClass('tower');
  $('#50').addClass('tower');
  $('#53').addClass('tower');
  $('.tower').html('Tower');

  $('#24').addClass('bush');
  $('#25').addClass('bush');
  $('#26').addClass('bush');
  $('#27').addClass('bush');
  $('#28').addClass('bush');
  $('#29').addClass('bush');
  $('#30').addClass('bush');
  $('#31').addClass('bush');
  $('#40').addClass('bush');
  $('#41').addClass('bush');
  $('#42').addClass('bush');
  $('#43').addClass('bush');
  $('#44').addClass('bush');
  $('#45').addClass('bush');
  $('#46').addClass('bush');
  $('#47').addClass('bush');
  $('.bush').text('Bush');

  $('#32').addClass('snow');
  $('#35').addClass('snow');
  $('#36').addClass('snow');
  $('#39').addClass('snow');
  $('.snow').html('Tundra');
});



//Defining game piece stats
var charset1 = [
  {name: 'Tryndamere', classType: 'Chief1'},
  {name: 'Teemo', classType: 'Runner1'},
  {name: 'DrMundo', classType: 'Runner1'},
  {name: 'Blitzcrank', classType: 'Runner1'},
  {name: 'Jax', classType: 'Fighter1'},
  {name: 'MasterYi', classType: 'Fighter1'},
  {name: 'LeeSin', classType: 'Fighter1'},
  {name: 'Ahri', classType: 'Mage1'},
  {name: 'Karma', classType: 'Mage1'},
  {name: 'Syndra', classType: 'Mage1'},
  {name: 'Vayne', classType: 'Marksman1'},
  {name: 'Quinn', classType: 'Marksman1'},
  {name: 'Lucian', classType: 'Marksman1'},
  {name: 'Akali', classType: 'Assassin1'},
  {name: 'Zed', classType: 'Assassin1'}
];

var charset2 = [
  {name: 'JarvanIV', classType: 'Chief2'},
  {name: 'Singed', classType: 'Runner2'},
  {name: 'Skarner', classType: 'Runner2'},
  {name: 'Hecarim', classType: 'Runner2'},
  {name: 'Garen', classType: 'Fighter2'},
  {name: 'XinZhao', classType: 'Fighter2'},
  {name: 'Fiora', classType: 'Fighter2'},
  {name: 'Lux', classType: 'Mage2'},
  {name: 'Sona', classType: 'Mage2'},
  {name: 'Galio', classType: 'Mage2'},
  {name: 'Caitlyn', classType: 'Marksman2'},
  {name: 'Ezreal', classType: 'Marksman2'},
  {name: 'Jayce', classType: 'Marksman2'},
  {name: 'Talon', classType: 'Assassin2'},
  {name: 'Katarina', classType: 'Assassin2'}
];

var flagset = [
  {name: 'Banner of Command', flagId: '3060', classType: 'Flag1'},
  {name: 'Seraph\'s Embrace', flagId: '3040', classType: 'Flag2'}
];

var count = 0;

//API url
var itemUrl = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/data/en_US/item.json';
var url = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/data/en_US/champion.json';

//where set 1 and set 2 game pieces are stored
var set1Array = [];
var set2Array = [];

//get data from LoL API
$.getJSON(url, function(data) {
  // console.log(data);

  //create set1 game pieces
  charset1.forEach(function(e) {
    var $charSet1Div = $('<div class="' + e.classType + '">');
    var imgData = data.data[e.name].image.full;
    var getImg = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + imgData;
    $charSet1Div.html('<img id="gamePiece' + count++ + '" class="gamePiecesImg" src="' + getImg + '" title="' + [e.name] + '"/>');

    set1Array.push($charSet1Div);

    if (e.classType === 'Chief1') {
      $('#chiefSet1').append($charSet1Div);
    }

    if (e.classType === 'Runner1') {
      $('#runnerSet1').append($charSet1Div);
    }

    if (e.classType === 'Fighter1') {
      $('#fighterSet1').append($charSet1Div);
    }

    if (e.classType === 'Marksman1') {
      $('#marksmanSet1').append($charSet1Div);
    }

    if (e.classType === 'Mage1') {
      $('#mageSet1').append($charSet1Div);
    }

    if (e.classType === 'Assassin1') {
      $('#assassinSet1').append($charSet1Div);
    }
  });

  //create set 2 game pieces
  charset2.forEach(function(e) {
    var $charSet2Div = $('<div class="' + e.classType + '">');
    var imgData = data.data[e.name].image.full;
    var getImg = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + imgData;
    $charSet2Div.html('<img id="gamePiece' + count++ + '" class="gamePiecesImg" src="' + getImg + '" title="' + [e.name] + '"/>');
    // $('#set2').append($charSet2Div);
    set2Array.push($charSet2Div);
    // set2BoardDisplay.push($charSet2Div);

    // console.log('set2', set2BoardDisplay);

    if (e.classType === 'Chief2') {
      $('#chiefSet2').append($charSet2Div);
    }

    if (e.classType === 'Runner2') {
      $('#runnerSet2').append($charSet2Div);
    }

    if (e.classType === 'Fighter2') {
      $('#fighterSet2').append($charSet2Div);
    }

    if (e.classType === 'Marksman2') {
      $('#marksmanSet2').append($charSet2Div);
    }

    if (e.classType === 'Mage2') {
      $('#mageSet2').append($charSet2Div);
    }

    if (e.classType === 'Assassin2') {
      $('#assassinSet2').append($charSet2Div);
    }
  });

  //create flags for set1 and set2
  $.getJSON(itemUrl, function(data) {
    var num1 = 3060;
    var num2 = 3040;
    var $flagDiv1 = $('<div class="Flag1">');
    var $flagDiv2 = $('<div class="Flag2">');
    var imgData1 = data.data[num1].image.full;
    var imgData2 = data.data[num2].image.full;
    var getImg1 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/item/' + imgData1;
    var getImg2 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/item/' + imgData2;
    $flagDiv1.html('<img id="flagPiece1' + count++ + '" class="gamePiecesImg" src="' + getImg1 + '" title="Banner of Command"/>');
    $flagDiv2.html('<img id="flagPiece2' + count++ + '" class="gamePiecesImg" src="' + getImg2 + '" title="Seraph\'s Embrace"/>');

    if (flagset[0].classType === 'Flag1') {
      $('#chiefSet1').append('Flag', $flagDiv1);
    }

    if (flagset[1].classType === 'Flag2') {
      $('#chiefSet2').append('Flag', $flagDiv2);
    }

    set1Array.push($flagDiv1);
    set2Array.push($flagDiv2);
  });






  //copy of set 1 and 2 for gameboard
  var set1BoardDisplay = [];
  var set2BoardDisplay = [];

  var player1Pieces =
  [
    {name: 'Tryndamere', id: 'Tryndamere', classType: 'ChiefCopy1',
        canDestroy: ['RunnerCopy2','FighterCopy2', 'MageCopy2', 'MarksmanCopy2', 'ChiefCopy2']
    },
    {name: 'Teemo', id: 'Teemo', classType: 'RunnerCopy1',
        canDestroy: ['RunnerCopy2', 'FlagCopy2']
    },
    {name: 'DrMundo', id: 'DrMundo', classType: 'RunnerCopy1',
        canDestroy: ['RunnerCopy2', 'FlagCopy2']
    },
    {name: 'Blitzcrank', id: 'Blitzcrank', classType: 'RunnerCopy1',
        canDestroy: ['RunnerCopy2', 'FlagCopy2']
    },
    {name: 'Jax', id: 'Jax', classType: 'FighterCopy1',
        canDestroy: ['MageCopy2', 'MarksmanCopy2', 'RunnerCopy2', 'FighterCopy2']
    },
    {name: 'MasterYi', id: 'MasterYi', classType: 'FighterCopy1',
        canDestroy: ['MageCopy2', 'MarksmanCopy2', 'RunnerCopy2', 'FighterCopy2']
    },
    {name: 'LeeSin', id: 'LeeSin', classType: 'FighterCopy1',
        canDestroy: ['MageCopy2', 'MarksmanCopy2', 'RunnerCopy2', 'FighterCopy2']
    },
    {name: 'Ahri', id: 'Ahri', classType: 'MageCopy1',
        canDestroy: ['AssassinCopy2', 'MarksmanCopy2', 'RunnerCopy2', 'MageCopy2']
    },
    {name: 'Karma', id: 'Karma', classType: 'MageCopy1',
        canDestroy: ['AssassinCopy2', 'MarksmanCopy2', 'RunnerCopy2', 'MageCopy2']
    },
    {name: 'Syndra', id: 'Syndra', classType: 'MageCopy1',
        canDestroy: ['AssassinCopy2', 'MarksmanCopy2', 'RunnerCopy2', 'MageCopy2']
    },
    {name: 'Vayne', id: 'Vayne', classType: 'MarksmanCopy1',
        canDestroy: ['AssassinCopy2', 'FighterCopy2', 'RunnerCopy2', 'MarksmanCopy2']
    },
    {name: 'Quinn', id: 'Quinn', classType: 'MarksmanCopy1',
        canDestroy: ['AssassinCopy2', 'FighterCopy2', 'RunnerCopy2', 'MarksmanCopy2']
    },
    {name: 'Lucian', id: 'Lucian', classType: 'MarksmanCopy1',
        canDestroy: ['AssassinCopy2', 'FighterCopy2', 'RunnerCopy2', 'MarksmanCopy2']
    },
    {name: 'Akali', id: 'Akali', classType: 'AssassinCopy1',
        canDestroy: ['AssassinCopy2', 'FighterCopy2', 'RunnerCopy2', 'MageCopy2', 'ChiefCopy2']
    },
    {name: 'Zed', id: 'Zed', classType: 'AssassinCopy1',
        canDestroy: ['AssassinCopy2', 'FighterCopy2', 'RunnerCopy2', 'MageCopy2', 'ChiefCopy2']
    }
  ];

  player1Pieces.forEach(function(e) {
    var p1GamePieceDiv = $('<div class="draggable ui-widget-content redTeam">');

    var $flipper = $('<div>');
    $flipper.addClass('flipper');

    var $frontCover = $('<div>');
    $frontCover.addClass('front');
    $frontCover.html('<img class="coverImg" src="http://fc08.deviantart.net/fs70/f/2012/164/3/3/league_of_legends_dock_icon_by_kaldrax-d53bbj5.png">');

    var imgData = data.data[e.name].image.full;
    var getImg = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + imgData;
    // p1GamePieceDiv.html('<img id="gamePieceCopy' + count++ + '" class="gamePieces" src="' + getImg + '" title="' + [e.name] + '"/>');

    var $back = $('<div id="' + e.id + '" data-name="' + e.classType + '">');
    $back.addClass('back');
    $back.html('<img id="gamePieceCopy' + count++ + '" class="gamePiecesImg" src="' + getImg + '" title="' + [e.name] + '"/>');

    $flipper.append($frontCover, $back);
    p1GamePieceDiv.append($flipper);

    set1BoardDisplay.push(p1GamePieceDiv);
    // console.log('set1', set1BoardDisplay);

    // create flip functionality
    p1GamePieceDiv.click(function() {
      $(this).find('.flipper').addClass('flipped');
      // console.log('clicked');
    });

    p1GamePieceDiv.draggable({
      grid: [10, 10],
      containment: '#gameboard',
      stack: '.redTeam',
      cursor: 'pointer',
      revert: true
      });
  });

  var flagSetCopy = [
    {name1: 'Banner of Command', flagId1: 3060, canDestroy: ''},
    {name2: 'Seraph\'s Embrace', flagId2: 3040, canDestroy: ''}
  ];

  $.getJSON(itemUrl, function(data) {
    var $flagCopyDiv1 = $('<div class="FlagCopy1 draggable ui-widget-content">');
    var $flagCopyDiv2 = $('<div class="FlagCopy2 draggable ui-widget-content">');

    var $flipper1 = $('<div>');
    $flipper1.addClass('flipper');
    var $flipper2 = $('<div>');
    $flipper2.addClass('flipper');

    var $frontCover1 = $('<div>');
    $frontCover1.addClass('front');
    $frontCover1.html('<img class="coverImg" src="http://fc08.deviantart.net/fs70/f/2012/164/3/3/league_of_legends_dock_icon_by_kaldrax-d53bbj5.png">');
    var $frontCover2 = $('<div>');
    $frontCover2.addClass('front');
    $frontCover2.html('<img class="coverImg" src="http://fc08.deviantart.net/fs70/f/2012/164/3/3/league_of_legends_dock_icon_by_kaldrax-d53bbj5.png">');

    var imgData1 = data.data[flagSetCopy[0].flagId1].image.full;
    var imgData2 = data.data[flagSetCopy[1].flagId2].image.full;
    var getImg1 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/item/' + imgData1;
    var getImg2 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/item/' + imgData2;
    // $flagCopyDiv1.html('<img id="flagPieceCopy1' + count++ + '" class="gamePiecesImg" src="' + getImg1 + '" title="Banner of Command"/>');
    // $flagCopyDiv2.html('<img id="flagPieceCopy2' + count++ + '" class="gamePiecesImg" src="' + getImg2 + '" title="Seraph\'s Embrace"/>');

    var $back1 = $('<div id="' + flagSetCopy[0].name1 + '">');
    $back1.addClass('back');
    $back1.html('<img id="gamePieceCopy' + count++ + '" class="gamePiecesImg" src="' + getImg1 + '" title="Banner of Command"/>');
    $flipper1.append($frontCover1, $back1);
    $flagCopyDiv1.append($flipper1);

    var $back2 = $('<div id="' + flagSetCopy[1].name2 + '">');
    $back2.addClass('back');
    $back2.html('<img id="gamePieceCopy' + count++ + '" class="gamePiecesImg" src="' + getImg2 + '" title="Seraph\'s Embrace"/>');
    $flipper2.append($frontCover2, $back2);
    $flagCopyDiv2.append($flipper2);

    set1BoardDisplay.push($flagCopyDiv1);
    set2BoardDisplay.push($flagCopyDiv2);
    // console.log(set2BoardDisplay);

    $flagCopyDiv1.click(function() {
      $(this).find('.flipper').addClass('flipped');
    });

    $flagCopyDiv2.click(function() {
      $(this).find('.flipper').addClass('flipped');
    });
    //randomize game pieces
    set1BoardDisplay = _.shuffle(set1BoardDisplay);
    set2BoardDisplay = _.shuffle(set2BoardDisplay);


    // var row1 = $('#gameBoardRow0').find('.gameSquare');
    // var row2 = $('#gameBoardRow1').find('.gameSquare');
    // var row3 = $('#gameBoardRow2').find('.gameSquare');
    // var topRows = [row1, row2, row3];
    // console.log(topRows);

    //place game pieces onto gameboard
    for (var i = 0; i < set1BoardDisplay.length; i++) {
      $('#' + i).append(set1BoardDisplay[i]);
    }

    for (var i = 0, j = 71; i < set2BoardDisplay.length; j--, i++) {
      $('#' + j).append(set2BoardDisplay[i]);
      // console.log(set2BoardDisplay[i]);
    }
  });

  var player2Pieces = [
    {name: 'JarvanIV', id: 'JarvanIV', classType: 'ChiefCopy2',
        canDestroy: ['RunnerCopy1','FighterCopy1', 'MageCopy1', 'MarksmanCopy1', 'ChiefCopy1']
    },
    {name: 'Singed', id: 'Singed', classType: 'RunnerCopy2',
        canDestroy: ['RunnerCopy1', 'FlagCopy1']
    },
    {name: 'Skarner', id: 'Skarner', classType: 'RunnerCopy2',
        canDestroy: ['RunnerCopy1', 'FlagCopy1']
    },
    {name: 'Hecarim', id: 'Hecarim', classType: 'RunnerCopy2',
        canDestroy: ['RunnerCopy1', 'FlagCopy1']
    },
    {name: 'Garen', id: 'Garen', classType: 'FighterCopy2',
        canDestroy: ['MageCopy1', 'MarksmanCopy1', 'RunnerCopy1', 'FighterCopy1']
    },
    {name: 'XinZhao', id: 'XinZhao', classType: 'FighterCopy2',
        canDestroy: ['MageCopy1', 'MarksmanCopy1', 'RunnerCopy1', 'FighterCopy1']
    },
    {name: 'Fiora', id: 'Fiora', classType: 'FighterCopy2',
        canDestroy: ['MageCopy1', 'MarksmanCopy1', 'RunnerCopy1', 'FighterCopy1']
    },
    {name: 'Lux', id: 'Lux', classType: 'MageCopy2',
        canDestroy: ['AssassinCopy1', 'MarksmanCopy1', 'RunnerCopy1', 'MageCopy1']
    },
    {name: 'Sona', id: 'Sona', classType: 'MageCopy2',
        canDestroy: ['AssassinCopy1', 'MarksmanCopy1', 'RunnerCopy1', 'MageCopy1']
    },
    {name: 'Galio', id: 'Galio', classType: 'MageCopy2',
        canDestroy: ['AssassinCopy1', 'MarksmanCopy1', 'RunnerCopy1', 'MageCopy1']
    },
    {name: 'Caitlyn', id: 'Caitlyn', classType: 'MarksmanCopy2',
        canDestroy: ['AssassinCopy1', 'FighterCopy1', 'RunnerCopy1', 'MarksmanCopy1']
    },
    {name: 'Ezreal', id: 'Ezreal', classType: 'MarksmanCopy2',
        canDestroy: ['AssassinCopy1', 'FighterCopy1', 'RunnerCopy1', 'MarksmanCopy1']
    },
    {name: 'Jayce', id: 'Jayce', classType: 'MarksmanCopy2',
        canDestroy: ['AssassinCopy1', 'FighterCopy1', 'RunnerCopy1', 'MarksmanCopy1']
    },
    {name: 'Talon', id: 'Talon', classType: 'AssassinCopy2',
        canDestroy: ['AssassinCopy1', 'FighterCopy1', 'RunnerCopy1', 'MageCopy1', 'ChiefCopy1']
    },
    {name: 'Katarina', id: 'Katarina', classType: 'AssassinCopy2',
        canDestroy: ['AssassinCopy1', 'FighterCopy1', 'RunnerCopy1', 'MageCopy1', 'ChiefCopy1']
    }
  ];

  player2Pieces.forEach(function(e) {
    var p2GamePieceDiv = $('<div class="draggable ui-widget-content blueTeam">');

    var $flipper = $('<div>');
    $flipper.addClass('flipper');

    var $frontCover = $('<div>');
    $frontCover.addClass('front');
    $frontCover.html('<img class="coverImg" src="http://fc08.deviantart.net/fs70/f/2012/164/3/3/league_of_legends_dock_icon_by_kaldrax-d53bbj5.png">');

    var imgData = data.data[e.name].image.full;
    var getImg = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + imgData;
    // p2GamePieceDiv.html('<img id="gamePieceCopy' + count++ + '" class="gamePiecesImg" src="' + getImg + '" title="' + [e.name] + '"/>');

    var $back = $('<div id="' + e.id + '" data-name="' + e.classType + '">');
    $back.addClass('back');
    $back.html('<img id="gamePieceCopy' + count++ + '" class="gamePiecesImg" src="' + getImg + '" title="' + [e.name] + '"/>');

    $flipper.append($frontCover, $back);
    p2GamePieceDiv.append($flipper);

    set2BoardDisplay.push(p2GamePieceDiv);
    // console.log(set2BoardDisplay);

    // create flip functionality
    p2GamePieceDiv.click(function() {
      $(this).find('.flipper').addClass('flipped');
      // console.log('clicked');
    });

    p2GamePieceDiv.draggable({
      grid: [10, 10],
      containment: '#gameboard',
      stack: 'blueTeam',
      cursor: 'pointer',
      revert: true});
  });

  //create animation for drag and drop action
  $('#gameboard').find('div').droppable({
    accept: '.draggable',
    hoverClass: 'hovered',
    drop: acceptGamePieces
  });

  function acceptGamePieces(event, ui) {
    // debugger;
    var dataName = ui.helper.find('[data-name]').data('name');
    console.log(dataName);

    if (dataName) {

      ui.draggable.addClass('acceptedPiece');
      // ui.draggable.draggable('disable');
      ui.draggable.position({of: $(this), my: 'center', at: 'center'});
      ui.draggable.draggable('option', 'revert', false);
      // alert('x');
    }
  }
});
