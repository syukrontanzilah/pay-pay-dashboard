import React, { useState } from 'react'
// import { RoleIn } from '../tableComponents/column'
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { FaRegCopy, FaRegTrashAlt } from "react-icons/fa";
import { MdEdit, MdOutlineRemoveRedEye } from "react-icons/md";
import { IAdminUsers } from '@/types/userType';
import AddUpdateUserModal from './AddUpdateUserModal';
import DeleteConfirmationModal from '@/components/Modal/DeleteConfirmationModal';
// import { deleteAdminUsers, IAdminUsers } from '@/utils/userUtils';
// import { ToastPromiseDelete } from '@/components/toast/Toast';
// import DeleteConfirmationModal from '@/components/modal/DeleteConfirmationModal';

interface RoleProps {
    role: IAdminUsers;
    fetchData : () => Promise<void>;
}

const UserAction: React.FC<RoleProps> = ({role, fetchData}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalDeleteOpen, setIsModaDeletelOpen] = useState(false);  

    const handleEdit = () => {
      setIsModalOpen(true); 
    };

    const handleDelete = async (id: number) => {
      try{
        // ToastPromiseDelete({
        //   action: () => deleteAdminUsers(id),
        //   successMessage: "User deleted successfully!"
        // })
        //    .then(()=> {
        //     fetchData()             
        //    });
      } catch (error) {
        console.error("Error deleted data:", error);
      }
    }

  return (
    <>
    <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={handleEdit}
              className="text-green-600 text-xs hover:!text-green-600"
            >
              <MdEdit className="mr-1" />
              Edit
            </DropdownMenuItem>
            {/* Delete */}
            <DropdownMenuItem
              onClick={() => setIsModaDeletelOpen(true)}
              className="text-red-600 text-xs hover:!text-red-600"
            >
              <FaRegTrashAlt className="mr-1" /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
          <DeleteConfirmationModal
            isOpen={isModalDeleteOpen}
            onClose={() => setIsModaDeletelOpen(false)}
            onConfirm={() => {
              handleDelete(role.id)
              setIsModaDeletelOpen(false); 
            }}
          />
        </DropdownMenu>
        {
            isModalOpen && (
                <AddUpdateUserModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                role={role}
                fetchData={fetchData}
                />
            )
        }
    </>
  )
}

export default UserAction