import { useState } from "react";
import logo from "../assets/img/mani.png";
import { Link } from "react-router-dom";


const Title = () => {
    return(
            <a href="/">
                    <img alt = "logo" className = "logo" src= {logo} />

            </a>
    );
}






const Header = () => {
        const [loginState,setLoginState] = useState(true);
    return (
            <div className = "headerComponent">
                    <Title />
                    <div className="nav-items">
                    <ul>
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/about">
                                <li>About</li>
                        </Link>
                        <Link to="/contact">
                            <li>Contact</li>
                        </Link>
                        <Link to="/cart">
                            <li>Cart</li>
                        </Link>
                    </ul>
                    
                    </div>
                    
                    {loginState ? <button onClick={() => setLoginState(false)}>Login</button>
                    : <button onClick={() => setLoginState(true)}>Logout</button>}
                    
            </div>
    );
}

export default Header;