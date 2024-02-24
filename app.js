import React, { useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import ErrorHandle from "./src/components/ErrorHandle";
import RestaurantMenu from "./src/components/RestaurantMenu";
import RestaurantList from "./src/components/RestaurantList";
import userContext from "./src/utils/useContext";
import { useEffect, useState, } from "react";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";

const AppLayout = () => {
  


  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "mangesh choudhari",
    };
    setUserName(data.name);
  }, []);

  return (
    <>
    <Provider store={appStore}>
      <userContext.Provider value={{loggedInUser: "mangesh choudhari"}}>
        <Header />
        <Outlet />
      </userContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },

      {
        path: "/restaurants/list/:resId",
        element: <RestaurantList />,
      },

      {
        path: "/cart",
        element: <Cart />
      }
    ],

    errorElement: <ErrorHandle />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
