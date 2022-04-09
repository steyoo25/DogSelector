import * as fs from 'fs';
export class Dog {
    breedName : string;
    allergy : boolean;
    kidsAge : string;
    personality : string;
    size : string;
    time : string;
    cost : string;
    aorh : string;
    train : string;
    yard : string;
    point : number;

    constructor(breedName : string, allergy : boolean, kidsAge : string, personality : string, size : string, time : string, cost : string, aorh : string, train : string, yard : string,){
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
}

export let newArray : Object[] = new Array();
export let hypoAllergy : Object[] = new Array();

const file = fs.readFileSync('allDogs.txt','utf-8').split('\n');
file.forEach((line)=>{
    let l = line.split(';');
    for(let i = 0; i < l.length; i++){
        l[i] = l[i].trim();
    }
    let dogName : string = l[0];
    let allergy : boolean = Boolean(l[1]);
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
})

console.log(hypoAllergy);
console.log(newArray);
