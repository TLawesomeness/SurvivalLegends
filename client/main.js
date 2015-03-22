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
  var set1combo1 = [$('#0'), $('#1'), $('#2'), $('#3'), $('#4'), $('#5'), $('#6'),
                $('#7'), $('#8'), $('#9'), $('#10'), $('#11'), $('#12'), $('#13'),
                $('#14'), $('#15'), $('#16'), $('#17'), $('#19'), $('#20'), $('#22'),
                $('#23')];
  // console.log(set1combo1.length);

  var set2combo1 = [$('#48'), $('#49'), $('#51'), $('#52'), $('#54'), $('#55'), $('#56'),
                $('#57'), $('#58'), $('#59'), $('#60'), $('#61'), $('#62'), $('#63'),
                $('#64'), $('#65'), $('#66'), $('#67'), $('#68'), $('#69'), $('#70'),
                $('#71')];

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

  $('#32').addClass('snow');
  $('#35').addClass('snow');
  $('#36').addClass('snow');
  $('#39').addClass('snow');
});

//Defining game piece stats
var charset1 = [
  {name: 'Tryndamere', classType: 'Chief1'},
  {name: 'Teemo', classType: 'Runner1'},
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
  console.log(data);

  //create set1 game pieces
  charset1.forEach(function(e) {
    var $charSet1Div = $('<div id="' + e.name + '" class="' + e.classType + '">');
    var imgData = data.data[e.name].image.full;
    var getImg = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + imgData;
    $charSet1Div.html('<img id="gamePiece' + count++ + '" class="gamePieces" src="' + getImg + '" title="' + [e.name] + '"/>');
    // $('#set1').append($charSet1Div);
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
    var $charSet2Div = $('<div id="' + e.name + '" class="' + e.classType + '">');
    var imgData = data.data[e.name].image.full;
    var getImg = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + imgData;
    $charSet2Div.html('<img id="gamePiece' + count++ + '" class="gamePieces" src="' + getImg + '" title="' + [e.name] + '"/>');
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
    var $flagDiv1 = $('<div id="Banner of Command" class="Flag1">');
    var $flagDiv2 = $('<div id="Seraph\'s Embrace" class="Flag2">');
    var imgData1 = data.data[num1].image.full;
    var imgData2 = data.data[num2].image.full;
    var getImg1 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/item/' + imgData1;
    var getImg2 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/item/' + imgData2;
    $flagDiv1.html('<img id="flagPiece1' + count++ + '" class="gamePieces" src="' + getImg1 + '" title="Banner of Command"/>');
    $flagDiv2.html('<img id="flagPiece2' + count++ + '" class="gamePieces" src="' + getImg2 + '" title="Seraph\'s Embrace"/>');

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

  var charsetCopy1 = [
    {name: 'Tryndamere', id: 'Tryndamere1', classType: 'ChiefCopy1'},
    {name: 'Teemo', id: 'Teemo1', classType: 'RunnerCopy1'},
    {name: 'Jax', id: 'Jax1', classType: 'FighterCopy1'},
    {name: 'MasterYi', id: 'MasterYi1', classType: 'FighterCopy1'},
    {name: 'LeeSin', id: 'LeeSin1', classType: 'FighterCopy1'},
    {name: 'Ahri', id: 'Ahri1', classType: 'MageCopy1'},
    {name: 'Karma', id: 'Karma1', classType: 'MageCopy1'},
    {name: 'Syndra', id: 'Syndra1', classType: 'MageCopy1'},
    {name: 'Vayne', id: 'Vayne1', classType: 'MarksmanCopy1'},
    {name: 'Quinn', id: 'Quinn1', classType: 'MarksmanCopy1'},
    {name: 'Lucian', id: 'Lucian1', classType: 'MarksmanCopy1'},
    {name: 'Akali', id: 'Akali1', classType: 'AssassinCopy1'},
    {name: 'Zed', id: 'Zed1', classType: 'AssassinCopy1'}
  ];

  charsetCopy1.forEach(function(e) {
    var $charSet1CopyDiv = $('<div id="' + e.id + '" class="' + e.classType + ' draggable ui-widget-content redTeam">');
    var imgData = data.data[e.name].image.full;
    var getImg = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + imgData;
    $charSet1CopyDiv.html('<img id="gamePieceCopy' + count++ + '" class="gamePieces" src="' + getImg + '" title="' + [e.name] + '"/>');
    set1BoardDisplay.push($charSet1CopyDiv);
    // console.log('set1', set1BoardDisplay);

    $charSet1CopyDiv.draggable({
      grid: [10, 10],
      containment: '#gameboard',
      stack: '.redTeam',
      cursor: 'pointer',
      revert: true});

  });

  var flagsetCopy = [
    {name: 'Banner of Command', flagId: '3060', classType: 'FlagCopyNum1'},
    {name: 'Seraph\'s Embrace', flagId: '3040', classType: 'FlagCopyNum2'}
  ];

  $.getJSON(itemUrl, function(data) {
    var num1 = 3060;
    var num2 = 3040;
    var $flagCopyDiv1 = $('<div id="Banner of Command1" class="FlagCopy1 draggable ui-widget-content">');
    var $flagCopyDiv2 = $('<div id="Seraph\'s Embrace2" class="FlagCopy2 draggable ui-widget-content">');
    var imgData1 = data.data[num1].image.full;
    var imgData2 = data.data[num2].image.full;
    var getImg1 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/item/' + imgData1;
    var getImg2 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/item/' + imgData2;
    $flagCopyDiv1.html('<img id="flagPieceCopy1' + count++ + '" class="gamePieces" src="' + getImg1 + '" title="Banner of Command"/>');
    $flagCopyDiv2.html('<img id="flagPieceCopy2' + count++ + '" class="gamePieces" src="' + getImg2 + '" title="Seraph\'s Embrace"/>');
    set1BoardDisplay.push($flagCopyDiv1);
    set2BoardDisplay.push($flagCopyDiv2);
    // console.log(set2BoardDisplay);

    //randomize red side game pieces
    set1BoardDisplay = _.shuffle(set1BoardDisplay);
    console.log(set1BoardDisplay);
    //randomize blue side game pieces
    set2BoardDisplay = _.shuffle(set2BoardDisplay);

    // $flagCopyDiv1.draggable({
    //   grid: [10, 10],
    //   containment: '#gameboard',
    //   cursor: 'pointer',
    //   stack: 'redTeam',
    //   revert: true});
    // $flagCopyDiv2.draggable({
    //   grid: [10, 10],
    //   containment: '#gameboard',
    //   stack: 'blueTeam',
    //   cursor: 'pointer',
    //   revert: true});

    //place game pieces onto gameboard
    for (var i = 0; i < set1BoardDisplay.length; i++) {
      $('#' + i).append(set1BoardDisplay[i]);
    }

    for (var i = 0, j = 71; i < set2BoardDisplay.length; j--, i++) {
      $('#' + j).append(set2BoardDisplay[i]);
      // console.log(set2BoardDisplay[i]);
    }
  });

  var charsetCopy2 = [
    {name: 'JarvanIV', id: 'JarvanIV2', classType: 'ChiefCopy2'},
    {name: 'Singed', id: 'Singed2', classType: 'RunnerCopy2'},
    {name: 'Garen', id: 'Garen2', classType: 'FighterCopy2'},
    {name: 'XinZhao', id: 'XinZhao2', classType: 'FighterCopy2'},
    {name: 'Fiora', id: 'Fiora2', classType: 'FighterCopy2'},
    {name: 'Lux', id: 'Lux2', classType: 'MageCopy2'},
    {name: 'Sona', id: 'Sona2', classType: 'MageCopy2'},
    {name: 'Galio', id: 'Galio2', classType: 'MageCopy2'},
    {name: 'Caitlyn', id: 'Caitlyn2', classType: 'MarksmanCopy2'},
    {name: 'Ezreal', id: 'Ezreal2', classType: 'MarksmanCopy2'},
    {name: 'Jayce', id: 'Jayce2', classType: 'MarksmanCopy2'},
    {name: 'Talon', id: 'Talon2', classType: 'AssassinCopy2'},
    {name: 'Katarina', id: 'Katarina2', classType: 'AssassinCopy2'}
  ];

  charsetCopy2.forEach(function(e) {
    var $charSet2CopyDiv = $('<div id="' + e.id + '" class="' + e.classType + ' draggable ui-widget-content blueTeam">');
    var imgData = data.data[e.name].image.full;
    var getImg = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + imgData;
    $charSet2CopyDiv.html('<img id="gamePieceCopy' + count++ + '" class="gamePieces" src="' + getImg + '" title="' + [e.name] + '"/>');
    set2BoardDisplay.push($charSet2CopyDiv);
    // console.log(set2BoardDisplay);

    $charSet2CopyDiv.draggable({
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
      var gamePiece = $(this);
      if (gamePiece) {
        ui.draggable.addClass('acceptPiece');
        // ui.draggable.draggable('disable');
        ui.draggable.position( { of: $(this), my: 'center', at: 'center' } );
        ui.draggable.draggable( 'option', 'revert', false );
      }
    }

  //   $('#gameboard').find('div').droppable({
  //     accept: '.blueTeam',
  //     hoverClass: 'hovered',
  //     drop: acceptBlueGamePieces
  //   });
  //
  // function acceptBlueGamePieces(event, ui) {
  //   var gamePiece = $(this);
  //   if (gamePiece) {
  //     ui.draggable.addClass('acceptPiece');
  //     // ui.draggable.draggable('disable');
  //     ui.draggable.position( { of: $(this), my: 'center', at: 'center' } );
  //     ui.draggable.draggable( 'option', 'revert', false );
  //   }
  // }

});
