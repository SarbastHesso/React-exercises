import { Outlet } from "react-router-dom";
import ChannelHeader from "../views/ChannelHeader";

const ChannelLayout = () => {
  return (
      <div className="container">
        <ChannelHeader />
        <Outlet />
      </div>
  );
}

export default ChannelLayout