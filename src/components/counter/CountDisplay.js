import { useSelector } from "react-redux"

const CountDisplay = () => {

  const obj = useSelector(state => state.counter)

  console.log(obj)

  return (
    <div className="text-4xl bg-white w-fit">
      Count: {obj.num}
    </div>
  );
}

export default CountDisplay;