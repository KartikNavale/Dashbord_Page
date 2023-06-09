const data = [30, 50, 80, 45, 60]; // Sample data

const chart = document.getElementById('chart');

data.forEach(value => {
  const bar = document.createElement('div');
  bar.classList.add('bar');
  bar.style.width = value + 'px';
  chart.appendChild(bar);
});
