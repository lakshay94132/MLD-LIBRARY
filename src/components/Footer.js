import React from 'react';

export default function Footer(mode, toggleMode) {
  return (
    <footer className={`text-center py-3 ${mode === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'}`}>
      <p>© 2024 MA LICHMA DEVI LIBRARY. All rights reserved.</p>
    </footer>
  );
}
