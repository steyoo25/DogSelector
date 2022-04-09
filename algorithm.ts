import * as fs from 'fs';
class Dog {
    breedName : string;
    allergy : boolean;
    weight : Number[];
    personality : string;

    constructor(breedName : string, allergy : boolean, weight : Number[], personality : string){
        this.breedName = breedName;
        this.allergy = allergy;
        this.weight = weight;
        this.personality = personality;
    }
}
let newArray : Object[] = new Array();
let secondArray : Object = 0;
fs.readFile('allDogs.txt','utf-8',(err,data)=>{
    if (err) throw err;
    let dogs : string[] = data.split('\n');
    dogs.forEach((line)=>{
        let l = line.split(';');
        let dogName : string = l[0].trim();
        let allergy : boolean = Boolean(l[1].trim());
        let weightRange : number[] = [Number(l[2].split(',')[0]),Number(l[2].split(',')[1])];
        let personality : string = l[3].trim();
        let dogObject = new Dog(dogName, allergy, weightRange, personality);
        newArray.push(dogObject);
    });
    console.log(newArray);
});
