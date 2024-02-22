const Title = () => {
    return(
            <a href="/">
                    <img alt = "logo" className = "logo" src= "https://marketplace.canva.com/EAFXIvlL2Ns/2/0/1600w/canva-brown-and-black-vintage-food-restaurant-logo-YASJJho2Kzw.jpg" />

            </a>
    );
}






const Header = () => {
    return (
            <div className = "headerComponent">
                    <Title />
                    <div className="nav-items">
                    <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Cart</li>
                    </ul>
                    </div>
                    
            </div>
    );
}

export default Header;