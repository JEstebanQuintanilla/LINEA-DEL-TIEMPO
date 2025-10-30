const btnAbrirModal = document.querySelector("#btn-abrir-modal37");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal37");
const modal = document.querySelector("#modal37");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
