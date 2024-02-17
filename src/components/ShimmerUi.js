export const ShimmerUi = () => {
    return(
        <div className="w-80 h-96 p-2 bg-gray-50 border-2 border-zinc-200 shadow-lg rounded-md flex flex-col gap-4 cursor-pointer m-16 ">

                <div className="rounded-md w-78 h-52 bg-gray-300 object-fill"></div>
                <div className="rounded-md w-78 h-2 bg-gray-300 object-fill"></div>
                <div className="rounded-md w-78 h-2 bg-gray-300 object-fill"></div>
                <div className="rounded-md w-78 h-2 bg-gray-300 object-fill"></div>

        </div>
    )
};



export const ShimmerComponets = () => {
   return Array.from({length:10}).map((_, index) =>
   <ShimmerUi key={index}/> )
};
