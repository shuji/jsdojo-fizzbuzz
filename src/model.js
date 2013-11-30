App.FizzBuzz = Ember.Object.extend({
	number : undefined,
	besePoint : 10,
	point : undefined,
	setNewNumer : function (max /* Option max number default 100 */) {
		if (max === undefined) {
			max = 100;
		}
		this.set('number', parseInt(Math.random() * max,10));
	},
	setPoint : function(point /* Option max point default 10 */) {
		if (point === undefined) {
			point = this.get('besePoint');
		}
		this.set('point', point);
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
		if (!rtn) {
			this.incrementProperty('point',-1);
		}
		return rtn;
	},
	init : function(point) {
		this.setNewNumer();
		this.setPoint(point);
	}
});

