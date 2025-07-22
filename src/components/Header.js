import React from 'react';
import "./App.css";

export default function Header({ mode, toggleMode }) {
  return (
    <header
      className={`d-flex justify-content-between align-items-center container my-1 py-3 rounded shadow mb-1 border border-2 `}
      // style={{ 
      //   backgroundColor: mode === 'dark' ? '#000000ff' : '#ffffffff',
      // }}
    >

      <img src="/assets/LOGO.png" alt="MLD Library Logo" style={{ height: '70px', width: '100px'}} />
      <h1 className="m-0 text-center flex-grow-1"><i>MAA LICHHMA DEVI LIBRARY & COMPUTER CENTER </i></h1>
      <img src="/assets/LOGO.png" alt="MLD Library Logo"  style={{ height: '70px', width: '100px'}}/>
    </header>
  );
}
