let distance = 8;
const rateFirst5Km = 10;
const rateAfter5Km = 8;
let fare;
if (distance<= 5){
    fare = distance * rateFirst5Km;
}else {
    let first5KmFare = 5 * rateFirst5Km;
    let remainingDistanceFare = (distance - 5) * rateAfter5Km;
    fare = first5KmFare + remainingDistanceFare;
}
console.log("Fare =", fare);