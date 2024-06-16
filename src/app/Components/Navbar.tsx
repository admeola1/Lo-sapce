'use client';
import React, { Fragment } from 'react';
import 'flowbite';
import Link from 'next/link';
import {
  Avatar,
  Button,
  Dropdown,
  Navbar,
  DarkThemeToggle,
  Flowbite,
} from 'flowbite-react';
import GoogleSSO from '../Buttons/LoginButton';
import LogOut from '../Buttons/LogOutButton';

export default function MainNavbar(): React.JSX.Element {
  return (
    <Fragment>
      <Navbar fluid rounded>
        <Navbar.Brand href="">
          <img
            src="\DALL·E 2024-04-20 18.16.26 .jpeg"
            className="mr-3 h-6 sm:h-9"
            alt="Lo-space Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Lo-Space
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="/1628795371490.jpeg" rounded />
            }>
            <Dropdown.Header>
              <span className="block text-sm">Ademola Mohammed</span>
              <span className="block truncate text-sm font-medium">
                Ademolami@gmail.com
              </span>
            </Dropdown.Header>
            <Navbar.Link href="https://www.linkedin.com/in/1ademolamohammed/">
              <Dropdown.Item>LinkedIn</Dropdown.Item>
            </Navbar.Link>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/About">About</Navbar.Link>

          <Navbar.Link href="/Contact">Contact</Navbar.Link>

          <GoogleSSO text={'Login Via Google'}></GoogleSSO>

          <br />

          <LogOut text={'Log Out'}></LogOut>

          <Flowbite>
            <DarkThemeToggle />
          </Flowbite>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}
