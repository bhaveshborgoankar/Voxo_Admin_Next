import { deleteUserAPI } from '../../Constant/APIRoutes';
import ActionButtons from './ActionButtons';

export const AllUserColumn = [
  {
    selector: (row) => row.Sr_No,
    name: 'Sr No',
    sortable: true,
    compact: true,
  },
  {
    selector: (row) => row.name,
    name: 'Name',
    sortable: true,
    compact: true,
  },
  {
    selector: (row) => row.phone,
    name: 'Phone',
    sortable: true,
    compact: true,
  },
  {
    selector: (row) => row.email,
    name: 'Email',
    sortable: true,
    compact: true,
  },
  {
    selector: (row) => row.created_at,
    name: 'Created On',
    sortable: true,
    compact: true,
  },
  {
    selector: (row) => row.activeStatus,
    name: 'Status',
    sortable: true,
    compact: true,
  },
  {
    name: 'Action',
    cell: (row) => <ActionButtons row={row} editRedirectLink={'/user/edit/'} deleteAPILink={deleteUserAPI} toReRender={'/user'} />,
    sortable: true,
    compact: true,
  },
];

