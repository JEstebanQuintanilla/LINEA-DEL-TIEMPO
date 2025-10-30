const btnAbrirModal = document.querySelector("#btn-abrir-modal3");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal3");
const modal = document.querySelector("#modal3");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
