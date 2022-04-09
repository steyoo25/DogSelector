import * as fs from 'fs';

fs.readFile('allDogs.txt','utf-8',(err,data)=>{
    if (err) throw err;
    let dogs : string[] = data.split('\n');
    dogs.forEach((line)=>{
        console.log(line);
        console.log('OISDJFOSDJIFJSDIOFJDOIJDSIOFJOIF');
    });
});

class Dog {
    allergy : boolean;
    weight : Number[];
    personality : string;

    constructor(allergy : boolean, weight : Number[], personality : string){
        this.allergy = allergy;
        this.weight = weight;
        this.personality = personality;
    }
}

let dog1 = new Dog(true,[50,50],'aggressive');