var test = require('tape');
var bearcat = require('bearcat');

require('./bearcat-bootstrap');

test('simple browser test', function(t) {

	bearcat.createApp();

	bearcat.start(function() {
		var car = bearcat.getBean("car"); // get bean
		var r = car.run(); // call the method
		t.equal(r, 'car');
		t.end();
	});
});