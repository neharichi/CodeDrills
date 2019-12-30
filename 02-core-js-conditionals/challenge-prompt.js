// More Practice with Variables and Conditionals


// Character One

// make a variable called `characterOneName` and assign it to be a string of "Mr. Farley"
var characterOneName = "Mr. Farley";

// assign a new value "Ms. Farley" to the variable `characterOneName`
var characterOneName = "Ms. Farley";


// make a new variable `characterOneAge` and assign it an age of your choice
var characterOneAge = 34;

// reassign the variable `characterOneAge` to be the integer 6
var characterTwoAge = 6;

// make a variable called `characterOneSalary` and assign it to be the number 100000.00
var characterOneSalary = 100000.00;

// make a variable called `characterOneProfession` and assign it a value of "Web Developer"
var characterOneProfession = "Web Developer";

// make a variable called `characterOneSpecies` and assign it a value of "cat"
var characterOneSpecies = "cat";

// make a variable called `characterOneLocation` and assign it a value of "San Francisco, CA"
var characterOneLocation = "San Francisco, CA";

// make a variable called `characterOneRent` and assign it to be the number 2000.00
var characterOneRent = 2000.00;

// make a variable called `characterOneExpenses` and assign it to be the number 1500.00
var characterOneExpenses = 1500.00;


// make a variable called `characterOneYearlyRent` and assign it to be 12 times `characterOneRent`
var characterOneYearlyRent = 12*characterOneRent;

// make a variable called `characterOneYearlyExpenses` and assign it to be 12 times `characterOneExpenses`
var characterOneYearlyExpenses = 12*characterOneExpenses;

// make a variable called `characterOneYearlySavings` and assign it to be what remains of character one's salary after removing both the yearly rent and the yearly expenses
// hint: much like in math, you can use parenthesis to define order of operations

var characterOneYearlySavings = characterOneSalary - characterOneYearlyRent - characterOneYearlyExpenses;

// Character Two

// make a variable called `characterOneName` and assign it to be a string of "Mr. Snuggles"
var characterOneName = "Mr. Snuggles";

// make a new variable ``characterOneAge`` and assign it to be the number 8
//var characterOneAge = 8;

// make a variable called `characterTwoProfession` and assign it a value of "Accountant"
var haracterTwoProfession = "Accountant";

// make a variable called `characterTwoSpecies` and assign it a value of "mouse"
var characterTwoSpecies = "mouse";

// make a variable called `characterTwoLocation` and assign it a value of "Oakland, CA"
var characterTwoLocation = "Oakland, CA";

// make a variable called characterTwoRent and assign it to be the number 4000.00
var characterTwoRent = 4000.00;

// make a variable called characterTwoSalary and assign it to be the number 90000.00
var characterTwoSalary = 90000.00;


// make a variable called characterTwoExpenses and assign it to be the number 500.00
var characterTwoExpens = 500.00;

// make a variable called `characterTwoYearlyRent` and assign it to be 12 times `characterTwoRent`
var characterTwoYearlyRent = 12*characterTwoRent;

// make a variable called `characterTwoYearlyExpenses` and assign it to be 12 times `characterTwoExpenses`
var characterTwoYearlyExpenses = 12*characterTwoExpens;

// make a variable called `characterTwoYearlySavings` and assign it to be what remains of character two's salary after removing both the yearly rent and the yearly expenses
var characterTwoYearlySavings = characterTwoSalary - (characterTwoYearlyRent + characterTwoYearlyExpenses);


// Conditionals

// Create an if statement to check if `characterOneName` is "Mr. Farley"
var characterOneName = "Mr. Farley";


    // If it does, console log "hello Mr. Farley"
if (characterOneName ==="Mr. Farley"){
    
// Else, check if `characterOneName` is "Ms.Farley"
console.log("hello Mr. Farley");
}

    // If it does, console log "hello Ms. Farley"
    console.log("hello Ms. Farley");
    
// Else, we know if the code reaches this point that `characterOneName` is neither "Mr. Farley" nor "Ms. Farley"

{
    // So console.log "Hello stranger"
    console.log("hello stranger");
}


    

    


// Create an if statement to check if `characterOneAge` is greather than `characterTwoAge`
if(characterOneAge > characterTwoAge){

    // If it is, console log `characterOneName` prepended to the string " is older"
    console.log(characterOneName + " is older");
    
// Else, console log `characterTwoName` prepended to the string " is older"
} else {
    console.log(characterTwoName + " is older");
}
    




// Create an if statement to check if `characterOneLocation` is equal to "San Francisco" and if `characterTwoLocation` is equal to "New York"
// hint: You can join two conditionals together using `&&` to signify the `AND` logical operator
//       This means that both conditionals on either side of the `&&` have to be true in order for the two combined to be true
if((characterOneLocation === "San Francisco") && (characterTwoLocation === "New York")) {
    console.log("Cross Country Friends!");

}

    

    
// Else, console log "Local Friends!"
 else {
    console.log("Local Friends!");
}



// Create an if statement to check if `characterOneYearlySavings` is greater than `characterTwoYearlySavings`

if (characterOneYearlySavings > characterTwoYearlySavings) {
    // If it is, console log `characterOneName` prepended to the string " is a high roller!"
    console.log(characterOneName + " is a high roller!");
    
// Else, console log `characterTwoName` prepended to the string " is a high roller!"

} else {
    console.log(characterTwoName + " is a high roller!");
}


// Create an if statement to check if `characterOneProfession` is equal to "Web Developer" or if `characterTwoProfession` is equal to "Data Analyst"
// hint: You can join two conditionals together using `||` to signify the `OR` logical operator
//       This means that if at least one conditional on either side of the `||` is true, the combined conditional will also be true
if (characterOneProfession === "Web Developer" || characterTwoProfession === "Data Analyst"){

    // If one of them is true, console log "Hey look! One of them is in the tech industry!"
    console.log("Hey look! One of them is in the tech industry!");
    
// Else, console log "Aww, I wanted to meet someone in tech :("
} else {
    console.log("Aww, I wanted to meet someone in tech :(");
}




