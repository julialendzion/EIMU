const form = document.querySelector("#NewsletterForm");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const payload = {
    email: form.elements.email.value,
  };
  console.log(payload);

  fetch(`https://kea21-6a0c.restdb.io/rest/newsletter`, {
    method: "POST",
    headers: {
      "x-apikey": "60339bce5ad3610fb5bb64e6",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => {
      form.elements.email.value = "";
      document.querySelector("#confirmation").classList.remove("hidden");
    });
}
