import { DayRecord } from './useQuiz';

export function calculateStreak(history: DayRecord[]): number {
  if (history.length === 0) return 0;

  const playedDates = new Set(history.map((record) => record.date));
  const toDateStr = (date: Date) => date.toISOString().slice(0, 10);

  const cursor = new Date();

  if (!playedDates.has(toDateStr(cursor))) {
    cursor.setDate(cursor.getDate() - 1);
  }

  let streak = 0;
  while (playedDates.has(toDateStr(cursor))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
}