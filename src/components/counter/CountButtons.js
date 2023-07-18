import {useDispatch} from "react-redux"
import { dec, inc } from "../../reducers/countSlice"

const CountButtons = () => {

  const dispatch = useDispatch()

  const handleClickInc = () => {
    dispatch(inc(1, "thirdInc")) //reduce에 세번째 파라미터는 안들어가짐 !
  }

  const handleClickDec = () => {
    dispatch(dec(1))
  }

  return (  
    <div className="text-white text-4xl w-fit flex gap-8 m-2 p-2">
      <button onClick={handleClickInc}>Inc</button>
      <button onClick={handleClickDec}>Dec</button>
    </div>
  );
}
 
export default CountButtons;