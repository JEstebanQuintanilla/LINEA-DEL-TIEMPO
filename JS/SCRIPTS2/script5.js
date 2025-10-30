const btnAbrirModal = document.querySelector("#btn-abrir-modal5");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal5");
const modal = document.querySelector("#modal5");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
