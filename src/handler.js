$(function() {
	var model = new FizzBuzz();
	var setup = function() {
		var num = model.getNumber();
		$('#__').text(num);
	};
	var judge = function() {
		var num = $('#__').text();
		var input = $('#__').val();
		boolean result = model.judge(input);
		if(result) {
			alert('正解!');
		} else {
			alert('不正解!!');
		}
	};
	setup();
})


