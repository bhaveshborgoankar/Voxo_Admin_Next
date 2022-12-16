import React from 'react';
import { Link } from 'react-router-dom';
import user1 from '../../assets/images/users/1.jpg';
import user2 from '../../assets/images/users/2.jpg';
import user3 from '../../assets/images/users/3.jpg';
import user4 from '../../assets/images/users/4.jpg';
import user5 from '../../assets/images/users/5.jpg';

export const venderListHeadingData = [
  {
    name: 'Vendor',
    selector: (row) => row.vendor,
  },
  {
    name: 'Products',
    selector: (row) => row.products,
    sortable: true,
  },
  {
    name: 'Store Name',
    selector: (row) => row.storename,
    sortable: true,
  },
  {
    name: 'Create Date',
    selector: (row) => row.createdate,
    sortable: true,
  },
  {
    name: 'Wallet Balance',
    selector: (row) => row.walletbalance,
    sortable: true,
  },
  {
    name: 'Revenue',
    selector: (row) => row.revenue,
    sortable: true,
  },
  {
    cell: () => (
      <Link to={'/order_detail'}>
        <span className='lnr lnr-eye'></span>
      </Link>
    ),
    selector: (row) => row.options,
  },
  {
    cell: () => (
      <a href='#javascript'>
        <span className='lnr lnr-pencil'></span>
      </a>
    ),
    name: 'Options',
    selector: (row) => row.options,
  },
  {
    cell: () => (
      <a href='#javascript'>
        <span className='lnr lnr-trash'></span>
      </a>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    selector: (row) => row.options,
  },
];
export const venderListData = [
  {
    vendor: (
      <>
        <span>
          <img src={user1} alt='users' width={45} height={45} />
        </span>
        <a href='#javascript'>
          <span className='d-block'>Everet C. Green</span>
        </a>
      </>
    ),
    products: 1670,
    storename: 'EverettCGreen',
    createdate: <span className='font-primary'>01-05-2023</span>,
    walletbalance: '$975431',
    revenue: '$761266',
    options: (
      <ul>
        <li>
          <Link to={'/order_detail'}>
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
    vendor: (
      <>
        <span>
          <img src={user2} alt='users' width={45} height={45} />
        </span>
        <a href='#javascript'>
          <span className='d-block'>Caroline L. Harris</span>
        </a>
      </>
    ),
    products: 2587,
    storename: 'CarolineLHarris',
    createdate: <span className='font-primary'>10-02-2023</span>,
    walletbalance: '$856972',
    revenue: '$369852',
    options: (
      <ul>
        <li>
          <Link to={'/order_detail'}>
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
    vendor: (
      <>
        <span>
          <img src={user3} alt='users' width={45} height={45} />
        </span>
        <a href='#javascript'>
          <span className='d-block'>lucy j. Morile</span>
        </a>
      </>
    ),
    products: 9874,
    storename: 'lucyjMorile',
    createdate: <span className='font-primary'>08-06-2023</span>,
    walletbalance: '$2587141',
    revenue: '$3698744',
    options: (
      <ul>
        <li>
          <Link to={'/order_detail'}>
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
    vendor: (
      <>
        <span>
          <img src={user4} alt='users' width={45} height={45} />
        </span>
        <a href='#javascript'>
          <span className='d-block'>Jennifer A. Straight</span>
        </a>
      </>
    ),
    products: 8766,
    storename: 'JenniferAStraight',
    createdate: <span className='font-primary'>08-06-2023</span>,
    walletbalance: '$8857799',
    revenue: '$3652254',
    options: (
      <ul>
        <li>
          <Link to={'/order_detail'}>
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
    vendor: (
      <>
        <span>
          <img src={user5} alt='users' width={45} height={45} />
        </span>
        <a href='#javascript'>
          <span className='d-block'>Louise J. Stiles</span>
        </a>
      </>
    ),
    products: 4561,
    storename: 'LouiseJStiles',
    createdate: <span className='font-primary'>10-06-2023</span>,
    walletbalance: '$523365',
    revenue: '$754451',
    options: (
      <ul>
        <li>
          <Link to={'/order_detail'}>
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
    vendor: (
      <>
        <span>
          <img src={user2} alt='users' width={45} height={45} />
        </span>
        <a href='#javascript'>
          <span className='d-block'>Scott T. Thomas</span>
        </a>
      </>
    ),
    products: 4561,
    storename: 'ScottTThomas',
    createdate: <span className='font-primary'>22-06-2023</span>,
    walletbalance: '$6575520',
    revenue: '$002356',
    options: (
      <ul>
        <li>
          <Link to={'/order_detail'}>
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
    vendor: (
      <>
        <span>
          <img src={user1} alt='users' width={45} height={45} />
        </span>
        <a href='#javascript'>
          <span className='d-block'>Ricky M. Gaynor</span>
        </a>
      </>
    ),
    products: 4561,
    storename: 'RickyMGaynor',
    createdate: <span className='font-primary'>18-12-2023</span>,
    walletbalance: '$365565',
    revenue: '$412253',
    options: (
      <ul>
        <li>
          <Link to={'/order_detail'}>
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
    vendor: (
      <>
        <span>
          <img src={user3} alt='users' width={45} height={45} />
        </span>
        <a href='#javascript'>
          <span className='d-block'>Dillon J. Bradshaw</span>
        </a>
      </>
    ),
    products: 4561,
    storename: 'DillonJBradshaw',
    createdate: <span className='font-primary'>11-10-2023</span>,
    walletbalance: '$856697',
    revenue: '$365478',
    options: (
      <ul>
        <li>
          <Link to={'/order_detail'}>
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
    vendor: (
      <>
        <span>
          <img src={user5} alt='users' width={45} height={45} />
        </span>
        <a href='#javascript'>
          <span className='d-block'>Lorna M. Bonner</span>
        </a>
      </>
    ),
    products: 4561,
    storename: 'LornaMBonner',
    createdate: <span className='font-primary'>01-05-2023</span>,
    walletbalance: '$123456',
    revenue: '$789456',
    options: (
      <ul>
        <li>
          <Link to={'/order_detail'}>
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
    vendor: (
      <>
        <span>
          <img src={user4} alt='users' width={45} height={45} />
        </span>
        <a href='#javascript'>
          <span className='d-block'>Richard A. Johnson</span>
        </a>
      </>
    ),
    products: 4561,
    storename: 'RichardAJohnson',
    createdate: <span className='font-primary'>12-05-2023</span>,
    walletbalance: '$1234745',
    revenue: '$789456',
    options: (
      <ul>
        <li>
          <Link to={'/order_detail'}>
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
    vendor: (
      <>
        <span>
          <img src={user1} alt='users' width={45} height={45} />
        </span>
        <a href='#javascript'>
          <span className='d-block'>Lorraine D. McDowell</span>
        </a>
      </>
    ),
    products: 4561,
    storename: 'LorraineDMcDowell',
    createdate: <span className='font-primary'>12-05-2023</span>,
    walletbalance: '$987654',
    revenue: '$693582',
    options: (
      <ul>
        <li>
          <Link to={'/order_detail'}>
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
