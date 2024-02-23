import RestaurentCard from "./RestaurentCard";
import { restrautList } from "../Constants";
import { useState,useEffect } from "react";

const Body = () =>{
        const [searchText,setSearchText] = useState("Hi");
        const[restaurents,setRestaurents] = useState(restrautList);

        useEffect(()=>{
                getData();
        },[]);

        const getData = async () => {
               const apiData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
               const json = await apiData.json();
               console.log(json); 
               setRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
               console.log(restaurents);
        }

        const getFilterData = (searchText,restaurents) => {
                const filteredData = restaurents.filter(x => x.info.name.includes(searchText));
                return filteredData;

        }
        
    return(
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
                        const filterData = getFilterData(searchText,restaurents);
                        setRestaurents(filterData);

                }
                        
                        }>Search </button>
           </div>
            <div className="AllCards">
                    {restaurents.map((restaurent) =>{
                            return <RestaurentCard {...restaurent.info} key={restaurent?.info?.id}/>
                    })}
                    
            </div>
           </>

            
    );
}

export default Body;