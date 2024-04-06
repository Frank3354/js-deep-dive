const { fullNameGenerator } = require("./generate-fullname.ts");

describe("fullNameGenerator", () => {
	test("Generates a full name given a first and last name", () => {
		const getFullNameForSteve = fullNameGenerator("Steve");

		const firstFullName = getFullNameForSteve("Jettson");
		const secondFullName = getFullNameForSteve("Mattson");

		expect(firstFullName).toBe("Steve Jettson");
		expect(secondFullName).toBe("Steve Mattson");
	});
});
