import '../CSS/Navbar.css';

export default function Navbar() {
  return (
   <nav className="navbar">
  <div className="logo">
    <img src="/logo.png" alt="Vefa Logo" width="190" />
  </div>
  <ul className="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/AboutVefa">About</a></li>
    <li><a href="/FeaturedMenu">Menu</a></li>
    <li><a href="/GallerySection">Gallery</a></li>
    <li><a href="/ContactAndHours">Contact</a></li>
  </ul>
</nav>

  );
}

