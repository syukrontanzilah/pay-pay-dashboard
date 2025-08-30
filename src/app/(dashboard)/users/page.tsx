"use client";
import { useEffect, useState } from "react";
import React from "react";
import DataTable from "./tableComponents/data-table";
import { IAdminUsers } from "@/types/userType";
import { usersDummy } from "@/lib/usersDummy";
import { columns } from "./tableComponents/column";
// import { useSearchParams } from "next/navigation";


const ManagementUsers = () => {
  const [data, setData] = useState<IAdminUsers[]>([]);
  const [limit, setLimit] = useState(50);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  // const searchParams = useSearchParams();
  // const limitFromQuery = searchParams.get("limit")
  //   ? parseInt(searchParams.get("limit")!)
  //   : null;

  async function fetchData() {
    setIsLoading(true);
    try {
      setData(usersDummy);
    } catch (error) {
      console.error("Error fetching data user:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [page, limit]);

  // const columnsDef = [
  //   { header: "ID", accessorKey: "id" },
  //   { header: "Name", accessorKey: "name" },
  //   { header: "Phone", accessorKey: "phone" },
  //   { header: "Email", accessorKey: "email" },
  //   { header: "Role", accessorKey: "roles" },
  //   { header: "Activated", accessorKey: "activated" },
  //   { header: "Created At", accessorKey: "created_at" },
  //   { header: "Updated At", accessorKey: "updated_at" },
  // ];

    const columnsDef = columns(fetchData);


  return (
    <div className="mx-auto">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <div className="font-bold text-xl">Manajemen User</div>
          <div className="text-gray-500 text-sm">Data User dan Role</div>
        </div>
      </div>

      <div className="bg-white rounded-md flex-1 p-4">
        <DataTable
          columns={columnsDef}
          data={data}
          setLimit={setLimit}
          setPage={setPage}
          limit={limit}
          isLoading={isLoading}
          fetchData={fetchData}
        />
      </div>
    </div>
  );
};

export default ManagementUsers;
