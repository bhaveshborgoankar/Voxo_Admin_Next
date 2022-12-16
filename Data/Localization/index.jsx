import { Link } from 'react-router-dom';

export const TranslationListHead = [
  {
    name: 'User Key',
    selector: (row) => row.userkey,
  },
  {
    name: 'Russian',
    selector: (row) => row.russian,
  },
  {
    name: 'Arabic',
    selector: (row) => row.arabic,
  },
  {
    name: 'English',
    selector: (row) => row.english,
  },
  {
    name: 'Options',
    selector: (row) => row.option,
  },
];
export const TranslationData = [
  {
    userkey: 'user:users.user-lists',
    russian: 'список пользователей',
    arabic: '.قوائم المستخدمين',
    english: 'user lists',
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
  },
  {
    userkey: 'user:users.user-first-name',
    russian: 'имя пользователя',
    arabic: 'اسم المستخدم الأول',
    english: 'user first name',
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
  },
  {
    userkey: 'user:users.user-last-name',
    russian: 'фамилия пользователя',
    arabic: 'اسم المستخدم الأخير',
    english: 'user last name',
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
  },
  {
    userkey: 'user:users.user-login',
    russian: 'логин пользователя',
    arabic: 'دخول المستخدم',
    english: 'user login',
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
  },
  {
    userkey: 'user:users.user-add-product',
    russian: 'добавить продукт',
    arabic: 'أضف المنتج',
    english: 'add product',
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
  },
  {
    userkey: 'user:users.user-orders-list',
    russian: 'упорядоченный список',
    arabic: 'قائمة الأوامر',
    english: 'orders list',
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
  },
  {
    userkey: 'user:users.user-coupon-list',
    russian: 'список купонов список',
    arabic: 'قائمة القسائم',
    english: 'coupon list',
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
  },
  {
    userkey: 'user:users.user-new-password',
    russian: 'пользователя новый пароль',
    arabic: '.مستخدم جديد كلمة مرور',
    english: 'user new password',
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
  },
  {
    userkey: 'user:users.user-reset-password',
    russian: 'сброс пароля',
    arabic: 'أعد ضبط كلمة السر',
    english: 'user reset password',
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
  },
  {
    userkey: 'user:users.user-roles',
    russian: 'роль пользователя',
    arabic: 'أدوار المستخدم',
    english: 'user roles',
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
  },
  {
    userkey: 'user:users.user-profile-information',
    russian: 'информация профиля',
    arabic: 'معلومات التوصيف',
    english: 'profile information',
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
  },
  {
    userkey: 'admin:admin.button.delete',
    russian: 'удалить',
    arabic: 'احذف',
    english: 'delete',
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
  },
  {
    userkey: 'admin:admin.button.save',
    russian: 'спасать',
    arabic: 'احفظ',
    english: 'save',
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
  },
  {
    userkey: 'admin:admin.button.edit',
    russian: 'редактировать',
    arabic: 'حرر',
    english: 'edit',
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
  },
  {
    userkey: 'admin:admin.tabs.general',
    russian: 'главные вкладки',
    arabic: 'الألسنة العامة',
    english: 'general tabs',
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
  },
  {
    userkey: 'user:users.user-reset-password',
    russian: 'сброс пароля',
    arabic: 'أعد ضبط كلمة السر',
    english: 'user reset password',
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
  },
  {
    userkey: 'category:categories.physical',
    russian: 'физический',
    arabic: 'جسدي',
    english: 'physical',
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
  },
  {
    userkey: 'category:categories.digital',
    russian: 'цифровой',
    arabic: 'رقمي',
    english: 'digital',
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
  },
  {
    userkey: 'category:categories.sub.category',
    russian: 'промежуточная категория',
    arabic: 'الفئة الفرعيةر',
    english: 'sub category',
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
  },
  {
    userkey: 'media:media.dropzone',
    russian: 'промежуточная категория',
    arabic: 'منطقة الإسقاط',
    english: 'dropzone',
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
  },
];
