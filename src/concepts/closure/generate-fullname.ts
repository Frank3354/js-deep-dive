function fullNameGenerator(firstName) {
	function appendLastName(input) {
		const lastName = input ? input : "";
		return firstName + " " + lastName;
	}	

	return appendLastName;
}

module.exports = {
  fullNameGenerator,
};
