import { deleteBlogAPI } from "../../Constant/APIRoutes";
import ActionButtons from "../Users/ActionButtons";

export const BlogData = [
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
    cell: (row) => <ActionButtons row={row} editRedirectLink={'/blog/edit/'} deleteAPILink={deleteBlogAPI} toReRender={'/blog'} />,
    sortable: true,
    compact: true,
  },
];

export const SelectCategoriesOptions = [
  { name: 'In Stock', value: 'instock' },
  { name: 'Out of Stock', value: 'outofstock' },
  { name: 'Coming Soon', value: 'comingsoon' },
];