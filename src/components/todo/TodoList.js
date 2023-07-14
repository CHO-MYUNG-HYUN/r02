import { useSelector } from "react-redux";


const TodoList = () => {

  const todoArr = useSelector(state => state.todo)

  console.log("todo List >> ", todoArr)

  return (
    <div className="bg-white w-fit">
      <ul>
        {todoArr.map((todo, idx) => <li key={idx}>{todo}</li>)}
      </ul>
    </div>
  );
}

export default TodoList;