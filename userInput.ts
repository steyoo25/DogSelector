const enterBtn = document.querySelector("button") as HTMLButtonElement;



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