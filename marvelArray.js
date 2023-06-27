const xmenArray = [
    {
        name: "Wolverine",
        age: 40,
        gender: "Male",
        power: "regeneration"
    },
    {
        name: "Deadpool",
        age: 50,
        gender: "Male",
        power: "deagles"
    },
    {
        name: "Storm",
        age: 27,
        gender: "female",
        power: "caster"
    },
    {
        name: "Spiderman",
        age: 18,
        gender: "Male",
        power: "webs"
    }
];

const avengersArrays = [
    {
        name: "Wolverine",
        age: 40,
        gender: "Male",
        power: "regeneration"
    },
    {
        name: "Ironman",
        age: 45,
        gender: "Male",
        power: "suits"
    },
    {
        name: "Spiderman",
        age: 18,
        gender: "Male",
        power: "webs"
    }
];

const grupoXmen = xmenArray.filter(xmen => xmen.age === 18);
const grupoAvengers = avengersArrays.filter(avengers => avengers.power === "webs");


console.log(grupoXmen);
console.log(grupoAvengers);
