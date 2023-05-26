const colorBtns = document.querySelectorAll('.color-btn');
const detalleBtns = document.querySelectorAll('.detalle-btn');
const popup = document.getElementById('detalle-popup');
const cerrarBtn = document.getElementById('cerrar-btn');

colorBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tarjeta = btn.parentNode;
    tarjeta.classList.toggle('cambio-color');
  });
});

detalleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    popup.style.display = 'flex';
  });
});

cerrarBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});
