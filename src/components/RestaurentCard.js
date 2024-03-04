import { ImageUrl } from "../Constants";

const RestaurentCard = ({cloudinaryImageId,name,cuisines,sla}) => {
    return (
           
           <div className="w-52 p-2 m-2 shadow-lg bg-violet-50">
                   <img alt = "foodImage"  className="foodImage"src = {ImageUrl+
                           cloudinaryImageId}/>
                   <h2 className="font-bold text-xl">{name}</h2>
                   <h3>{cuisines?.join(",")}</h3>
                   <h4>{sla?.deliveryTime} Minutes</h4>

           </div>
   );
   
}

export default RestaurentCard;