import React from "react";
import "./mobile.css"; 

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
            The front gate of MA LICHHMA DEVI LIBRARY welcomes all students and
            visitors. We ensure a clean, secure entrance with clear signage. The
            library is easily accessible to everyone in the community.
          </p>
        </div>

        <div className="col-md-6 text-center mb-4">
          <img
            src="/assets/Parking.jpg"
            className="library-image img-fluid"
            alt="Parking of Library"
          />
          <p>
            Our spacious parking area provides safe parking for bikes and
            scooters. Covered parking and wide pathways make it convenient for
            students. Visitors can focus on learning without worrying about
            their vehicles.
          </p>
        </div>

        <div className="col-md-6 text-center mb-4">
          <img
            src="/assets/Boys-Library.jpg"
            className="library-image img-fluid"
            alt="Boys Library"
          />
          <p>
            This is our <strong>Boys Library</strong> where students gather here daily to read,
            study, and grow their knowledge. The reading space is kept neat and
            peaceful for maximum concentration. Everyone is welcome to use this
            hall for study and discussion.
          </p>
        </div>

        <div className="col-md-6 text-center mb-4">
          <img
            src="/assets/Testing.jpg"
            className="library-image img-fluid"
            alt="Lakshay Limba"
          />
          <p>
            My name is Lakshay Limba. I am a software developer with a passion
            for creating innovative solutions.
          </p>
        </div>
      </section>
    </main>
  );
}
