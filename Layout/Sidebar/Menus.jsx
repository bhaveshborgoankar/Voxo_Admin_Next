import { Home, Users, Settings, Clipboard, Tag, Box } from 'react-feather';

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
  {
    name: 'Product',
    icon: <Box />,
    active: false,
    children: [
      {
        name: 'Products',
        path: '/product',
        type: 'link',
      },
      {
        name: 'Add New Products',
        path: '/product/add',
        type: 'link',
      },
    ],
  },
  {
    name: 'Blog',
    icon: <Box />,
    active: false,
    children: [
      {
        name: 'Blogs',
        path: '/blog',
        type: 'link',
      },
      {
        name: 'Add New Blog',
        path: '/blog/add',
        type: 'link',
      },
    ],
  },
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
