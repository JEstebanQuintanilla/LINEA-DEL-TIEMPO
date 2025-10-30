const btnAbrirModal = document.querySelector("#btn-abrir-modal13");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal13");
const modal = document.querySelector("#modal13");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
