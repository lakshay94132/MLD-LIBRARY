import React from "react";
import "./mobile.css";
import "./owner.css";
export default function Owner() {
  return (
    <main className="container my-5 text-center">
      <h2>About the Owner</h2>

      <img
        src="/assets/owner.jpg"
        alt="Owner of MLD Library"
        className="img-fluid rounded-circle shadow mb-4"
        style={{ maxWidth: "200px" }}
      />

      <h4>Mr. Lakshay Limba</h4>

      <p>
        MA LICHMA DEVI LIBRARY was founded in honor of my beloved mother. As the owner, 
        my mission is to provide a peaceful, welcoming place where every student can study,
        grow and succeed.
      </p>

      <p>
        I believe knowledge is for everyone — this library is my humble contribution
        to help students and readers in our community.
      </p>

      <blockquote className="blockquote">
        <p>"A room without books is like a body without a soul." — Cicero</p>
      </blockquote>
    </main>
  );
}
