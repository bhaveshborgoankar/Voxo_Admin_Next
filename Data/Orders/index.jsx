import { Link } from 'react-router-dom';
import Profile1 from '../../assets/images/profile/1.jpg';
import Profile2 from '../../assets/images/profile/2.jpg';
import Profile3 from '../../assets/images/profile/3.jpg';
import Profile4 from '../../assets/images/profile/4.jpg';
export const OrderListColumns = [
  {
    name: 'Order Image',
    selector: (row) => row.image,
  },
  {
    name: 'Order Code',
    selector: (row) => row.code,
  },
  {
    name: 'Date',
    selector: (row) => row.date,
  },
  {
    name: 'Payment Method	',
    selector: (row) => row.payment,
  },
  {
    name: 'Delivery Status	',
    selector: (row) => row.status,
  },
  {
    name: 'Amount',
    selector: (row) => row.amount,
  },
  {
    name: 'Option',
    selector: (row) => row.option,
  },
];
export const OrderListData = [
  {
    image: <img src={Profile1} alt='users' href='#javascript' width={70} />,
    code: '+ 406-4883635',
    date: 'Jul 20, 2021',
    payment: 'Paypal',
    status: <span className='order-success'>Success</span>,
    amount: '$15',
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
    image: <img src={Profile2} alt='users' href='#javascript' width={70} />,
    code: '+ 524-655784',
    date: 'May 29, 2022',
    payment: 'Paypal',
    status: <span className='order-success'>Success</span>,
    amount: '$35',
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
    image: <img src={Profile3} alt='users' href='#javascript' width={70} />,
    code: '+ 365-8574789',
    date: 'April 24, 2022',
    payment: 'Paypal',
    status: <span className='order-pending'>Pending</span>,
    amount: '$55',
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
    image: <img src={Profile4} alt='users' href='#javascript' width={70} />,
    code: '+ 025-654789',
    date: 'June 01, 2022',
    payment: 'Stripe',
    status: <span className='order-success'>Success</span>,
    amount: '$20',
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
    image: <img src={Profile1} alt='users' href='#javascript' width={70} />,
    code: '+ 685-963258',
    date: 'Jan 12, 2022',
    payment: 'Stripe',
    status: <span className='order-success'>Success</span>,
    amount: '$74',
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
    image: <img src={Profile1} alt='users' href='#javascript' width={70} />,
    code: '+ 685-963258',
    date: 'Jan 12, 2022',
    payment: 'Stripe',
    status: <span className='order-success'>Success</span>,
    amount: '$74',
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
    image: <img src={Profile2} alt='users' href='#javascript' width={70} />,
    code: '+ 685-963258',
    date: 'Aug 31, 2022',
    payment: 'Paypal',
    status: <span className='order-cancel'>Cancel</span>,
    amount: '$94',
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
    image: <img src={Profile3} alt='users' href='#javascript' width={70} />,
    code: '+ 357-9512345',
    date: 'March 21, 2022',
    payment: 'Paypal',
    status: <span className='order-cancel'>Cancel</span>,
    amount: '$55',
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
    image: <img src={Profile4} alt='users' href='#javascript' width={70} />,
    code: '+ 123-8978923',
    date: 'Feb 09, 2022',
    payment: 'Paypal',
    status: <span className='order-success'>Success</span>,
    amount: '$30',
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
    image: <img src={Profile1} alt='users' href='#javascript' width={70} />,
    code: '+ 654-9632558',
    date: 'Aug 31, 2022',
    payment: 'Stripe',
    status: <span className='order-pending'>Pending</span>,
    amount: '$70',
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
    image: <img src={Profile2} alt='users' href='#javascript' width={70} />,
    code: '+ 321-7412582',
    date: 'Nov 07, 2022',
    payment: 'Stripe',
    status: <span className='order-pending'>Pending</span>,
    amount: '$100',
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

//--------------------------------------------

export const OrderDetailsData = [
  {
    id: 1,
    img: Profile1,
    head1: 'Product Name',
    Subhead1: 'Outwear & Coats',
    head2: 'Quantity',
    Subhead2: '1',
    head3: 'Price',
    Subhead3: '$63.54',
  },
  {
    id: 2,
    img: Profile2,
    head1: 'Product Name',
    Subhead1: 'Slim Fit Plastic Coat',
    head2: 'Quantity',
    Subhead2: '2',
    head3: 'Price',
    Subhead3: '$74.52',
  },
  {
    id: 3,
    img: Profile3,
    head1: 'Product Name',
    Subhead1: `Men's Sweatshirt`,
    head2: 'Quantity',
    Subhead2: '1',
    head3: 'Price',
    Subhead3: '$99.12',
  },
];

export const OrderTimeLineData = [
  {
    id: 1,
    classs: 'progtrckr-done',
    title: 'Order Processing',
    duration: '05:43 AM',
  },
  {
    id: 2,
    classs: 'progtrckr-done',
    title: 'Pre-Production',
    duration: '01:21 PM',
  },
  {
    id: 3,
    classs: 'progtrckr-done',
    title: 'In Production',
    duration: 'Processing',
  },
  {
    id: 4,
    classs: 'progtrckr-todo',
    title: 'Shipped',
    duration: 'Pending',
  },
  {
    id: 5,
    classs: 'progtrckr-todo',
    title: 'Delivered',
    duration: 'Pending',
  },
];

export const orderHeadColumn = [
  {
    name: 'Date',
    selector: (row) => row.date,
  },
  {
    name: 'Time',
    selector: (row) => row.time,
  },
  {
    name: 'Discription',
    selector: (row) => row.discription,
  },
  {
    name: 'Loaction',
    selector: (row) => row.loaction,
  },
];
export const orderHeadData = [
  {
    date: '21/05/2022',
    time: '12:21 AM',
    discription: 'Shipped Info',
    loaction: '3 SW. Summit St. Lithonia, GA 30038',
  },
  {
    date: '15/04/2022',
    time: '01:00 PM',
    discription: 'Shipped',
    loaction: '70 Rockwell Lane Falls Church, VA 22041',
  },
  {
    date: '04/05/2022',
    time: '03:58 AM',
    discription: 'Shipped Info Received',
    loaction: '3 SW. Summit St. Lithonia, GA 30038',
  },
  {
    date: '30/04/2022',
    time: '06:26 PM',
    discription: 'Origin Scan',
    loaction: '38 Saxon Lane Mobile, AL 36605',
  },
  {
    date: '21/05/2022',
    time: '12:21 AM',
    discription: 'Shipped Info',
    loaction: '3 SW. Summit St. Lithonia, GA 30038',
  },
  {
    date: '15/04/2022',
    time: '01:00 PM',
    discription: 'Shipped',
    loaction: '70 Rockwell Lane Falls Church, VA 22041',
  },
];
