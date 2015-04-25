var obj = {
	firstName: "Francisco",
	lastName: "De La Cruz"
};

obj.firstName = "Francisco";
obj["lastName"] = "De La Cruz";

var firstName = obj["lastName"];
var lastName = obj.lastName;

Object.defineProperty(obj, "country", {
	value: "USA"
});

Object.defineProperties(obj, {
	twitter: {
		value: "fdelacruz"
	},
	email: {
		value: "helloquico@gmail.com"
	}
});
