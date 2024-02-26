import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import {ImageUrl} from "../Constants";
import ShimmerLoading from "./ShimmerLoading";

const RestaurentDetails = () => {
    const {id} = useParams();
    const [restaurentDetails,setRestaurentDetails] = useState({});
    const [restaurentMenu,setRestaurentMenu] = useState([]);
    console.log(id);

    useEffect(() => {
        getDetails();

    },[]);
    const getDetails = async () => {
        const getData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0826802&lng=80.2707184&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await getData.json();
        setRestaurentDetails(json?.data?.cards[2]?.card?.card?.info);
        setRestaurentMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    };
    console.log(restaurentMenu);
    return !restaurentDetails ? <ShimmerLoading /> :(
        <div className="restaurent-details">
            <div>
                
                <img alt = "image"  src = {ImageUrl+
                            restaurentDetails.cloudinaryImageId}/>
                <h1>{restaurentDetails?.name}</h1>
                <h2>{restaurentDetails?.areaName}</h2>
                <h3>{restaurentDetails?.aggregatedDiscountInfo?.header}</h3>
                <h4>{restaurentDetails?.totalRatingsString}</h4>
                <h4>{restaurentDetails?.avgRatingString} -- Stars</h4>
                <h5>{restaurentDetails?.costForTwoMessage}</h5>
                <h6>{restaurentDetails?.locality}</h6>
            </div>
            <div>
                <h1>Menu : </h1>
                <ul>
                    {restaurentMenu.map((items,index) => (
                    <li key={index}>
                        {items?.card?.info?.name}
                        </li>
                    ))}
                </ul>
            </div>



                   
        </div>
    )
}

export default RestaurentDetails;