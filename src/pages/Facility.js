import React from 'react';
import './facility.css';
import "./mobile.css"; 

export default function Facility() {
  const facilities = [
    {
      image: "/assets/facilities/wifi.jpg",
      title: "Free Wi-Fi",
      description: "We provide high-speed internet for students to research, download notes, and study online."
    },
    {
      image: "/assets/facilities/watercooler.jpg",
      title: "Water Cooler",
      description: "Chilled and clean drinking water available for all students anytime."
    },
    {
      image: "/assets/facilities/parking.jpg",
      title: "Parking",
      description: "Spacious parking for two-wheelers and bicycles with CCTV security."
    },
    {
      image: "/assets/facilities/charging.jpg",
      title: "Charging Points",
      description: "Multiple charging points to plug in laptops and mobile phones during study."
    },
    {
      image: "/assets/facilities/newspaper.jpg",
      title: "Daily Newspapers",
      description: "Access to daily newspapers and magazines for general reading and awareness."
    },
    {
      image: "/assets/facilities/cctv.jpg",
      title: "CCTV Surveillance",
      description: "Entire library monitored by CCTV for students’ safety and security."
    },
    {
      image: "/assets/facilities/cctv.jpg",
      title: "CCTV Surveillance",
      description: "Entire library monitored by CCTV for students’ safety and security."
    },{
      image: "/assets/facilities/cctv.jpg",
      title: "CCTV Surveillance",
      description: "Entire library monitored by CCTV for students’ safety and security."
    },{
      image: "/assets/facilities/cctv.jpg",
      title: "CCTV Surveillance",
      description: "Entire library monitored by CCTV for students’ safety and security."
    },{
      image: "/assets/facilities/cctv.jpg",
      title: "CCTV Surveillance",
      description: "Entire library monitored by CCTV for students’ safety and security."
    },{
      image: "/assets/facilities/cctv.jpg",
      title: "CCTV Surveillance",
      description: "Entire library monitored by CCTV for students’ safety and security."
    },{
      image: "/assets/facilities/cctv.jpg",
      title: "CCTV Surveillance",
      description: "Entire library monitored by CCTV for students’ safety and security."
    },{
      image: "/assets/facilities/cctv.jpg",
      title: "CCTV Surveillance",
      description: "Entire library monitored by CCTV for students’ safety and security."
    },{
      image: "/assets/facilities/cctv.jpg",
      title: "CCTV Surveillance",
      description: "Entire library monitored by CCTV for students’ safety and security."
    },{
      image: "/assets/facilities/cctv.jpg",
      title: "CCTV Surveillance",
      description: "Entire library monitored by CCTV for students’ safety and security."
    },{
      image: "/assets/facilities/cctv.jpg",
      title: "CCTV Surveillance",
      description: "Entire library monitored by CCTV for students’ safety and security."
    },
  ];

  return (
    <main className="container my-5">
      <h2 className="mb-4">Facilities at MA LICHMA DEVI LIBRARY</h2>
      <div className="row">
        {facilities.map((facility, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card h-100 shadow text-center p-3">
              <img
                src={facility.image}
                alt={facility.title}
                className="img-fluid rounded mb-3 facility-image"
              />
              <h5>{facility.title}</h5>
              <p>{facility.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
