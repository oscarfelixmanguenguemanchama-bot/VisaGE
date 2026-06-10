
  const mostrarMenu = document.getElementById("mostrarMenu");
  const menuPaises = document.getElementById("menuPaises");

  
  mostrarMenu.addEventListener("click", () => {
    if (menuPaises.style.display === "block") {
      menuPaises.style.display = "none";
    } else {
      menuPaises.style.display = "block";
      menuPaises.style.animation = "aparecer 0.3s ease-in-out";
    }
  });

  
  document.addEventListener("click", (e) => {
    if (!menuPaises.contains(e.target) && !mostrarMenu.contains(e.target)) {
      menuPaises.style.display = "none";
    }
  });