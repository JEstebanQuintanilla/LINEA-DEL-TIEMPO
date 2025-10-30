const btnAbrirModal = document.querySelector("#btn-abrir-modal6");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal6");
const modal = document.querySelector("#modal6");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
