enum WeekDays {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function isWeekend(day: WeekDays): boolean {
  return day === WeekDays.Saturday || day === WeekDays.Sunday;
}

export {};