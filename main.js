function MakeQuestion(text, op1, op2, op3, op4 ,correctOp){
	var instance = {};

	instance.text= text;
	instance.op1 = op1;
	instance.op2 = op2;
	instance.op3 = op3;
	instance.op4 = op4;
	instance.correctOp = correctOp;

	return instance;
};

var q0  = MakeQuestion('In which year did Maradona score a goal with his hand?', '1985', '1986', '1987', '1988', '1986');
var q1  = MakeQuestion('How matches did Mohammed Ali lose in his career?', 'Four', 'Three', 'Five', 'One', 'Five');
var q2  = MakeQuestion('Which mammal cannot jump?', 'Giraffe','Elephant','Bear','Rhino', 'Elephant');
var q3  = MakeQuestion("What was Mozart's nationality?", 'Austrian','Hungarian','Croatian','Slovakians','Austrian');
var q4  = MakeQuestion("What is the largest state of the United States?", 'Montana', 'California', 'Texas', 'Alaska','Alaska');
var q5  = MakeQuestion("What is the noisiest city in the world?",'Tokyo','Hong-Kong', 'New York','Cairo', 'Hong-Kong');
var q6  = MakeQuestion("The actor who played Wolverine is Hugh ...", 'Kidmann' , "Jackman", 'Norton', 'Washington', "Jackman");
var q7  = MakeQuestion("In what year was Google launched on the web?",'1996', '1997', '1998', '1999', '1998');
var q8  = MakeQuestion("How many NBA Championships did Michael Jordan win?", 'Five','Six', 'Seven','None','Six');
var q9  = MakeQuestion("How many eyes does a honeybee have?","One", "Two", "Four", "Five","Five");
var q10 = MakeQuestion("Which planet is nearest the sun?",'Venus','Mercury','Earth','Mars','Mercury');
var q11 = MakeQuestion("In which series played Jennifer Aniston and Brad Pitt together ?",'Lost','See','Dexter','Friends','Friends');
var q12 = MakeQuestion("Where did tomatoes originate from?","Brazil","India","Japan","America","America");
var q13 = MakeQuestion('What company develops the Rock Band series of rhythm games?', 'Dice', 'Activision', 'Epic', ' Ubisoft', 'Activision');
var q14 = MakeQuestion("In which country happened the Orange Revolution between 2004-2005?", "Hungary", "France", "Spain", "Ukraine", "Ukraine");
var q15 = MakeQuestion("Where was built the first subway?", "London", "New York", "Philadelphia", "Moscow", "London");
var q16 = MakeQuestion("Which fruit tree is considered to be sacred in India?", "Apple", "Banane", "Kiwi", "Mango", "Mango");
var q17 = MakeQuestion("In which city did Romeo and Julia live?", "Poiano", "Verona", "Rizza", "Sona", "Verona");


var questions = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17];

var $body = $('body');
var $section = $('section');

function appender(i){
		var $wrapper = $('<div class = "wrapper " id ="' + i + '""></div>');
		var $qtext = $('<p class="text" ></p>');
		var $op1 = $('<input type="radio" class ="inp1"  name=' + i +' value= '+ questions[i].op1 + ' >');
		var $lab1 = $('<label for="inp1"></label>');
		var $op2 = $('<input type="radio" class ="inp2"  name= '+ i + ' value='+ questions[i].op2 + ' >');
		var $lab2 = $('<label for="inp2"></label>');
		var $op3 = $('<input type="radio" class ="inp3"  name= '+ i + ' value='+ questions[i].op3+ ' >');
		var $lab3 = $('<label for="inp3"></label>');	        
		var $op4 = $('<input type="radio" class ="inp4"  name= '+ i + ' value='+ questions[i].op4 + ' >');
		var $lab4 = $('<label for="inp1"></label>');
		var $span = $('<span class ="sp"></span>')
		$span.append($op1, $lab1, $op2, $lab2, $op3, $lab3, $op4, $lab4);
		$qtext.appendTo($wrapper);
		$wrapper.appendTo($section);
		$qtext.text(questions[i].text);
		$wrapper.append($span);
		$lab1.text(questions[i].op1);
		$lab2.text(questions[i].op2);
		$lab3.text(questions[i].op3);
		$lab4.text(questions[i].op4);	  
}


var a = Math.floor(Math.random() * 5);
var b = Math.floor(5 + Math.random() * 4);
var c = Math.floor(10 + Math.random() * 4);
var d = Math.floor(14 + Math.random() * 4)

appender(c);
appender(b);
appender(a);
appender(d);

var $submit = $('<button id = "submit" type="submit"> Submit </button>')
//var $fresh = $('<button id = "fresh"  onclick="refresh()"> Give Up </button>')
$submit.appendTo($body);
// $fresh.appendTo($body);
// $('#fresh').on('click',function (){

// })

var choices1 = [];
var choices2 = [];
var choices3 = [];
var choices4 = [];

function checkQuestion(a, array){

	 $('#'+a+' .inp1').one('click',function(){
 		var choice = $('#'+a+' .inp1').val();
 		choice = choice.toString()
 		var sol = questions[a].correctOp.toString();
 		console.log(sol, choice);
 		array.push(choice);
 		});
	 	$('#'+a+' .inp2').one('click',function(){
 		var choice = $('#'+a+' .inp2').val();
 		choice = choice.toString()
 		var sol = questions[a].correctOp.toString();
 		console.log(sol, choice);
 		array.push(choice);
 		
 		});
 		$('#'+a+' .inp3').one('click',function(){
 		var choice = $('#'+a+' .inp3').val();
 		choice = choice.toString()
 		var sol = questions[a].correctOp.toString();
 		console.log(sol, choice);
 		array.push(choice);
 		
 		});
 		$('#'+a+' .inp4').one('click',function(){
 		var choice = $('#'+a+' .inp4').val();
 		choice = choice.toString()
 		var sol = questions[a].correctOp.toString();
 		console.log(sol, choice);
 		array.push(choice);
 		});
 		return array; 
	}
checkQuestion(c, choices1)
checkQuestion(b, choices2)
checkQuestion(a, choices3)
checkQuestion(d, choices4)
// console.log(choices1);
// console.log(choices2);
// console.log(choices3);
// console.log(choices4);
	var score = 0;
function CalculateScore(){
	
	if(choices1[choices1.length - 1] === questions[c].correctOp.toString()){
		score += 25;
	};
	if(choices2[choices2.length - 1] === questions[b].correctOp.toString()){
		score += 25;
	};
	if(choices3[choices3.length - 1] === questions[a].correctOp.toString()){
	  score += 25;
	}; 
	if(choices4[choices4.length - 1] === questions[d].correctOp.toString()){
		score += 25;
	};
	console.log(score);
	  $('#score').text('Your score is ' + score);
	return score;

}
console.log(score);
	var $score = $('#score');


$('#submit').one('click', function(){
	CalculateScore();
	$score.appendTo($('body'));
})




