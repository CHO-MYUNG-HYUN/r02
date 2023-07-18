import { useSelector } from "react-redux"

const CountDisplay = () => {

  const obj = useSelector(state => state.counter)

  console.log(obj)

  return (
    <div className="text-white text-4xl font-bold w-fit m-2 p-2">
      Count : {obj.num}
    </div>
  );
}

export default CountDisplay;