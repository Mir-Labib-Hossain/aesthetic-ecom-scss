import { SearchOutlined, ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./header.scss";
type Props = {};

const Header = (props: Props) => {
  return (
    <div className="header">
      <nav className="container">
        <ul className="ul-items">
          <li className="li-items">
            <Link to="/" className="active-link" >Home</Link>
            <Link to="/women"  >Women</Link>
            <Link to="/men">Men</Link>
            <Link to="/denim">Denim</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="logo">
          <h1>AESTHETIC</h1>
        </div>
        <div className="right">
          <div className="search">
            <SearchOutlined className="search-icon" />
            <button className="search-btn">Search</button>
          </div>
          <div className="right-buttons">
            <button>
              <Link to="/login">Login</Link>
            </button>
            <button>
              <Link to="/signup">Sign Up</Link>
            </button>
            <ShoppingBasket className="icon" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
