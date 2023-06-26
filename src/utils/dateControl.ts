export const dateControl = () => {
  const currentDate = new Date();
  const month = `0${currentDate.getMonth() + 1}`.slice(-2);
  const day = `0${currentDate.getDate()}`.slice(-2);
  const year = currentDate.getFullYear();
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDate();
  const daysArr = Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString());
  const pastDaysArr = daysArr.filter(day => parseInt(day, 10) <= currentDate.getDate());

  return { day, month, year, pastDaysArr };
};