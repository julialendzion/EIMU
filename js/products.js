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
  document.querySelector(".name").textContent = data.name;
  document.querySelector(".description").textContent = data.description;
}
