const usersHTML = document.querySelector(".users");
const pizzasHTML = document.querySelector(".pizzas");

const usersArray = [
  {
    id: 1,
    name: "Nazbyike",
  },
  {
    id: 2,
    name: "Umar",
  },
  {
    id: 3,
    name: "Akmat",
  },
  {
    id: 4,
    name: "Amir",
  },
  {
    id: 5,
    name: "Artur",
  },
  {
    id: 6,
    name: "Nurel",
  },
];

// console.log(usersArray);

function renderUsers(users) {
  return users.map((user) => {
    const checkIsEvenUsers = user.id % 2 === 0 ? "even" : "odd";
    return `
            <li class="user ${checkIsEvenUsers}">${user.name}</li>
        `;
  });
}

let renderHTML = renderUsers(usersArray);

usersHTML.innerHTML = renderHTML.join("");

let pizzasArray = [
  {
    id: 1,
    title: "Песто и Креветка",
    ing: "30 см, традиционное тесто, 630 г Креветки, моцарелла, томаты , шампиьоны , соус песто, итальянские травы , томатный соус",
    image:
      "https://media.dodostatic.net/image/r:584x584/0196fc98404e73e6b8c1d543e86705f9.avif",
    price: 595,
  },
  {
    id: 2,
    title: "Песто и Креветка",
    ing: "30 см, традиционное тесто, 630 г Креветки, моцарелла, томаты , шампиьоны , соус песто, итальянские травы , томатный соус",
    image:
      "https://media.dodostatic.net/image/r:584x584/0196fc98404e73e6b8c1d543e86705f9.avif",
    price: 595,
  },
];

function renderPizzas(pizzas) {
  return pizzas.map((pizza) => {
    return `
      <li class="pizza">
        <img src="${pizza.image}" alt="pizza image" />
        <h2 class="title">${pizza.title}</h2>
        <p class="ing">${pizza.ing}</p>
        <div class="pizza-bottom">
          <span class="price">от ${pizza.price} сом</span>
          <button class="button">Выбрать</button>
        </div>
      </li>
    `;
  });
}

let renderPizzaHTML = renderPizzas(pizzasArray);
pizzasHTML.innerHTML = renderPizzaHTML.join("");
