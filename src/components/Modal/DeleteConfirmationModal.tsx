import React from "react";
import { Button } from "@/components/ui/button";
import FormModal from "./FormModal";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;
  return (
    <FormModal isOpen={isOpen} onClose={onClose}>
      <div className="p-5">
      <h2 className="text-lg font-semibold text-gray-600 mb-4">
          Konfirmasi Delete
        </h2>
        <p className="text-gray-600 mb-6 text-xs">
          Are you sure you want to delete this cash record? This action cannot be undone.
        </p>
        <div className="flex justify-end space-x-2">
          <Button
            type="button"
            onClick={onClose}
            className="h-[32px] border w-[100px] border-primary text-primary bg-white text-xs font-bold hover:bg-white"
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={onConfirm}
            className="text-white h-[32px] w-[100px] text-xs font-bold"
          >
            Delete
          </Button>
        </div>
      </div>
    </FormModal>
  );
};

export default DeleteConfirmationModal;
