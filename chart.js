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

// Texto no meio do gráfico
const centerText = {
  id: 'centerText',

  beforeDraw(chart) {

    const { ctx } = chart;

    const meta = chart.getDatasetMeta(0);

    if (!meta.data.length) return;

    const x = meta.data[0].x;
    const y = meta.data[0].y;

    ctx.save();

    // Top 3
    ctx.font = '700 24px Arial';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillText('TOP 3', x, y - 10);

    // Camisas
    ctx.font = '500 13px Arial';
    ctx.fillStyle = '#94A3B8';

    ctx.fillText('CAMISAS', x, y + 15);

    ctx.restore();
  }
};

// Imagens camisetas
const jerseyImages = {

  'Curry #30':
    'https://sheshalifestyle.com/wp-content/uploads/2023/10/boys-icon-swingman-jersey-golden-state-warriors-curry-stephen-nba-ez2b7bx2p00-warsc-ndj.webp',

  'James #23':
    'https://fanatics.frgimages.com/los-angeles-lakers/unisex-jordan-brand-lebron-james-purple-los-angeles-lakers-2025/26-authentic-jersey-statement-edition_ss5_p-202926266+pv-2+u-lsxjoo0nyrjpe8dzwahj+v-n9ttpegbpfhkd1e5irgt.png?_hv=2&w=1018',

  'Tatum #0':
    'https://bouncewear.com/cdn/shop/files/AURORA_DN2070-100_PHSFH001-1000.png?v=1691582762'
};

const tooltipEl = document.getElementById('chart-tooltip');

const ctx = document.getElementById('chart');

// Gráfico
new Chart(ctx, {

  type: 'doughnut',

  data: {

    labels: [
      'Curry #30', //1st jersey
      'James #23', //2nd jersey
      'Tatum #0' //3rd jersey
    ],

    datasets: [{

      data: [
        12450, //1st jersey
        10980, //2nd jersey
        8420 //3rd jersey
      ],

      backgroundColor: [
        '#dfcc27ff',
        '#552583',
        '#007A33'
      ],

      hoverBackgroundColor: [

        '#faf1a4ff',
        '#7C3AED',
        '#00A651'
      ],

      borderWidth: 0,

      spacing: 4,

      borderRadius: 6
    }]
  },

  options: {

    cutout: '75%',

    plugins: {

      legend: {
        display: false
      },

      tooltip: {

        enabled: false,

        external(context) {

          const tooltip = context.tooltip;

          // Esconde tooltip padrão
          if (tooltip.opacity === 0) {

            tooltipEl.style.opacity = 0;
            return;
          }

          // Item hover
          const dataPoint = tooltip.dataPoints[0];

          const label = dataPoint.label;

          const value = dataPoint.raw.toLocaleString();

          const image = jerseyImages[label];

          // Tootlipe criada
          tooltipEl.innerHTML = `
            <div class="tooltip-card">

              <div class="tooltip-info">

                <h3>${label}</h3>

                <p>${value} camisetas vendidas</p>

              </div>

              <img src="${image}">

            </div>
          `;

          // Posição da tooltip criada
          const { offsetLeft, offsetTop } = ctx;

          tooltipEl.style.opacity = 1;

          tooltipEl.style.left =
            offsetLeft + tooltip.caretX + 'px';

          tooltipEl.style.top =
            offsetTop + tooltip.caretY + 'px';
        }
      }
    }
  },

  plugins: 
  [centerText]
});