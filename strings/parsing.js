"use strict"


function parseAndDisplayName(someName) {


    //create a variable to hold the first name
    let fullName = someName;

    //find the pisition of the first space
    let spacePosition = fullName.indexOf(" ");

    //create variables for the first and last name

    //for the first name we start at position 0 and go to the space,
    //since it does not include the character in the last position, we get the first name
    let firstName = fullName.substring(0, spacePosition);

    //if we start at the space position and do not supply and ending position, it
    //gives us the characters from the space until the end.
    //since we dont want the space, we add to the starting to move us past the space
    let lastName = fullName.substring(spacePosition + 1);

    //use console.log to display the information to the user in the console
    console.log(`
    Name: ${fullName}
    First name: ${firstName}
    Last name: ${lastName}
    `)

}


parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");