// var prenom = prompt('Bienvenue dans mon super jeu de Memory!!!\n\nCreuses-toi les méninges, trouves les paires de cartes et\nexploses le score !\n\nComment t\'appelles-tu?');

// $('#stats').html('Bonjour ' + prenom + '!' + '<br />' + 'A toi de jouer :');

var card_arr = []; 

var img1 = new Image();
var img1_2 = new Image();
var img2 = new Image();
var img2_2 = new Image();

	for(var i=0; i<1; i++)
	{	
	   img1.src = 'abraham.png';
	   card_arr.push(img1);
	   img1_2.src = 'abraham.png';
	   card_arr.push(img1_2);
	   img2.src = 'bart.png';
	   card_arr.push(img2);
	   img2_2.src = 'bart.png';
	   card_arr.push(img2_2);
	   	  
	   $('#line1').html(card_arr);
			
	}

var card_arr_2 = [];

var img3 = new Image();
var img3_2 = new Image();
var img4 = new Image();
var img4_2 = new Image();
	
	for (var h = 0; h < 1; h++) 
	{
	   img3.src = "bart_skate.png";
	   card_arr_2.push(img3);
	   img3_2.src = "bart_skate.png";
	   card_arr_2.push(img3_2);
	   img4.src = "homer.png";
	   card_arr_2.push(img4);
	   img4_2.src = "homer.png";
	   card_arr_2.push(img4_2);

	   $('#line2').html(card_arr_2);
	}

// Mélange du tableau
function shuffle()
{
   var j = 0;
   var valI = '';
   var valJ = valI;
   var l = card_arr.length - 1;

   while(l > -1)
   {
		j = Math.floor(Math.random() * l);
		valI = card_arr[l];
		valJ = card_arr[j];
		card_arr[l] = valJ;
		card_arr[j] = valI;
		l = l - 1;
	}
	console.log(card_arr);
	return card_arr;
 };

 shuffle();

function shuffle2()
{
   var j = 0;
   var valI = '';
   var valJ = valI;
   var l = card_arr_2.length - 1;

   while(l > -1)
   {
		j = Math.floor(Math.random() * l);
		valI = card_arr_2[l];
		valJ = card_arr_2[j];
		card_arr_2[l] = valJ;
		card_arr_2[j] = valI;
		l = l - 1;
	}
	console.log(card_arr_2);
	return card_arr_2;
 };

 shuffle2();
 

 console.log(card_arr_2);

$(function(){
$('img').mouseover(function(){
if($(this).attr('src')=='mouton2.png')
$(this).attr('src','mouton1.png');
else
$(this).attr('src','mouton2.png')
});
})