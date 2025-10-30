const btnAbrirModal = document.querySelector("#btn-abrir-modal12");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal12");
const modal = document.querySelector("#modal12");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
