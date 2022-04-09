"use strict";
exports.__esModule = true;
var fs = require("fs");
fs.readFile('allDogs.txt', 'utf-8', function (err, data) {
    if (err)
        throw err;
    var newArray = data.split('\n');
    newArray.forEach(function (line) {
        console.log(line);
        console.log('OISDJFOSDJIFJSDIOFJDOIJDSIOFJOIF');
    });
});
var Dog = /** @class */ (function () {
    function Dog(allergy, weight, personality) {
        this.allergy = allergy;
        this.weight = weight;
        this.personality = personality;
    }
    return Dog;
}());
var dog1 = new Dog(true, [50, 50], 'aggressive');
