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
