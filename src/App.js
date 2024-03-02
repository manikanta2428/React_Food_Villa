import React,{lazy,Suspense} from "react";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";


import  ReactDOM  from "react-dom/client";   
import Header from "./components/Header";    
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Oops from "./components/Oops";
import Contact from "./components/Contact";
import RestaurentDetails from "./components/RestaurentDetails";
import Profile from "./components/Profile";


const AppLayout = () => {
        return(
                <>
                        <Header />
                        <Outlet />
                        <Footer />
                </>
        );
}

const Cart = lazy(() => import("./components/Cart"));
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
                                element : <About />,
                                children : [{
                                        path : "profile",
                                        element : <Profile />
                                }]
                        },
                        {
                                path : "/contact",
                                element : <Contact />

                        },
                        {
                                path : "/restaurent/:id",
                                element : <RestaurentDetails />
                        },
                        {
                                path : "cart",
                                element : <Suspense fallback={<h1>Loading.....!</h1>}><Cart /></Suspense>
                        }
                ]
        }
        
]);

const dom = ReactDOM.createRoot(document.getElementById('root'));
dom.render(<RouterProvider router={appRouter} />);