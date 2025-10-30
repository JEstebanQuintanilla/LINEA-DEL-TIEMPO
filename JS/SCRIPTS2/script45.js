const btnAbrirModal = document.querySelector("#btn-abrir-modal45");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal45");
const modal = document.querySelector("#modal45");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
