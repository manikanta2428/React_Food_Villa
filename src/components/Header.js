import { useState } from "react";



const Title = () => {
    return(
            <a href="/">
                    <img alt = "logo" className = "logo" src= "https://marketplace.canva.com/EAFXIvlL2Ns/2/0/1600w/canva-brown-and-black-vintage-food-restaurant-logo-YASJJho2Kzw.jpg" />

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
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Cart</li>
                            {loginState ? <button onClick={() => setLoginState(false)}>Login</button>
                    : <button onClick={() => setLoginState(true)}>Logout</button>}
                    </ul>
                    
                    </div>
                    
            </div>
    );
}

export default Header;