function Header() {
  return (
    <div className="header">
      <h1>HARBOUR SPACE /INTERACTION DESIGN</h1>
      <button className="applyNowButton">APPLY NOW</button>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-list hamburgerMenu"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Header;
