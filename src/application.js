window.App = Ember.Application.create();
// Router
App.Router.map(function () {
  this.resource('fizzBuzz', { path: '/' });
});
// Route
App.FizzBuzzRoute = Ember.Route.extends({
	model: function() {
	}
});
// Controller
App.FizzBuzzController = Ember.ObjectController.extends({
});
