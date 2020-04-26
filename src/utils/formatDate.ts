import { format } from 'date-fns';

const formatDate = (date: string): string =>
  format(new Date(date), 'dd/MM/yyyy');

export default formatDate;
