const btnAbrirModal = document.querySelector("#btn-abrir-modal31");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal31");
const modal = document.querySelector("#modal31");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
