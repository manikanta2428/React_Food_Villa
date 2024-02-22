import RestaurentCard from "./RestaurentCard";
import { restrautList } from "../Constants";
import { useState } from "react";

const Body = () =>{
        const getFilterData = (searchText,restaurents) => {
                const filteredData = restaurents.filter(x => x.data.name.includes(searchText));
                return filteredData;

        }
        const [searchText,setSearchText] = useState("Hi");
        const[restaurents,setRestaurents] = useState(restrautList);
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
                            return <RestaurentCard {...restaurent.data} key={restaurent.data.id}/>
                    })}
                    
            </div>
           </>

            
    );
}

export default Body;