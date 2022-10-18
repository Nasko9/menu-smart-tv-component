import React from "react";
import AmazonPrimeLogo from "./components/Icon/AmazonPrimeLogo";
import DisneyLogo from "./components/Icon/DisneyLogo";
import HBOLogo from "./components/Icon/HboLogo";
import NetflixLogo from "./components/Icon/NetflixLogo";
import YoutubeLogo from "./components/Icon/YoutubeLogo";

// Components
import Menu from "./components/Menu";

function App() {
  const cardData = [
    { id: 1, title: "Youtube", logo: <DisneyLogo /> },
    { id: 2, title: "Netflix", logo: <YoutubeLogo /> },
    { id: 3, title: "Amazon Prime", logo: <NetflixLogo /> },
    { id: 4, title: "Disney+", logo: <AmazonPrimeLogo /> },
    { id: 5, title: "HBO", logo: <HBOLogo /> },
  ];

  return (
    <div className="App">
      <Menu data={cardData} />
    </div>
  );
}

export default App;
