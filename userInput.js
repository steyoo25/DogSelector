"use strict";
exports.__esModule = true;
var enterBtn = document.querySelector("button");
document.addEventListener("click", function (event) {
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
});
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
