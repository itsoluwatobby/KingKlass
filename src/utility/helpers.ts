export const formmatTime = (date: number | Date) => {
  const dateTime = new Intl.DateTimeFormat('en').format(date).split('/');
  const res = dateTime.map(num => num.length === 1 ? num.padStart(2, '0'): num).join('-');
  return res;
}