import React, { useState } from 'react';
import "./maincss.css";
import Main from './MainAPI.js';
import Cards from './Cards.js'

const Mainpage = () => {
  const [mainData, setMenuData] = useState(Main);
  const filterItem = (type) => {
    const updatedList = Main.filter((curElem) => {
      return curElem.type === type;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <nav className='navbar'>
        <button className='btn' onClick={() => setMenuData(Main)}>All</button>
        <button className='btn' onClick={() => filterItem("Nature")}>Nature</button>
        <button className='btn' onClick={() => filterItem("Historical")}>Historical</button>
        <button className='btn' onClick={() => filterItem("Peace")}>Peace</button>
        <button className='btn' onClick={() => filterItem("type")}>Wishlist</button>

      </nav>
      <Cards mainData={mainData} />
    </>
  );
};

export default Mainpage;