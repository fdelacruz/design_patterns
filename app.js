function Calculator() {
	this._currentValue = 0;
	this.commands = [];
}

Calculator.prototype = {
	execute: function(command) {
		this._currentValue = command.execute(this._currentValue);
		this.commands.push(command);
	},
	undo: function() {
		var cmd = this.commands.pop();
		
		this._currentValue = cmd.undo(this._currentValue);
	},
	getCurrentValue: function() {
		return this._currentValue;
	}
};

function add(value) {
	return value + this.value;
}

function sub(value) {
	return value - this.value;
}

// Command Abstract Object Constructor
function Command(fn, undo, value) {
	this.execute = fn;
	this.value = value;
	this.undo = undo;
}

// Command 'operator' Constructors using our Command Abstract Object Constructor
function AddCommand(value) {
	Command.call(this, add, sub, value);
}

function SubCommand(value) {
	Command.call(this, sub, add, value);
}

var calc = new Calculator();

// calc.execute(new AddCommand(19))
// calc.getCurrentValue() -> 19
// calc.execute(new AddCommand(1))
// calc.getCurrentValue() -> 20
// calc.undo()
// calc.getCurrentValue() -> 19
