import { useState } from "react";
import logo from "../assets/img/mani.png";
import { Link } from "react-router-dom";


const Title = () => {
    return(
            <a href="/">
                    <img alt = "logo" className = "h-28 p-2" src= {logo} />

            </a>
    );
}






const Header = () => {
        const [loginState,setLoginState] = useState(true);
    return (
            <div className = "flex justify-between bg-violet-50 shadow-lg">
                    <Title />
                    <div className="nav-items">
                    <ul className="flex py-10">
                        <Link to="/">
                            <li className="px-2">Home</li>
                        </Link>
                        <Link to="/about">
                                <li className="px-2">About</li>
                        </Link>
                        <Link to="/contact">
                            <li className="px-2">Contact</li>
                        </Link>
                        <Link to="/cart">
                            <li className="px-2">Cart</li>
                        </Link>
                    </ul>
                    
                    </div>
                    
                    {loginState ? <button onClick={() => setLoginState(false)}>Login</button>
                    : <button onClick={() => setLoginState(true)}>Logout</button>}
                    
            </div>
    );
}

export default Header;