import { Product } from './interfaces';

//implements tells ProductBase to use the interface, tells it to make sure that the product interface is satisfied
abstract class ProductBase implements Product{ //abstract tells TS this is a building block class and can't be instantiated but can be used by child classes
  //constructor

  //public AKA auto implemented properties so we don't need above
  //private makes the id innaccessible and immutable as it can't be accessed
  constructor(public id: number, public name: string, public icon: string, private dataBaseId: string = '01A') {
    // Simple way of assigning data, good if data transformation is necessary
    // this.id = id;
    // this.name = name;
    // this.icon = icon;

    }
    validate() : boolean {
      throw new Error(
        'Not Implemented'
      )
    }
 };



export class FoodProduct extends ProductBase {
  //properties/fields
  // id = 0
  // name = '';
  // icon = '';

  //functions

  validate() : boolean {
    return !!this.id && !!this.name && !!this.icon
  }


}

// class SportingGoodsProduct extends ProductBase {
//   //gets all og ProductBases functions, constructor etc
//   constructor(id: number, name: string, icon: string) {
//     super(id, name, icon) // passes the constructor params upto the parent class (Product Base)
//   }
// }

