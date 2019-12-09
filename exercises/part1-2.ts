// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

// Part 1: Add the 5 variables here
const spacecraftName: string = "Determination";
const speedMph: number = 17500;
const kilometersToMars: number = 225000000;
const kilometersToTheMoon: number = 384400;
const milesPerKilometer: number = .621;

// Code part 2 here:
const milesToMars: number = kilometersToMars * milesPerKilometer;
const hoursToMars: number = milesToMars / speedMph;
const daysToMars: number = hoursToMars / 24;

// Code the output statement here (use a template literal):
console.log(`It will take ${spacecraftName} ${daysToMars} days to reach Mars.`);
