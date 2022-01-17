import "./styles.css";
import React, { useState } from "react";
import kakashiLogo from "./../src/icons8-kakashi-hatake.svg";
import itachiLogo from "./../src/icons8-itachi-uchiha.svg";

const animeList = {
  Combat: [
    {
      name: "Naruto Shippuden",
      genre: "Genre: Fighting, Ninja, Special-Powers, Motivational",
      episodes: "Total episodes: 500",
      onGoing: "On-going: No"
    },
    {
      name: "One Piece",
      genre: "Genre: Fighting, Pirate, Special-Powers, Adventure, Fantasy",
      episodes: "Total Episodes: 981",
      onGoing: "On-Going: Yes"
    },
    {
      name: "Attack on titan",
      genre:
        "Genre: Fighting, Swordsmanship, Special-Powers, Adventure, Fantasy",
      episodes: "Total Episodes: 75",
      onGoing: "On-Going: Yes"
    }
  ],
  SpecialPowers: [
    {
      name: "Demon Slayer",
      genre:
        "Genre: Fighting, Swordsmanship, Special-Powers, Adventure, Fantasy",
      episodes: "Total Episodes: 26",
      onGoing: "On-Going: No"
    },
    {
      name: "Jujutsu Kaisen",
      genre: "Genre: Fighting, Special-Powers, Adventure, Fantasy, School",
      episodes: "Total Episodes: 22",
      onGoing: "On-Going: Yes"
    },
    {
      name: "Mob Psycho 100",
      genre: "Genre: Fighting, School, Special-Powers, Adventure, Fantasy",
      episodes: "Total Episodes: 25",
      onGoing: "On-Going: No"
    }
  ],
  Futuristic: [
    {
      name: "Cow Boy Bebop",
      genre: "Genre: Fighting, Adventure, Fantasy, Future",
      episodes: "Total Episodes: 26",
      onGoing: "On-Going: No"
    },
    {
      name: "The Disastrous Life of Saiki K",
      genre:
        "Genre: Fighting, Special-Powers, Adventure, Fantasy, Future, School",
      episodes: "Total Episodes: 120",
      onGoing: "On-Going: No"
    }
  ],
  SchoolLife: [
    {
      name: "Tokyo Revengers",
      genre:
        "Genre: Fighting, Special-Powers, Adventure, Fantasy, Future, School",
      episodes: "Total Episodes: 24",
      onGoing: "On-Going: No"
    },
    {
      name: "Great Teacher Onizuka",
      genre: "Genre: Fighting, Special-Powers, Adventure, Mob, School",
      episodes: "Total Episodes: 43",
      onGoing: "On-Going: No"
    }
  ]
};

export default function App() {
  const [selectedAnime, setAnime] = useState("Combat");

  function genreClickHandler(genre) {
    setAnime(genre);
  }

  return (
    <div className="App">
      <img
        src={itachiLogo}
        align="left"
        alt="Itachi Logo"
        height="140px"
        width="140px"
      />
      <img
        src={kakashiLogo}
        align="right"
        alt="Kakashi Logo"
        height="140px"
        width="140px"
      />
      <h1
        style={{
          backgroundColor: "#af1313",
          width: "58rem",
          textAlign: "center",
          margin: "auto",
          padding: "0rem",
          borderRadius: "4rem",
          color: "darkGray",
          fontSize: "5rem"
        }}
      >
        Anime Hunter
      </h1>
      <div>
        {" "}
        {Object.keys(animeList).map((genre) => (
          <button className="libBtn" onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>

      <ul style={{ align: "center" }}>
        {animeList[selectedAnime].map((animeS1) => (
          <li style={{ listStyle: "none" }} key={animeS1.name}>
            <div className="libView">
              <div className="libViewHead">{animeS1.name}</div>
              <div>{animeS1.genre}</div>
              <div>{animeS1.episodes}</div>
              <div>{animeS1.onGoing}</div>
            </div>
          </li>
        ))}
      </ul>
      <footer>Made with ReactJS💜</footer>
    </div>
  );
}
