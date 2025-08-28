"use client";
import { useEffect, useState } from "react";
import React from "react";
import DataTable from "./tableComponents/data-table";
// import { useSearchParams } from "next/navigation";

export interface IAdminUsers {
  id: number;
  name: string;
  phone: string;
  email: string;
  roles: string;
  activated: number;
  created_at: string;
  updated_at: string;
}

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
      const dummyData: IAdminUsers[] = [
        {
          id: 1,
          name: "John Doe",
          phone: "08123456789",
          email: "john@example.com",
          roles: "Admin",
          activated: 1,
          created_at: "2024-01-01",
          updated_at: "2024-06-01",
        },
        {
          id: 2,
          name: "Jane Smith",
          phone: "08198765432",
          email: "jane@example.com",
          roles: "User",
          activated: 1,
          created_at: "2024-02-15",
          updated_at: "2024-06-10",
        },
        {
          id: 3,
          name: "Budi Santoso",
          phone: "082233445566",
          email: "budi@example.com",
          roles: "Moderator",
          activated: 0,
          created_at: "2024-03-10",
          updated_at: "2024-06-15",
        },
      ];

      setData(dummyData);
    } catch (error) {
      console.error("Error fetching data user:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [page, limit, isLoading]);

  const columnsDef = [
    { header: "ID", accessorKey: "id" },
    { header: "Name", accessorKey: "name" },
    { header: "Phone", accessorKey: "phone" },
    { header: "Email", accessorKey: "email" },
    { header: "Role", accessorKey: "roles" },
    { header: "Activated", accessorKey: "activated" },
    { header: "Created At", accessorKey: "created_at" },
    { header: "Updated At", accessorKey: "updated_at" },
  ];

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
