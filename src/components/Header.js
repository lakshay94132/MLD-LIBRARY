import React from 'react';

export default function Header({ mode, toggleMode }) {
  return (
    <header
      className={`d-flex justify-content-between align-items-center container my-1 py-3 rounded shadow mb-1 border border-2 `}
    >
      <img src="/LOGO.png" alt="MLD Library Logo" style={{ height: '70px', width: '150px', marginLeft: '50px' }} />
      <h1 className="m-0 "><strong>𝑀𝒜 𝐿𝐼𝒞𝐻𝐻𝑀𝒜 𝒟𝐸𝒱𝐼 𝐿𝐼𝐵𝑅𝒜𝑅𝒴</strong>
</h1>
      <img src="/LOGO.png" alt="MLD Library Logo" style={{ height: '70px', width: '150px', marginRight: '50px' }} />
    </header>
  );
}
