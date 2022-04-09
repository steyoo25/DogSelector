<<<<<<< HEAD
//import * as fs from 'fs';
=======
// import {hypoAllergy, newArray} from './dogObjects.js';
>>>>>>> 9ce913bb9a7eb7316e1997d8d895b7c2644e719c
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
<<<<<<< HEAD
        this.point = 0;
=======
        this.points = 0;
>>>>>>> 9ce913bb9a7eb7316e1997d8d895b7c2644e719c
    }
    return Dog;
}());
var newArray = new Array();
var hypoAllergy = new Array();
<<<<<<< HEAD
//const file = fs.readFileSync('allDogs.txt','utf-8').split('\n');
var f = "LabradorRetriever;True;vYoung;friendly;medium;fewHrs;between100300;apartment;easy;big;\nGermanShepherd;True;young;aggressive;large;fewHrs;less100;house;easy;big;\nGoldenRetriever;True;vYoung;aggressive;medium;fewHrs;between100300;apartment;easy;big;\nFrenchBulldog;True;vYoung;friendly;vSmall;lessthan1hr;between100300;apartment;idc;smallNone;\nBulldog;True;young;friendly;medium;lessthan1hr;between100300;apartment;idc;smallNone;\nToyPoodle;False;vYoung;friendly;vSmall;fewHrs;less100;apartment;easy;smallNone;\nMiniaturePoodle;False;vYoung;aggressive;vSmall;fewHrs;between100300;apartment;easy;smallNone;\nStandardPoodle;False;vYoung;aggressive;medium;fewHrs;between100300;apartment;easy;big;\nBeagles;True;young;aggressive;small;fewHrs;between100300;house;easy;smallNone;\nRottweilers;True;young;aggressive;large;fewHrs;between100300;apartment;easy;big;".split('\n');
f.forEach(function (line) {
=======
var file = "LabradorRetriever;True;vYoung;friendly;medium;fewHrs;between100300;apartment;easy;big;\nGermanShepherd;True;young;aggressive;large;fewHrs;less100;house;easy;big;\nGoldenRetriever;True;vYoung;aggressive;medium;fewHrs;between100300;apartment;easy;big;\nFrenchBulldog;True;vYoung;friendly;vSmall;lessthan1hr;between100300;apartment;idc;smallNone;\nBulldog;True;young;friendly;medium;lessthan1hr;between100300;apartment;idc;smallNone;\nToyPoodle;False;vYoung;friendly;vSmall;fewHrs;less100;apartment;easy;smallNone;\nMiniaturePoodle;False;vYoung;aggressive;vSmall;fewHrs;between100300;apartment;easy;smallNone;\nStandardPoodle;False;vYoung;aggressive;medium;fewHrs;between100300;apartment;easy;big;\nBeagles;True;young;aggressive;small;fewHrs;between100300;house;easy;smallNone;\nRottweilers;True;young;aggressive;large;fewHrs;between100300;apartment;easy;big;".split('\n');
file.forEach(function (line) {
>>>>>>> 9ce913bb9a7eb7316e1997d8d895b7c2644e719c
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
    if (allergy === "False") {
        hypoAllergy.push(dogObject);
    }
});
console.log(hypoAllergy);
console.log("NEW LIST");
console.log(newArray);
//console.log(hypoAllergy);
//console.log(newArray);
//import {Dog, hypoAllergy, newArray} from './dogObjects.js';
var enterBtn = document.querySelector("button");
var header3 = document.querySelector("h3");
var v = new Array();
function getD() {
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
    for (var i = 0; i < v.length; i++) {
        if (v[i].weight === weightRange) {
            v[i].points += 30;
        }
        switch (true) {
            case (cost === "more300"):
            case (cost === "between100300"):
            case (cost === v[i].cost):
                v[i].points += 20;
                break;
        }
        if (homeType == "house" || (homeType === v[i].aroh)) {
            v[i].points += 15;
        }
        if (time === "coupleHrs" || time === "fewHrs" || time === v[i].time) {
            v[i].points += 15;
        }
        if (personality === "friendly" || personality === v[i].personality) {
            v[i].points += 10;
        }
        if (kids === "mature" || kids === "young" || kids === "false" || kids === v[i].kidsAge) {
            v[i].points += 5;
        }
        if (training === "idc" || training === v[i].train) {
            v[i].points += 3;
        }
        if (yard === "big" || yard === v[i].yard) {
            v[i].points += 2;
        }
    }
}
var max = 0;
var breedName = "";
for (var i = 0; i < v.length; i++) {
    if (v[i].points > max) {
        max = v[i].points;
        breedName = v[i].breedName;
    }
}
console.log(breedName);
header3.textContent = breedName;
enterBtn.onclick = getD;
// document.addEventListener("click", (event: MouseEvent) =>{
//     let allergiesElm = document.querySelector("#allergies") as HTMLSelectElement;
//     let allergies = allergiesElm.value;
//     let kidsElm = document.querySelector("#kids") as HTMLSelectElement;
//     let kids = kidsElm.value;
//     let personalityElm = document.querySelector("#personality") as HTMLSelectElement;
//     let personality = personalityElm.value;
//     let weightRangeElm = document.querySelector("#weightRange") as HTMLSelectElement;
//     let weightRange = weightRangeElm.value;
//     let timeElm = document.querySelector("#time") as HTMLSelectElement;
//     let time = timeElm.value;
//     let costElm = document.querySelector("#cost") as HTMLSelectElement;
//     let cost = costElm.value;
//     let homeTypeElm = document.querySelector("#homeType") as HTMLSelectElement;
//     let homeType = homeTypeElm.value;
//     let trainingElm = document.querySelector("#training") as HTMLSelectElement;
//     let training = trainingElm.value;
//     let yardElm = document.querySelector("#yard") as HTMLSelectElement;
//     let yard = yardElm.value;
//     if (allergies){
//         list = hypoAllergy
//     } else {
//         list = newArray
//     }
//     for (let i = 0; i < list.length; i ++){
//         if (list[i].weight === weightRange){
//             list[i].points += 30
//         } 
//         switch(true){
//             case (cost === "more300"):
//             case (cost === "between100300"): 
//             case (cost === list[i].cost):
//                 list[i].points += 20
//                 break;
//         }
//         if (homeType == "house" || (homeType === list[i].aroh)) {
//             list[i].points += 15
//         }
//         if (time === "coupleHrs" || time === "fewHrs" || time === list[i].time){
//             list[i].points += 15
//         }
//         if (personality === "friendly" || personality === list[i].personality){
//             list[i].points += 10
//         }
//         if (kids === "mature" || kids === "young" || kids === "false" || kids === list[i].kidsAge){
//             list[i].points += 5
//         }
//         if (training === "idc" || training === list[i].train) {
//             list[i].points += 3
//         }
//         if (yard === "big" || yard === list[i].yard){
//             list[i].points += 2
//         }
//     }
//     let max : number = 0;
//     let breedName : string = "";
//     for (let i = 0; i < list.length; i ++){
//         if (list[i].points > max){
//             max = list[i].points
//             breedName = list[i].breedName
//         }
//     }
//     console.log(breedName)
// })
/* class Dog {
    allergy : boolean;
    weight : Number[];
    personality : string;

    constructor(allergy : boolean, weight : Number[], personality : string){
        this.allergy = allergy;
        this.weight = weight;
        this.personality = personality;
    }
}

let dog1 = new Dog(true,[50,50],'aggressive');*/ 
