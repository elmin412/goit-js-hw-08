const form = document.querySelector(".login-form");

function formHandler(event) {
  event.preventDefault();
  const data = {
    email: event.target.elements.email.value,
    password: event.target.elements.password.value,
  };

  if (data.email === "" || data.password === "") {
    alert("All form fields must be filled in");
    return;
  }

  console.log(data);
  form.reset();
}

form.addEventListener("submit", formHandler); {
  
}