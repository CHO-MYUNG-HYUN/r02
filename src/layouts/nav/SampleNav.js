import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoginNav from "./LoginNav";

const SampleNav = () => {

  const todoArr = useSelector(state => state.todo)
  // https://cdn.pixabay.com/photo/2014/07/21/11/51/rose-398576_640.png

  return (
    <div className="flex m-4 p-4  text-yellow-200 font-extrabold justify-center">
      {/* <div className="w-20 h-20 bg-[url('https://cdn.pixabay.com/photo/2014/07/21/11/51/rose-398576_640.png')] -ml-36"></div> */}
      <div className="m-4 text-4xl ">
        <Link to={"/"}>Main</Link>
        <span className="bg-red-500 font-extrabold">{todoArr.length}</span>
      </div>
      <div className="m-4 text-4xl ">
        <Link to={"/about"}>About</Link>
      </div>
      <div  className='m-4 text-4xl '>
        <Link to="/products/list">Products</Link>
      </div>
      <div className="m-4 text-4xl ">
        <Link to={"/board/list"}>Board</Link>
      </div>
      <div>
        <LoginNav></LoginNav>
      </div>
    </div>
  );
}

export default SampleNav;