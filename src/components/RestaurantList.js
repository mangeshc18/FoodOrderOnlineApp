import { useEffect, useState } from "react";
import { ShimmerComponets } from "./ShimmerUi";
import { REST_CAROUSEL_IMG } from "./Constants";
import { useParams } from "react-router-dom";

const RestaurantList = () => {

    const {resId} = useParams();

    const [restList, setRestList] = useState(null);

    useEffect(() => {

        fetchData();
    }, []);

    console.log(resId);


    const fetchData = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&collection=${resId}&tags=layout_CCS_Idli&sortBy=&filters=&type=rcv2&offset=0&page_type=null`);


        const json = await data?.json();

        
        setRestList(json?.data?.cards);


    }

    if(restList === null) return <ShimmerComponets />

    
    const {imageId, title, description} = restList[0].card.card;
    
    

    return(

        <div className="flex flex-col justify-center item">
            <img className="w-34" src={REST_CAROUSEL_IMG + imageId}/>
            <h1 className="text-2xl font-bold">{title}</h1>
            <h2 className="font-bold">{description}</h2>
        </div>
    )
};


export default RestaurantList;