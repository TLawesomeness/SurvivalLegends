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


  var charsHolder = [];
  var charNames = ['Tryndamere', 'JarvanIV', 'Jax', 'MasterYi', 'LeeSin', 'Garen', 'XinZhao', 'Fiora',
                    'Ahri', 'Karma', 'Syndra', 'Lux', 'Sona', 'Galio', 'Vayne', 'Quinn', 'Lucian',
                    'Caitlyn', 'Ezreal', 'Jayce', 'Akali', 'Zed', 'Talon', 'Katarina', 'Teemo', 'Singed'];

  var url = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/data/en_US/champion.json';

  $.getJSON(url, function(data) {
    console.log(data);

    var chiefDiv1 = $('<div>');
    var chiefDiv2 = $('<div>');
    var chiefImage1 = data.data.Tryndamere.image.full;
    var chiefImage2 = data.data.JarvanIV.image.full;
    var chiefImg1 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + chiefImage1;
    var chiefImg2 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + chiefImage2;
    chiefDiv1.html('<img id="chief1" class="chief" src="' + chiefImg1 + '" title="Tryndamere"/>');
    chiefDiv2.html('<img id="chief2" class="chief" src="' + chiefImg2 + '" title="JarvanIV"/>');
    $('#chiefChars').append('Chief', chiefDiv1, chiefDiv2);

    var asnDiv1 = $('<div>');
    var asnDiv2 = $('<div>');
    var asnDiv3 = $('<div>');
    var asnDiv4 = $('<div>');
    var asnImage1 = data.data.Akali.image.full;
    var asnImage2 = data.data.Zed.image.full;
    var asnImage3 = data.data.Talon.image.full;
    var asnImage4 = data.data.Katarina.image.full;
    var asnImg1 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + asnImage1;
    var asnImg2 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + asnImage2;
    var asnImg3 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + asnImage3;
    var asnImg4 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + asnImage4;
    asnDiv1.html('<img id="asn1" class="assassin" src="' + asnImg1 + '" title="Akali"/>');
    asnDiv2.html('<img id="asn2" class="assassin" src="' + asnImg2 + '" title="Zed"/>');
    asnDiv3.html('<img id="asn3" class="assassin" src="' + asnImg3 + '" title="Talon"/>');
    asnDiv4.html('<img id="asn4" class="assassin" src="' + asnImg4 + '" title="Katarina"/>');
    $('#asnChars').append('Assassin', asnDiv1, asnDiv2, asnDiv3, asnDiv4);

    var fghtrDiv1 = $('<div>');
    var fghtrDiv2 = $('<div>');
    var fghtrDiv3 = $('<div>');
    var fghtrDiv4 = $('<div>');
    var fghtrDiv5 = $('<div>');
    var fghtrDiv6 = $('<div>');
    var fghtrImage1 = data.data.Jax.image.full;
    var fghtrImage2 = data.data.MasterYi.image.full;
    var fghtrImage3 = data.data.LeeSin.image.full;
    var fghtrImage4 = data.data.Garen.image.full;
    var fghtrImage5 = data.data.XinZhao.image.full;
    var fghtrImage6 = data.data.Fiora.image.full;
    var fghtrImg1 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + fghtrImage1;
    var fghtrImg2 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + fghtrImage2;
    var fghtrImg3 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + fghtrImage3;
    var fghtrImg4 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + fghtrImage4;
    var fghtrImg5 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + fghtrImage5;
    var fghtrImg6 = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + fghtrImage6;
    fghtrDiv1.html('<img id="fghtr1" class="fighter" src="' + fghtrImg1 + '" title="Jax"/>');
    fghtrDiv2.html('<img id="fghtr2" class="fighter" src="' + fghtrImg2 + '" title="Master Yi"/>');
    fghtrDiv3.html('<img id="fghtr3" class="fighter" src="' + fghtrImg3 + '" title="Lee Sin"/>');
    fghtrDiv4.html('<img id="fghtr4" class="fighter" src="' + fghtrImg4 + '" title="Garen"/>');
    fghtrDiv5.html('<img id="fghtr3" class="fighter" src="' + fghtrImg5 + '" title="Xin Zhao"/>');
    fghtrDiv6.html('<img id="fghtr4" class="fighter" src="' + fghtrImg6 + '" title="Fiora"/>');
    $('#fghtrChars').append('Fighter', fghtrDiv1, fghtrDiv2, fghtrDiv3, fghtrDiv4, fghtrDiv5, fghtrDiv6);

  });
