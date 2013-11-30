App.FizzBuzz = Ember.Object.extend({
	number : undefined,
	setNewNumer : function (max /* Option max number default 100 */) {
		if (max === undefined) {
			max = 100;
		}
		this.set('number', parseInt(Math.random() * max,10));
	},
	judge : function (answer) {
		var num = this.get('number');
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
	},
	init : function() {
		this.setNewNumer();
	}
});

