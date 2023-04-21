import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardVoice } from 'react-icons/md';
import { TbAntennaBars5 } from 'react-icons/tb';
import { AiOutlineSearch } from 'react-icons/ai';
import './navlink.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="menu">
        <AiOutlineMenu className="icon-Item" />
      </div>

      <p>Football scores</p>

      <div className="icons">
        <div className="icon">
          <TbAntennaBars5 className="icon-Item" />
        </div>
        <div className="icon">
          <MdKeyboardVoice className="icon-Item" />
        </div>
        <div className="icon">
          <AiOutlineSearch className="icon-Item" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
