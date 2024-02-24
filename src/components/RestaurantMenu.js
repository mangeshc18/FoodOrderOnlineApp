import { useEffect, useState } from "react";
import { ShimmerComponets } from "./ShimmerUi";
import { REST_CARD_IMG } from "./Constants";
import { Params, useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [restMenu, setRestMenu] = useState(null);
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=${resId}`
    );
    const json = await data.json();

    // console.log(json);
    setRestMenu(json?.data);
  };

  if (restMenu === null) {
    return (
      <div className="flex flex-wrap justify-center">
        <ShimmerComponets />
      </div>
    );
  }

  const { cloudinaryImageId, name, cuisines, avgRating } =
    restMenu.cards[2].card.card.info;
  // console.log(restMenu.cards[4].groupedCard.cardGroupMap.REGULAR);

  const category =
    restMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => {
      return (
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  return (
    <div className="w-[80%] mx-auto bg-white-100 mt-4">
      <div className=" flex  flex-col items-center gap-2 py-4">
        <img className="w-48 relative" src={REST_CARD_IMG + cloudinaryImageId} />
        
        <h3 className="text-2xl font-bold">{name}</h3>
        <h2 className="text-xl font-semibold">{cuisines.join(", ")}</h2>
        <h2 className="font-semibold">{avgRating} Stars</h2>
        
      </div>

      {category.map((cat, index) => {
        return (
          <RestaurantCategory
            key={cat.card.card.title}
            showItems={index === showIndex ? true: false}
            setShowIndex={() => setShowIndex(index)}
            data={cat}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
