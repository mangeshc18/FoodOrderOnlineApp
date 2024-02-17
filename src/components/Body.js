import RestaurantCard from "./RestaurantCard";
import { useEffect,useState } from "react";
import {ShimmerUi, ShimmerComponets} from "./ShimmerUi";


const Body = () => {
    const [restList, setRestList]=useState([]);
    let [searchInput, setSearchInput] = useState("")
    const [filterRestList, setfilterRestList] = useState([]);

    // console.log(searchInput);

{/*lets use useEffect to call the api*/}

useEffect(() => {
fetchData();
},[])

const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    // console.log(json);
    const restData =json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setRestList(restData);
    setfilterRestList(restData);
    
    
}


    return (restList.length === 0) ? <div className="flex flex-wrap justify-center"><ShimmerComponets /></div> : (
        <>
        <div className="w-full mt-10">
            <div className="flex justify-center gap-2 m-10">
                <input className="border-2 rounded-md py-2 px-6 bg-gray-50 " placeholder="restaurants" value={searchInput} onChange={(e) => {
                    setSearchInput(e.target.value);
                    
                    
                }} />
                <button className="bg-blue-400 p-2 rounded-md font-semibold cursor-pointer" onClick={() =>{
                     const filterData = restList.filter((list) => {
                          return list.info.name.toLowerCase().includes(searchInput.toLowerCase());
                          

                    });

                    
                    setfilterRestList(filterData);
                    setSearchInput("")
                    // console.log(filterData);

                    

                }}>SEARCH</button>

                
                
            </div>
            {/*card container */}
            <div className="grid gap-4 mx-auto md:grid-cols-2 lg:grid-cols-4 justify-center p-4">
                {
                    filterRestList.map((rest) => {
                        return(
                            <RestaurantCard key={rest.info.id} {...rest}/>

                        )
                    })
                }
            
            
            </div>

        </div>
        </>
    )
};

export default Body;
