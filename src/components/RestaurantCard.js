

const RestaurantCard = (rest) => {
    const { name, areaName,avgRating,cloudinaryImageId,cuisines } = rest.info;
    
    return(
        <>
        <div className="w-80 h-auto p-2 bg-gray-50 border-2 border-zinc-200 shadow-lg rounded-md flex flex-col gap-2 cursor-pointer">
            <div className="m-w-80 object-cover object-center ">
                <img className="rounded-md w-80 h-64" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId} />

            </div>
        
            <h2 className="text-2xl font-semibold text-slate-600 ">{name}</h2>
                <h3 className="text-base font-semibold">{cuisines.join(", ")}</h3>
                <h4 className="text-base font-semibold">
                    <span className="text-lg mr-2 text-green-400"><i class="ri-star-line"></i></span>
                
                 {avgRating}</h4>
                <h4 className="text-sm font-semibold">{areaName}</h4>
        
            
        </div>
        
        </>
    )
};

export default RestaurantCard;