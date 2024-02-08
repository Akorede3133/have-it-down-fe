import { formatDistanceToNow } from 'date-fns';

export const formatDateInDistance = (date) => {
  const dateToConvert = new Date(date);
  return formatDistanceToNow(dateToConvert, { addSuffix: true });
}