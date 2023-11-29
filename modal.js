function setModal(modalName) {
  const modal = document.querySelector(`[data-modal-name=${modalName}]`);
  const modalOpeners = document.querySelectorAll(`[data-modal-open=${modalName}]`);
  const modalClosers = document.querySelectorAll(`[data-modal-close=${modalName}]`);

  function openModal() { modal.dataset.active = true; }
  function closeModal() { modal.dataset.active = false; }

  for (let i = 0; i < modalOpeners.length; i++) {
    const mo = modalOpeners[i];
    mo.addEventListener('click', openModal);
  }
  for (let i = 0; i < modalClosers.length; i++) {
    const mc = modalClosers[i];
    mc.addEventListener('click', closeModal);
  }
}