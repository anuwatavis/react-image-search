import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import TattooItem from "./components/TattooItem";
import TattooPost from "./components/TattooPost";
import AppSearch from "./components/AppSearch";
const imagesData = [
  { title: "Image I" },
  { title: "Image II" },
  { title: "Image III" },
  { title: "Image IIII" },
  { title: "Image IV" },
  { title: "Image VII" },
];
function App() {
  const [selectedTattoo, setSelectedTattoo] = useState(null);
  const [searchText, setSearchText] = useState("");

  function onTattooCloseClick() {
    setSelectedTattoo(null);
  }
  function onTattooOpenClick(image) {
    setSelectedTattoo(image);
  }

  let tattooPost = null;

  if (selectedTattoo !== null) {
    tattooPost = <TattooPost tattoo={selectedTattoo} onBgClick={onTattooCloseClick} />;
  }

  const filteredTattoos = imagesData.filter((tattoo) => {
    return tattoo.title.includes(searchText);
  });

  return (
    <div className="app">
      <AppHeader />

      <section className="app-section">
        <div className="app-container">
          <AppSearch searchText={searchText} setSearchText={setSearchText} />
          <div className="app-grid">
            {filteredTattoos.map((image, index) => {
              return <TattooItem key={index} tattoo={image} onTattooOpenClick={onTattooOpenClick} />;
            })}
          </div>
          {tattooPost}
        </div>
      </section>
    </div>
  );
}

export default App;
