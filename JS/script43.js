const btnAbrirModal = document.querySelector("#btn-abrir-modal43");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal43");
const modal = document.querySelector("#modal43");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
