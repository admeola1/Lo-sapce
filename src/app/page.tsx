import Script from 'next/script';
import React, { Fragment } from 'react';
//import GoogleSSO from './Buttons/LoginButton';
import MessageWindow from './Components/ChatWindow';
import MusicPlayer from './MusicPlayerComponents/MusicPlayer';
import Navbar from './Components/Navbar';
import { Flowbite, DarkThemeToggle } from 'flowbite-react';
import { link } from 'fs';
import ReactGA from 'react-ga4';
import MainNavbar from './Components/Navbar';

export default function Home() {
  return (
    <body>
      
      <MainNavbar></MainNavbar>

      <MessageWindow></MessageWindow>

      <MusicPlayer></MusicPlayer>
    </body>
  );
}
