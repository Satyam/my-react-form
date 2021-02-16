import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { IntlProvider, useIntl } from './index';

const P: React.FC<{ label: string }> = ({ label }) => {
  const {
    currency,
    locale,
    currencySign,
    currencyDecimals,
    currencySignPrepend,
    formatCurrency,
    formatDate,
    locales,
  } = useIntl();
  return (
    <p title="value">
      {`
        ${label}
        --------------------
        currency: ${currency}
        locale: ${locale}
        currencySign: ${currencySign}
        currencyDecimals: ${currencyDecimals}
        currencySignPrepend: ${currencySignPrepend}
        formatDate 1/mar/2000: ${formatDate(new Date(2000, 2, 1))}
        formatCurrency: ${formatCurrency(1234.567)}
        locales: ${locales.join(' - ')}
        `}
    </p>
  );
};

const FC: React.FC<{ loc?: string; label: string }> = ({ loc, label }) => (
  <IntlProvider locale={loc}>
    <P label={label} />
  </IntlProvider>
);

test('Provider with defaults', () => {
  render(<FC label="locale not set" />);
  expect(screen.getByTitle('value').innerHTML).toMatchInlineSnapshot(`
    "
            locale not set
            --------------------
            currency: EUR
            locale: en-US
            currencySign: €
            currencyDecimals: 2
            currencySignPrepend: true
            formatDate 1/mar/2000: 03/01/2000
            formatCurrency: €1,234.57
            locales: en-US - es-ES
            "
  `);
});

test('Provider set to es-ES', () => {
  render(<FC loc="es-ES" label="locale set to es-ES" />);
  expect(screen.getByTitle('value').innerHTML).toMatchInlineSnapshot(`
    "
            locale set to es-ES
            --------------------
            currency: EUR
            locale: es-ES
            currencySign: €
            currencyDecimals: 2
            currencySignPrepend: false
            formatDate 1/mar/2000: 01/03/2000
            formatCurrency: 1234,57&nbsp;€
            locales: en-US - es-ES
            "
  `);
});
test('Provider set to en-US', () => {
  render(<FC loc="en-US" label="locale set to en-US" />);
  expect(screen.getByTitle('value').innerHTML).toMatchInlineSnapshot(`
    "
            locale set to en-US
            --------------------
            currency: EUR
            locale: en-US
            currencySign: €
            currencyDecimals: 2
            currencySignPrepend: true
            formatDate 1/mar/2000: 03/01/2000
            formatCurrency: €1,234.57
            locales: en-US - es-ES
            "
  `);
});
