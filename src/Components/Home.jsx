import React, { useState } from "react";
import "../assets/style/style.css";

// Guitar Images
import guitar1 from "../assets/images/guitar1.png";
import guitar2 from "../assets/images/guitar2.png";
import guitar3 from "../assets/images/guitar3.png";
import guitar4 from "../assets/images/guitar4.png";
import guitar5 from "../assets/images/guitar5.png";
import guitar6 from "../assets/images/guitar6.png";
import guitar7 from "../assets/images/guitar7.png";

// Artist Images
import artist1 from "../assets/images/artist1.jpg";
import artist2 from "../assets/images/artist2.png";
import artist3 from "../assets/images/artist3.png";
import artist4 from "../assets/images/artist4.jpg";
import artist5 from "../assets/images/artist5.jpg";
import artist6 from "../assets/images/artist6.jpg";
import artist7 from "../assets/images/artist7.jpg";

const guitars = [
  {
    id: 1,
    number: "01",
    title: "EPIPHONE ZAKK WYLDE",
    artist: "Zakk Wylde",
    song: "No More Tears",
    guitar: guitar1,
    artistImg: artist1,
    color: "#24201b",
    accent: "#f5c518",
  },
  {
    id: 2,
    number: "02",
    title: "JACKSON RR1",
    artist: "Randy Rhoads",
    song: "Crazy Train",
    guitar: guitar2,
    artistImg: artist2,
    color: "#70151a",
    accent: "#ff4d4d",
  },
  {
    id: 3,
    number: "03",
    title: "KRAMER PACER",
    artist: "Satchel",
    song: "Steel Panther",
    guitar: guitar3,
    artistImg: artist3,
    color: "#40196d",
    accent: "#ffae00",
  },
  {
    id: 4,
    number: "04",
    title: "WASHBURN DIMEBAG",
    artist: "Dimebag Darrell",
    song: "Cemetery Gates",
    guitar: guitar4,
    artistImg: artist4,
    color: "#083a75",
    accent: "#00d2ff",
  },
  {
    id: 5,
    number: "05",
    title: "ESP BLACKY ALEXI",
    artist: "Alexi Laiho",
    song: "Children Of Decadence",
    guitar: guitar5,
    artistImg: artist5,
    color: "#0b4d26",
    accent: "#39ff14",
  },
  {
    id: 6,
    number: "06",
    title: "EPIPHONE IOMMI SG",
    artist: "Tony Iommi",
    song: "Paranoid",
    guitar: guitar6,
    artistImg: artist6,
    color: "#241d35",
    accent: "#c084fc",
  },
  {
    id: 7,
    number: "07",
    title: "EVH STRIPED SERIES",
    artist: "Eddie Van Halen",
    song: "Eruption",
    guitar: guitar7,
    artistImg: artist7,
    color: "#7a0d13",
    accent: "#ff3344",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(4);
  const [selectedGuitar, setSelectedGuitar] = useState(null);

  return (
    <div className="guitar-gallery">
      {/* Header */}

      {/* Accordion */}
      <main className="accordion-container">
        {guitars.map((guitar, index) => {
          const active = activeIndex === index;

          return (
            <article
              key={guitar.id}
              className={`guitar-card ${active ? "active" : ""}`}
              style={{
                "--card-bg": guitar.color,
                "--accent": guitar.accent,
              }}
              onClick={() => setActiveIndex(index)}
            >
              {/* Collapsed Card */}
              <div className="collapsed-card">
                <span className="card-number">
                  {guitar.number}
                </span>

                <div className="vertical-title">
                  <span>{guitar.title}</span>
                  <small>{guitar.artist}</small>
                </div>

                <img
                  src={guitar.guitar}
                  alt={guitar.title}
                  className="small-guitar"
                />
              </div>

              {/* Expanded Card */}
              {active && (
                <div className="expanded-card">
                  {/* Left Content */}
                  <div className="left-content">
                    <span className="large-number">
                      {guitar.number}
                    </span>

                    <h1>{guitar.title}</h1>

                    <h3>{guitar.artist}</h3>

                    <p>
                      Explore the iconic guitar collection.
                      Discover signature instruments,
                      legendary artists, and their
                      unforgettable rock sounds.
                    </p>

                    <div className="button-group">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedGuitar(guitar);
                        }}
                      >
                        LEARN MORE
                        <span>→</span>
                      </button>
                    </div>

                    {/* Music Player */}
                    <div className="music-player">
                      <div className="play-icon">▶</div>

                      <div className="music-wave">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      <div className="music-info">
                        <strong>{guitar.song}</strong>
                        <small>ROCK COLLECTION</small>
                      </div>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="right-content">
                    <img
                      src={guitar.artistImg}
                      alt={guitar.artist}
                      className="artist-background"
                    />

                    <div className="artist-overlay"></div>

                    <div className="artist-label">
                      <span>ARTIST</span>
                      <h2>{guitar.artist}</h2>
                    </div>
                  </div>

                  {/* Center Guitar */}
                  <div className="guitar-center">
                    <img
                      src={guitar.guitar}
                      alt={guitar.title}
                      className="main-guitar"
                    />
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </main>

      {/* Modal */}
      {selectedGuitar && (
        <div
          className="modal-background"
          onClick={() => setSelectedGuitar(null)}
        >
          <div
            className="guitar-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-modal"
              onClick={() => setSelectedGuitar(null)}
            >
              ×
            </button>

            <img
              src={selectedGuitar.guitar}
              alt={selectedGuitar.title}
            />

            <div className="modal-details">
              <span>{selectedGuitar.number}</span>

              <h2>{selectedGuitar.title}</h2>

              <h3>{selectedGuitar.artist}</h3>

              <p>Signature Guitar Collection</p>

              <button
                onClick={() => setSelectedGuitar(null)}
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}