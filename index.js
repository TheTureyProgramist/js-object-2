const user = {
  name: "Dima",
  age: 13,
  friends: ['Olga', 'Tima', 'Comp', 'Turkeys', 'Mark'],
  premium: true,
  hobby: 'reading',
};
user.mood = "happy";
user.hobby = "drawing";
user.premium = false;
for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

function countBlactubocti(obj) {
   return Object.keys(obj).length;
}
console.log(countBlactubocti({
    name: "Kate",
    animal: 'Turkey',
    age: 0.7,
    hobby: "atack",
    enemies: 'UFO',
})); 

function findBestEmployee(employees) {
  let bestEmployee = "";
  let maxTasks = 0;
  for (const entry of Object.entries(employees)) {
    if (entry[1] > maxTasks) {
      maxTasks = entry[1];
      bestEmployee = entry[0];
    }
  }
  return bestEmployee;
}
console.log(
  findBestEmployee({
    Vlad: -5,
    Kate: 75,
    Carol: -0,
  })
); 

function alar(yees) {
  let tal = 0;
  for (const ary of Object.values(yees)) {
    tal += ary;
  }
  return tal;
}
console.log(
  alar({
    Ale: 5432856934,
    Coc: -7238952760,
    Log: 1463258926,
  })
); 

function getValues(arr, prop) {
  const values = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][prop] !== undefined) {
      values.push(arr[i][prop]);
    }
  }
  return values;
}
const products = [
  { name: "Cock", price: 500, quantity: 4 },
  { name: "PeaCock", price: 460, quantity: 6 },
  { name: "Turkey", price: 400, quantity: 5 },
];
console.log(getValues(products, "name")); 
console.log(getValues(products, "quantity")); 
console.log(getValues(products, "price")); 

function calculatePrice(allProducts, Name) {
  for (let i = 0; i < allProducts.length; i++) {
    if (allProducts[i].name === Name) {
      return allProducts[i].price * allProducts[i].quantity;
    }
  }
  return 0;
}
console.log(
  calculatePrice(products, "Phone")
);
