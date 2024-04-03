document.addEventListener("DOMContentLoaded", function () {
  const calendar = document.getElementById("calendar");

  // Obtener fecha actual
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDate = today.getDate();

  // Obtener número de días en el mes actual
  function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  // Crear calendario
  function createCalendar(year, month) {
    // Limpiar el contenido del calendario
    calendar.innerHTML = "";

    // Crear fecha para el primer día del mes
    const firstDayOfMonth = new Date(year, month, 1);
    const startingDayOfWeek = firstDayOfMonth.getDay();

    // Crear celdas para los días del mes
    for (let i = 0; i < startingDayOfWeek; i++) {
      const dayCell = document.createElement("div");
      dayCell.classList.add("day");
      calendar.appendChild(dayCell);
    }

    // Agregar los días del mes
    const daysInMonth = getDaysInMonth(year, month);
    for (let day = 1; day <= daysInMonth; day++) {
      const dayCell = document.createElement("div");
      dayCell.textContent = day;
      dayCell.classList.add("day");
      if (
        year === currentYear &&
        month === currentMonth &&
        day === currentDate
      ) {
        dayCell.classList.add("today");
      }
      calendar.appendChild(dayCell);
    }

    // Agregar eventos de ejemplo
    const eventDays = [5, 15, 25];
    eventDays.forEach((eventDay) => {
      const eventCell = calendar.children[eventDay + startingDayOfWeek - 1];
      if (eventCell) {
        eventCell.classList.add("event");
      }
    });
  }

  // Crear calendario al cargar la página
  createCalendar(currentYear, currentMonth);
});
