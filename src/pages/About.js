import React from "react";
import "./App.css";
export default function About() {
  return (
    <main className="container my-4">
      <div className="row align-items-center"><div
          className="col-md-6 text-center mb-4 about-section"
          style={{
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          <img
            src="/assets/BackGround-Image.png"
            className="library-image img-fluid rounded shadow about-image"
            alt="Maa Lichhma Devi Library"
          />
        </div>
        <div
          className="col-md-6 about-section"
          style={{ marginBottom: "20px" }}
        >
          <h2 className="about-heading">
            Welcome to MAA LICHHMA DEVI LIBRARY and Computer Center
          </h2>
          <p className="about-text">
            Is peaceful place to read, learn, and grow. We are committed to
            providing students, researchers, and the community with a rich
            collection of books and a calm environment to study.
          </p>
        </div>
        

        <div
          className="col-md-6 text-center mb-4 about-section"
          style={{
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          <img
            src="/assets/History.webp"
            className="library-image img-fluid rounded shadow about-image"
            alt="Our History"
          />
        </div>

        <div
          className="col-md-6 about-section"
          style={{ marginBottom: "20px" }}
        >
          <h4 className="about-subheading">Our History</h4>
          <p className="about-text">
            MAA LICHHMA DEVI LIBRARY was founded in 2025 in loving memory of
            Late Smt. Lichma Devi Ji. Inspired by her vision for education and
            community growth, the Limba family established this library to help
            students and readers access quality study materials and a peaceful
            place to learn, close to home.
          </p>
        </div>
<div
          className="col-md-6 text-center mb-4 about-section"
          style={{
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          <img
            src="/assets/MV.jpg"
            className="library-image img-fluid rounded shadow about-image"
            alt="Vision and Mission"
          />
        </div>
        <div
          className="col-md-6 about-section"
          style={{ marginBottom: "20px" }}
        >
          <h4 className="about-subheading">Our Vision and Mission</h4>
          <p className="about-text">
            To become the most trusted and peaceful study hub for students,
            researchers, and the local community — empowering lives through easy
            access to knowledge, resources, and a positive environment for
            learning.
          </p>
          <p className="about-text">
            To provide a well-equipped, welcoming library where students can
            read, research, collaborate, and grow. We aim to offer modern
            facilities like Wi-Fi, comfortable seating, separate reading
            sections, digital access, and daily newspapers, ensuring every
            learner feels inspired to achieve their goals.
          </p>
        </div>
        

        <div
          className="col-md-6 text-center mb-4 about-section"
          style={{
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          <img
            src="/assets/Owner(1).png"
            className="library-image img-fluid rounded shadow about-image"
            alt="Our Founder"
          />
        </div>

        <div
          className="col-md-6 about-section"
          style={{ marginBottom: "20px" }}
        >
          <h4 className="about-subheading">Our Founder</h4>
          <p className="about-text">
            MAA LICHHMA DEVI LIBRARY is proudly managed and developed under the
            guidance of Mr. DharamPal Limba, whose dedication and vision turned
            this dream into reality. Inspired by his mother, Smt. Lichma Devi
            Ji, Mr. Limba has worked tirelessly to build a peaceful, welcoming
            space where students can study, grow, and succeed.
          </p>

          <p className="about-text">
            His commitment to providing modern facilities, helpful resources,
            and a calm environment ensures that the library remains a second
            home for every student who walks through its doors.
          </p>
        </div>
      </div>
    </main>
  );
}
