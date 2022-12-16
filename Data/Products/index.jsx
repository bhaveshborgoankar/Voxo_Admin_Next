import { Link } from 'react-router-dom';
import productData from './productData.json';
export const ProductsColumns = [
  {
    name: 'Product Image',
    selector: (row) => row.productimage,
  },
  {
    name: 'Product Name',
    selector: (row) => row.productname,
    sortable: true,
  },
  {
    name: 'Category',
    selector: (row) => row.category,
    sortable: true,
  },
  {
    name: 'Current Qty',
    selector: (row) => row.qty,
    sortable: true,
  },
  {
    name: 'Price',
    selector: (row) => row.price,
    sortable: true,
  },
  {
    name: 'Published',
    selector: (row) => row.published,
  },
  {
    name: 'Option',
    selector: (row) => row.option,
  },
];
export const ProductListData = Object.values(productData).map((elem) => {
  return {
    productimage: <img src={require(`../../assets/images/${elem?.productimage}`)} alt='users' href='#javascript' className='img-fluid' width={70} />,
    category: elem.category,
    productname: elem.productname,
    price: `$${elem.price}`,
    qty: Math.floor(Math.random() * elem.id) !== 0 ? Math.floor(Math.random() * elem.id) : 1,
    published: <span className={elem.published ? 'lnr lnr-cross-circle' : 'lnr lnr-checkmark-circle'}></span>,
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
  };
});
