const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

//API key
//The API key

fetch(
  "https://kea21-6a0c.restdb.io/rest/eimu-products/" +
    id +
    "?fetchchildren=true",

  {
    method: "GET",
    headers: {
      "x-apikey": "60339bce5ad3610fb5bb64e6",
    },
  }
)
  .then((res) => res.json())
  .then((response) => {
    showPost(response);
  })
  .catch((err) => {
    console.error(err);
  });

function showPost(data) {
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

  //grab the template
  const template = document.querySelector("template.comments").content;

  data.comments.forEach((comment) => {
    //clone
    const copy = template.cloneNode(true);

    //adjust stuff
    copy.querySelector("h3").textContent = comment.content;
    copy.querySelector("p span").textContent = comment.name;
    //apend it
    document.querySelector("#commentDisplay").appendChild(copy);
  });
  if (data.comments.length == 0) {
    const copy = template.cloneNode(true);

    copy.querySelector("h3").textContent = "No comments yet, be the first!";
    copy.querySelector("p span").textContent = "you";

    document.querySelector("#commentDisplay").appendChild(copy);
  }
}

const form = document.querySelector("#commentForm");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const payload = {
    name: form.elements.name.value,
    content: form.elements.content.value,
  };
  console.log(payload);

  fetch(`https://kea21-6a0c.restdb.io/rest/eimu-products/${id}/comments`, {
    method: "POST",
    headers: {
      "x-apikey": "60339bce5ad3610fb5bb64e6",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => {
      const template = document.querySelector("template.comments").content;
      const copy = template.cloneNode(true);
      copy.querySelector("h3").textContent = comment.content;
      copy.querySelector("p span").textContent = comment.name;

      document.querySelector("#commentDisplay").appendChild(copy);

      form.elements.name.value = "";
      form.elements.content.value = "";
    });
}
