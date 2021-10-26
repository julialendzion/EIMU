const news = document.querySelector("#NewsletterForm");

news.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const payload = {
    email: news.elements.email.value,
  };
  console.log(payload);

  fetch(`https://kea21-6a0c.restdb.io/rest/newsletter`, {
    method: "POST",
    headers: {
      "x-apikey": "6176a6518597142da1745a51",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => {
      news.elements.email.value = "";
      document.querySelector("#confirmation").classList.remove("hidden");
    });
}
