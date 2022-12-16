import { Link } from 'react-router-dom';

export const CurrencyRateColumns = [
  {
    name: 'Currency Title',
    selector: (row) => row.currencytitle,
  },
  {
    name: 'USD',
    selector: (row) => row.usd,
  },
  {
    name: 'Code',
    selector: (row) => row.code,
  },
  {
    name: 'Exchange Rate',
    selector: (row) => row.exchangerate,
  },
  {
    name: 'Options',
    selector: (row) => row.option,
  },
];

export const CurrencyRateData = [
  {
    currencytitle: 'Us Dollar',
    usd: '2.4512478',
    code: 'USD',
    exchangerate: '0.57912364',
    option: (
      <ul>
        <li>
          <Link to={'/order_details'}>
            <span className='lnr lnr-eye'></span>
          </Link>
        </li>

        <li>
          <a href='#javascript'>
            <span className='lnr lnr-pencil'></span>
          </a>
        </li>

        <li>
          <a href='#javascript'>
            <span className='lnr lnr-trash'></span>
          </a>
        </li>
      </ul>
    ),
  },
  {
    currencytitle: 'Afghanistan Afghani',
    usd: '5.14761214',
    code: 'AFN',
    exchangerate: '1.05761432',
    option: (
      <ul>
        <li>
          <Link to={'/order_details'}>
            <span className='lnr lnr-eye'></span>
          </Link>
        </li>

        <li>
          <a href='#javascript'>
            <span className='lnr lnr-pencil'></span>
          </a>
        </li>

        <li>
          <a href='#javascript'>
            <span className='lnr lnr-trash'></span>
          </a>
        </li>
      </ul>
    ),
  },
  {
    currencytitle: 'United Arab Emirates Dirham',
    usd: '12.02646581',
    code: 'AED',
    exchangerate: '0.15642465',
    option: (
      <ul>
        <li>
          <Link to={'/order_details'}>
            <span className='lnr lnr-eye'></span>
          </Link>
        </li>

        <li>
          <a href='#javascript'>
            <span className='lnr lnr-pencil'></span>
          </a>
        </li>

        <li>
          <a href='#javascript'>
            <span className='lnr lnr-trash'></span>
          </a>
        </li>
      </ul>
    ),
  },
  {
    currencytitle: 'European Union',
    usd: '8.124712425',
    code: 'EUR',
    exchangerate: '0.187541231',
    option: (
      <ul>
        <li>
          <Link to={'/order_details'}>
            <span className='lnr lnr-eye'></span>
          </Link>
        </li>

        <li>
          <a href='#javascript'>
            <span className='lnr lnr-pencil'></span>
          </a>
        </li>

        <li>
          <a href='#javascript'>
            <span className='lnr lnr-trash'></span>
          </a>
        </li>
      </ul>
    ),
  },
  {
    currencytitle: 'Japanese',
    usd: '10.78422121',
    code: 'JPY',
    exchangerate: '3.8425110221',
    option: (
      <ul>
        <li>
          <Link to={'/order_details'}>
            <span className='lnr lnr-eye'></span>
          </Link>
        </li>

        <li>
          <a href='#javascript'>
            <span className='lnr lnr-pencil'></span>
          </a>
        </li>

        <li>
          <a href='#javascript'>
            <span className='lnr lnr-trash'></span>
          </a>
        </li>
      </ul>
    ),
  },
  {
    currencytitle: 'Great Britain Pound',
    usd: '7.1246121152',
    code: 'GBP',
    exchangerate: '0.25522648',
    option: (
      <ul>
        <li>
          <Link to={'/order_details'}>
            <span className='lnr lnr-eye'></span>
          </Link>
        </li>

        <li>
          <a href='#javascript'>
            <span className='lnr lnr-pencil'></span>
          </a>
        </li>

        <li>
          <a href='#javascript'>
            <span className='lnr lnr-trash'></span>
          </a>
        </li>
      </ul>
    ),
  },
];
