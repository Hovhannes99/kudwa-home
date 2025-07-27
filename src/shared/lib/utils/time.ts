import {ViewMode} from "@app/types/report.ts";

export function getDaysInMonth(month: number, year: number) {
  const date = new Date(year, month, 0);
  const monthName = date.toLocaleDateString('en-US', {
    month: 'short',
  });

  const daysInMonth = date.getDate();
  const days = [];
  let i = 1;

  while (days.length < daysInMonth) {
    days.push(`${monthName} ${i}`);
    i += 1;
  }

  return days;
}

export const getDataKey = (viewMode: ViewMode): string => {
  switch (viewMode) {
    case "monthly":
      return "result";
    case "quarterly":
      return "quarterly";
    case "yearly":
      return "yearly";
    default:
      return "result";
  }
};
