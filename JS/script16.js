const btnAbrirModal = document.querySelector("#btn-abrir-modal16");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal16");
const modal = document.querySelector("#modal16");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
