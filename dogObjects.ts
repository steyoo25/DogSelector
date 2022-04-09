import * as fs from 'fs';
export class Dog {
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

export let newArray : Object[] = new Array();

export let hypoAllergy : Object[] = new Array();



const file = fs.readFileSync('allDogs.txt','utf-8').split('\n');
file.forEach((line)=>{
    let l = line.split(';');
    let dogName : string = l[0].trim();
    let allergy : boolean = Boolean(l[1].trim());
    let weightRange : Number[] = [Number(l[2].split(',')[0]),Number(l[2].split(',')[1])];
    let personality : string = l[3].trim();
    let dogObject = new Dog(dogName, allergy, weightRange, personality);
    newArray.push(dogObject);
    if (allergy){
        hypoAllergy.push(dogObject)
    }
})
<<<<<<< HEAD

console.log(hypoAllergy)
console.log(newArray);


=======
>>>>>>> f5580e6b3fcec89f1051ba9b66b707f0e29b9df5
