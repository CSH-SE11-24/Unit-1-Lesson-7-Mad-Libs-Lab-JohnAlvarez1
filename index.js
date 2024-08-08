// Console log a welcome message with instructions to mad libs
console.log(`Mad Libs Welcome in this game the player would recieve a list of words and they woud have to come up with words that matches the part of the speech.`)


// Prompt the user to enter parts of speech for mad libs
// You should be asking for at least 4 words
let Adjective = prompt(`Please type one Adjective`)
let PluralNoun = prompt(`Please type one Plural Noun`)
let Verb = prompt(`Please type one Plural Verb`)
let Adjective2 = prompt(`Please type one another Adjective`)

// Create an array that stores the values the user entered
let UserValue = []

UserValue.push(Adjective, PluralNoun, Verb, Adjective2)
console.log(UserValue)
// Console log the story with the array values passed into the blanks
// Make sure you are referencing the values of the array (rather than the user inputs themselves)
// You can use any type of string manipulation that feels more intuitive

console.log(`In a small ${UserValue[0]} school in the Bronx, there was a problem with too many ${UserValue[1]} These ${UserValue[1]} loved to ${UserValue[2]} which caused Mr. P so many headaches. However, no one wanted to remove them because they were too ${UserValue[3]} so they stayed there forever.
`)






