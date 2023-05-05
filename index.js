//Import of coffee_data.js
const coffeeMenu = require("./coffee_data");




const names = coffeeMenu.map(drink=>drink.name)
console.log(names)

const belowFive = coffeeMenu.filter(drink =>drink.price<=5)
console.log(belowFive)



//Prints drinks with even prices
const evenPrice = coffeeMenu.filter(drink =>drink.price%2===0);
console.log(evenPrice)




//Prints the price if every drink is ordered
const totalPrice = coffeeMenu.reduce((acc,drink)=>acc+drink.price,0);
console.log(totalPrice)

// //Seasonal drinks
// let "affogato, 'cuban espresso'" = (seasonal)


// const inSeasonal = (item) =>  {
//     return item.seasonal == true;
// };



// const seasonalDrink = coffeeMenu.filter(inSeasonal)

// //Prints seasonal drinks with the phrase
// const name = (seasonalDrink) => {
// }
// console.log(seasonalDrink.map(name))