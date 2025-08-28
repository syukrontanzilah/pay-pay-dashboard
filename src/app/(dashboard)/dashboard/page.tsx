/* eslint-disable @typescript-eslint/no-explicit-any */
import Card from "@/components/Card/Card";
import CardDashboard from "@/components/Dashboard/CardDashboard";
import PieChartComponent from "@/components/Dashboard/PieChart";
import TitleChart from "@/components/Dashboard/TitleChart";
import ListComponent from "@/components/List/ListComponent";
import { Button } from "@/components/ui/button";
import { ClipboardList } from "lucide-react";
import Link from "next/link";
import React from "react";

const produkData: any[] = [ 
  {
    id: 1,
    produk_id: "Telkomsel",
    harga: 25000,
  },
  {
    id: 2,
    produk_id: "Indosat",
    harga: 20000,
  },
  {
    id: 3,
    produk_id: "KartuAS",
    harga: 50000,
  },
    {
    id: 4,
    produk_id: "AXIS",
    harga: 25000,
  },
  {
    id: 5,
    produk_id: "Netflix",
    harga: 100000,
  },
  {
    id: 6,
    produk_id: "Gopay",
    harga: 50000,
  },
    {
    id: 7,
    produk_id: "Telkomsel",
    harga: 25000,
  },
  {
    id: 8,
    produk_id: "Indosat",
    harga: 20000,
  },
  {
    id: 9,
    produk_id: "IM3",
    harga: 50000,
  },
    {
    id: 10,
    produk_id: "Mentari",
    harga: 50000,
  },
];

const DashboardPage = () => {
  return (
    <div className="gap-4 flex-col">
      {/* title and top dashboard */}
      <div className="flex justify-between items-center w-full">
        <div className="text-2xl font-bold text-gray-800">
          Welcome to Dashboard Analytics,{" "}
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
          total={55.409}
          bg="bg-[#526484]"
        />
        <CardDashboard
          title="Transaksi Harian"
          total={150.955}
          bg="bg-[#559bfb]"
        />
        <CardDashboard title="Topup Harian" total={20.432} bg="bg-[#ffa353]" />
        <CardDashboard title="Total Produk" total={320} bg="bg-[#ff63a5]" />
      </div>

      {/* card chart top */}
      <div className="flex gap-5 mt-5">
        <Card className="p-4 w-2/3">
          <div className="flex justify-between">
            <div className="font-bold text-sm">Top Product Margin</div>
            <div className="font-normal text-xs text-[#8e61ee]">
              {/* Mountly */}
            </div>
          </div>
          <div className="w-full h-[350px] mt-6">
            <PieChartComponent data={[]} />
          </div>
        </Card>

        <Card className="p-5 w-1/3">
          <TitleChart
            title="Top 10 Transaksi"
            titleLink="View All"
            href="/transaksi/transaksippob"
          />
          <div className="mt-5">
            {produkData.map((item, i) => {
              return <ListComponent key={i} transaksi={item} />;
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
