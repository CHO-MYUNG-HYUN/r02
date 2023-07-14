import {useDispatch} from "react-redux"
import { dec, inc } from "../../reducers/countSlice"

const CountButtons = () => {

  const dispatch = useDispatch()

  const handleClickInc = () => {
    dispatch(inc(2, "thirdInc"))
  }

  const handleClickDec = () => {
    dispatch(dec(2))
  }

  return (  
    <div className="bg-white w-fit flex gap-8">
      <button onClick={handleClickInc}>Inc</button>
      <button onClick={handleClickDec}>Dec</button>
    </div>
  );
}
 
export default CountButtons;