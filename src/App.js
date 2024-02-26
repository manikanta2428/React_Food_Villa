import React from "react";
import  ReactDOM  from "react-dom/client";   
import Header from "./components/Header";    
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Oops from "./components/Oops";
import Contact from "./components/Contact";
import RestaurentDetails from "./components/RestaurentDetails";

import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
const AppLayout = () => {
        return(
                <>
                        <Header />
                        <Outlet />
                        <Footer />
                </>
        );
}


const appRouter = createBrowserRouter([
        {
                path : "/",
                element : <AppLayout />,
                errorElement : <Oops />,
                children :[
                        {
                                path : "/",
                                element : <Body />
                        },
                        
                        {
                                path : "/about",
                                element : <About />
                        },
                        {
                                path : "/contact",
                                element : <Contact />

                        },
                        {
                                path : "/restaurent/:id",
                                element : <RestaurentDetails />
                        }
                ]
        }
        
]);

const dom = ReactDOM.createRoot(document.getElementById('root'));
dom.render(<RouterProvider router={appRouter} />);