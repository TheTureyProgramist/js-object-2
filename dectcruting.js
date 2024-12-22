const user = {
  name: "Dima",
  age: 13,
  friends: ['Olga', 'Tima', 'Comp', 'Turkeys', 'Mark'],
  premium: true,
  hobby: 'reading',
};

const { name, age, friends, premium, hobby } = user;

user.mood = "happy";
user.hobby = "drawing";
user.premium = false;

for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

function countBlackObjects(obj) {  
  return Object.keys(obj).length;
}
console.log(countBlackObjects({
  name: "Kate",
  animal: 'Turkey',
  age: 0.7,
  hobby: "atack",
  enemies: 'UFO',
}));

function findBestEmployee(employees) {
  let bestEmployee = "";
  let maxTasks = 0;
  for (const [employee, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = employee;
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
  for (const value of Object.values(yees)) {
    tal += value;
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
    const { [prop]: value } = arr[i];
    if (value !== undefined) {
      values.push(value);
    }
  }
  return values;
}

const products = [
  { name: "Cock", price: 500, quantity: 4 },
  { name: "PeaCock", price: 460, quantity: 6 },
  { name: "Turkey", price: 400, quantity: 5 },
];
console.log(getValues(products, "Назва"));  
console.log(getValues(products, "Гарантія"));  
console.log(getValues(products, "Приз"));  

function calculatePrice(allProducts, Name) {
  for (let i = 0; i < allProducts.length; i++) {
    const { name, price, quantity } = allProducts[i];
    if (name === Name) {
      return price * quantity;
    }
  }
  return `${Name} Не знайдено`;  
}
console.log(
  calculatePrice(products, "Телефон")  
);
