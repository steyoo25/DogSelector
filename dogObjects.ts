import * as fs from 'fs';
class Dog {
    breedName : string;
    allergy : boolean;
    weight : Number[];
    personality : string;
    point : number;

    constructor(breedName : string, allergy : boolean, weight : Number[], personality : string){
        this.breedName = breedName;
        this.allergy = allergy;
        this.weight = weight;
        this.personality = personality;
        this.point = 0;
    }
}

let newArray : Object[] = new Array();
const file = fs.readFileSync('allDogs.txt','utf-8').split('\n');
file.forEach((line)=>{
    let l = line.split(';');
    let dogName : string = l[0].trim();
    let allergy : boolean = Boolean(l[1].trim());
    let weightRange : Number[] = [Number(l[2].split(',')[0]),Number(l[2].split(',')[1])];
    let personality : string = l[3].trim();
    let dogObject = new Dog(dogName, allergy, weightRange, personality);
    newArray.push(dogObject);
})

<<<<<<< HEAD:dogObjects.ts
console.log(newArray);
=======
console.log(newArray);


>>>>>>> 370789feee9aa5672253d15036f78c4ee627cf28:algorithm.ts
