import React from "react";
import "./mobile.css"; 

export default function Footer({ mode, toggleMode }) {
  return (
    <footer
      style={{
        backgroundColor: "#000000ff",
        color: "white",
      }}
      className={`text-center py-3 `}
    >
      <div>
        Helper: Rajender Kardwal || 
        <strong> Created By: Lakshay Limba || </strong>
        Helper: Ghanshyam Kardwal

      </div>
      <p style={{ marginBottom: "0px", marginTop: "5px" }}>
        © 2024 MA LICHMA DEVI LIBRARY. All rights reserved.
      </p>
    </footer>
  );
}
