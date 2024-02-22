import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider, } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import ErrorHandle from "./src/components/ErrorHandle";
import RestaurantMenu from "./src/components/RestaurantMenu";
import RestaurantList from "./src/components/RestaurantList";


const AppLayout = () => {
    return(
        <>
        <Header />
        <Outlet />
        </>
        
    )
};


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [{

            path: "/",
            element: <Body />
        },

        {
            path: "/about",
            element: <About />
        },
    
        {
            path: "/contact",
            element: <Contact />
        },

        {
            path: "/restaurants/:resId",
            element: <RestaurantMenu />,
            
          },


          {
            path: "/restaurants/list/:resId",
            element: <RestaurantList />,
            
          }
    
    ],

        errorElement: <ErrorHandle />
    },
    
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
