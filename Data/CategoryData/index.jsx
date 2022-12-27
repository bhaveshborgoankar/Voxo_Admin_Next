import ActionButtons from '../Users/ActionButtons';
import { deleteCategoryAPI } from '../../Constant/APIRoutes';

export const CategoryColumn = [
  {
    selector: (row) => row.Sr_No,
    name: 'Sr No',
    sortable: true,
    compact: true,
  },
  {
    selector: (row) => row.image,
    name: 'Image',
  },
  {
    selector: (row) => row.name,
    name: 'Name',
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
    cell: (row) => <ActionButtons row={row} editRedirectLink={'/category/edit/'} deleteAPILink={deleteCategoryAPI} toReRender={'/category'} />,
    sortable: true,
    compact: true,
  },
];
