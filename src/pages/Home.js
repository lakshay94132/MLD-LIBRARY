import React from "react";
import "./App.css";

export default function Home() {
  return (
    <main className="container my-4">
      <section className="row justify-content-center">
        <div className="col-md-6 text-center mb-4">
          <img
            src="/assets/Front.jpg"
            className="library-image img-fluid"
            alt="Front of Library"
          />
          <p>
            The front gate of <strong className="Boys"> MAA LICHHHMA DEVI LIBRARY</strong> welcomes all students
            and visitors. We ensure a clean, secure entrance with clear signage.
            The library is easily accessible to everyone in the community.
          </p>
        </div>

        <div className="col-md-6 text-center mb-4">
          <img
            src="/assets/Cabin.png"
            className="library-image img-fluid"
            alt="Parking of Library"
          />
          <p>
            Our library cabin provides a quiet, private space for focused study
            and meetings. Equipped with comfortable seating and good lighting,
            it’s ideal for discussions, project work, or individual reading.
          </p>
        </div>

        <div className="col-md-6 text-center mb-4">
          <img
            src="/assets/Boys-Library.jpg"
            className="library-image img-fluid"
            alt="Boys Library"
          />
          <p>
            Our dedicated <strong className="Boys">Boys Library</strong> where students gather here
            daily to read, study, and grow their knowledge. The reading space is
            kept neat and peaceful for maximum concentration. Everyone is
            welcome to use this hall for study and discussion.
          </p>
        </div>

        <div className="col-md-6 text-center mb-4">
          <img
            src="/assets/Girls-Library.jpg"
            className="library-image img-fluid"
            alt="Lakshay Limba"
          />
          <p>
            Our dedicated Girls Library provides a safe, comfortable, and quiet
            space for female students to focus on their studies. We ensure a
            peaceful environment where girls can read, learn, and grow with
            confidence.
          </p>
        </div>
      </section>
    </main>
  );
}
