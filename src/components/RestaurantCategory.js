import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    console.log(data.card.card);
    const {itemCards, title} = data.card.card;
    // const [showItems, setShowItems] = useState(false);

    const HandleItems = () => {
        setShowIndex();
    };

    return(
        <div className="w-12/12  border-b-8 border-blue-200  cursor-pointer shadow-md mb-4 p-2 bg-white">
            <div className="bg-gray-100 rounded-md py-4 px-2 flex justify-between" onClick={HandleItems}>
            <span className="font-semibold  text-2xl" >{title} ({itemCards.length})</span>
            <span className="text-2xl"><i className="ri-arrow-down-s-line"></i></span>
            </div>
            

            {
                itemCards.map((item) => {
                   return showItems && <ItemList data={item}/>
                }
                )
            }

        </div>
    )
};

export default RestaurantCategory;