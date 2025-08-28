import Navbar from "@/components/Navbar/Navbar";
import SidebarMenu from "@/components/SidebarMenu/SidebarMenu";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex">
      {/* Left Menu */}
      <div className="sidebar w-[20%]  md:w-[8%] lg:w-[16%] xl:w-[20%] top-0 sticky overflow-y-auto h-screen bg-white z-20">
        <Link href={"/"} className="flex p-4">
          <Image src={"/logo.png"} alt="logo" width={30} height={30} className="transform rotate-40"/>
          <p className="text-primary ml-2 font-bold text-xl opacity-90">Paypay</p>
        </Link>
        <SidebarMenu/>
      </div>

      {/* Right content */}
      <div className=" bg-[#f7f8fa] w-[80%] md:w-[92%] lg:w-[84%] overflow-scroll">
        <Navbar />
        <div className="mt-[80px] px-6 mb-10">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
