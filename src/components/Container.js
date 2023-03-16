import React, { Fragment } from 'react';
import MyHeader from './MyHeader';
import HeaderImage from '../assets/images/headerImage.jpg';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

function Container() {
  return (
    <Fragment>
      <MyHeader
        title="This is a Mock Header"
        image={HeaderImage}
        altDesc="header image"
      />
      <div className="main-container">
        <Navbar />
        <div className="flex-container">
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
}

export default Container;
