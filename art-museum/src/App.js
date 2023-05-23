import logo from "./logo.svg";
import "./App.css";
import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";

function App() {
  return (
    <div>
      <GalleryNavigation galleries={harvardArt.records}/>
    </div>
  );
}

export default App;
