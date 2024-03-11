import React,{lazy,Suspense} from "react";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";


import  ReactDOM  from "react-dom/client";   
import Header from "./components/Header";    
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Oops from "./components/Oops";
import RestaurentDetails from "./components/RestaurentDetails";
import Profile from "./components/Profile";
import Cart from "./components/Cart";


const AppLayout = () => {
        return(
                <>
                        <Header />
                        <Outlet />
                        <Footer />
                </>
        );
}

const Contact = lazy(() => import("./components/Contact"));
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
                                element : <Suspense fallback={<h1>Loading.....!</h1>}><Contact /></Suspense>

                        },
                        {
                                path : "/restaurent/:id",
                                element : <RestaurentDetails />
                        },
                        {
                                path : "cart",
                                element : <Cart />

                        }
                ]
        }
        
]);

const dom = ReactDOM.createRoot(document.getElementById('root'));
dom.render(<RouterProvider router={appRouter} />);