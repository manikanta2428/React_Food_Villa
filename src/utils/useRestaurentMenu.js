
import { restaurentUrl1,restaurentUrl2 } from "../Constants";
import { useState,useEffect } from "react";

const useRestautentMenu = (id) => {
    const [restaurentDetails,setRestaurentDetails] = useState({});
    const [restaurentMenu,setRestaurentMenu] = useState([]);

    useEffect(() => {
        getDetails();

    },[]);

    const getDetails = async () => {
        const getData = await fetch(restaurentUrl1+id+restaurentUrl2);
        const json = await getData.json();
        setRestaurentDetails(json?.data?.cards[0]?.card?.card?.info);
        setRestaurentMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    };

    return {restaurentDetails,restaurentMenu};
}

export default useRestautentMenu;