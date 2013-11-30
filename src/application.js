window.App = Ember.Application.create();
// Router
App.Router.map(function () {
  this.resource('fizzBuzz', { path: '/' });
});
// Route
App.FizzBuzzRoute = Ember.Route.extend({
	model: function() {
		console.debug("model");
		return App.FizzBuzz.create({
		});
	}
});
// Controller
App.FizzBuzzController = Ember.ObjectController.extend({

	answer : '',
	resultMessage: '',
	jemColorCode : function(){
		// 体力が低ければ彩度を下げる
		var _point = this.get('point');
		var _basePoint = this.get('besePoint');
		// 基本値
		var r = 247,g = 189 ,b = 185;
		var mul = _point / _basePoint;
		r *= mul;
		g *= mul;
		b *= mul;

		function exchangeRadix(source) {
			var num = parseInt(source, 10);
			var result = num.toString(16);
			return ("0"+result).slice(-2);
		}

		return '#'+exchangeRadix(r.toString(16))+exchangeRadix(g.toString(16))+exchangeRadix(b.toString(16));
	}.property('model.point','model.basePoint'),
	actions: {
		judge: function() {
			console.debug(this.get('answer'));
			var result = this.get('model').judge(this.get('answer'));
			if(result) {
				this.set('resultMessage', '正解!');
			} else {
				this.set('resultMessage', '不正解!');
			}
			this.get('model').setNewNumer();
		}
	}
});
