import { Link } from 'react-router-dom';
import './style.css';
import { Navigation } from '../Navigation/navigation';

export const Header = () => {
  return (
    <header className="header">
      <div id="header__logo">
        <div>
          <img src="image/logo.jpg" alt="react logo"></img>
        </div>
        <Link to="/" className="nav__link">
          Saláty
        </Link>
      </div>
      <Navigation />
    </header>
  );
};
