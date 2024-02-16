import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return(
        <h1>Hello React</h1>
    )
};

const AppLayout = () => {
    return(
        <Header />
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
