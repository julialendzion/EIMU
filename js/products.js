const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = `https://kea21-6a0c.restdb.io/rest/eimu-products/` + id;
const mediaurl = "https://kea21-6a0c.restdb.io/media/";

//API key
//The API key
const options = {
  headers: {
    "x-apikey": "60339bce5ad3610fb5bb64e6",
  },
};

// fetching data
fetch(url, options)
  .then((res) => res.json())
  .then((data) => showProduct(data));

//changing the content- name, brand, image
function showProduct(data) {
  console.log(data);
  document.querySelector("#img").src = data.image;
  document.querySelector(".name").textContent = data.name + data.ml;
  document.querySelector(".name").style.color = data.color;

  document.querySelector(".description").textContent = data.description;
  document.querySelector("#produkt").style.backgroundImage =
    `url(` + data.background + `)`;

  document.querySelector("#location").textContent = data.production;
  document.querySelector("#ingredients").textContent = data.ingredients;
  document.querySelector("#allergenes").textContent = data.allergens;

  document.querySelector("#clickhere").onclick = () => {
    LocationOpen();
  };

  document.querySelector("#clickhere2").onclick = () => {
    IngredientsOpen();
  };
  document.querySelector("#clickhere3").onclick = () => {
    AllergenesOpen();
  };
  document.querySelector("#clickhere4").onclick = () => {
    NutritionOpen();
  };

  //document.querySelector("#arrow").onclick = () => {
  // changeProduct();
  //  };
}

/*function changeProduct() {
  console.log("its working");
  const url = `https://kea21-6a0c.restdb.io/rest/eimu-products/60afe9976a5d621100000fbc`;

  fetch(url, options)
    .then((res) => res.json())
    .then((data) => showProduct(data));

  //changing the content- name, brand, image
  function showProduct(data) {
    console.log(data);
    document.querySelector("#img").src = data.image;
    document.querySelector(".name").textContent = data.name + data.ml;
    document.querySelector(".description").textContent = data.description;
    document.querySelector("main").style.backgroundImage =
      `url(` + data.background + `)`;
  }
}*/

function LocationOpen() {
  document.querySelector("#location").classList.toggle("hidden");
}

function IngredientsOpen() {
  document.querySelector("#ingredients").classList.toggle("hidden");
}

function AllergenesOpen() {
  document.querySelector("#allergenes").classList.toggle("hidden");
}

function NutritionOpen() {
  document.querySelector("#nutrition").classList.toggle("hidden");
}

const template = document.querySelector("template.comments").content;
