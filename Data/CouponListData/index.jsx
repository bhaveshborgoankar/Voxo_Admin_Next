export const CouponListColumn = [
  {
    name: 'Title',
    selector: (row) => row.title,
  },
  {
    name: 'Code',
    selector: (row) => row.code,
  },
  {
    name: 'Discount',
    selector: (row) => row.discount,
  },
  {
    name: 'Status',
    selector: (row) => row.status,
  },
];

export const CouponListData = [
  {
    title: '10% Off',
    code: '5488165',
    discount: '10%',
    status: <span class='warning'>Restitute</span>,
  },
  {
    title: '25% Off',
    code: '2143235',
    discount: '17%',
    status: <span class='success'>Success</span>,
  },
  {
    title: '12% Off',
    code: '3243468',
    discount: '20%',
    status: <span class='success'>Success</span>,
  },
  {
    title: '45% Off',
    code: '7846289',
    discount: '50%',
    status: <span class='warning'>Restitute</span>,
  },
  {
    title: '52% Off',
    code: '2587441',
    discount: '20%',
    status: <span class='success'>Success</span>,
  },
  {
    title: '25% Off',
    code: '9635825',
    discount: '70%',
    status: <span class='warning'>Restitute</span>,
  },
  {
    title: '41% Off',
    code: '1524165',
    discount: '60%',
    status: <span class='success'>Success</span>,
  },
  {
    title: '63% Off',
    code: '966845',
    discount: '52%',
    status: <span class='warning'>Restitute</span>,
  },
  {
    title: '11% Off',
    code: '366578',
    discount: '55%',
    status: <span class='warning'>Restitute</span>,
  },
];
