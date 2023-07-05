import SampleNav from "./nav/SampleNav";

const BasicLayout = ({ children }) => {
  return (
    <div className="container mx-auto min-m-[1280px] bg-blue-400">
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