import React from "react";
import "./about.css"; // Assuming you have a CSS file for styling
import "./mobile.css"; // Mobile-specific styles

export default function About() {
  return (
    <main className="container my-4">
      <div className="row align-items-center">
        <div className="col-md-6" style={{ marginBottom: "20px" }}>
          <h2 className="about-heading">Welcome to MA LICHMA DEVI LIBRARY</h2>
          <p className="about-text">
            Your peaceful place to read, learn, and grow. We are committed to
            providing students, researchers, and the community with a rich
            collection of books and a calm environment to study.
          </p>
        </div>
        <div
          className="col-md-6 text-center mb-4"
          style={{
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          <img
            src="/assets/BackGround-Image.png"
            className="library-image img-fluid rounded shadow"
            alt="Front of Library"
          />
        </div>

        <div
          className="col-md-6 text-center mb-4"
          style={{
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          <img
            src="/assets/BackGround-Image.png"
            className="library-image img-fluid rounded shadow"
            alt="Front of Library"
          />
        </div>

        <div className="col-md-6" style={{ marginBottom: "20px" }}>
          <h4 className="about-subheading">Our History</h4>
          <p className="about-text">
            Founded in 2025 by the Limba family, MLD LIBRARY was created to help
            students and readers access quality study resources close to home.
          </p>
        </div>

        <div className="col-md-6" style={{ marginBottom: "20px" }}>
          <h4 className="about-subheading">Our Mission</h4>
          <p className="about-text">
            Our mission is to support education, self-learning, and community
            growth by providing open access to books, digital materials, and
            peaceful reading spaces.
          </p>
        </div>
        <div
          className="col-md-6 text-center mb-4"
          style={{
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          <img
            src="/assets/BackGround-Image.png"
            className="library-image img-fluid rounded shadow"
            alt="Front of Library"
          />
        </div>

        <div
          className="col-md-6 text-center mb-4"
          style={{
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          <img
            src="/assets/BackGround-Image.png"
            className="library-image img-fluid rounded shadow"
            alt="Front of Library"
          />
        </div>

        <div className="col-md-6" style={{ marginBottom: "20px" }}>
          <h4 className="about-subheading">Our Founder</h4>
          <p className="about-text">
            MLD LIBRARY is proudly managed by Mr. Lakshay Limba, who is
            dedicated to serving students and making knowledge accessible to
            all.
          </p>

          <p className="about-text">
            We welcome you to visit MLD LIBRARY and make it your second home for
            learning and inspiration!
          </p>
        </div>
      </div>
    </main>
  );
}
