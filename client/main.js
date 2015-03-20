'use strict';

$(document).ready();

$(function() {

  var row = '';
  var rows;
  var cols;

  //creating gameboard
  for (rows = 0; rows < 9; rows++) {
    row = $('<div class="row"></div>');
    row.append('<div class="col-md-2></div>"');
    for (cols = 0; cols < 8; cols++) {
      row.append($('<div id="' + rows + cols + '" class="col-md-2 gameSquare"></div>'));
    }
    $('#gameboard').append(row);
  }

  //specifying board pieces
  $('#03').addClass('nexus');
  $('#04').addClass('nexus');
  $('#83').addClass('nexus');
  $('#84').addClass('nexus');
  $('.nexus').text('Base');

  $('#41').addClass('river');
  $('#42').addClass('river');
  $('#45').addClass('river');
  $('#46').addClass('river');

  $('#21').addClass('tower');
  $('#26').addClass('tower');
  $('#61').addClass('tower');
  $('#66').addClass('tower');
  $('.tower').text('Tower');

  $('#30').addClass('bush');
  $('#31').addClass('bush');
  $('#32').addClass('bush');
  $('#33').addClass('bush');
  $('#34').addClass('bush');
  $('#35').addClass('bush');
  $('#36').addClass('bush');
  $('#37').addClass('bush');
  $('#50').addClass('bush');
  $('#51').addClass('bush');
  $('#52').addClass('bush');
  $('#53').addClass('bush');
  $('#54').addClass('bush');
  $('#55').addClass('bush');
  $('#56').addClass('bush');
  $('#57').addClass('bush');

  $('#40').addClass('snow');
  $('#43').addClass('snow');
  $('#44').addClass('snow');
  $('#47').addClass('snow');
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
    console.log('set1', set1Array);

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
    console.log('set2', set2Array);

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
    flagset.forEach(function(e) {
      var $flagDiv = $('<div id="' + e.name + '" class="' + e.classType + '">');
      var imgData = data.data[e.flagId].image.full;
      var getImg = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/item/' + imgData;
      $flagDiv.html('<img id="flagPiece' + count++ + '" class="gamePieces" src="' + getImg + '" title="' + [e.name] + '"/>');

      if (e.classType === 'Flag1') {
        $('#chiefSet1').append($flagDiv);
        set1Array.push($flagDiv);
      }

      if (e.classType === 'Flag2') {
        $('#chiefSet2').append($flagDiv);
        set2Array.push($flagDiv);
      }
    });
  });
});
