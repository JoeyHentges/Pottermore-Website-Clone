import React, { useState } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { HiOutlineChevronDown } from 'react-icons/hi';

import { Navbar } from '../components';

let mock;

const NavbarContainer: React.FC = () => {
  const pathname = useRouter().pathname;
  const [dropdownActive, setDropdownActive] = useState('');
  const [dropdownContent, setDropdownContent] = useState(null);

  return (
    <Navbar className={dropdownActive !== '' && 'dropdown-active'} onMouseLeave={() => setDropdownActive('')}>
      <Navbar.NavbarItemContainer>
        {mock.map((item) => {
          if (item.type === 'dropdown') {
            return (
              <React.Fragment key={item.title}>
                <Navbar.NavbarItem
                  className={clsx(
                    item.activePaths.includes(pathname) && 'active',
                    dropdownActive === item.title && 'dropdown-active'
                  )}
                  onClick={() => {
                    if (dropdownActive === item.title) {
                      setDropdownActive('');
                    } else {
                      setDropdownActive(item.title);
                      setDropdownContent(item.dropdownContent);
                    }
                  }}
                >
                  <Navbar.NavbarText>
                    {item.title}{' '}
                    <Navbar.NavbarDropdownIcon>
                      <HiOutlineChevronDown />
                    </Navbar.NavbarDropdownIcon>
                  </Navbar.NavbarText>
                </Navbar.NavbarItem>
              </React.Fragment>
            );
          }
          return (
            <Navbar.NavbarItem key={item.title} className={clsx(item.activePaths.includes(pathname) && 'active')}>
              <Navbar.NavbarLink href={item.link}>
                <Navbar.NavbarText>{item.title}</Navbar.NavbarText>
              </Navbar.NavbarLink>
            </Navbar.NavbarItem>
          );
        })}
      </Navbar.NavbarItemContainer>

      <Navbar.NavbarDropdown className={clsx('navbar-dropdown', dropdownActive !== '' && 'dropdown-active')}>
        {dropdownContent}
      </Navbar.NavbarDropdown>
      <Navbar.NavbarDropdownBackground
        className={dropdownActive !== '' && 'dropdown-active'}
        onMouseEnter={() => setDropdownActive('')}
      />
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
