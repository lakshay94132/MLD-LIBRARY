import React from 'react';

export default function Header({ mode, toggleMode }) {
  return (
    <header
      className={`container text-center my-1 py-3 rounded shadow mb-1 border border-2 ${
        mode === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'
      }`}
    >
      <h1>MA LICHMA DEVI LIBRARY</h1>
    </header>
  );
}
