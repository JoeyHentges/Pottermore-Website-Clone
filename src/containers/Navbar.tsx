import React, { useState } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { HiOutlineChevronDown } from 'react-icons/hi';

import { Navbar } from '../components';
import { NavbarDropdownIcon } from '../components/Navbar/styles/Navbar';

let mock;

const NavbarContainer: React.FC = () => {
  const pathname = useRouter().pathname;
  const [dropdownActive, setDropdownActive] = useState('');

  return (
    <Navbar className={dropdownActive !== '' && 'dropdown-active'} onMouseLeave={() => setDropdownActive('')}>
      {mock.map((item) => {
        return (
          <>
            {item.type === 'dropdown' ? (
              <Navbar.NavbarItem
                className={clsx(
                  item.activePaths.includes(pathname) && 'active',
                  dropdownActive === item.title && 'dropdown-active'
                )}
                onClick={() => (dropdownActive === item.title ? setDropdownActive('') : setDropdownActive(item.title))}
              >
                <Navbar.NavbarText>
                  {item.title}{' '}
                  <NavbarDropdownIcon>
                    <HiOutlineChevronDown />
                  </NavbarDropdownIcon>
                </Navbar.NavbarText>
              </Navbar.NavbarItem>
            ) : (
              <Navbar.NavbarItem className={clsx(item.activePaths.includes(pathname) && 'active')}>
                <Navbar.NavbarLink href={item.link}>
                  <Navbar.NavbarText>{item.title}</Navbar.NavbarText>
                </Navbar.NavbarLink>
              </Navbar.NavbarItem>
            )}
            <Navbar.NavbarDropdown
              className={clsx('navbar-dropdown', dropdownActive === item.title && 'dropdown-active')}
            >
              {item.dropdownContent}
            </Navbar.NavbarDropdown>
          </>
        );
      })}
    </Navbar>
  );
};

export default NavbarContainer;

mock = [
  {
    title: 'News and Features',
    type: 'dropdown',
    activePaths: ['/1', '/2'],
    dropdownContent: (
      <>
        <p>new and features</p>
      </>
    ),
  },
  {
    title: 'Quizzes',
    type: 'link',
    activePaths: ['/quizzes'],
    link: '/quizzes',
  },
  {
    title: 'Puzzles',
    type: 'link',
    activePaths: ['/puzzles'],
    link: '/puzzles',
  },
  {
    title: 'J.K Rowling Archive',
    type: 'link',
    activePaths: ['/writing-by-jk-rowling'],
    link: '/writing-by-jk-rowling',
  },
  {
    title: 'Discover',
    type: 'dropdown',
    activePaths: ['/1', '/2'],
    dropdownContent: (
      <>
        <p>discover</p>
      </>
    ),
  },
  {
    title: '20 Years of Movie Magic',
    type: 'link',
    activePaths: ['/20-years-of-movie-magic'],
    link: '/20-years-of-movie-magic',
  },
  {
    title: 'Hogwarts Sorting',
    type: 'link',
    activePaths: ['/hogwarts-sorting'],
    link: '/hogwarts-sorting',
  },
  {
    title: 'Pins',
    type: 'dropdown',
    activePaths: ['/3', '/4'],
    dropdownContent: (
      <>
        <p>Pins</p>
      </>
    ),
  },
  {
    title: 'Shop',
    type: 'link',
    activePaths: ['/shop'],
    link: '/shop',
  },
];
