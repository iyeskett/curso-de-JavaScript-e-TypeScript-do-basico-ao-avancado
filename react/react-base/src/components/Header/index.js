// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="">
        <FaHome size={24} />
      </a>
      <a href="">
        <FaUserAlt size={24} />
      </a>
      <a href="">
        <FaSignInAlt size={24} />
      </a>
    </Nav>
  );
}
