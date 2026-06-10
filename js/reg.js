
document.addEventListener("DOMContentLoaded", function () {
  const Patrontexto = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/;
  const form = document.getElementById("forla");
  let nombre = document.getElementById("nombre");
  let cajaError = document.getElementById("error-nombre");
 

  nombre.addEventListener("input", function (e) {
    if (Patrontexto.test(nombre.value)) {
      nombre.classList.add("correcto");
      nombre.classList.remove("error");
      cajaError.style.display = "none";
    } else {
      nombre.classList.remove("correcto");
      nombre.classList.add("error");
      cajaError.textContent = "Nombre no valido, solo se acepta letras";
      cajaError.style.display = "block";
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valorNombre = nombre.value.trim();
    if (valorNombre.length == 0 || valorNombre === " ") {
      let cajaError = document.getElementById("error-nombre");
      cajaError.textContent = "Es obligatorio rellenar el campo nombre";
      cajaError.style.display = "block";
      nombre.focus();
      return false;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const Patrontexto = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/;
  const form = document.getElementById("forla");
  let apellido = document.getElementById("apellido");
  let cajaError = document.getElementById("error-apellido");
 

  apellido.addEventListener("input", function (e) {
    if (Patrontexto.test(apellido.value)) {
      apellido.classList.add("correcto");
      apellido.classList.remove("error");
      cajaError.style.display = "none";
    } else {
      apellido.classList.remove("correcto");
      apellido.classList.add("error");
      cajaError.textContent = "Nombre no valido, solo se acepta letras";
      cajaError.style.display = "block";
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valorApellido = apellido.value.trim();
    if (valorApellido.length == 0 || valorApellido === " ") {
      let cajaError = document.getElementById("error-apellido");
      cajaError.textContent = "Es obligatorio rellenar el campo nombre";
      cajaError.style.display = "block";
      apellido.focus();
      return false;
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const PatronCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const form = document.getElementById("forla");
  let email = document.getElementById("email");
  let cajaError = document.getElementById("error-email");
 

  email.addEventListener("input", function (e) {
    if (Correo.test(email.value)) {
      email.classList.add("correcto");
      email.classList.remove("error");
      cajaError.style.display = "none";
    } else {
      email.classList.remove("correcto");
      email.classList.add("error");
      cajaError.textContent = "Nombre no valido, solo se acepta letras";
      cajaError.style.display = "block";
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valorEmail = email.value.trim();
    if (valorEmail.length == 0 || valorApellido === " ") {
      let cajaError = document.getElementById("error-email");
      cajaError.textContent = "Es obligatorio rellenar el campo nombre";
      cajaError.style.display = "block";
      email.focus();
      return false;
    }
  });
});

