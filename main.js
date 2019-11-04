function MakeQuestion(text, op1, op2, op3, op4 ,correctOp){
	var instance = {};
	instance.text= text;
	instance.op1 = op1;
	instance.op2 = op2;
	instance.op3 = op3;
	instance.op4 = op4;
	instance.correctOp = correctOp;
	return instance;
}
var q0  = MakeQuestion('how old are u', 4, 52,5, 8, 4)
var q1  = MakeQuestion()
var q2  = MakeQuestion()
var q3  = MakeQuestion()
var q4  = MakeQuestion()
var q5  = MakeQuestion()
var q6  = MakeQuestion()
var q7  = MakeQuestion()
var q8  = MakeQuestion()
var q9  = MakeQuestion()
var q10 = MakeQuestion()
var q11 = MakeQuestion()
var q12 = MakeQuestion()

var questions = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12];

function MakeUser(userName, score){
	var instance = {};
	instance.userName = userName;
	instance.score    = 0;
}

// var c = $('#huey2')
// 	c.on('change', function(){
// 	console.log(c.val())
// })

// var d = $('#huey3')
// 	d.on('change', function(){
// 	console.log(d.val())
// })	

var test = $(':checked')[0]
console.log(test);



// var r = $('')
// $("#huey1").on('click',function(){
// 	$('button').on('click',function(){

// 	})
// })



