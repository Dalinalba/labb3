// components/Header.js

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/logo.png" alt="Website Logo" />
        <span>NewsApp</span>
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/categories">Categories</a></li>
          <li><a href="/search">Search</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
