import CardDashboard from "@/components/Dashboard/CardDashboard";
import { Button } from "@/components/ui/button";
import { ClipboardList } from "lucide-react";
import Link from "next/link";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="gap-4 flex-col">
      {/* title and top dashboard */}
      <div className="flex justify-between items-center w-full">
        <div className="text-2xl font-bold">
          Welcome on Dashboard Analytics,{" "}
          <span className="font-light text-xl">Admin</span>! 👋🏻 
        </div>
        <div className="flex gap-2">
          <Link href={`/transaksi/transaksippob`}>
            <Button>
              {" "}
              <ClipboardList />
              Report{" "}
            </Button>
          </Link>
        </div>
      </div>
      
      {/* list card dashboard */}
      <div className="flex gap-4 mt-5">
        <CardDashboard
          title="User Mendaftar"
          total={500}
          bg="bg-[#526484]"
        />
                <CardDashboard
          title="Transaksi Harian"
          total={150.955}
          bg="bg-[#559bfb]"
        />
        <CardDashboard
          title="Topup Harian"
          total={20.432}
          bg="bg-[#ffa353]"
        />
        <CardDashboard
          title="Total Produk"
          total={320}
          bg="bg-[#ff63a5]"
        />
      </div>
    </div>
  );
};

export default DashboardPage;
