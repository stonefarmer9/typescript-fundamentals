// string, number, boolean, array, undefined, null, any

let firstName: string | null;
firstName = '12';

let age: number;
age = 45;

let hasPurchased = true;

let productNames: string[] = [];
productNames.push('Basketball');

let petCount: number[] = [];
petCount.push(5);

console.log(firstName, age, hasPurchased, productNames, petCount);

let productType = 'sports'; // homeGoods, grocery ("magic string")
if (productType === 'sports') {
  console.log('Found sports product type.');
}

// Using Enums
enum ProductType {
  Sports,
  HomeGoods,
  Groceries,
}
let pt = ProductType.Sports;
if (pt === ProductType.Sports) {
  console.log('Found sports product type.');
}

//MY COPY

// //string, number, boolean, array

// let firstName: string | null;

// firstName = "dave";

// let age: number;

// age = 34;

// let hasPurchased: boolean;

// hasPurchased = true;

// let productNames: string[] = ["ball", "racket", "foot"]

// let list = [] // infers any from empty array bracckets = NOT GOOD

// let numberList: number[] = []

// productNames.push('basket')

// numberList.push(77)

// let productType = 'sports';//trouble when we use homeGoods (note camelCasing), or grocery -> not sports so if below fails

// if(productType === 'sports') {
//     console.log('Founds sports')
// }

// const enum ProductType {
//     Sports,
//     HomeGoods,
//     Groceries
// }// making a const removes access to the string value of elements, but without conts we can access the strin Sports or HomeGoods instead of just the index position (0,1,2)

// let pt = ProductType.HomeGoods

// if(pt === ProductType.HomeGoods) {
//     console.log("Found HomeGoods")
// }
// console.log(ProductType.HomeGoods)
// console.log(firstName, age, hasPurchased, productNames, numberList)
