import { deleteTagAPI } from '../../Constant/APIRoutes';
import ActionButtons from '../Users/ActionButtons';

export const TagData = [
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
    selector: (row) => row.activeStatus,
    name: 'Sr No',
    sortable: true,
    compact: true,
  },
  {
    name: 'Action',
    cell: (row) => <ActionButtons row={row} editRedirectLink={'/tag/edit/'} deleteAPILink={deleteTagAPI} toReRender={'/tag'} />,
    sortable: true,
    compact: true,
  },
];
