import React from "react";
import "./App.css";

export default function Owner() {
  return (
    <main className="owner-container">
      <div className="row align-items-center">
        <div
          className="col-md-6 text-center mb-4"
          style={{
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          <img
            src="/assets/Owner.jpg"
            alt="Owner of MLD Library"
            className="owner-image"
          />
        </div>
        <div className="col-md-6">
          <h3 className="owner-heading">Mr. DharamPal Limba</h3>
          <p className="owner-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-house-add-fill"
              viewBox="0 0 16 16"
            >
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 1 1-1 0v-1h-1a.5.5 0 1 1 0-1h1v-1a.5.5 0 0 1 1 0" />
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
              <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293z" />
            </svg>
            <strong> Address:</strong> Near aryuvedic hospital, Ward No. 7,
            Jandawali, Hanumangarh(335512), Rajasthan
          </p>
          <p className="owner-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-telephone-inbound-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0"
              />
            </svg>
            <strong> Phone:</strong> +91 94134-31446
          </p>

          <p className="owner-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg>
            <strong> Email:</strong> dharampallimba@gmail.com
          </p>
        </div>
        
      </div>
      <p>
        MAA LICHHMA DEVI LIBRARY is proudly managed and developed under the
        guidance of Mr. DharamPal Limba, whose dedication and vision turned this
        dream into reality. Inspired by his mother, Smt. Lichma Devi Ji, Mr.
        Limba has worked tirelessly to build a peaceful, welcoming space where
        students can study, grow, and succeed.
      </p>

      <div className="section-divider"></div>

      <p>
        His commitment to providing modern facilities, helpful resources, and a
        calm environment ensures that the library remains a second home for
        every student who walks through its doors.
      </p>

      <div className="section-divider"></div>

      <blockquote className="blockquote">
        <p>"A room without books is like a body without a soul."</p>
      </blockquote>
    </main>
  );
}
