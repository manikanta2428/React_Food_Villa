import React from "react";
import  ReactDOM  from "react-dom/client";   
import Header from "./components/Header";    
import Footer from "./components/Footer";
import Body from "./components/Body";

const AppLayout = () => {
        return(
                <>
                        <Header />
                        <Body />
                        <Footer />
                </>
        );
}
const dom = ReactDOM.createRoot(document.getElementById('root'));
dom.render(<AppLayout />);