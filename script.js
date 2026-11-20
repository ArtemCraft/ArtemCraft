// Фейковый счётчик онлайна
let count = 1247;
setInterval(() => {
  count += Math.floor(Math.random() * 7) - 3;
  if (count < 1200) count = 1200;
  if (count > 1300) count = 1300;
  document.getElementById('online-count').textContent = count;
}, 5000);