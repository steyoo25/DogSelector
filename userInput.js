// import {hypoAllergy, newArray} from './dogObjects.js';
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
        this.points = 0;
    }
    return Dog;
}());
var newArray = new Array();
var hypoAllergy = new Array();
var file = "LabradorRetriever;True;vYoung;friendly;medium;fewHrs;between100300;apartment;easy;big;\nGermanShepherd;True;young;aggressive;large;fewHrs;less100;house;easy;big;\nGoldenRetriever;True;vYoung;aggressive;medium;fewHrs;between100300;apartment;easy;big;\nFrenchBulldog;True;vYoung;friendly;vSmall;lessthan1hr;between100300;apartment;idc;smallNone;\nBulldog;True;young;friendly;medium;lessthan1hr;between100300;apartment;idc;smallNone;\nToyPoodle;False;vYoung;friendly;vSmall;fewHrs;less100;apartment;easy;smallNone;\nMiniaturePoodle;False;vYoung;aggressive;vSmall;fewHrs;between100300;apartment;easy;smallNone;\nStandardPoodle;False;vYoung;aggressive;medium;fewHrs;between100300;apartment;easy;big;\nBeagles;True;young;aggressive;small;fewHrs;between100300;house;easy;smallNone;\nRottweilers;True;young;aggressive;large;fewHrs;between100300;apartment;easy;big;".split('\n');
file.forEach(function (line) {
    var l = line.split(';');
    for (var i = 0; i < l.length; i++) {
        l[i] = l[i].trim();
    }
    var dogName = l[0];
    var allergy = l[1];
    var kidsAge = l[2];
    var personality = l[3];
    var size = l[4];
    var time = l[5];
    var cost = l[6];
    var aorh = l[7];
    var train = l[8];
    var yard = l[9];
    var dogObject = new Dog(dogName, allergy, kidsAge, personality, size, time, cost, aorh, train, yard);
    newArray.push(dogObject);
    if (allergy) {
        hypoAllergy.push(dogObject);
    }
});
var enterBtn = document.querySelector("button");
var list = new Array();
function getDog() {
    var allergiesElm = document.querySelector("#allergies");
    var allergies = allergiesElm.value;
    var kidsElm = document.querySelector("#kids");
    var kids = kidsElm.value;
    var personalityElm = document.querySelector("#personality");
    var personality = personalityElm.value;
    var weightRangeElm = document.querySelector("#weightRange");
    var weightRange = weightRangeElm.value;
    var timeElm = document.querySelector("#time");
    var time = timeElm.value;
    var costElm = document.querySelector("#cost");
    var cost = costElm.value;
    var homeTypeElm = document.querySelector("#homeType");
    var homeType = homeTypeElm.value;
    var trainingElm = document.querySelector("#training");
    var training = trainingElm.value;
    var yardElm = document.querySelector("#yard");
    var yard = yardElm.value;
    if (allergies === 'true') {
        list = hypoAllergy;
    }
    else {
        list = newArray;
    }
    for (var i = 0; i < list.length; i++) {
        if (list[i].weight === weightRange) {
            list[i].points += 30;
        }
        switch (true) {
            case (cost === "more300"):
            case (cost === "between100300"):
            case (cost === list[i].cost):
                list[i].points += 20;
                break;
        }
        if (homeType == "house" || (homeType === list[i].aroh)) {
            list[i].points += 15;
        }
        if (time === "coupleHrs" || time === "fewHrs" || time === list[i].time) {
            list[i].points += 15;
        }
        if (personality === "friendly" || personality === list[i].personality) {
            list[i].points += 10;
        }
        if (kids === "mature" || kids === "young" || kids === "false" || kids === list[i].kidsAge) {
            list[i].points += 5;
        }
        if (training === "idc" || training === list[i].train) {
            list[i].points += 3;
        }
        if (yard === "big" || yard === list[i].yard) {
            list[i].points += 2;
        }
    }
    var max = 0;
    var breedName = "";
    var breedNames = new Array();
    var pts = new Array();
    for (var i = 0; i < list.length; i++) {
        if (list[i].points > max) {
            max = list[i].points;
            breedName = list[i].breedName;
        }
        breedNames.push(list[i].breedName);
        pts.push(list[i].points);
    }
    console.log(breedName);
    console.log(list);
    console.log(breedNames);
    console.log(pts);
}
enterBtn.onclick = getDog;
