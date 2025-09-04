/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import FormModal from "@/components/Modal/FormModal";
import FormInput from "@/components/Input/FormInput";
import Select from "@/components/Select/Select";
import {
  ToastClose,
  ToastLoading,
  ToastSuccess,
} from "@/components/Toast/Toast";
import { usersDummy } from "@/lib/usersDummy";
import { IAdminUsers } from "@/types/userType";

interface AddUpdateUserProps {
  isOpen: boolean;
  onClose: () => void;
  role?: IAdminUsers;
  fetchData: () => Promise<void>;
}

const dummyRoles: string[] = ["Admin", "User", "Moderator"];

// Simulasi API
async function getAdminUserByID(id: number): Promise<IAdminUsers | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(usersDummy.find((u) => u.id === id));
    }, 500);
  });
}

async function postAdminUsers(data: IAdminUsers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("POST USER:", data);
      resolve({ status: true, data });
    }, 1000);
  });
}

async function updateAdminUsers(id: number, data: IAdminUsers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("UPDATE USER ID:", id, "DATA:", data);
      resolve({ status: true, data });
    }, 1000);
  });
}

const AddUpdateUserModal: React.FC<AddUpdateUserProps> = ({
  isOpen,
  onClose,
  role,
  fetchData,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userData, setUserData] = useState<IAdminUsers | undefined>(undefined);

  const [formData, setFormData] = useState({
    roles: "",
    email: "",
    name: "",
    password: "",
    phone: "",
  });

  // Ambil data user by ID kalau ada role.id (mode edit)
  const getDataUserById = async (id: number) => {
    try {
      const res = await getAdminUserByID(id);
      setUserData(res);
    } catch (error) {
      console.error(error);
    }
  };

  // Kalau modal dibuka buat edit
  useEffect(() => {
    if (role?.id) {
      getDataUserById(role.id);
    }
  }, [role?.id]);

  // Sync data user ke form
  useEffect(() => {
    if (role && userData) {
      setFormData({
        roles: userData.roles || "",
        email: userData.email || "",
        name: userData.name || "",
        password: "",
        phone: userData.phone || "",
      });
    } else {
      setFormData({
        roles: "",
        email: "",
        name: "",
        password: "",
        phone: "",
      });
    }
  }, [role, userData]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "userEmail") {
      setFormData((prevState) => ({ ...prevState, email: value }));
      return;
    }
    if (name === "userPassword") {
      setFormData((prevState) => ({ ...prevState, password: value }));
      return;
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = ToastLoading();
    try {
      const res = role
        ? await updateAdminUsers(role.id, formData as any)
        : await postAdminUsers(formData as any);

      ToastClose(toastId);

      if ((res as any).status) {
        ToastSuccess({
          title: `Berhasil submit data!`,
        });
        await fetchData();
        onClose();
      }
    } catch (error) {
      console.error("Error update role:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormModal isOpen={isOpen} onClose={onClose}>
      <div>
        <div className="p-5 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-600">
            {role ? "Edit User" : "Add User"}
          </h2>
        </div>
        <form onSubmit={handleFormSubmit} className="p-5">
          <div className="flex w-full space-x-4">
            <Select
              label="Role"
              name="roles"
              value={formData.roles}
              onChange={handleInputChange}
              required
              optionsName="Pilih Role.."
              options={dummyRoles.map((role) => ({
                value: role,
                label: role,
              }))}
            />
          </div>
          <FormInput
            label="Email"
            name="userEmail"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Ex: bilpay@gmail.com"
            required
            autoComplete="off"
          />
          <FormInput
            label="Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Masukkan Nama"
            required
            autoComplete="off"
          />
          <FormInput
            label="Phone"
            name="phone"
            type="text"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Masukkan No Phone"
            autoComplete="off"
          />
          <FormInput
            label={
              role
                ? "Masukkan password baru (Jika ingin mengubah Password)"
                : "Password"
            }
            name="userPassword"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Masukkan Password"
            required={!role}
            autoComplete="off"
            isInputPassword
          />
          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
              className="h-[32px] w-[100px] border border-primary text-primary bg-white text-xs font-bold"
            >
              Close
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="text-white h-[32px] w-[100px] text-xs font-bold"
            >
              {isSubmitting ? "Submitting..." : role ? "Update" : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </FormModal>
  );
};

export default AddUpdateUserModal;
