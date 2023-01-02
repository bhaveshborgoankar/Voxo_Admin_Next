import { Home, Users, Settings, Clipboard, Tag } from 'react-feather';

export const AllMenus = [
  {
    name: 'Dashboard',
    path: '/',
    type: 'link',
    icon: <Home />,
  },
  {
    name: 'Users',
    active: false,
    icon: <Users />,
    children: [
      {
        name: 'All users',
        path: '/user',
        type: 'link',
      },
      {
        name: 'Add User',
        path: '/user/add',
        type: 'link',
      },
    ],
  },
  {
    name: 'Categories',
    icon: <Clipboard />,
    active: false,
    children: [
      {
        name: 'All Categories',
        path: '/category',
        type: 'link',
      },
      {
        name: 'Add Category',
        path: '/category/add',
        type: 'link',
      },
    ],
  },
  {
    name: 'Tags',
    icon: <Tag />,
    active: false,
    children: [
      {
        name: 'All Tags',
        path: '/tag',
        type: 'link',
      },
      {
        name: 'Add Tag',
        path: '/tag/add',
        type: 'link',
      },
    ],
  },
  // {
  //   name: 'Orders',
  //   icon: <Archive />,
  //   active: false,
  //   children: [
  //     {
  //       name: 'Order List',
  //       path: '/order_list',
  //       type: 'link',
  //     },
  //     {
  //       name: 'Order Detail',
  //       path: '/order_detail',
  //       type: 'link',
  //     },
  //     {
  //       name: 'Order Tracking',
  //       path: '/order_tracking',
  //       type: 'link',
  //     },
  //   ],
  // },
  // {
  //   name: 'Product',
  //   icon: <Box />,
  //   active: false,
  //   children: [
  //     {
  //       name: 'Products',
  //       path: '/products',
  //       type: 'link',
  //     },
  //     {
  //       name: 'Add New Products',
  //       path: '/add_product',
  //       type: 'link',
  //     },
  //   ],
  // },
  {
    name: 'Settings',
    icon: <Settings />,
    active: false,
    children: [
      {
        name: 'Profile Setting',
        path: '/profile_setting',
        type: 'link',
      },
    ],
  },
];
