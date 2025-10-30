const btnAbrirModal = document.querySelector("#btn-abrir-modal1");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal1");
const modal = document.querySelector("#modal1");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
