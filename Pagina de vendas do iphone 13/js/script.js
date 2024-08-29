const buttons = document.querySelectorAll("#image-picker li"); // Acessei todos os itens de lista
const img = document.querySelector("#product-image"); // Acessei o elemento da imagem

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Remove a classe 'selected' de todos os botões
    buttons.forEach((btn) => {
      const colorElement = btn.querySelector(".color");
      if (colorElement) {
        colorElement.classList.remove("selected");
      }
    });

    // Encontra o pai mais próximo 'li' para garantir que estamos trabalhando com o botão correto
    const button = e.target.closest("li");

    if (!button) return; // Sai se nenhum 'li' for encontrado

    const id = button.getAttribute("id"); 

    // Adiciona a classe 'selected' ao botão clicado
    const colorElement = button.querySelector(".color");
    if (colorElement) {
      colorElement.classList.add("selected");
    }

    // Altera a imagem e lida com a classe 'changing'
    img.classList.add("changing");
    img.setAttribute("src", `img/iphone_${id}.jpg`);

    // Remove a classe 'changing' após a imagem ser carregada
    img.onload = () => {
      img.classList.remove("changing");
    };

  });
});
