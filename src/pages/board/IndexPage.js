import { Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

const IndexPage = () => {
  return (  
    <BasicLayout>
      <div className="mt-4 p-4 bg-green-400 text-2xl text-white flex justify-center">
        <div className="underline font-extrabold m2 p-2">List</div>
        <div className="underline font-extrabold m2 p-2">Register</div>
      </div>
      <div className="h-[50vh] bg-gray-300 w-full">
        <Outlet></Outlet>
      </div>
    </BasicLayout>
  );
}
 
export default IndexPage;