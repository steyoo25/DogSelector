import {Dog, hypoAllergy, newArray} from './dogObjects.js';
const enterBtn = document.querySelector("button") as HTMLButtonElement;

let list = new Array();


document.addEventListener("click", (event: MouseEvent) =>{

    let allergiesElm = document.querySelector("#allergies") as HTMLSelectElement;
    let allergies = allergiesElm.value;
    let kidsElm = document.querySelector("#kids") as HTMLSelectElement;
    let kids = kidsElm.value;
    let personalityElm = document.querySelector("#personality") as HTMLSelectElement;
    let personality = personalityElm.value;
    let weightRangeElm = document.querySelector("#weightRange") as HTMLSelectElement;
    let weightRange = weightRangeElm.value;
    let timeElm = document.querySelector("#time") as HTMLSelectElement;
    let time = timeElm.value;
    let costElm = document.querySelector("#cost") as HTMLSelectElement;
    let cost = costElm.value;
    let homeTypeElm = document.querySelector("#homeType") as HTMLSelectElement;
    let homeType = homeTypeElm.value;
    let trainingElm = document.querySelector("#training") as HTMLSelectElement;
    let training = trainingElm.value;
    let yardElm = document.querySelector("#yard") as HTMLSelectElement;
    let yard = yardElm.value;

    if (allergies){
        list = hypoAllergy
    } else {
        list = newArray
    }

    for (let i = 0; i < list.length; i ++){
        if (list[i].weight === weightRange){
            list[i].points += 30
        } 
        switch(true){
            case (cost === "more300"):
            case (cost === "between100300"): 
            case (cost === list[i].cost):
                list[i].points += 20
                break;
        }
        if (homeType == "house" || (homeType === list[i].aroh)) {
            list[i].points += 15
        }
        if (time === "coupleHrs" || time === "fewHrs" || time === list[i].time){
            list[i].points += 15
        }
        if (personality === "friendly" || personality === list[i].personality){
            list[i].points += 10
        }
        if (kids === "mature" || kids === "young" || kids === "false" || kids === list[i].){
            list[i].points += 5
        }
    }

})












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