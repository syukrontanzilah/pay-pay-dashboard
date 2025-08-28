"use client";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Table } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
// import { DataTableViewOptions } from "./data-table-view-options";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Funnel, Plus, RotateCcw, Sheet } from "lucide-react";
import { CSVLink } from "react-csv";
import { Data } from "react-csv/lib/core";
// import AddUpdateRoleModal from "./AddUpdateRoleModal";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  fetchData: () => Promise<void>;
}

export function DataTableToolbar<TData>({
  table,
  fetchData,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = table
    .getAllColumns()
    .filter((column) => column.getCanFilter())
    .filter(
      (column) => column.id !== "created_at" && column.id !== "updated_at"
    );

  const [selectedColumn, setSelectedColumn] = useState(columns[0]?.id || "");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (columns.length > 0 && !selectedColumn) {
      setSelectedColumn(columns[0].id);
    }
  }, [columns, selectedColumn]);

  useEffect(() => {
    table.getAllColumns().forEach((column) => {
      if (
        column.id !== selectedColumn &&
        column.id !== "timeStamp" &&
        column.getFilterValue() !== undefined &&
        column.getFilterValue() !== ""
      ) {
        column.setFilterValue(undefined);
      }
    });
  }, [selectedColumn, table]);

  // this for csv
  const columnWithDate = table.getAllColumns();
  const data = table.getFilteredRowModel().rows.map((row) => row.original);
  const headers = columnWithDate.map((col) => ({ label: col.id, key: col.id }));

  function formatString(str: string): string {
    return str
      .split("_")
      .map(
        (word: string) =>
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(" ");
  }

  return (
    <div className="flex items-end justify-between">
      <div className="flex flex-1 flex-col-reverse items-start gap-y-2 sm:flex-row sm:items-center sm:space-x-2 gap-x-2">
        <div className="relative w-[300px] lg:w-[400px]">
          <Input
            placeholder={`Search by ${formatString(selectedColumn)} ...`}
            value={
              (table.getColumn(selectedColumn)?.getFilterValue() as string) ??
              ""
            }
            onChange={(event) =>
              table
                .getColumn(selectedColumn)
                ?.setFilterValue(event.target.value)
            }
            className="w-full pr-24 h-[35px] text-sm text-gray-600 focus:outline-none focus:ring-gray-200 focus:border-gray-200 border-input ring-offset-background file:border-0 file:bg-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50" 
          />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 -ml-3 bg-gray-100  rounded-l-none border-l data-[state=open]:bg-accent text-sm text-gray-600 border h-[35px] focus:outline-none focus:ring-gray-200 focus:border-gray-200 border-input ring-offset-background file:border-0 file:bg-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span>{formatString(selectedColumn)}</span>
                {/* <CaretSortIcon className="ml-2 h-4 w-4" /> */}
                <Funnel className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full text-sm text-gray-500 overflow-y-scroll">
              {columns.map((column) => (
                <DropdownMenuItem
                  key={column.id}
                  onClick={() => setSelectedColumn(column.id)}
                  className="text-sm"
                >
                  {formatString(column.id)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {isFiltered && (
          <Button
            variant="outline"
            onClick={() => table.resetColumnFilters()}
            className="px-2 lg:px-3 text-xs h-[35px] bg-blue-100 outline-none border-none self-start transition-all hover:bg-blue-200"
          >
            <RotateCcw className="mr-0 h-4 w-4" />
            Reset
          </Button>
        )}
      </div>
      <div className="flex items-center gap-x-2">
        {/* BUTTON ADD */}
        <Button
          variant="outline"
          size="sm"
          className="bg-blue-500 text-sm text-white transition-all hover:bg-blue-400 hover:text-white border-none h-[30px]"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus className="mr-0" />
          User
        </Button>
        <CSVLink
          data={data as Data}
          headers={headers}
          separator=";"
          filename="table_data.csv"
        >
          <Button
            variant="outline"
            size="sm"
            className="bg-green-500 text-sm text-white transition-all hover:bg-green-400 hover:text-white border-none h-[30px]"
          >
            <Sheet />
            CSV
          </Button>
        </CSVLink>
        {/* <DataTableViewOptions table={table} /> */}
      </div>
      {/* {isModalOpen && (
        <AddUpdateRoleModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          fetchData={fetchData}
        />
      )} */}
    </div>
  );
}
