import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'react-feather';
import { AllMenus } from './Menus';
const SidebarNav = () => {
  const [active, setActive] = useState(AllMenus);
  const checkToggle = (selectedMenu) => {
    // setActive(active.filter((item) => console.log('item', item.name !== selectedMenu.name)));
    // active.forEach((item) => {
    //   if (item.name != selectedMenu.name) item.active = false;
    // });
    // active.every((item) => {
    //   if (item.name === selectedMenu.name) {
    //     item.active = !item.active;
    //     return false;
    //   } else return true;
    // });
  };

  return (
    <nav className='sidebar-main'>
      <div className='left-arrow' id='left-arrow'>
        <ArrowLeft />
      </div>
      <div id='sidebar-menu'>
        <ul className='sidebar-links' id='simple-bar'>
          <li className='back-btn'></li>
          {active.length > 0 &&
            active.map((elem, i) => {
              return (
                <Fragment key={i}>
                  {elem.mainClasses ? (
                    <li className={elem.mainClasses ? elem.mainClasses : 'sidebar-list'}>
                      <div>
                        <h6 className='lan-1'>{elem.name}</h6>
                        <p className='lan-2'>{elem.subHeading}</p>
                      </div>
                    </li>
                  ) : (
                    <li className='sidebar-list'>
                      <Link
                        className={`sidebar-link sidebar-title link-nav ${elem.active ? 'active' : ''}`}
                        href={elem.path !== undefined ? elem.path : ''}
                        onClick={() => {
                          checkToggle(elem);
                        }}>
                        {/* <a className='sidebar-link sidebar-title link-nav' href='#javascript'> */}
                        {elem.icon}
                        <span>{elem.name}</span>
                        <div className='according-menu'>
                          <i className='fa fa-angle-right'></i>
                        </div>
                        {/* </a> */}
                      </Link>
                      {elem.children && (
                        <ul className='sidebar-submenu'>
                          {elem?.children?.map((item, i) => {
                            return (
                              <li key={i}>
                                <Link href={item.path !== undefined ? item.path : ''}> {item.name} </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  )}
                </Fragment>
              );
            })}
        </ul>
      </div>
      <div className='right-arrow' id='right-arrow'>
        <ArrowRight />
      </div>
    </nav>
  );
};
export default SidebarNav;
