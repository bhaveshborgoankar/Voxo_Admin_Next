import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowLeft, ArrowRight } from 'react-feather';
import { AllMenus } from './Menus';
const SidebarNav = () => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState();
  const [chiledMenu, setChiledMenu] = useState();

  useEffect(() => {
    if (router.asPath) {
      AllMenus.forEach((item) => {
        if (item.children) {
          item.children.forEach((child) => {
            if (child.path === router.asPath) {
              setChiledMenu(child.name);
              setActiveMenu(item.name);
              return true;
            } else return false;
          });
        } else {
          if (item.path === router.asPath) {
            setActiveMenu(item.name);
            return true;
          } else return false;
        }
      });
    }
  }, [router]);

  return (
    <nav className='sidebar-main'>
      <div className='left-arrow' id='left-arrow'>
        <ArrowLeft />
      </div>
      <div id='sidebar-menu'>
        <ul className='sidebar-links' id='simple-bar'>
          <li className='back-btn'></li>
          {AllMenus &&
            AllMenus.map((elem, i) => {
              return (
                <li className='sidebar-list' key={i}>
                  {elem.type === 'link' ? (
                    <Link href={elem.path} className={`sidebar-link sidebar-title link-nav${activeMenu === elem.name ? ' active' : ''}`}>
                      {elem.name}
                    </Link>
                  ) : (
                    <a
                      className={`sidebar-link sidebar-title${activeMenu === elem.name ? ' active' : ''}`}
                      href='#'
                      onClick={() => {
                        setActiveMenu((prev) => prev !== elem.name && elem.name);
                      }}>
                      {elem.icon}
                      <span>{elem.name}</span>
                      <div className='according-menu'>
                        <i className='fa fa-angle-right'></i>
                      </div>
                    </a>
                  )}
                  {elem.children && (
                    <ul className={`sidebar-submenu ${elem.name === activeMenu ? 'd-block' : 'd-none'}`}>
                      {elem?.children?.map((item, i) => {
                        return (
                          <li key={i}>
                            <Link
                              href={`${item.path}`}
                              className={`${item.name === chiledMenu ? 'active' : ''}`}
                              onClick={() => {
                                setChiledMenu(item.name);
                              }}>
                              {item.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
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
