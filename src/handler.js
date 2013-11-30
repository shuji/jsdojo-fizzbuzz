$(function() {
	var model = FizzBuzz;
	var setup = function() {
		var num = model.getNumber();
		$('#showNumber').text(num);
	};
	var judge = function() {
		var inputNum = $('#showNumber').text();
		var answer = $('#answer').val();
		var result = model.judge(inputNum, answer);
		if(result) {
			alert('正解!');
		} else {
			alert('不正解!!');
		}
	};
	$('#judge').on('click', judge);
	setup();
})


