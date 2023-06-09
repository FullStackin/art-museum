import logo from "./logo.svg";
import "./App.css";
import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import { Route, useParams } from "react-router-dom";

function App() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records}/>
      <Route path="/galleries/:galleryId" component={GalleryView}/>
    </div>
  );
}

export default App;
