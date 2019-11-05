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
var q1  = MakeQuestion('How matches did Mohammed Ali lose in his career?', '1', '2', '3', '4', '1');
var q2  = MakeQuestion('Which mammal cannot jump?', 'Giraffe','Elephant','Bear','Rhino', 'Elephant');
var q3  = MakeQuestion("What was Mozart's nationality?", 'Austrian','Hungarian','Croatian','Slovakians','Austrian');
var q4  = MakeQuestion("What is the largest state of the United States?", 'Montana', 'California', 'Texas', 'Alaska','Alaska');
var q5  = MakeQuestion("What is the noisiest city in the world?",'Tokyo','Hong Kong', 'New York','Cairo', 'Hong Kong');
var q6  = MakeQuestion("Who played Wolverine?",    'Hugh Jackman',    'Keanu Reeves',    'Chris Hemsworth', 'Denzel Washington','Hugh Jackman');
var q7  = MakeQuestion("In what year was Google launched on the web?",'1996', '1997', '1998', '1999', '1998');
var q8  = MakeQuestion("What does USB stand for in the computer world?", 'Unit Seriel Bus','Universal Semi Bus', 'Unit Serial Bus','Universal Serial Bus','Universal Serial Bus');
var q9  = MakeQuestion("How many eyes does a honeybee have?","One", "Two", "Four", "Five","Five");
var q10 = MakeQuestion("Which planet is nearest the sun?",'Venus','Mercury','Earth','Mars','Mercury');
var q11 = MakeQuestion("What is the largest spider in the world?",'Camel Spider','Goliath birdeater','Giant Huntsman','Hercules Baboon','Goliath birdeater');
var q12 = MakeQuestion("Where did tomatoes originate from?","Brazil","India","Japan","America","America");

var questions = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12];
var score = 0;
var $body = $('body');

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
		$qtext.appendTo($wrapper);
		$wrapper.appendTo($body);
		$qtext.text(questions[i].text);
		$wrapper.append($op1, $lab1, $op2, $lab2, $op3, $lab3, $op4, $lab4);
		$lab1.text(questions[i].op1);
		$lab2.text(questions[i].op2);
		$lab3.text(questions[i].op3);
		$lab4.text(questions[i].op4);	  
}


var a = Math.floor(Math.random() * 4);
var b =Math.floor(4 + Math.random() * 4);
var c =Math.floor(7 + Math.random() * 4);
var d =Math.floor(9 + Math.random() * 4)

appender(a);
appender(b);
appender(c);
appender(d);

var displayedQuestions = [questions[a], questions[b], questions[c], questions[d]];
console.log(displayedQuestions);
var choices = [];
var $submit = $('<button id = "submit" type="submit" onclick="check()"> Submit </button>')
var $fresh = $('<button id = "submit" type="submit" onclick="refresh()"> Refresh </button>')
$submit.appendTo($body);



function checkQuestion(a){
	 $('#'+a+' .inp1').on('click',function(){
 		var choice = $('#'+a+' .inp1').val();
 		choice = choice.toString()
 		var sol = questions[a].correctOp.toString();
 		console.log(sol, choice);
 		if(sol === choice){
 			score += 10;
 			console.log(score);
 			};
 		});
	 	$('#'+a+' .inp2').on('click',function(){
 		var choice = $('#'+a+' .inp2').val();
 		choice = choice.toString()
 		var sol = questions[a].correctOp.toString();
 		console.log(sol, choice);
 		if(sol === choice){
 			score += 10;
 			console.log(score);
 			};
 		});
 		$('#'+a+' .inp3').on('click',function(){
 		var choice = $('#'+a+' .inp3').val();
 		choice = choice.toString()
 		var sol = questions[a].correctOp.toString();
 		console.log(sol, choice);
 		if(sol === choice){
 			score += 10;
 			console.log(score);
 			};
 		});
 		$('#'+a+' .inp4').on('click',function(){
 		var choice = $('#'+a+' .inp4').val();
 		choice = choice.toString()
 		var sol = questions[a].correctOp.toString();
 		console.log(sol, choice);
 		if(sol === choice){
 			score += 10;
 			console.log(score);
 			};
 		});
	}

checkQuestion(a);
checkQuestion(b);
checkQuestion(c);
checkQuestion(d);