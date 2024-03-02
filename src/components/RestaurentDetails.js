import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import {ImageUrl} from "../Constants";
import ShimmerLoading from "./ShimmerLoading";
import useRestautentMenu from "../utils/useRestaurentMenu";

const RestaurentDetails = () => {
    const {id} = useParams();
    const  restaurentDetails = useRestautentMenu(id);
    //const [restaurentMenu,setRestaurentMenu] = useState([]);

    
   
    return !restaurentDetails || Object.keys(restaurentDetails).length == 0 ? <ShimmerLoading /> :(
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
                {/* <ul>
                    {restaurentMenu.map((items,index) => (
                    <li key={index}>
                        {items?.card?.info?.name}
                        </li>
                    ))}
                </ul> */}
            </div>



                   
        </div>
    )
}

export default RestaurentDetails;