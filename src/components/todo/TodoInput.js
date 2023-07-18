import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../reducers/todoSlice"


const TodoInput = () => {

  const [text, setText] = useState("")
  const dispatch = useDispatch()

  const handleClickSave = () => {
    dispatch(addTodo(text))
  }

  return (  
    <div className="m-2 p-2 text-3xl text-white">
      Todo Input : 
      <input className="bg-transparent border-2 mx-4 rounded-lg backdrop-blur-md"
       type="text" value={text} onChange={e => setText(e.target.value)}></input>
      <button onClick={handleClickSave}>Save</button>
    </div>
  );
}
 
export default TodoInput;