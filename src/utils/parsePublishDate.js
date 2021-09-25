export function parsePublisDate(fechaFinal) {
  let today = new Date();
  let date = `${today.getFullYear()}-${today.getMonth() +
    1}-${today.getDate()}`;
  let fechaInicio = new Date(date).getTime();
  let diffDays = parseInt((fechaInicio - fechaFinal) / (1000 * 60 * 60 * 24));
  return diffDays;
}
