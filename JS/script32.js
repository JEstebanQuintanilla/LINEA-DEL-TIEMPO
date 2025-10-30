const btnAbrirModal = document.querySelector("#btn-abrir-modal32");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal32");
const modal = document.querySelector("#modal32");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
