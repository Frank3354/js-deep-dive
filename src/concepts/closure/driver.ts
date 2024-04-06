const { fullNameGenerator } = require("./generate-fullname.ts");

function driver() {
    const listOfFullNames = [];
    const sampleLastNames = [null, "Doe", "Eagle", "Tortoise"];
    const getFullName = fullNameGenerator("Jane");

    sampleLastNames.forEach(lastName => {
        listOfFullNames.push(getFullName(lastName));
    })

    listOfFullNames.forEach(fullName => console.log(fullName));
}

driver();
