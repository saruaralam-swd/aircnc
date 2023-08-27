import React from "react";
import Sidebar from "../Components/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="md:flex relative min-h-screen">
      <Sidebar />

      {/* content */}
      <div className="flex-1 md:ml-64">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
