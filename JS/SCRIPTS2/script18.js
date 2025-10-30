const btnAbrirModal = document.querySelector("#btn-abrir-modal18");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal18");
const modal = document.querySelector("#modal18");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
