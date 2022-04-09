var friendlyDog = {
    'allergy': true,
    'weight': [50, 80],
    'personality': 'friendly'
};
var aggressiveDog = {
    'allergy': false,
    'weight': [90, 100],
    'personality': 'aggressive'
};
var lazyDog = {
    'allergy': false,
    'weight': [60, 90],
    'personality': 'lazy'
};
var allDogs = [friendlyDog, aggressiveDog, lazyDog];
allDogs.forEach(function (elm) {
    console.log(elm);
});
