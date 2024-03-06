import { Outlet } from "react-router-dom";
import ProgramHeader from "./ProgramHeader";


const ProgramLayout = () => {
  return (
    <div className="container">
      <ProgramHeader/>
      <Outlet />
    </div>
  );
};

export default ProgramLayout;
