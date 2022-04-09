// import {hypoAllergy, newArray} from './dogObjects.js';
class Dog {
    breedName : string;
    allergy : string;
    kidsAge : string;
    personality : string;
    size : string;
    time : string;
    cost : string;
    aorh : string;
    train : string;
    yard : string;
    points : number;

    constructor(breedName : string, allergy : string, kidsAge : string, personality : string, size : string, time : string, cost : string, aorh : string, train : string, yard : string,){
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
}

let newArray : Object[] = new Array();
let hypoAllergy : Object[] = new Array();

const file = `LabradorRetriever;True;vYoung;friendly;medium;fewHrs;between100300;apartment;easy;big;\nGermanShepherd;True;young;aggressive;large;fewHrs;less100;house;easy;big;\nGoldenRetriever;True;vYoung;aggressive;medium;fewHrs;between100300;apartment;easy;big;\nFrenchBulldog;True;vYoung;friendly;vSmall;lessthan1hr;between100300;apartment;idc;smallNone;\nBulldog;True;young;friendly;medium;lessthan1hr;between100300;apartment;idc;smallNone;\nToyPoodle;False;vYoung;friendly;vSmall;fewHrs;less100;apartment;easy;smallNone;\nMiniaturePoodle;False;vYoung;aggressive;vSmall;fewHrs;between100300;apartment;easy;smallNone;\nStandardPoodle;False;vYoung;aggressive;medium;fewHrs;between100300;apartment;easy;big;\nBeagles;True;young;aggressive;small;fewHrs;between100300;house;easy;smallNone;\nRottweilers;True;young;aggressive;large;fewHrs;between100300;apartment;easy;big;`.split('\n');
file.forEach((line)=>{
    let l = line.split(';');
    for(let i = 0; i < l.length; i++){
        l[i] = l[i].trim();
    }
    let dogName : string = l[0];
    let allergy : string = l[1];
    let kidsAge : string = l[2];
    let personality : string = l[3];
    let size : string = l[4];
    let time : string = l[5];
    let cost : string = l[6];
    let aorh : string = l[7];
    let train : string = l[8];
    let yard : string = l[9];
    let dogObject = new Dog(dogName, allergy, kidsAge, personality, size, time, cost, aorh, train, yard);
    newArray.push(dogObject);
    if (allergy){
        hypoAllergy.push(dogObject)
    }
});

const enterBtn = document.querySelector("button") as HTMLButtonElement;

let list = new Array();

function getDog(){    
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

    if (allergies==='true'){
        list = hypoAllergy
    }
    else {
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
        if (kids === "mature" || kids === "young" || kids === "false" || kids === list[i].kidsAge){
            list[i].points += 5
        }
        if (training === "idc" || training === list[i].train) {
            list[i].points += 3
        }
        if (yard === "big" || yard === list[i].yard){
            list[i].points += 2
        }
    }
    let max : number = 0;
    let breedName : string = "";
    let breedNames : String[] = new Array();
    let pts : Number[] = new Array();
    for (let i = 0; i < list.length; i ++){
        if (list[i].points > max){
            max = list[i].points
            breedName = list[i].breedName
        }
        breedNames.push(list[i].breedName)
        pts.push(list[i].points)
    }
    console.log(breedName)
    console.log(list)
    console.log(breedNames)
    console.log(pts);
}

enterBtn.onclick = getDog;