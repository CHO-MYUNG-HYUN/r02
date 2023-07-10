import { Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

const IndexPage = () => {
  return (  
    <BasicLayout>
      <div className="mt-4 p-4  text-2xl flex justify-center text
      underline font-extrabold text-red-500">
        <div className="m-2 p-2 text-4xl">List</div>
        <div className="m-2 p-2 text-4xl">Register</div>
      </div>
      <div 
      className="h-[100vh] bg-gray-300 w-full  bg-no-repeat bg-top bg-cover border-t-[16px]
      bg-[url('https://cdn.pixabay.com/photo/2015/07/31/06/50/forest-868715_1280.jpg')]"
      >
        {/* https://cdn.pixabay.com/photo/2023/06/03/15/26/ginkgo-8037886_1280.jpg */}
        <Outlet></Outlet>
      </div>
    </BasicLayout>
  );
}
 
export default IndexPage;