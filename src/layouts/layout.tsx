import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import { X } from "lucide-react";

const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-5 bg-gray-50 overflow-y-auto mt-20 max-w-full mx-auto w-full">
          {/* 👇 Nested route content will be injected here */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
