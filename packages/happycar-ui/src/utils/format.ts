type ICurrency = 'EUR';
type ILocale = 'de-DE';

export const formatCurrency = (
  amount: number,
  options: {
    currency?: ICurrency;
    locale?: ILocale | ILocale[];
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
  } = {}
): string => {
  if (typeof amount !== 'number') {
    return '';
  }

  const {
    currency = 'EUR',
    locale = 'de-DE',
    minimumFractionDigits = 2,
    maximumFractionDigits = 2,
  } = options;

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
  })
    .format(amount)
    .replace(/\s/, '');
};
