import { useState } from "react";

const RestaurantCarousal = ({children: images}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);





  

//   const prev = () => setCur(cur === 0 ? images.length - 1 : cur - 1);
//   const next = () => setCur(cur === images.length - 1 ? 0 : cur + 1);



const handlePrevClick = () => {
    // If currentImageIndex is already at the first image, loop back to the last image
    if (currentImageIndex === 0) {
        setCurrentImageIndex(images.length - 1);
        console.log(currentImageIndex);
    } else {
        // Otherwise, decrement the currentImageIndex by 1 to display the previous image
        setCurrentImageIndex(currentImageIndex - 1);
        console.log(currentImageIndex);
    }
};

// Function to handle clicking on the "Next" button
const handleNextClick = () => {
    // If currentImageIndex is already at the last image, loop back to the first image
    if (currentImageIndex === images.length - 1) {
        setCurrentImageIndex(0);
        console.log(currentImageIndex);
    } else {
        // Otherwise, increment the currentImageIndex by 1 to display the next image
        setCurrentImageIndex(currentImageIndex + 1);
        console.log(currentImageIndex);
        console.log(images.length);
    }
};



  return (
    <>
    <div className="overflow-hidden ">
      <div
        className="flex transition-transform ease-out duration-500 gap-16  "
        style={{ transform: `translateX(-${currentImageIndex * 10}%)` }}
      >
        {images}
        
      </div>

    </div>

    <div className="flex flex-row-reverse gap-8 mt-4 px-4">

    </div>
    
    <button className="text-3xl bg-slate-50 p-2 rounded-full" onClick={handlePrevClick}><i className="ri-arrow-left-line"></i></button>

<button className="text-3xl bg-slate-50 p-2 rounded-full hover:bg-white" onClick={handleNextClick}><i className="ri-arrow-right-line"></i></button>
    </>
  );
};

export default RestaurantCarousal;
