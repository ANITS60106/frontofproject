var map = L.map('map', {
  center: [41.2044, 74.7661],
  zoom: 6,
  zoomControl: false,
  fadeAnimation: false
});

L.tileLayer('https://api.maptiler.com/maps/dataviz-dark/{z}/{x}/{y}.png?key=bVE8YAlmmIdbM0JRnwub', {
    maxZoom: 19
}).addTo(map);

var myIcon = L.icon({
  iconUrl: './assets/icons/icon-location.svg',
  iconSize: [45, 55],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  className: 'blinking'
});

var marker = L.marker([41.2044, 74.7661], {icon: myIcon}).addTo(map);

document.getElementById('widgetToggle').addEventListener('change', function () {
  const widgets = document.getElementById('widgets');
  if (this.checked) {
    widgets.classList.remove('hidden');
    renderIncomeChart();
    renderGenderChart();
  } else {
    widgets.classList.add('hidden');
  }
});

function renderIncomeChart() {
  const incomeData = [2.3, 1.3, 1.6, 3.0, 2.4, 1.2, 1.7];
  const incomeLabels = ['Чуй', 'Нарын', 'Ош', 'Жалал Абад', 'Баткен', 'Ысык Куль', 'Талас'];

  const incomeContainer = document.querySelector('.widget .flex');
  incomeContainer.innerHTML = '';

  incomeData.forEach((value, index) => {
    const barWrapper = document.createElement('div');
    barWrapper.style.textAlign = 'center';

    const bar = document.createElement('div');
    bar.style.height = `${value * 30}px`;
    bar.style.width = '20px';
    bar.style.margin = '0 auto';
    bar.style.backgroundColor = '#c1a945';
    bar.style.borderRadius = '4px';

    const label = document.createElement('div');
    label.textContent = incomeLabels[index];
    label.style.color = 'white';
    label.style.marginTop = '8px';

    const valueText = document.createElement('div');
    valueText.textContent = `${value} млн`;
    valueText.style.color = 'yellow';
    valueText.style.marginBottom = '8px';

    barWrapper.appendChild(valueText);
    barWrapper.appendChild(bar);
    barWrapper.appendChild(label);
    incomeContainer.appendChild(barWrapper);
  });
}

function renderGenderChart() {
  const ctx = document.getElementById('genderChart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Мужчины', 'Женщины'],
      datasets: [{
        data: [24, 76],
        backgroundColor: ['#007bff', '#ffc107'],
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        }
      }
    }
  });
}
