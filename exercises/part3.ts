// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

let spacecraftName: string = "Space Shuttle";
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;

// Code the "getDaysToLocation" function here:

function getDaysToLocation(kilometersAway: number): number {
    let milesAway: number = kilometersAway * milesPerKilometer;
    let hoursAway: number = milesAway / speedMph;
    return hoursAway / 24;
}

// Call the function and print the outputs for the Mars trip and the moon trip:
console.log(`It will take ${spacecraftName} ${getDaysToLocation(kilometersToMars)} days to reach Mars.`);
console.log(`It will take ${spacecraftName} ${getDaysToLocation(kilometersToTheMoon)} days to reach the Moon.`);