import { ImageUrl } from "../Constants";

const RestaurentCard = ({cloudinaryImageId,name,cuisines,sla}) => {
    return (
           
           <div className="card">
                   <img alt = "foodImage"  className="foodImage"src = {ImageUrl+
                           cloudinaryImageId}/>
                   <h2>{name}</h2>
                   <h3>{cuisines?.join(",")}</h3>
                   <h4>{sla?.deliveryTime} Minutes</h4>

           </div>
   );
   
}

export default RestaurentCard;