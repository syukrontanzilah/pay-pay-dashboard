"use client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./column-header";
import { IAdminUsers } from "@/types/userType";
import UserAction from "../components/UserAction";

export const columns = (
  fetchData: () => Promise<void>
): ColumnDef<IAdminUsers>[] => [
  // {
  //   accessorKey: "id",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="ID" />
  //   ),
  // },

  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    accessorKey: "roles",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Roles" />
    ),
    cell: ({ row }) => {
      const roles: string = row.getValue("roles");
      return (
        <span
          className={`px-2 py-1 rounded-full text-white text-[10px] font-light ${
            roles === "Admin"
              ? "bg-blue-400"
              : roles === "Management Approval"
              ? "bg-violet-400"
              : roles === "User"
              ? "bg-green-400"
              : roles === "Moderator"
              ? "bg-red-400"
              : "bg-gray-400"
          }`}
        >
          {roles}
        </span>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: "phone",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone" />
    ),
  },
  {
    accessorKey: "activated",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Activated" />
    ),
    cell: ({ row }) => {
      const activated = row.original.activated;
      return <span>{activated === 1 ? "Yes" : "No"}</span>;
    },
  },
  {
    id: "actions",
    header: () => <div>Actions</div>,
    cell: ({ row }) => {
      const user = row.original;
      return <UserAction role={user} fetchData={fetchData} />;
    },
  },
  // {
  //   accessorKey: "created_at",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Created At" />
  //   ),
  //   cell: ({ row }) => {
  //     const date = new Date(row.original.created_at).toLocaleDateString();
  //     return <span>{date}</span>;
  //   },
  // },
  // {
  //   accessorKey: "updated_at",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Updated At" />
  //   ),
  //   cell: ({ row }) => {
  //     const date = new Date(row.original.updated_at).toLocaleDateString();
  //     return <span>{date}</span>;
  //   },
  // },
];
