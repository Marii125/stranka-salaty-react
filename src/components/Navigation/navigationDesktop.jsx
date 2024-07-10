import { Link } from 'react-router-dom';
export const NavigationDesktop = () => {
  return (
    <nav className="navigation__desktop">
      <ul>
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
