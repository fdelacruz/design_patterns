var dom = (function() {

	var _counter = 0;
	
	function generateId() {
		return 'customId' + _counter++;
	}

	function create(tagName, id) {
			var el = document.createElement(tagName);

			el.id = id || generateId();

			return el;
		}

	return {
		generateId: generateId,
		create: create 
	};
}());

// var dom = {
// 	_counter: 0,
// 	generateId: function() {
// 		return 'customId' + this._counter++;
// 	},
// 	create: function(tagName, id) {
// 		var el = document.createElement(tagName);

// 		el.id = id || this.generateId();

// 		return el;
// 	}
// };

// var el = dom.create('div') 
// el.id -> 'customId0'
// var el2 = dom.create('div') 
// el2.id -> 'customId1'
