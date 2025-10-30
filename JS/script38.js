const btnAbrirModal = document.querySelector("#btn-abrir-modal38");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal38");
const modal = document.querySelector("#modal38");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
