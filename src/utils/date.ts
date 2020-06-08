

export function datesAreEqual(date1: Date, date2: Date): boolean {

  return date1.getDate() === date2.getDate()
    && date1.getMonth() === date2.getMonth()
    && date1.getFullYear() === date2.getFullYear();

}

export const isWeekend = (date: Date) => (date.getDay() === 0 || date.getDay() === 6);