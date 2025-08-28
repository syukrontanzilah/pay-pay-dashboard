import { EllipsisVertical } from "lucide-react";
import React from "react";

interface CardDashboardProps {
  total: number | string; 
  title: string; 
  bg?: string; 
}

const CardDashboard: React.FC<CardDashboardProps> = ({ total, title, bg = "bg-white" }) => {
  return (
    <div className={`${bg} shadow-md rounded-lg p-4 text-white flex w-full justify-between pb-14`}>
        <div>
            <h1 className="text-xl font-bold">{total}</h1>
            <h3 className=" text-xs font-semibold">{title}</h3>
        </div>
        <div>
        {/* <EllipsisVertical size={16} /> */}
        </div>
    </div>
  );
};

export default CardDashboard;
