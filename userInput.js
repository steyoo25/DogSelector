var DOGDICT = {
    Bulldog: 'images/bulldog.png',
    FrenchBulldog: 'images/frenchie.png',
    LabradorRetriever: 'images/lab.png',
    GermanShepherd: 'images/germanShepard.png',
    GoldenRetriever: 'images/goldenRetriever.png',
    ToyPoodle: 'images/toyPoodle.png',
    MiniaturePoodle: 'images/miniaturePoodle.png',
    Beagles: 'images/beagle.png',
    Rottweilers: 'images/blackdog.png',
    StandardPoodle: 'images/standardPoodle.png'
};
var weSuggest = document.querySelector('.suggested h2');
var img = document.querySelector('.suggested img');
var dogBreedText = document.querySelector('.suggested h3');
var desc = document.querySelector('.suggested .desc');
var urmom = document.querySelector('.suggested h4');
var Dog = /** @class */ (function () {
    function Dog(breedName, allergy, kidsAge, personality, size, time, cost, aorh, train, yard) {
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
    return Dog;
}());
var newArray = new Array();
var hypoAllergy = new Array();
var file = "LabradorRetriever;True;vYoung;friendly;medium;fewHrs;between100300;apartment;easy;big;\nGermanShepherd;True;young;aggressive;large;fewHrs;less100;house;easy;big;\nGoldenRetriever;True;vYoung;aggressive;medium;fewHrs;between100300;apartment;easy;big;\nFrenchBulldog;True;vYoung;friendly;vSmall;lessthan1hr;between100300;apartment;idc;smallNone;\nBulldog;True;young;friendly;medium;lessthan1hr;between100300;apartment;idc;smallNone;\nToyPoodle;False;vYoung;friendly;vSmall;fewHrs;less100;apartment;easy;smallNone;\nMiniaturePoodle;False;vYoung;aggressive;vSmall;fewHrs;between100300;apartment;easy;smallNone;\nStandardPoodle;False;vYoung;aggressive;medium;fewHrs;between100300;apartment;easy;big;\nBeagles;True;young;aggressive;small;fewHrs;between100300;house;easy;smallNone;\nRottweilers;True;young;aggressive;large;fewHrs;between100300;apartment;easy;big;".split('\n');
file.forEach(function (line) {
    var l = line.split(';');
    for (var i = 0; i < l.length; i++) {
        l[i] = l[i].trim();
    }
    var dogName = l[0];
    var allergy = l[1];
    var kidsAge = l[2];
    var personality = l[3];
    var size = l[4];
    var time = l[5];
    var cost = l[6];
    var aorh = l[7];
    var train = l[8];
    var yard = l[9];
    var dogObject = new Dog(dogName, allergy, kidsAge, personality, size, time, cost, aorh, train, yard);
    newArray.push(dogObject);
    if (allergy) {
        hypoAllergy.push(dogObject);
    }
});
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
    if (allergies === 'true') {
        list = hypoAllergy;
    }
    else {
        list = newArray;
    }
    for (var i = 0; i < list.length; i++) {
        if (list[i].weight === weightRange) {
            list[i].points += 35;
        }
        if (cost === list[i].cost) {
            list[i].points += 20;
        }
        if (homeType === list[i].aroh) {
            list[i].points += 15;
        }
        if (time === list[i].time) {
            list[i].points += 25;
        }
        if (personality === list[i].personality) {
            list[i].points += 20;
        }
        if (kids === list[i].kidsAge) {
            list[i].points += 15;
        }
        if (training === list[i].train) {
            list[i].points += 10;
        }
        if (yard === list[i].yard) {
            list[i].points += 5;
        }
    }
    var max = 0;
    var breedName = "";
    var breedNames = new Array();
    var pts = new Array();
    for (var i = 0; i < list.length; i++) {
        if (list[i].points > max) {
            max = list[i].points;
            breedName = list[i].breedName;
        }
        breedNames.push(breedName);
        pts.push(list[i].points);
        list[i].points = 0;
    }
    console.log(breedNames);
    console.log(pts);
    console.log(breedName);
    console.log(list);
    weSuggest.textContent = 'We Suggest You Get:';
    dogBreedText.textContent = breedName;
    if (breedName === "ToyPoodle") {
        img.src = "images/toyPoodle.png";
        desc.textContent = 'According to AKC.org, Poodles come in three size varieties: Standards should be more than 15 inches tall at the shoulder; Miniatures are 15 inches or under; Toys stand no more than 10 inches. All three varieties have the same build and proportions. At dog shows, Poodles are usually seen in the elaborate Continental clip. Most pet owners prefer the simpler Sporting clip, in which the coat is shorn to follow the outline of the squarely built, smoothly muscled body.  Forget any preconceived notions about Poodles you may have: Poodles are eager, athletic, and wickedly smart dogs of remarkable versatility. The Standard, with his greater size and strength, is the best all-around athlete of the family, but all Poodles can be trained with great success.';
    }
    else if (breedName === "MiniaturePoodle") {
        img.src = "images/miniaturePoodle.png";
        desc.textContent = "According to AKC.org, Poodles come in three size varieties: Standards should be more than 15 inches tall at the shoulder; Miniatures are 15 inches or under; Toys stand no more than 10 inches. All three varieties have the same build and proportions. At dog shows, Poodles are usually seen in the elaborate Continental clip. Most pet owners prefer the simpler Sporting clip, in which the coat is shorn to follow the outline of the squarely built, smoothly muscled body.  Forget any preconceived notions about Poodles you may have: Poodles are eager, athletic, and wickedly smart dogs of remarkable versatility. The Standard, with his greater size and strength, is the best all-around athlete of the family, but all Poodles can be trained with great success.";
    }
    else if (breedName === "StandardPoodle") {
        img.src = "images/standardPoodle.png";
        desc.textContent = "According to AKC.org, Poodles come in three size varieties: Standards should be more than 15 inches tall at the shoulder; Miniatures are 15 inches or under; Toys stand no more than 10 inches. All three varieties have the same build and proportions. At dog shows, Poodles are usually seen in the elaborate Continental clip. Most pet owners prefer the simpler Sporting clip, in which the coat is shorn to follow the outline of the squarely built, smoothly muscled body.  Forget any preconceived notions about Poodles you may have: Poodles are eager, athletic, and wickedly smart dogs of remarkable versatility. The Standard, with his greater size and strength, is the best all-around athlete of the family, but all Poodles can be trained with great success.";
    }
    else if (breedName === "FrenchBulldog") {
        img.src = "images/frenchie.png";
        desc.textContent = "According to AKC.org, The one-of-a-kind French Bulldog, with his large bat ears and even disposition, is one of the world's most popular small-dog breeds, especially among city dwellers. The Frenchie is playful, alert, adaptable, and completely irresistible. The French Bulldog resembles a Bulldog in miniature, except for the large, erect 'bat ears' that are the breed's trademark feature. The head is large and square, with heavy wrinkles rolled above the extremely short nose. The body beneath the smooth, brilliant coat is compact and muscular. The bright, affectionate Frenchie is a charmer. Dogs of few words, Frenchies don't bark much'¿but their alertness makes them excellent watchdogs. They happily adapt to life with singles, couples, or families, and do not require a lot of outdoor exercise. They get on well with other animals and enjoy making new friends of the human variety. It is no wonder that city folk from Paris to Peoria swear by this vastly amusing and companionable breed.";
    }
    else if (breedName === "GermanShepard") {
        img.src = "images/germanShepard.png";
        desc.textContent = "According to AKC.org, Generally considered dogkind's finest all-purpose worker, the German Shepherd Dog is a large, agile, muscular dog of noble character and high intelligence. Loyal, confident, courageous, and steady, the German Shepherd is truly a dog lover's delight. German Shepherd Dogs can stand as high as 26 inches at the shoulder and, when viewed in outline, presents a picture of smooth, graceful curves rather than angles. The natural gait is a free-and-easy trot, but they can turn it up a notch or two and reach great speeds. There are many reasons why German Shepherds stand in the front rank of canine royalty, but experts say their defining attribute is character: loyalty, courage, confidence, the ability to learn commands for many tasks, and the willingness to put their life on the line in defense of loved ones. German Shepherds will be gentle family pets and steadfast guardians, but, the breed standard says, there's a 'certain aloofness that does not lend itself to immediate and indiscriminate friendships.'";
    }
    else if (breedName === "Beagles") {
        img.src = "images/beagle.png";
        desc.textContent = "According to AKC.org, Not only is the Beagle an excellent hunting dog and loyal companion, it is also happy-go-lucky, funny, and thanks to its pleading expression. They were bred to hunt in packs, so they enjoy company and are generally easygoing. There are two Beagle varieties: those standing under 13 inches at the shoulder, and those between 13 and 15 inches. Both varieties are sturdy, solid, and 'big for their inches,’ as dog folks say. They come in such pleasing colors as lemon, red and white, and tricolor. The Beagle's fortune is in his adorable face, with its big brown or hazel eyes set off by long, houndy ears set low on a broad head. A breed described as 'merry' by its fanciers, Beagles are loving and lovable, happy, and companionable', all qualities that make them excellent family dogs. No wonder that for years the Beagle has been the most popular hound dog among American pet owners. These are curious, clever, and energetic hounds who require plenty of playtime.";
    }
    else if (breedName === "LabradorRetriever") {
        img.src = "images/lab.png";
        desc.textContent = "According to AKC.org, According to AKC.org, The sweet-faced, lovable Labrador Retriever is America's most popular dog breed. Labs are friendly, outgoing, and high-spirited companions who have more than enough affection to go around for a family looking for a medium-to-large dog. The sturdy, well-balanced Labrador Retriever can, depending on the sex, stand from 21.5 to 24.5 inches at the shoulder and weigh between 55 to 80 pounds. The dense, hard coat comes in yellow, black, and a luscious chocolate. The head is wide, the eyes glimmer with kindliness, and the thick, tapering 'otter tail' seems to be forever signaling the breed's innate eagerness. Labs are famously friendly. They are companionable housemates who bond with the whole family, and they socialize well with neighbor dogs and humans alike. But don't mistake his easygoing personality for low energy: The Lab is an enthusiastic athlete that requires lots of exercise, like swimming and marathon games of fetch, to keep physically and mentally fit.";
    }
    else if (breedName === "Bulldog") {
        img.src = "images/bulldog.png";
        desc.textContent = "According to AKC.org, American Bulldogs are a well-balanced athletic dog that demonstrate great strength, endurance, agility, and a friendly attitude. Historically, they were bred to be a utility dog used for working the farm. The American Bulldog is a descendant of the English Bulldog. It is believed that the bulldog was in America as early as the 17th century. They came to the United States in the 1800s, with immigrants who brought their working bulldogs with them. Small farmers and ranchers used this all-around working dog for many tasks including farm guardians, stock dogs, and catch dogs. The breed largely survived, particularly in the southern states, due to its ability to bring down and catch feral pigs. The breed we know as the American Bulldog was originally known by many different names before the name American Bulldog became the standard. In different parts of the South he was known as the White English Southern Bulldog, but most commonly just 'bulldog'. The breed was not called a bulldog because of a certain look, but because they did real bulldog work.";
    }
    else if (breedName === "Rottweilers") {
        img.src = 'images/blackdog.png';
        desc.textContent = "According to AKC.org, The Rottweiler is a robust working breed of great strength descended from the mastiffs of the Roman legions. A gentle playmate and protector within the family circle, the Rottie observes the outside world with a self-assured aloofness. A male Rottweiler will stand anywhere from 24 to 27 muscular inches at the shoulder; females run a bit smaller and lighter. The glistening, short black coat with smart rust markings add to the picture of imposing strength. A thickly muscled hindquarters powers the Rottie's effortless trotting gait. A well-bred and properly raised Rottie will be calm and confident, courageous but not unduly aggressive. The aloof demeanor these world-class guardians present to outsiders belies the playfulness, and downright silliness, that endear Rotties to their loved ones. (No one told the Rottie he's not a toy breed, so he is liable plop onto your lap for a cuddle.) Early training and socialization will harness a Rottie's territorial instincts in a positive way.";
    }
    else if (breedName === "GoldenRetriever") {
        img.src = 'images/goldenRetriever.png';
        desc.textContent = "According to AKC.org, The Golden Retriever, an exuberant Scottish gundog of great beauty, stands among America's most popular dog breeds. They are serious workers at hunting and field work, as guides for the blind, and in search-and-rescue, enjoy obedience and other competitive events, and have an endearing love of life when not at work. The Golden Retriever is a sturdy, muscular dog of medium size, famous for the dense, lustrous coat of gold that gives the breed its name. The broad head, with its friendly and intelligent eyes, short ears, and straight muzzle, is a breed hallmark. In motion, Goldens move with a smooth, powerful gait, and the feathery tail is carried, as breed fanciers say, with a 'merry action.' The most complete records of the development of the Golden Retriever are included in the record books that were kept from 1835 until about 1890 by the gamekeepers at the Guisachan (pronounced Gooeesicun) estate of Lord Tweedmouth at Inverness-Shire, Scotland. These records were released to public notice in Country Life in 1952, when Lord Tweedmouth's great-nephew, the sixth Earl of Ilchester, historian and sportsman, published material that had been left by his ancestor. They provided factual confirmation to the stories that had been handed down through generations. Goldens are outgoing, trustworthy, and eager-to-please family dogs, and relatively easy to train. They take a joyous and playful approach to life and maintain this puppyish behavior into adulthood. These energetic, powerful gundogs enjoy outdoor play. For a breed built to retrieve waterfowl for hours on end, swimming and fetching are natural pastimes. ";
    }
}
enterBtn.onclick = getDog;
