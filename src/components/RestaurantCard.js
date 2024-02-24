import userContext from "../utils/useContext";
import { REST_CARD_IMG } from "./Constants";
import { useContext, createContext } from "react";

const RestaurantCard = (rest) => {
  const { loggedInUser, userImage } = useContext(userContext);
  const { name, areaName, avgRating, cloudinaryImageId, cuisines } = rest.info;

  const childContext = createContext({
    myName: "akshay parkad",
  });

  const {myName} = useContext(childContext);

  return (
    <>
      <div className="w-80 h-auto p-2 bg-gray-50 border-2 border-zinc-200 shadow-lg rounded-md flex flex-col gap-2 cursor-pointer">
        <div className="m-w-80 object-cover object-center ">
          <img
            className="rounded-md w-80 h-64"
            src={REST_CARD_IMG + cloudinaryImageId}
          />
        </div>

        <h2 className="text-2xl font-semibold text-slate-600 ">{name}</h2>
        <h3 className="text-base font-semibold">{cuisines.join(", ")}</h3>
        <h4 className="text-base font-semibold">
          <span className="text-lg mr-2 text-green-400">
            <i className="ri-star-line"></i>
          </span>

          {avgRating}
        </h4>
        <h4 className="text-sm font-semibold">{areaName}</h4>

        <span className="text-sm font-semibold w-8">{userImage}</span>
        <span className="text-sm font-semibold">{loggedInUser}</span>
        
      </div>
    </>
  );
};

export const WithPromotedRestaurant = (RestaurantCard) => {
  return (rest) => {
    return (
      <>
        <label className="absolute center-1 bg-black px-4 py-2 rounded-md text-white uppercase text-sm">
          Open
        </label>
        <RestaurantCard {...rest} />
      </>
    );
  };
};

export default RestaurantCard;
