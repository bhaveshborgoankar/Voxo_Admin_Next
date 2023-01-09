import { deleteProductAPI } from "../../Constant/APIRoutes";
import ActionButtons from "../Users/ActionButtons";

export const CategoryOption = [
  { name: 'Electronic', value: 'electronic' },
  { name: 'Flower', value: 'flower' },
  { name: 'Furniture', value: 'furniture' },
  { name: 'Vegetable', value: 'vegetable' },
  { name: 'Shoes', value: 'shoes' },
  { name: 'Fashion', value: 'fashion' },
];

export const BrandOption = [
  { name: 'Puma', value: 'Puma' },
  { name: 'Nike', value: 'Nike' },
  { name: 'Us Polo', value: 'UsPolo' },
];

export const StockStatusOption = [
  { name: 'In Stock', value: 'instock' },
  { name: 'Out of Stock', value: 'outofstock' },
  { name: 'Coming Soon', value: 'comingsoon' },
];

export const ProductColorOption = [
  { name: 'Red', value: 'red' },
  { name: 'Blue', value: 'blue' },
  { name: 'Black', value: 'black' },
];

export const ProductColumns = [
  {
    selector: (row) => row.Sr_No,
    name: 'Sr No',
    sortable: true,
    compact: true,
  },
  {
    selector: (row) => row.image,
    name: 'Product Image',
    sortable: true,
    compact: true,
  },
  {
    selector: (row) => row.name,
    name: 'Product Name',
    sortable: true,
    compact: true,
  },
  {
    selector: (row) => row.created_at,
    name: 'Created At',
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
    cell: (row) => <ActionButtons row={row} editRedirectLink={'/product/edit/'} deleteAPILink={deleteProductAPI} toReRender={'/product'} />,
    sortable: true,
    compact: true,
  },
];

export const ProductDemoData = [
  {
    Sr_No:1,
    name:"Demo"
  },
];
