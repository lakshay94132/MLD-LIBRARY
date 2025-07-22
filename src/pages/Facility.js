import React from "react";
import "./App.css";

export default function Facility() {
  const facilities = [
    {
      image: "/assets/facilities/wifi.jpg",
      title: "Free Wi-Fi",
      description:
        "We provide high-speed internet for students to research, download notes, and study online.",
    },
    {
      image: "/assets/facilities/WaterCooler.jpg",
      title: "Water Cooler",
      description:
        "Chilled and clean drinking water available for all students anytime.",
    },
    {
      image: "/assets/facilities/parking.png",
      title: "Parking",
      description:
        "Spacious parking for two-wheelers and bicycles with CCTV security.",
    },
    {
      image: "/assets/facilities/Charging.png",
      title: "Charging Points",
      description:
        "Multiple charging points to plug in laptops and mobile phones during study.",
    },
    {
      image: "/assets/facilities/NewsPapper.jpg",
      title: "Daily Newspapers",
      description:
        "Access to daily newspapers and magazines for general reading and awareness.",
    },
    {
      image: "/assets/facilities/cctv.jpg",
      title: "CCTV Surveillance",
      description:
        "Entire library monitored by CCTV for students’ safety and security.",
    },
    {
      image: "/assets/facilities/comfortable.png",
      title: "Comfortable Seating",
      description:
        "Comfortable seating spaces, designed for long study hours. A perfect environment that blends learning with comfort and focus.",
    },
    {
      image: "/assets/facilities/cctv.jpg",
      title: "Boys Library",
      description:
        "Boy Library is a peaceful study space designed for boys, offering comfort, focus, and rich learning resources.",
    },
    {
      image: "/assets/facilities/cctv.jpg",
      title: "Girls Library",
      description:
        "Girls Library is a calm and inspiring space designed for girls, with comfortable seating and a focused study environment.",
    },
    {
      image: "/assets/facilities/Toilet.jpg",
      title: "Toilets ans Washrooms",
      description:
        "Clean and well-maintained toilets and washrooms for a hygienic and comfortable experience.",
    },
    {
      image: "/assets/facilities/AC.jpg",
      title: "(AC) Air Conditioning roomi",
      description:
        "AC rooms available for a quiet, cool, and focused study experience.",
    },
    {
      image: "/assets/facilities/Solar.jpg",
      title: "Solar Plnels",
      description:
        "Library powered by solar panels to ensure eco-friendly and uninterrupted study sessions.",
    },
    {
      image: "/assets/facilities/openspace.jpg",
      title: "Open Space",
      description:
        "Open space available for fresh air reading, group discussions, and peaceful study sessions..",
    },
    {
      image: "/assets/facilities/resting.jpg",
      title: "Resting Room",
      description:
        "Dedicated resting room in the library for relaxation during long study hours.",
    },
    {
      image: "/assets/facilities/Discussion.jpg",
      title: "Discussion Room",
      description:
        "Soundproof discussion rooms for group study and collaborative learning in the library.",
    },
    {
      image: "/assets/facilities/shoes.jpg",
      title: "Shoes Stands",
      description:
        "Organized shoe stands provided for a clean and comfortable library environment.",
    },
    {
      image: "/assets/facilities/seats.png",
      title: "Seats for Students",
      description:
        "Spacious library seating available for up to 80 Seats to study comfortably.",
    },
    {
      image: "/assets/facilities/stationary.png",
      title: "Stationery Shop",
      description:
        "In-house stationery shop with all essential study materials for students.",
    },
    {
      image: "/assets/facilities/coaching.png",
      title: "Coaching Classes",
      description:
        "Coaching center for 10th to 12th class students in both Hindi and English medium with expert guidance.",
    },
    {
      image: "/assets/facilities/green.png",
      title: "Green Mated Rooms",
      description:
        "Green Mate Rooms designed with natural elements for a refreshing and focused study environment.",
    },
  ];

  return (
    <main className="container my-5">
      <h2
        className="mb-4  "
        style={{
          color: "var(--primary)",
          textShadow: "0 0 8px var(--shadow)",
          textAlign: "center",
        }}
      >
        Facilities at MAA LICHHMA DEVI LIBRARY
      </h2>
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
