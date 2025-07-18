import React from 'react';
import "./mobile.css"; 

export default function Header({ mode, toggleMode }) {
  return (
    <header
      className={`d-flex justify-content-between align-items-center container my-1 py-3 rounded shadow mb-1 border border-2 `}
      style={{ 
        fontSize: '11px',
        padding: '10px',
        lineHeight: '1.2',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        whiteSpace: 'normal',
        textAlign: 'center',
        backgroundColor: mode === 'dark' ? '#343a40' : '#ffffffff',
      }}
    >

      <img src="/assets/LOGO.png" alt="MLD Library Logo" style={{ height: '70px', width: '150px' }} />
      <h1 className="m-0 text-center flex-grow-1"><strong>𝑀𝒜 𝐿𝐼𝒞𝐻𝐻𝑀𝒜 𝒟𝐸𝒱𝐼 𝐿𝐼𝐵𝑅𝒜𝑅𝒴</strong></h1>
      <img src="/assets/LOGO.png" alt="MLD Library Logo"  style={{ height: '70px', width: '150px' }}/>
    </header>
  );
}
