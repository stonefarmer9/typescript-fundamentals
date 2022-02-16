import { productsURL } from '../lib';

const prefix = '🐉 ';

type ProductType = {
  id: number;
  name: string;
  icon?: string;
};

export default async function updateOutput(id: string) {
  const products = await getProducts();
  const outPut = document.querySelector(`${id}`);
  const html = layoutProducts(products);

  if (output && html) {
    output.innerHTML = html;
  }
}

async function getProducts(): Promise<ProductType[]> {
  const response: Response = await fetch(productsURL);
  const products: ProductType[] = await response.json();
  return products;
}

function layoutProducts(products: ProductType[]) {
  const items = products.map(({ id, name, icon }) => {
    //note destructured arguments
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

runTheLearningSamples();

function runTheLearningSamples() {
  function displayProductInfo(id: number, name: string) {
    console.log(`${prefix} typed parameters`);
    console.log(`product id=${id} and name =${name}`);
  }
  displayProductInfo(10, 'Pizza');

  console.log(`${prefix} function declaration`);
  console.log(addNumberDeclaration(7, 11));

  function addNumberDeclaration(x: number, y: number): number {
    const sum: number = x + y;
    return sum;
  }

  const addNumbersExpression = function (x: number, y: number): number {
    const sum: number = x + y;
    return sum;
  };

  console.log(`${prefix} Function expression`);
  console.log(addNumbersExpression(7, 11));

  const sampleProducts = [
    {
      id: 10,
      name: 'Pizza Slice',
      icon: 'fas fa-pizza-slice',
    },
    {
      id: 20,
      name: 'Ice Cream',
      icon: 'fas fa-ice-cream',
    },
    {
      id: 30,
      name: 'Cheese',
      icon: 'fas fa-cheese',
    },
  ];

  function getProductNames(): string[] {
    return sampleProducts.map((product) => product.name);
  }

  console.log(`${prefix} return array`);
  console.log(getProductNames());

  function getProductById(id: number): ProductType | undefined {
    return sampleProducts.find((product) => id === product.id);
  }

  console.log(`${prefix} return ProductType`);
  console.log(getProductById(10));

  function displayProducts(products: ProductType[]): void {
    const productNames = products.map((product: ProductType) => {
      const name = product.name.toLowerCase();
      return name;
    });

    const msg = `Sample products include: ${productNames.join(', ')}`;

    console.log(`${prefix} return void`);
    console.log(msg);
  }
  displayProducts(sampleProducts);

  const { floor, random } = Math; //More destructuring
  const getRandomInt = (max: number = 1000) => floor(random() * max);

  function createProduct(name: string, icon?: string): ProductType {
    const id = getRandomInt();
    return {
      id,
      name,
      icon,
    };
  }
  console.log(`${prefix} optional params`);
  let pineapple = createProduct('pineapple', 'pine-apple.jpg');
  let mango = createProduct('mango');
  console.log(pineapple, mango);

  function createProductWithDefault(
    name: string,
    icon: string = 'generic-fruit.jpg',
  ): ProductType {
    const id = getRandomInt();
    return {
      id,
      name,
      icon,
    };
  }
  console.log(`${prefix} default params`);
  pineapple = createProductWithDefault('pineapple', 'pine-apple.jpg');
  mango = createProductWithDefault('mango');
  console.log(pineapple, mango);

  function buildAddress(
    street: string,
    city: string,
    ...restOfAddress: string[]
  ) {
    //any extra param is addded to restofaddress array
    const address = `${street} ${city} ${restOfAddress.join(' ')}`;
    return address;
  }

  const someAddress = buildAddress(
    '1 Loise Lane', //street
    'smallville', // city
    'apt 101', // restOfAddress[0]
    'area 51', // restOfAddress[1]
    'mystery country', // restOfAddress[2]
  );
  console.log(
    `${prefix} Rest params, as in Rest of the params which aren't necessary but might appear`,
  );
  console.log(someAddress);

  function displayProduct({ id, name }: ProductType): void {
    console.log(`${prefix} destructuirng params/objects`);
    console.log(`Product:${id} ${name}`);
  }
  const prod = getProductById(10);
  if (prod) {
    displayProduct(prod);
  }
}
