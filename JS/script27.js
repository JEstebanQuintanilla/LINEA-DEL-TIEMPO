const btnAbrirModal = document.querySelector("#btn-abrir-modal27");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal27");
const modal = document.querySelector("#modal27");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
