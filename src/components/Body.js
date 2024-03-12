import RestaurentCard from "./RestaurentCard";
import { restrautList } from "../Constants";
import { useState,useEffect,useContext } from "react";
import ShimmerLoading from "./ShimmerLoading";
import { Link } from "react-router-dom";
import { getFilterData } from "../utils/mixins";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";

const Body = () =>{
        const [searchText,setSearchText] = useState();
        const[filteredRestaurents,setFilteredRestaurents] = useState([]);
        const[allRestaurents,setAllRestaurents] = useState([]);
        const {user,setUser} = useContext(UserContext);


        useEffect(()=>{
                getData();
        },[]);

        const getData = async () => {
               const apiData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
               const json = await apiData.json();
               setFilteredRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
               setAllRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }

       const online = useOnline();
       if(!online){
                return <h1>You are Offline..!</h1>
       }
        
    return allRestaurents.length == 0 ? <ShimmerLoading /> :  (
           <>
           <div className="search-container p-5 bg-violet-50 my-5">
                <input type="text" 
                className="input" 
                placeholder="Search Here" 
                value={searchText}
                onChange={(e) => {
                        setSearchText(e.target.value);
                }}
                />
                <button className="serach-button p-2 m-2 bg-red-900 text-white rounded-2xl" onClick={()=> {
                        const filterData = getFilterData(searchText,allRestaurents);
                        setFilteredRestaurents(filterData);

                }
                        
                        }>Search </button>
                <input type="text" 
                value={user.name} 
                onChange={e => setUser({name : e.target.value})}/>
           </div>
            <div className="flex flex-wrap">
                    {filteredRestaurents.length == 0 ? <h1>No Restaurents Available</h1>:filteredRestaurents.map((restaurent) =>{
                            return (
                                <Link 
                                        to={"/restaurent/"+restaurent?.info?.id}
                                        key={restaurent?.info?.id}
                                        
                                        >
                                        <RestaurentCard {...restaurent.info} />

                                </Link>
                                
                                )
                    })}
                    
            </div>
           </>

            
    );
}

export default Body;