import React from "react";

import "./App.css";

export default function Footer({ mode, toggleMode }) {
  return (
    <footer
      style={{
        backgroundColor: "#000000ff",
        color: "white",
      }}
      className={`text-center py-3 `}
    >
      <div >
        <strong >Created By: <a href="lakshay.html" className="created"><i>Lakshay Limba</i></a> || </strong>
        Helper: <a href="https://www.instagram.com/ghanshyam.kardwal/"> Ghanshyam Kardwal </a> || <a href="https://www.instagram.com/_rajender_09/"> Rajender Kardwal </a>

      </div>
      <p style={{ marginBottom: "0px", marginTop: "5px" }}>
        © 2024 MAA LICHHMA DEVI LIBRARY. All rights reserved.
      </p>
    </footer>
  );
}
