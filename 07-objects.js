// 1       2
let zelda = {
    //3         //4
    name       :"Zelda",
    age        : 17,
    title      : "Princess",
    isCaptured : true
};


// dot (.) is an operator
// ObjectsName.propertyName

console.log(zelda);  //1 
console.log(zelda.name);  //2
console.log(zelda.age);  //3

// 1. Prints the whole object.
// 2. Prints the value of the name property.
// 3. Prints the value of the age property.

console.log(zelda.middleName); // undefined: middleName does not exist

let netflix = {
    name: "Sqiud Games",
    seasonInfo: {
        season1: {
            numberOfEpisodes: 9,
            episodeInfo: [
                {episode: 1, episodeName: "Red light, Green Light"},
                {epsiode: 2, episodeName: "Hell"},
            ],
        },
    },
};

console.log("All data:", netflix); //output: netflix object. All the data from above
console.log("Name of netflix Series:", netflix.name); //OUTPUT: Squid Games.
//Dot Notation - allows us to step into our object and grab data.
console.log("Season 1 of Squid Games, ")
console.log("First Episode Name:" ,netflix.seasonInfo.season1.episodeInfo[0].episodeName)
//Bracket Notation - used to step into arrays. Can be used in tandu  with Dot notation.

// ASSIGN NEW KEY TO OBJECTS USING DOT NOTATION
//SYNTAX: objectName.keyName.nameOfNewKey = value;
netflix.seasonInfo.totalSeasons = 8;
console.log(netflix.seasonInfo); //OUTPUT: newly added key inmy seasonInfo object

// JSON - JavaScript Object Notation
//used to send information from serves and clients and vise versa. JSON looks and acts like an object, but they are different. We can use dot and bracket notation to access the information within these "objects"

let sandlot = {
    kids: {
        kid1: "leader kid",
        kid2: "Smalls",
        kid3: "The jet",
        kid4: "Benny",
    },
    bullies: {
        0: "jerkface",
        1: "Wendy",
        2: "poopface",
        3: "Jason Funderburger",
    },
};

//Object.keys() method - this method returns an array of an object's keys.
console.log(Object.keys(sandlot.kids)); //OUTPUT: all the kids
console.log(Object.keys(sandlot.kids.kid1)); //OUTPUT: the indices of the string "leader kid".
// Object.values method - is a method that returns an array of a given object's value.
console.log(Object.values(sandlot.bullies)); //: The values of the values of the bullies