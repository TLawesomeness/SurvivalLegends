'use strict';

$(document).ready();

$(function() {

  var row = '';
  var rows;
  var cols;

  for (rows = 0; rows < 9; rows++) {
    row = $('<div class="row"></div>');
    row.append('<div class="col-md-2></div>"');
    for (cols = 0; cols < 8; cols++) {
      row.append($('<div id="' + rows + cols + '" class="col-md-2 gameSquare"></div>'));
    }
    $('#gameboard').append(row);
  }

  $('#03').addClass('nexus');
  $('#04').addClass('nexus');
  $('#83').addClass('nexus');
  $('#84').addClass('nexus');
  $('.nexus').text('nexus');

  $('#41').addClass('river');
  $('#42').addClass('river');
  $('#45').addClass('river');
  $('#46').addClass('river');

  $('#21').addClass('tower');
  $('#26').addClass('tower');
  $('#61').addClass('tower');
  $('#66').addClass('tower');
  $('.tower').text('tower');

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

  var url = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/data/en_US/champion.json';

  $.getJSON(url, function(data) {
    console.log(data);
    var count = 0;
    charset1.forEach(function(e) {
      var $charSet1Div = $('<div id="' + e.name + '" class="'+ e.classType +'">');
      var imgData = data.data[e.name].image.full;
      var getImg = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + imgData;
      $charSet1Div.html('<img id="gamePiece' + count++ + '" class="gamePieces" src="' + getImg + '" title="' + [e.name] + '"/>');
      // $('#set1').append($charSet1Div);

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

    charset2.forEach(function(e) {
      var $charSet2Div = $('<div id="' + e.name + '" class="'+ e.classType +'">');
      var imgData = data.data[e.name].image.full;
      var getImg = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + imgData;
      $charSet2Div.html('<img id="gamePiece' + count++ + '" class="gamePieces" src="' + getImg + '" title="' + [e.name] + '"/>');
      // $('#set2').append($charSet2Div);

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

    // var runnerDiv1 = $('<div id="runner1">');
    // var runnerDiv2 = $('<div id="runner2">');
    // var runnerImage1 = data.data.Teemo.image.full;
    // var runnerImage2 = data.data.Singed.image.full;
    // var runnerImg1 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + runnerImage1;
    // var runnerImg2 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + runnerImage2;
    // runnerDiv1.html('<img class="runner" src="' + runnerImg1 + '" title="Teemo"/>');
    // runnerDiv2.html('<img class="runner" src="' + runnerImg2 + '" title="Singed"/>');
    // $('#runnerChars').append('Runner', runnerDiv1, runnerDiv2);
    //
    // var chiefDiv1 = $('<div id="chief1">');
    // var chiefDiv2 = $('<div id="chief2">');
    // var chiefImage1 = data.data.Tryndamere.image.full;
    // var chiefImage2 = data.data.JarvanIV.image.full;
    // var chiefImg1 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + chiefImage1;
    // var chiefImg2 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + chiefImage2;
    // chiefDiv1.html('<img class="chief" src="' + chiefImg1 + '" title="Tryndamere"/>');
    // chiefDiv2.html('<img class="chief" src="' + chiefImg2 + '" title="JarvanIV"/>');
    // $('#chiefChars').append('Chief', chiefDiv1, chiefDiv2);
    //
    // var asnDiv1 = $('<div id="asn1">');
    // var asnDiv2 = $('<div id="asn2">');
    // var asnDiv3 = $('<div id="asn3">');
    // var asnDiv4 = $('<div id="asn4">');
    // var asnImage1 = data.data.Akali.image.full;
    // var asnImage2 = data.data.Zed.image.full;
    // var asnImage3 = data.data.Talon.image.full;
    // var asnImage4 = data.data.Katarina.image.full;
    // var asnImg1 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + asnImage1;
    // var asnImg2 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + asnImage2;
    // var asnImg3 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + asnImage3;
    // var asnImg4 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + asnImage4;
    // asnDiv1.html('<img class="assassin" src="' + asnImg1 + '" title="Akali"/>');
    // asnDiv2.html('<img class="assassin" src="' + asnImg2 + '" title="Zed"/>');
    // asnDiv3.html('<img class="assassin" src="' + asnImg3 + '" title="Talon"/>');
    // asnDiv4.html('<img class="assassin" src="' + asnImg4 + '" title="Katarina"/>');
    // $('#asnChars').append('Assassin', asnDiv1, asnDiv2, asnDiv3, asnDiv4);
    //
    // var fghtrDiv1 = $('<div id="fghtr1">');
    // var fghtrDiv2 = $('<div id="fghtr2">');
    // var fghtrDiv3 = $('<div id="fghtr3">');
    // var fghtrDiv4 = $('<div id="fghtr4">');
    // var fghtrDiv5 = $('<div id="fghtr5">');
    // var fghtrDiv6 = $('<div id="fghtr6">');
    // var fghtrImage1 = data.data.Jax.image.full;
    // var fghtrImage2 = data.data.MasterYi.image.full;
    // var fghtrImage3 = data.data.LeeSin.image.full;
    // var fghtrImage4 = data.data.Garen.image.full;
    // var fghtrImage5 = data.data.XinZhao.image.full;
    // var fghtrImage6 = data.data.Fiora.image.full;
    // var fghtrImg1 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + fghtrImage1;
    // var fghtrImg2 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + fghtrImage2;
    // var fghtrImg3 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + fghtrImage3;
    // var fghtrImg4 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + fghtrImage4;
    // var fghtrImg5 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + fghtrImage5;
    // var fghtrImg6 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + fghtrImage6;
    // fghtrDiv1.html('<img class="fighter" src="' + fghtrImg1 + '" title="Jax"/>');
    // fghtrDiv2.html('<img class="fighter" src="' + fghtrImg2 + '" title="Master Yi"/>');
    // fghtrDiv3.html('<img class="fighter" src="' + fghtrImg3 + '" title="Lee Sin"/>');
    // fghtrDiv4.html('<img class="fighter" src="' + fghtrImg4 + '" title="Garen"/>');
    // fghtrDiv5.html('<img class="fighter" src="' + fghtrImg5 + '" title="Xin Zhao"/>');
    // fghtrDiv6.html('<img class="fighter" src="' + fghtrImg6 + '" title="Fiora"/>');
    // $('#fghtrChars').append('Fighter', fghtrDiv1, fghtrDiv2, fghtrDiv3, fghtrDiv4, fghtrDiv5, fghtrDiv6);
    //
    // var mageDiv1 = $('<div id="mage1">');
    // var mageDiv2 = $('<div id="mage2">');
    // var mageDiv3 = $('<div id="mage3">');
    // var mageDiv4 = $('<div id="mage4">');
    // var mageDiv5 = $('<div id="mage5">');
    // var mageDiv6 = $('<div id="mage6">');
    // var mageImage1 = data.data.Ahri.image.full;
    // var mageImage2 = data.data.Karma.image.full;
    // var mageImage3 = data.data.Syndra.image.full;
    // var mageImage4 = data.data.Lux.image.full;
    // var mageImage5 = data.data.Sona.image.full;
    // var mageImage6 = data.data.Galio.image.full;
    // var mageImg1 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + mageImage1;
    // var mageImg2 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + mageImage2;
    // var mageImg3 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + mageImage3;
    // var mageImg4 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + mageImage4;
    // var mageImg5 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + mageImage5;
    // var mageImg6 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + mageImage6;
    // mageDiv1.html('<img class="mage" src="' + mageImg1 + '" title="Ahri"/>');
    // mageDiv2.html('<img class="mage" src="' + mageImg2 + '" title="Karma"/>');
    // mageDiv3.html('<img class="mage" src="' + mageImg3 + '" title="Syndra"/>');
    // mageDiv4.html('<img class="mage" src="' + mageImg4 + '" title="Lux"/>');
    // mageDiv5.html('<img class="mage" src="' + mageImg5 + '" title="Sona"/>');
    // mageDiv6.html('<img class="mage" src="' + mageImg6 + '" title="Galio"/>');
    // $('#mageChars').append('Mage', mageDiv1, mageDiv2, mageDiv3, mageDiv4, mageDiv5, mageDiv6);
    //
    // var marksmanDiv1 = $('<div id="marksman1">');
    // var marksmanDiv2 = $('<div id="marksman2">');
    // var marksmanDiv3 = $('<div id="marksman3">');
    // var marksmanDiv4 = $('<div id="marksman4">');
    // var marksmanDiv5 = $('<div id="marksman5">');
    // var marksmanDiv6 = $('<div id="marksman6">');
    // var marksmanImage1 = data.data.Vayne.image.full;
    // var marksmanImage2 = data.data.Quinn.image.full;
    // var marksmanImage3 = data.data.Lucian.image.full;
    // var marksmanImage4 = data.data.Caitlyn.image.full;
    // var marksmanImage5 = data.data.Ezreal.image.full;
    // var marksmanImage6 = data.data.Jayce.image.full;
    // var marksmanImg1 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + marksmanImage1;
    // var marksmanImg2 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + marksmanImage2;
    // var marksmanImg3 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + marksmanImage3;
    // var marksmanImg4 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + marksmanImage4;
    // var marksmanImg5 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + marksmanImage5;
    // var marksmanImg6 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + marksmanImage6;
    // marksmanDiv1.html('<img class="marksman" src="' + marksmanImg1 + '" title="Vayne"/>');
    // marksmanDiv2.html('<img class="marksman" src="' + marksmanImg2 + '" title="Quinn"/>');
    // marksmanDiv3.html('<img class="marksman" src="' + marksmanImg3 + '" title="Lucian"/>');
    // marksmanDiv4.html('<img class="marksman" src="' + marksmanImg4 + '" title="Caitlyn"/>');
    // marksmanDiv5.html('<img class="marksman" src="' + marksmanImg5 + '" title="Ezreal"/>');
    // marksmanDiv6.html('<img class="marksman" src="' + marksmanImg6 + '" title="Jayce"/>');
    // $('#marksmanChars').append('Marksman', marksmanDiv1, marksmanDiv2, marksmanDiv3, marksmanDiv4, marksmanDiv5, marksmanDiv6);

  });
