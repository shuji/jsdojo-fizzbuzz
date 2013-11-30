var FizzBuzz = {
	getNumber : function (max /* Option max number default 100 */) {
		if (max === undefined) {
			max = 100;
		}
		return parseInt(Math.random() * max,10);
	},
	judge : function (num , answer) {
		var rtn = true;
		answer = answer.toLowerCase();
		switch (answer) {
			case 'fizzbuzz' :
				if(!((num%3)===0 && (num%5)===0)) {
					rtn = false;
				}
				break;
			case 'fizz' :
				if(!((num%3)===0 && (num%5)!==0)) {
					rtn = false;
				}
				break;
			case 'buzz' :
				if(!((num%3)!==0 && (num%5)===0)) {
					rtn = false;
				}
				break;
			default :
				break;
		}
		return rtn;
	}
};