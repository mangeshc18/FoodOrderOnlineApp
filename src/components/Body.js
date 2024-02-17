import RestaurantCard from "./RestaurantCard";
import { useEffect,useState } from "react";



const Body = () => {
    const [restList, setRestList]=useState([])

{/*lets use useEffect to call the api*/}

useEffect(() => {
fetchData();
},[])

const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json);
    setRestList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    
}






    return(
        <>
        <div className="w-full mt-10">
            <h2 className="text-2xl font-semibold">Search </h2>
            {/*card container */}
            <div className="grid gap-4 mx-auto md:grid-cols-2 lg:grid-cols-4 justify-center p-4">
                {
                    restList.map((rest) => {
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
