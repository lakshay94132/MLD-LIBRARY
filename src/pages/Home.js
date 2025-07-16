import React from 'react';

export default function Home() {
  return (
    <main className="container my-4">
      <h2>Welcome to MA LICHMA DEVI LIBRARY</h2>
      <p>A place to read, learn, and grow.</p>

      <section className="my-4">
        <h3>About Us</h3>
        <p>
          MLD LIBRARY is dedicated to providing students and the local community with access to thousands of books, research materials, and a peaceful reading environment. Established in 2025, the library continues to promote learning and knowledge for everyone.
        </p>
      </section>

      <section className="my-4">
        <h3>Our Facilities</h3>
        <ul>
          <li>Large book collection</li>
          <li>Digital reading zone</li>
          <li>Comfortable reading spaces</li>
          <li>Reference & research support</li>
          <li>Free Wi-Fi</li>
        </ul>
      </section>

      <section className="my-4">
        <h3>Library Hours</h3>
        <p>Mon – Sat: 9 AM – 6 PM<br />Sunday: Closed</p>
      </section>

      <section className="my-4">
        <h3>Contact Us</h3>
        <p>Visit Us: MLD LIBRARY, [Your Address Here]<br />Phone: [Your number]<br />Email: [Your email]</p>
      </section>
    </main>
  );
}
