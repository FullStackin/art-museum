import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./GalleryNavigation.css";

export default function GalleryNavigation({ galleries }) {
  return (
    <nav>
      <h1>Galleries</h1>
      <NavLink exact to="/">
        Home
      </NavLink>
      {galleries.map((gallery) => (
        <NavLink key={gallery.id} to={`galleries/${gallery.id}`}>
          {gallery.name}
        </NavLink>
      ))}
    </nav>
  );
}
