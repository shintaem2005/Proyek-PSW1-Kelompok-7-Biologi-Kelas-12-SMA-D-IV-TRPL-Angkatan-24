import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bioscientive\src\pages\RegistrationForm.js">Registration</Link></li>
        <li><Link to="/bioscientive\src\pages\LoginForm.js">Login</Link></li>
        <li><Link to="/bioscientive\src\pages\Materi.js">Materi</Link></li>
        {/* <li><Link to="/">Home</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Home</Link></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
