// calendario.js
document.addEventListener('DOMContentLoaded', () => {
  // Usaremos jQuery sin chocar con tus helpers $ y $$ de ambiente.js
  const jq = window.jQuery;

  // ===== Fechas no disponibles (ejemplo) =====
  const noDisponibles1 = [
    // Agosto 2025 (como en tu captura)
    '2025-08-01','2025-08-02','2025-08-03','2025-08-04','2025-08-05',
    '2025-08-06','2025-08-07','2025-08-08','2025-08-09','2025-08-10',
    '2025-08-11','2025-08-12','2025-08-13','2025-08-14','2025-08-15',
    '2025-08-16','2025-08-17','2025-08-18','2025-08-19','2025-08-20',
    '2025-08-21','2025-08-22','2025-08-23','2025-08-24'
  ];
  const noDisponibles2 = [
    // si quieres otra sala en .calendario-2, agrega fechas aquí
  ];

  // Utilidad para crear validador por calendario
  const makeInvalidFn = (lista) => (date) => lista.includes(date.format('YYYY-MM-DD'));

  // Locale ES con "Setiembre"
  const monthsEsPe = [
    'Enero','Febrero','Marzo','Abril','Mayo','Junio',
    'Julio','Agosto','Setiembre','Octubre','Noviembre','Diciembre'
  ];

  // Inicializa un daterangepicker "inline" dentro de un contenedor
function initInlineRange(contSelector, { start, end, invalidDates }) {
  const cont = document.querySelector(contSelector);
  if (!cont) return;

  const input = document.createElement('input');
  input.type = 'text';
  input.style.display = 'none';
  cont.appendChild(input);

  const startM = moment(start, 'YYYY-MM-DD');
  const endM   = moment(end,   'YYYY-MM-DD');

  jq(input).daterangepicker({
    parentEl: contSelector,
    autoApply: true,
    autoUpdateInput: false,
    alwaysShowCalendars: true,
    linkedCalendars: true,
    showCustomRangeLabel: false,
    opens: 'center',
    drops: 'auto',
    startDate: startM,
    endDate: endM,
    minDate: moment('2025-01-01', 'YYYY-MM-DD'),
    maxDate: moment('2026-12-31', 'YYYY-MM-DD'),
    isInvalidDate: makeInvalidFn(invalidDates),
    locale: {
      format: 'DD/MM/YYYY', // para mostrar (aunque el input está oculto)
      separator: ' - ',
      applyLabel: 'Aplicar',
      cancelLabel: 'Cancelar',
      fromLabel: 'Desde',
      toLabel: 'Hasta',
      customRangeLabel: 'Personalizado',
      weekLabel: 'S',
      daysOfWeek: ['D','L','M','M','J','V','S'],
      monthNames: [
        'Enero','Febrero','Marzo','Abril','Mayo','Junio',
        'Julio','Agosto','Setiembre','Octubre','Noviembre','Diciembre'
      ],
      firstDay: 1
    }
  });

  const drp = jq(input).data('daterangepicker');
  drp.show();
  drp.hide = function() {}; // 
  
  }
  initInlineRange('.calendario-1', {
    start: '2025-08-28',
    end: '2025-09-03',
    invalidDates: noDisponibles1
  });

});
