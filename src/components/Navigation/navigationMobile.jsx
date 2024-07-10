import { useState } from 'react';
import { Link } from 'react-router-dom';
export const NavigationMobile = () => {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(true);
  };
  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <nav className="navigation__mobile">
      <button onClick={openMenu} className="navigation__mobile__hamburger">
        <i className="fa-solid fa-bars"></i>
      </button>
      <ul onClick={closeMenu}>
        <li className="nav__li">
          <Link to="/" className="nav__link">
            NABÍDKA
          </Link>
        </li>
        <li className="nav__li">
          <Link to="/about-us" className="nav__link">
            O RESTAURACI
          </Link>
        </li>
        <li className="nav__li">
          <Link to="/questionnaire" className="nav__link">
            REGISTRACE
          </Link>
        </li>
      </ul>
    </nav>
  );
};
