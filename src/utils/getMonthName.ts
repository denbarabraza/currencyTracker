export const getMonthName = (monthNumber: number) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  if (monthNumber) {
    return months[monthNumber - 1];
  }

  return null;
};
