export const ProductReviewHeader = [
  {
    name: 'No.',
    selector: (row) => row.no,
  },
  {
    name: 'Customer Name',
    selector: (row) => row.customername,
  },
  {
    name: 'Product Name',
    selector: (row) => row.productname,
  },
  {
    name: 'Rating',
    selector: (row) => row.rating,
  },
  {
    name: 'Comment',
    selector: (row) => row.comment,
  },
  {
    name: 'Published',
    selector: (row) => row.published,
  },
];

export const ProductReviewData = [
  {
    no: '01',
    customername: 'Maureen Biologist',
    productname: 'Outwear & Coats',
    rating: (
      <ul className='rating'>
        <li>
          <i className='fas fa-star theme-color'></i>
        </li>
        <li>
          <i className='fas fa-star theme-color'></i>
        </li>
        <li>
          <i className='fas fa-star theme-color'></i>
        </li>
        <li>
          <i className='fas fa-star theme-color'></i>
        </li>
        <li>
          <i className='fas fa-star theme-color'></i>
        </li>
      </ul>
    ),
    comment: 'Awesome Product',
    published: <span className='lnr lnr-checkmark-circle'></span>,
  },
  {
    no: '02',
    customername: 'Caroline Harris',
    productname: 'Slim Fit Plastic Coat',
    rating: (
      <ul className='rating'>
        <li>
          <i className='fas fa-star theme-color'></i>
        </li>
        <li>
          <i className='fas fa-star theme-color'></i>
        </li>
        <li>
          <i className='fas fa-star theme-color'></i>
        </li>
        <li>
          <i className='fas fa-star theme-color'></i>
        </li>
        <li>
          <i className='fas fa-star'></i>
        </li>
      </ul>
    ),
    comment: 'Very nice color',
    published: <span className='lnr lnr-checkmark-circle'></span>,
  },
  {
    no: '03',
    customername: 'Lucy Morile',
    productname: `Men's Sweatshirt`,
    rating: (
      <ul className='rating'>
        <li>
          <i className='fas fa-star theme-color'></i>
        </li>
        <li>
          <i className='fas fa-star theme-color'></i>
        </li>
        <li>
          <i className='fas fa-star theme-color'></i>
        </li>
        <li>
          <i className='fas fa-star theme-color'></i>
        </li>
        <li>
          <i className='fas fa-star'></i>
        </li>
      </ul>
    ),
    comment: 'The Product is No Longer Needed',
    published: <span className='lnr lnr-checkmark-circle'></span>,
  },
  {
    no: '04',
    customername: 'Jennifer Straight',
    productname: `Men's Hoodie t-shirt`,
    rating: (
      <ul className='rating'>
        <li>
          <i className='fas fa-star theme-color'></i>
        </li>
        <li>
          <i className='fas fa-star'></i>
        </li>
        <li>
          <i className='fas fa-star'></i>
        </li>
        <li>
          <i className='fas fa-star'></i>
        </li>
        <li>
          <i className='fas fa-star'></i>
        </li>
      </ul>
    ),
    comment: 'Average Product',
    published: <span className='lnr lnr-cross-circle'></span>,
  },
  {
    no: '05',
    customername: 'Kevin Millett',
    productname: `Outwear & Coats`,
    rating: (
      <ul className='rating'>
        <li>
          <i className='fas fa-star theme-color'></i>
        </li>
        <li>
          <i className='fas fa-star'></i>
        </li>
        <li>
          <i className='fas fa-star'></i>
        </li>
        <li>
          <i className='fas fa-star'></i>
        </li>
        <li>
          <i className='fas fa-star'></i>
        </li>
      </ul>
    ),
    comment: 'Size is not avalible',
    published: <span className='lnr lnr-cross-circle'></span>,
  },
  {
    no: '06',
    customername: 'Kittel Millett',
    productname: `Slim Fit Plastic Coat`,
    rating: (
      <ul className='rating'>
        <li>
          <i className='fas fa-star theme-color'></i>
        </li>
        <li>
          <i className='fas fa-star theme-color'></i>
        </li>
        <li>
          <i className='fas fa-star theme-color'></i>
        </li>
        <li>
          <i className='fas fa-star'></i>
        </li>
        <li>
          <i className='fas fa-star'></i>
        </li>
      </ul>
    ),
    comment: 'Size is not avalible',
    published: <span className='lnr lnr-cross-circle'></span>,
  },
  {
    no: '07',
    customername: 'John March',
    productname: `Slim Fit Plastic Coat`,
    rating: (
      <ul className='rating'>
        <li>
          <i className='fas fa-star theme-color'></i>
        </li>
        <li>
          <i className='fas fa-star theme-color'></i>
        </li>
        <li>
          <i className='fas fa-star theme-color'></i>
        </li>
        <li>
          <i className='fas fa-star'></i>
        </li>
        <li>
          <i className='fas fa-star'></i>
        </li>
      </ul>
    ),
    comment: 'Soft Material',
    published: <span className='lnr lnr-cross-circle'></span>,
  },
];
