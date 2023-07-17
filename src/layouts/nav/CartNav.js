import { useDispatch, useSelector } from "react-redux";
import { getCartThunk } from "../../reducers/cartSlice";
import { useEffect } from "react";


const CartNav = () => {

  const { email, nickname } = useSelector(state => state.login)

  const {items} = useSelector(state => state.cart)

  const dispatch = useDispatch()

  useEffect(() => {

    if(!email) {
      return
    }

    dispatch(getCartThunk(email))

  }, [email])

  return (  
    <div className="m-4 text-2xl">Cart - {items.length}</div>
  );
}
 
export default CartNav;