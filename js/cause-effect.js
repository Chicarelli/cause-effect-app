import { people } from "./peoples.js";

const convertPropertyNames = {
  name: "Nome",
  pos: "Posição",
  city: "Cidade",
  state: "Estado",
  phone: "Telefone",
  description: "Descrição",
};

people.forEach((people) => {
  const li = document.createElement("li");
  li.innerHTML = `${people.name}`;
  li.setAttribute("id", people.id);

  li.addEventListener("click", (e) => handleSelectPlayer(li, people));

  document.getElementById("list").appendChild(li);
});

function handleSelectPlayer(element, player) {
  handleRemoveActivePlayer();

  element.classList.add("active");

  const description = makePlayerDescription(player);
}

function handleRemoveActivePlayer() {
  document
    .querySelectorAll("li")
    .forEach((item) => item.classList.remove("active"));
}

function makePlayerDescription(player) {
  let description = "";

  Object.keys(player).forEach((key) => {
    if (key === "id") return;
    description += `<p><span class="attribute">${convertPropertyNames[key]}: </span> ${player[key]}</p>`;
  });

  document.getElementById("details-info_container").innerHTML = description;
}
