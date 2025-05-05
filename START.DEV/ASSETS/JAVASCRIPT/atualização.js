 // Salva a posição de rolagem antes de sair da página
  window.addEventListener("beforeunload", function () {
    localStorage.setItem("scrollPosition", window.scrollY);
  });

  // Restaura a posição de rolagem ao carregar a página novamente
  window.addEventListener("load", function () {
    const scrollY = localStorage.getItem("scrollPosition");
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY));
    }
  });