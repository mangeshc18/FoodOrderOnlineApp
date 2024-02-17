import { useRouteError } from "react-router-dom";

const ErrorHandle = () => {
    const {data, status} = useRouteError();
    console.log(useRouteError());
    return(
        <>
        <h1>{data}</h1>
        <h2>{status}</h2>
        </>
    )
};

export default ErrorHandle;