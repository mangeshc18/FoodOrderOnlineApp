import RestaurantCard ,{WithPromotedRestaurant} from "./RestaurantCard";
import { useEffect,useState } from "react";
import {ShimmerUi, ShimmerComponets} from "./ShimmerUi";
import { REST_API_LINK } from "./Constants";
import { Link } from "react-router-dom";
import RestaurantCarousal from "./RestaurantCarousal";
import { WithPromotedRestaurant } from "./RestaurantCard";

const Body = () => {
    const [restList, setRestList]=useState([]);
    let [searchInput, setSearchInput] = useState("")
    const [filterRestList, setfilterRestList] = useState([]);
    const [carousel, setCarousel] = useState([]);

    const PromotedRestaurant = WithPromotedRestaurant(RestaurantCard);
    

    // console.log(searchInput);

{/*lets use useEffect to call the api*/}

useEffect(() => {
fetchData();
},[])

const fetchData = async () => {
    const data = await fetch(REST_API_LINK);

    const json = await data.json();
    // console.log(json);
    const restData =json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setRestList(restData);
    setfilterRestList(restData);
    setCarousel(json?.data?.cards[0]?.card?.card?.imageGridCards?.info)
    console.log(restData[0].info.isOpen);
    
    
}


    return (restList.length === 0) ? <div className="flex flex-wrap justify-center"><ShimmerComponets /></div> : (
        <>

        <div>
            <h2 className="text-2xl font-semibold text-center mt-4">Whats On Your Mind ?</h2>
        </div>

        

        <div className="flex w-[80%] bg-gray-50 gap-2 p-4 mx-auto overflow-hidden mt-8 rounded-xl">
            {/* {
                carousel.map((carol) => 
                
                <RestaurantCarousal key={carol.id} src={carol.imageId} />
                )
            } */}

            {
                <main>
                <RestaurantCarousal>
                    {
                        carousel.map((carol) =>
                       <Link className="w-52 rounded-md shadow-md" key={carol.id} to={"/restaurants/list/"+ 83649}><img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${carol.imageId}`}/></Link> )
                    }
                </RestaurantCarousal>
                </main>
            }

            {/* <RestaurantCarousal /> */}
            
        </div>
        
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
                           <Link to={"/restaurants/" + rest.info.id} key={rest.info.id} >
                            {(rest.info.isOpen) ? <PromotedRestaurant {...rest} /> : <RestaurantCard  {...rest} />}
                            </Link> 

                        )
                    })
                }
            
            
            </div>

        </div>
        </>
    )
};

export default Body;
