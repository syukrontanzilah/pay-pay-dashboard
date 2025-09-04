/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
// import FormInput from "@/components/input/FormInput";
// import FormModal from "@/components/modal/FormModal";
// import {
//   ToastClose,
//   ToastError,
//   ToastLoading,
//   ToastSuccess,
// } from "@/components/toast/Toast";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import FormModal from "@/components/Modal/FormModal";
import FormInput from "@/components/Input/FormInput";
import Select from "@/components/Select/Select";
import { ToastClose, ToastLoading, ToastSuccess } from "@/components/Toast/Toast";
// import Select from "@/components/select/Select";
// import { getRoles, RoleData } from "@/utils/roleUtils";
// import {
//   getAdminUserByID,
//   postAdminUsers,
//   updateAdminUsers,
// } from "@/utils/userUtils";

interface Roles {
  id: number;
  name: string;
  guard_name: string;
  created_at: string;
  updated_at: string;
}

interface UserData {
  id: number;
  name: string;
  phone: string;
  email: string;
  activated: number;
  google_id: string | null;
  roles: Roles;
  created_at: string;
  updated_at: string;
}

interface RoleData {
  id: number;
  name: string;
  guard_name: string;
  created_at: string;
  updated_at: string;
}

interface AddUpdateRoleProps {
  isOpen: boolean;
  onClose: () => void;
  role?: any;
  fetchData: () => Promise<void>;
}

const AddUpdateUserModal: React.FC<AddUpdateRoleProps> = ({
  isOpen,
  onClose,
  role,
  fetchData,
}) => {
  const [dataRole, setDataRole] = useState<RoleData[]>([]);
  const [dataFilterRole, setDataFilterRole] = useState<RoleData[]>([]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [userData, setUserData] = useState<UserData | undefined>(undefined);

  const getDataUserById = async (id: string) => {
    try {
    //   const res = await getAdminUserByID(id);
    //   console.log("response by id:", res.data);
    //   setUserData(res?.data);
    } catch (error) {}
  };

//   useEffect(() => {
//     getDataUserById(role?.id);
//   }, [role?.id]);

  const [formData, setFormData] = useState({
    roles: userData?.roles?.id || "",
    email: userData?.email || "",
    name: userData?.name || "",
    password: "",
    phone: userData?.phone || "",
  });

  useEffect(() => {
    if (role) {
      setFormData({
        roles: userData?.roles?.id || "",
        email: userData?.email || "",
        name: userData?.name || "",
        password: "",
        phone: userData?.phone || "",
      });
    }
  }, [
    role,
    userData?.id,
    userData?.email,
    userData?.name,
    userData?.phone,
    userData?.roles?.id,
  ]);

  async function fetchDataRole() {
    try {
    //   const res = await getRoles();
      // console.log("response role", res.data);
    //   setDataRole(res?.data);
    //   const filteredRoles = res?.data.filter(
    //     (role: RoleData) => role.name !== "Superadmin"
    //   );
    //   setDataFilterRole(filteredRoles);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    fetchDataRole();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // maybe this will fix, autocomplete
    if (name == "userEmail") {
      setFormData((prevState) => ({
        ...prevState,
        email: value,
      }));
    }
    if (name == "userPassword") {
      setFormData((prevState) => ({
        ...prevState,
        password: value,
      }));
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "roles" ? Number(value) : value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = ToastLoading();
    console.log("form data", formData);
    try {
    //   const res = role
    //     ? await updateAdminUsers(role.id, formData)
    //     : await postAdminUsers(formData);

      ToastClose(toastId);
    //   console.log("response submit-->", res);
    //   if (res.status) {
        ToastSuccess({
          title: `Berhasil submit data!`,
        });
    //     await fetchData();
    //     onClose();
    //   }
    //   if (res.error) {
    //     ToastError({
    //       title: `${res.stat_msg}`,
    //     });
    //   }
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
            {" "}
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
              options={dataRole?.map((role) => ({
                value: role.id.toString(),
                label: role.name,
              }))}
            />
          </div>
          <FormInput
            label="Email"
            name="userEmail"
            type="userEmail"
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
            // required
            autoComplete="off"
          />
          <FormInput
            label={`${
              role
                ? "Masukkan password baru (Jika ingin mengubah Password)"
                : "Password"
            }`}
            name="userPassword"
            type="userPassword"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Masukkan Password"
            required={role ? false : true}
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
