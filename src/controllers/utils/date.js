const newdate = new Date();

const weekDay = newdate.getDay();

const dayMonth = newdate.getDate();

const month = newdate.getMonth();

const year = newdate.getFullYear();

const weekDays = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export const date = `${weekDays[weekDay]} ${dayMonth} de ${months[month]} del ${year}`;
