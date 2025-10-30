const btnAbrirModal = document.querySelector("#btn-abrir-modal9");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal9");
const modal = document.querySelector("#modal9");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
