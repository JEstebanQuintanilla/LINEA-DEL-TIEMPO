const btnAbrirModal = document.querySelector("#btn-abrir-modal44");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal44");
const modal = document.querySelector("#modal44");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
