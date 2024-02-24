import { useDispatch } from "react-redux";
import { REST_CARD_IMG } from "./Constants";
import { additems, removeitems } from "../utils/CartSlice";
import { ShimmerComponets } from "./ShimmerUi";

const ItemList = ({data} ) => {

  console.log(data);

const dispatch = useDispatch();


const handleAddItem = (data) => {
  dispatch(additems(data));
};

const handleRemoveItem = (data) => {
  dispatch(removeitems(data));
};



if(data === null) return <ShimmerComponets/>;


  // console.log(data.card.info);
  const { name, description, imageId, price, defaultPrice } = data?.card?.info;
  console.log(name);
  return (
    <div className="flex  justify-between mt-4 border-b-2 p-2">
      <div className="flex w-6/12 flex-col gap-2">
        <h2 className="text-xl font-semibold">{name}</h2>
        <h2 className="font-semibold"> Rs. {(Math.round( price || defaultPrice))/100}</h2>
        <h2 className="font-semibold text-sm">{description}</h2>
      </div>

      <div className="w-12/12 relative">
        <img className="w-32 shadow-md rounded-md" src={REST_CARD_IMG + imageId} />
      <button className="w-12 bg-black rounded-lg absolute top-0 left-4 text-white text-[10px] py-1 uppercase" onClick={() => handleAddItem(data)}>Add</button>
      <button className="w-12 bg-black rounded-lg absolute right-0 left-4 text-white text-[10px] py-1 uppercase" onClick={() => handleRemoveItem(data)}>Remove</button>
      </div>
    </div>
  );
};

export default ItemList;
