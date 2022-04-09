"use strict";
exports.__esModule = true;
var fs = require("fs");
var Dog = /** @class */ (function () {
    function Dog(breedName, allergy, weight, personality) {
        this.breedName = breedName;
        this.allergy = allergy;
        this.weight = weight;
        this.personality = personality;
    }
    return Dog;
}());
var newArray = new Array();
var file = fs.readFileSync('allDogs.txt', 'utf-8').split('\n');
file.forEach(function (line) {
    var l = line.split(';');
    var dogName = l[0].trim();
    var allergy = Boolean(l[1].trim());
    var weightRange = [Number(l[2].split(',')[0]), Number(l[2].split(',')[1])];
    var personality = l[3].trim();
    var dogObject = new Dog(dogName, allergy, weightRange, personality);
    newArray.push(dogObject);
});
console.log(newArray);
// while (newArray !== []){
//     console.log("")
// // }
// console.log(newArray);
