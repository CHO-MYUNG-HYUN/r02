import SampleNav from "./nav/SampleNav";

const BasicLayout = ({ children }) => {
  return (
    <div className="container mx-auto min-m-[1280px]  bg-no-repeat bg-cover bg-bottom
    bg-[url('https://cdn.pixabay.com/photo/2022/03/13/12/00/hydrangeas-7065907_1280.jpg')]
    
    ">
      <div>
        <SampleNav></SampleNav>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}

export default BasicLayout;