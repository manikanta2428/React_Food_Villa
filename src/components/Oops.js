import logo from "../assets/img/oops.jpg";
import { useRouteError } from "react-router-dom";

const Oops = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <>
            <h1 style={{color:"red"}}>{error.status + " ----- " + error.statusText}</h1>
            <img alt="logo" src={logo}  className="oopsLogo"/>

        </>
    )
}

export default Oops;