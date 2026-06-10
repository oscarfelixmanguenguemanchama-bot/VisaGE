 
  
  const visadoBtn = document.getElementById("visado-btn");
  const visadoMenu = document.getElementById("visado-menu");

  
  visadoBtn.addEventListener("click", () => {
    visadoMenu.style.display =
      visadoMenu.style.display === "block" ? "none" : "block";
  });

  
  window.addEventListener("click", (e) => {
    if (!visadoBtn.contains(e.target) && !visadoMenu.contains(e.target)) {
      visadoMenu.style.display = "none";
    }
  });
    