import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearitems } from "../utils/CartSlice";


const Cart = () => {
    const cartItem = useSelector((store) => store.cart.items);
    console.log(cartItem);

    const dispatch = useDispatch()

    const handleClearItem = () => {
        dispatch(clearitems(0));
    }
    
    return(
        <>
        <div className="text-center font-semibold text-2xl mt-2">Cart</div>
        <div className="flex items-center justify-center mt-4">
        <button onClick={handleClearItem} className=" p-2 bg-black text-white rounded-md">Clear Cart</button>
        </div>
        
        {
                cartItem.map((item) => {
                   return <div className="w-[80%] m-auto mt-8">
                    <ItemList data={item}/>
                    </div>
                }
                )
            }
        </>
        
        )
    };
    

export default Cart;