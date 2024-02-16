import { months as Tmonths, monthsWithDays } from "../types/months";

const getDaysByMonths = (isLeapYear: boolean): monthsWithDays => ({
  1: 31,
  2: isLeapYear ? 29 : 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
});

export const year = (year: number): boolean => {
  const time = new Date();
  const currentYear: number = time.getFullYear();

  return year > currentYear || year < 1;
};

export const months = (months: number): boolean => {
  return 12 >= months;
};

export const days = ({
  year = 0,
  months,
  day,
}: {
  year: number;
  months: Tmonths;
  day: number;
}) => {
  const isLeapYear = leapYear(year);

  const daysByMonths = getDaysByMonths(isLeapYear);

  if (!(daysByMonths[months] >= day)) return true;

  return false;
};

const leapYear = (year: number) => {
  if (year === 0) return false;

  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
};

export const calculateAge = (year: number, months: number, day: number) => {
  const date = new Date(`${year}-${months}-${day}` + "T00:00:00Z");
  const dateNow = new Date();
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const currentMonth = dateNow.getMonth() + 1;
  const monthsCollection = getDaysByMonths(leapYear(year));

  const daysTillBirthDay = calculateDaysTranscurrent(
    monthsCollection,
    months,
    day
  );
  const currentDays = calculateDaysTranscurrent(
    monthsCollection,
    currentMonth,
    dateNow.getDate()
  );
  const days = calculateDays(
    currentDays,
    daysTillBirthDay,
    leapYear(year) ? 366 : 365
  );

  const { months: monthsPassed, daysRemain } =
    calculateMonthsAndDaysBasedOnMonths(monthsCollection, currentMonth, days);

  const currentYear = dateNow.getFullYear();
  const yearTranscurrent = calculateYears(
    currentDays - daysTillBirthDay,
    currentYear,
    year
  );

    return {
      daysRemain, monthsPassed, yearTranscurrent
    }
};

const calculateDays = (
  currentDays: number,
  daysTillBirthDay: number,
  daysInYear: number
) => {
  const days =
    currentDays - daysTillBirthDay > 0
      ? currentDays - daysTillBirthDay
      : currentDays - daysTillBirthDay === 0
      ? 0
      : daysInYear - Math.abs(currentDays - daysTillBirthDay);

  return days;
};

const calculateDaysTranscurrent = (
  monthsWithDays: monthsWithDays,
  months: number,
  day: number
) => {
  let daysTillBirthDay = 0;

  for (const [key, value] of Object.entries(monthsWithDays)) {
    if (months.toFixed() == key) {
      daysTillBirthDay += day;
      break;
    }
    daysTillBirthDay += value;
  }

  return daysTillBirthDay;
};

const calculateMonthsAndDaysBasedOnMonths = (
  monthsWithDays: monthsWithDays,
  months: number,
  day: number
) => {
  let monthsTillBirthDay = 0;

  for (const [key, value] of Object.entries(monthsWithDays)) {
    let start: number = months;

    if (value > day) {
      monthsTillBirthDay =
        monthsTillBirthDay == 12 ? monthsTillBirthDay - 1 : monthsTillBirthDay;
      break;
    }

    if (day >= value) {
      day -= monthsWithDays[start];
      monthsTillBirthDay++;
    }

    start === 12 ? (start = 1) : start++;

    monthsTillBirthDay =
      monthsTillBirthDay == 12 ? monthsTillBirthDay - 1 : monthsTillBirthDay;
  }

  return { months: monthsTillBirthDay, daysRemain: day };
};

const calculateYears = (
  days: number,
  currentYear: number,
  yearBirthDay: number
) => {
  const years = currentYear - yearBirthDay;

  return days >= 0 ? years : years - 1;
};
