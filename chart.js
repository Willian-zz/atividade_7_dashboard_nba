import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend
} from 'https://cdn.jsdelivr.net/npm/chart.js/+esm';

Chart.register(
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend
);

const ctx = document.getElementById('chart');

new Chart(ctx, {

  type: 'doughnut',

  data: {

    labels: [
      'Curry #30',
      'James #23',
      'Tatum #0'
    ],

    datasets: [{

      data: [
        45,
        30,
        25
      ],

      backgroundColor: [
        '#552583',
        '#007A33',
        '#1D428A'
      ],
      borderColor: [
        '#7b38d8',
        '#00b050',
        '#3b82f6'
      ],

      borderWidth: 0,

      hoverBackgroundColor: [
        '#7b38d8',
        '#00b050',
        '#3b82f6'
      ]
    }]
  },

  options: {

    cutout: '75%',

    plugins: {

      legend: {

        labels: {

          color: 'white',

          font: {
            size: 16
          }
        }
      }
    }
  }
});
