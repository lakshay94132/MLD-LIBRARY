import React from 'react';
import "./mobile.css"; 
import "./Header.css"; // Assuming you have a CSS file for styling

export default function Header({ mode, toggleMode }) {
  return (
    <header
      className={`d-flex justify-content-between align-items-center container my-1 py-3 rounded shadow mb-1 border border-2 `}
      style={{ 
        backgroundColor: mode === 'dark' ? '#343a40' : '#ffffffff',
      }}
    >

      <img src="/assets/LOGO.png" alt="MLD Library Logo" style={{ height: '70px', width: '100px'}} />
      <h1 className="m-0 text-center flex-grow-1"><strong>𝑀𝒜𝒜 𝐿𝐼𝒞𝐻𝐻𝑀𝒜 𝒟𝐸𝒱𝐼 𝐿𝐼𝐵𝑅𝒜𝑅𝒴 𝒶𝓃𝒹 𝒞𝒪𝑀𝒫𝒰𝒯𝐸𝑅 𝒞𝐸𝒩𝒯𝐸𝑅</strong></h1>
      <img src="/assets/LOGO.png" alt="MLD Library Logo"  style={{ height: '70px', width: '100px'}}/>
    </header>
  );
}
