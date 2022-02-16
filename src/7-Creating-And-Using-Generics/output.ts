import { productsURL, FoodProduct, customersURL } from '../lib';

const prefix = '🐉 ';

interface HasId {
  id: number;
}
// This is a class using generics, we could use this to create a customer as well as a product
// Extends hasId is a constraint - a good thing - this tells the class that any type passed to it will have an ID as the class itself doesn't create/assign an id. 
//  This means an error will be thrown if you pass a type without an ID
class GenericModel<T extends HasId> {
  public items: T[] | undefined;
  constructor(public url: string) {}

  async getItems(): Promise<T[]> {
    this.items = await getList<T>(this.url);
    return this.items;
  }

  getItemById(id: number): T | undefined {
    return this.items ? this.items.find((p) => id === p.id) : undefined;
  }
}

const foodModel = new GenericModel<FoodProduct>(productsURL);

export default async function updateOutput(id: string = 'output') {
  // const products = await getProducts();
  // const products = await getList<FoodProduct>(productsURL);
  const products = await foodModel.getItems();

  const output = document.querySelector(`#${id}`);
  const html = layoutProducts(products);

  if (output && html) {
    output.innerHTML = html;
  }
}

function layoutProducts(products: FoodProduct[]): string {
  const items = products.map(({ id, name, icon }) => {
    const productHtml = `
    <span class="card-id">#${id}</span>
      <i class="card-icon ${icon} fa-lg"></i>
    <span class="card-name">${name}</span>
    `;
    const cardHtml = `
    <li>
        <div class="card">
            <div class="card-content">
                <div class="content">
                ${productHtml}
                </div>
            </div>
        </div>
    </li>
    `;
    return cardHtml;
  });
  let productsHtml = `<ul>${items.join('')}</ul>`;
  return productsHtml;
}

async function getProducts(): Promise<FoodProduct[]> {
  const response: Response = await fetch(productsURL);
  const products: FoodProduct[] = await response.json();
  return products;
}

async function getList<T>(url: string): Promise<T[]> {
  const response: Response = await fetch(url);
  const items: T[] = await response.json();
  return items;
}

/************************************************
 * Learning sample code.
 ***********************************************/

runTheLearningSamples();

async function runTheLearningSamples() {
  function whatIsIt_number(arg: number) : number {
    return arg
  }
  function whatIsIt_String(arg: string) : string {
    return arg
  }
  console.log(`${prefix} Generics overview`)
  console.log(whatIsIt_number(20))
  console.log(whatIsIt_String('John'))

  function whatIsIt_Typed<T>(arg: T): T {
    return arg;
  } //This fxn expects a type passed in as an argument often used as T 
  let n: number = whatIsIt_Typed<number>(11) //we are telling it we will pass a numnber with <number> tells the function both input and return should be a number
  let s: string = whatIsIt_Typed<string>('John')
  let b: boolean = whatIsIt_Typed<boolean>(true)
  console.log(n, s, b)
  interface Customer {
    id: number,
    name: string
  }

  async function getData() {
    const products = await getList<FoodProduct>(productsURL);// Examples of using generics with a function
    const customers = await getList<Customer>(customersURL);

    console.log(`${prefix} Generics overview`)
    console.table(products)
    console.table(customers)
  }
  await getData()
//Generic Interface
  interface Model<T> {
    items: T[] | undefined;
    getItems: () => Promise<T[]>;
    getItemsById: (id: number) => T | undefined;
  }

  class FoodModel implements Model<FoodProduct> {
   public items: FoodProduct[] | undefined;
    async getItems() : Promise<FoodProduct[]> {
      this.items = await getList<FoodProduct>(productsURL);
      return this.items;
    }
    getItemsById(id: number): FoodProduct | undefined {
      return this.items ? this.items.find((item) => id = item.id) : undefined; 
    }
    
  }
// We have created a generic interface that can be used as a Model for T, we could use this Interface to make a  customer class by changing the product stuff to customer stuff. 
  const foodModel: FoodModel = new FoodModel()
  await foodModel.getItems();
  console.log(`${prefix} Generic interface`)
  console.table(foodModel.items)

  const genericFoodModel = new GenericModel<FoodProduct>(productsURL);
  const genericCustomerModel = new GenericModel<Customer>(customersURL);

  await genericFoodModel.getItems();
  await genericCustomerModel.getItems();
// We have just used the same class using generics to create two different instances that share a data structure without needing a second class

  console.log(`${prefix} Generic Class `)
  console.table(genericFoodModel.items)
  console.table(genericCustomerModel.items)

  const model: FoodModel = new FoodModel();
  await model.getItems();
  const foodItem: Readonly <FoodProduct | undefined> = model.getItemsById(10); //Readonly makes the foodItem object immutable so the if won't work
  // if (foodItem) {
  //   foodItem.name = " default "
  //   foodItem.icon = " some icon "
  // }

  const pear = {name: 'pear'};
  // const pearFood: FoodProduct = pear;
  const pearFood: Partial<FoodProduct> = pear; // can use parts of the type but does not need all of them, creates a partial instance for when you only have some data and will get the rest later. 

}
