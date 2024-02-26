import RestaurentCard from "./RestaurentCard";
import { restrautList } from "../Constants";
import { useState,useEffect } from "react";
import ShimmerLoading from "./ShimmerLoading";
import { Link } from "react-router-dom";

const Body = () =>{
        const [searchText,setSearchText] = useState();
        const[filteredRestaurents,setFilteredRestaurents] = useState([]);
        const[allRestaurents,setAllRestaurents] = useState([]);


        useEffect(()=>{
                getData();
        },[]);

        const getData = async () => {
               const apiData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
               const json = await apiData.json();
               setFilteredRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
               setAllRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }

        const getFilterData = (searchText,restaurents) => {
                const filteredData = restaurents.filter(x => x?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
                return filteredData;

        }
        
    return allRestaurents.length == 0 ? <ShimmerLoading /> :  (
           <>
           <div className="search-container">
                <input type="text" 
                className="input" 
                placeholder="Search Here" 
                value={searchText}
                onChange={(e) => {
                        setSearchText(e.target.value);
                }}
                />
                <button className="serach-button" onClick={()=> {
                        const filterData = getFilterData(searchText,allRestaurents);
                        setFilteredRestaurents(filterData);

                }
                        
                        }>Search </button>
           </div>
            <div className="AllCards">
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