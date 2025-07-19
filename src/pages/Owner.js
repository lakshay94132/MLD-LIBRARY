import React from "react";
import "./owner.css";

export default function Owner() {
  return (
    <main>
      <img
        src="/assets/Testing.jpg"
        alt="Owner of MLD Library"
        className="owner-image"
      />
      <h4>Mr. DharamPal Limba</h4>

      <p>
        MA LICHMA DEVI LIBRARY was founded in honor of my beloved mother. As the owner,
        my mission is to provide a peaceful, welcoming place where every student can study,
        grow and succeed.
      </p>

      <div className="section-divider"></div>

      <p>
        I believe knowledge is for everyone — this library is my humble contribution
        to help students and readers in our community.
      </p>

      <div className="section-divider"></div>

      <blockquote className="blockquote">
        <p>"A room without books is like a body without a soul."</p>
      </blockquote>
    </main>
  );
}
