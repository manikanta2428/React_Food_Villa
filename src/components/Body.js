import RestaurentCard from "./RestaurentCard";
import { restrautList } from "../Constants";

const Body = () =>{
    return(
            <div className="AllCards">
                    {restrautList.map((restaurent) =>{
                            return <RestaurentCard {...restaurent.data} key={restaurent.data.id}/>
                    })}
                    
            </div>
            
    );
}

export default Body;