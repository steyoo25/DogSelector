"use strict";
exports.__esModule = true;
var dogObjects_js_1 = require("./dogObjects.js");
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
    if (allergies) {
        list = dogObjects_js_1.hypoAllergy;
    }
    else {
        list = dogObjects_js_1.newArray;
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
    for (var i = 0; i < list.length; i++) {
        if (list[i].points > max) {
            max = list[i].points;
            breedName = list[i].breedName;
        }
    }
    console.log(breedName);
}
enterBtn.onclick = getDog;
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
