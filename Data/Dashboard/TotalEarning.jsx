import { AlertCircle, Check, CreditCard, Database, DollarSign, MessageCircle, Shield, ShoppingBag, TrendingDown, TrendingUp, Truck, UserPlus } from 'react-feather';
// import Chrome from '/assets/images/brower-image/chrome.png';
// import Safari from '../../public/assets/images/brower-image/safari.png';
// import InternetExplore from '../../public/assets/images/brower-image/internet-explorer.png';
// import OperaMini from '../../public/assets/images/brower-image/opera.png';
// import Firefox from '../../public/assets/images/brower-image/firefox.png';

export const TotalEarning = [
  {
    id: 1,
    title: 'Total Earnings',
    no: 6659,
    icon: <TrendingUp />,
    persent: '8.5%',
    icon2: <Database />,
    classes: 'primary',
  },
  {
    id: 2,
    title: 'Total Booking',
    no: 5862,
    icon: <TrendingDown />,
    persent: '9.5%',
    icon2: <ShoppingBag />,
    classes: 'danger',
  },
  {
    id: 3,
    title: 'Reviews',
    no: 1259,
    icon: <TrendingUp />,
    persent: '2.5%',
    icon2: <MessageCircle />,
    classes: 'secondary',
  },
  {
    id: 4,
    title: 'Total Users',
    no: 2258,
    icon: <TrendingDown />,
    persent: '10.5%',
    icon2: <UserPlus />,
    classes: 'success',
  },
];

export const TransactionsCards = [
  {
    id: 1,
    title: 'Wallets',
    subtitle: 'Starbucks',
    icon: <Shield />,
    price: '-$ 74',
    class: 'lost',
  },
  {
    id: 2,
    title: 'Bank Transfer',
    subtitle: 'Add Money',
    icon: <Check />,
    price: '+$ 125',
    class: 'success',
  },
  {
    id: 3,
    title: 'Paypal',
    subtitle: 'Add Money',
    icon: <DollarSign />,
    price: '-$ 50',
    class: 'lost',
  },
  {
    id: 4,
    title: 'Mastercard',
    subtitle: 'Ordered Food',
    icon: <CreditCard />,
    price: '-$ 40',
    class: 'lost',
  },
  {
    id: 5,
    title: 'Transfer',
    subtitle: 'Refund',
    icon: <TrendingUp />,
    price: '+$ 90',
    class: 'success pb-0',
  },
];

export const NewUpdateData = [
  {
    id: 1,
    title: 'Update Product',
    subtitle: 'Product is up to dated and well designed.',
  },
  {
    id: 2,
    title: 'James liked Nike Shoes',
    subtitle: 'Nike shoes changes the designed of all shoes.',
  },
  {
    id: 3,
    title: 'John just buy your product',
    subtitle: 'This client buy our product three times.',
  },
  {
    id: 4,
    title: 'Jihan dor just save your product',
    subtitle: 'Product is added to wishlist.',
  },
];

export const TodoListData = [
  {
    id: 1,
    list: 'Pick up kids from school',
    time: '19 Hours',
  },
  {
    id: 2,
    list: 'Prepare or presentation.',
    time: '15 Hours',
  },
  {
    id: 3,
    list: 'Create invoice',
    time: '8 Hours',
  },
  {
    id: 4,
    list: 'Meeting with Alisa',
    time: '3 Hours',
  },
];

export const RecentActivityData = [
  {
    id: 1,
    title: 'Calendar Updated',
    time: 'Just Now',
    feather: false,
    icon: 'lnr lnr-calendar-full',
  },
  {
    id: 2,
    title: 'Commented on a post',
    time: '5 Min',
    feather: true,
    icon: <AlertCircle />,
  },
  {
    id: 3,
    title: 'Order 392 shipped',
    time: '10 min',
    feather: true,
    icon: <Truck />,
  },
  {
    id: 4,
    title: 'Invoice 653 has been paid',
    time: '1 hours',
    feather: true,
    icon: <DollarSign />,
  },
  {
    id: 5,
    title: 'A new user has been added',
    time: '3 hours',
    feather: false,
    icon: 'lnr lnr-user',
  },
  {
    id: 6,
    title: 'Finace report',
    time: '8 hours',
    feather: false,
    icon: 'lnr lnr-select',
  },
];

export const BrowserStatusData = [
  {
    id: 1,
    title: 'Chrome',
    persent: '94%',
    images: 'brower-image/chrome.png',
  },
  {
    id: 2,
    title: 'Safari',
    persent: '66%',
    images: 'brower-image/safari.png',
  },
  {
    id: 3,
    title: 'Internet Explore',
    persent: '25%',
    images: 'brower-image/internet-explorer.png',
  },
  {
    id: 4,
    title: 'Opera Mini',
    persent: '5%',
    images: 'brower-image/opera.png',
  },
  {
    id: 5,
    title: 'Firefox',
    persent: '5%',
    images: 'brower-image/firefox.png',
  },
];
