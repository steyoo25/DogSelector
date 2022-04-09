"use strict";
exports.__esModule = true;
exports.hypoAllergy = exports.newArray = exports.Dog = void 0;
var fs = require("fs");
var Dog = /** @class */ (function () {
    function Dog(breedName, allergy, kidsAge, personality, size, time, cost, aorh, train, yard) {
        this.breedName = breedName;
        this.allergy = allergy;
        this.kidsAge = kidsAge;
        this.personality = personality;
        this.size = size;
        this.time = time;
        this.cost = cost;
        this.aorh = aorh;
        this.train = train;
        this.yard = yard;
        this.point = 0;
    }
    return Dog;
}());
exports.Dog = Dog;
exports.newArray = new Array();
exports.hypoAllergy = new Array();
var file = fs.readFileSync('allDogs.txt', 'utf-8').split('\n');
file.forEach(function (line) {
    var l = line.split(';');
    for (var i = 0; i < l.length; i++) {
        l[i] = l[i].trim();
    }
    var dogName = l[0];
    var allergy = Boolean(l[1]);
    var kidsAge = l[2];
    var personality = l[3];
    var size = l[4];
    var time = l[5];
    var cost = l[6];
    var aorh = l[7];
    var train = l[8];
    var yard = l[9];
    var dogObject = new Dog(dogName, allergy, kidsAge, personality, size, time, cost, aorh, train, yard);
    exports.newArray.push(dogObject);
    if (allergy) {
        exports.hypoAllergy.push(dogObject);
    }
});
console.log(exports.hypoAllergy);
console.log(exports.newArray);
