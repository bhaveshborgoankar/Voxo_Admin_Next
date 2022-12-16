import { FunCustomDate } from '../../Utils/useCustomDate';

export const AllMenuList = [
  {
    name: 'Name',
    selector: (row) => row.name,
  },
  {
    name: 'Change On',
    selector: (row) => row.changeon,
  },
  {
    name: 'Status',
    selector: (row) => row.status,
  },
  {
    name: 'Created On',
    selector: (row) => row.createdon,
  },
];
export const AllMenuData = [
  {
    name: 'Product Menu',
    status: <span className='warning'>Restitute</span>,
    createdon: FunCustomDate(19),
    changeon: FunCustomDate(19),
  },
  {
    name: 'Category Menu',
    status: <span className='success'>Success</span>,
    createdon: FunCustomDate(6),
    changeon: FunCustomDate(6),
  },
  {
    name: 'Subcategory Menu',
    status: <span className='success'>Success</span>,
    createdon: FunCustomDate(2),
    changeon: FunCustomDate(2),
  },
  {
    name: 'Sales Menu',
    status: <span className='warning'>Restitute</span>,
    createdon: FunCustomDate(9),
    changeon: FunCustomDate(9),
  },
  {
    name: 'Vendor Menu',
    status: <span className='success'>Success</span>,
    createdon: FunCustomDate(3),
    changeon: FunCustomDate(3),
  },
  {
    name: 'Category Menu',
    status: <span className='success'>Success</span>,
    createdon: FunCustomDate(4),
    changeon: FunCustomDate(1),
  },
  {
    name: 'User Menu',
    status: <span className='warning'>Restitute</span>,
    createdon: FunCustomDate(7),
    changeon: FunCustomDate(2),
  },
];
