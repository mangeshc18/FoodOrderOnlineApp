import { REST_CARD_IMG } from "./Constants";

const ItemList = ({ data }) => {
  // console.log(data.card.info);
  const { name, description, imageId, price, defaultPrice } = data?.card?.info;
  return (
    <div className="flex  justify-between mt-4 border-b-2 p-2">
      <div className="flex w-6/12 flex-col gap-2">
        <h2 className="text-xl font-semibold">{name}</h2>
        <h2 className="font-semibold"> Rs. {(Math.round( price || defaultPrice))/100}</h2>
        <h2 className="font-semibold text-sm">{description}</h2>
      </div>

      <div className="w-12/12">
        <img className="w-32 shadow-md rounded-md" src={REST_CARD_IMG + imageId} />
      </div>
    </div>
  );
};

export default ItemList;
