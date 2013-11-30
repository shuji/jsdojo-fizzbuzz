function FizzBuzz() {
	this.getNumber = function (max /* Option max number default 100 */) {
		if (max === undefined) {
			max = 100;
		}
		return parseInt(Math.random() * max,10);
	};
	this.judge = function (num , answer) {
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
				if(((num%3)===0 || (num%5)===0)) {
					rtn = false;
				}
				break;
		}
		return rtn;
	};
}