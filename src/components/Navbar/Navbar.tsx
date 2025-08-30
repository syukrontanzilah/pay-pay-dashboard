"use client";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import { Bell, BellRing, CircleUserRound, LogOut, LogOutIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Fragment, useEffect } from "react";

const Navbar = () => {
    const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add(
            "bg-white",
            "bg-opacity-100",
            "backdrop-blur-lg",
            "shadow-md"
          );
        } else {
          navbar.classList.remove(
            "bg-white",
            "bg-opacity-100",
            "backdrop-blur-lg",
            "shadow-md"
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="navbar"
      className="flex items-center justify-between p-4 backdrop-blur-lg fixed top-0 right-0 w-[80%] md:w-[92%] lg:w-[81%] z-10 "
    >
      {/* icon dan user navbar */}
      <div className="flex items-center gap-6 justify-end w-full">
        {/* notification */}
        <div className="bg-white rounded-full w-[32px] h-[32px] flex items-center justify-center">
          <Bell color="#526484"/>
        </div>

        {/* dropdown user and menu navbar */}
        <div className="mr-5">
          <Menu as="div" className="relative">
            <div>
              <MenuButton>
                {/* dropdown trigger button */}
                <div className="flex gap-2 items-center">
                  <div className="flex flex-col">
                    <span className="text-sm leading-3 font-medium text-gray-700">
                      Ahmad Seggaff
                    </span>
                    <span className="text-[10px] text-gray-500 text-right">
                      Admin
                    </span>
                  </div>
                  <div className="bg-white rounded-full w-[32px] h-[32px] flex items-center justify-center">
                    <CircleUserRound className="" color="#526484"/>
                    {/* <Image
                    src='/logo.png'
                    alt="user"
                    width={32}
                    height={32}
                    className="rounded-full cursor-pointer"
                    /> */}
                  </div>
                </div>
              </MenuButton>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <MenuItem>
                    <button
                      onClick={() => router.push("/profile")}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-primary transition-all duration-500 flex gap-2 items-center"
                    >
                      <CircleUserRound size={16}  />
                      Profile
                    </button>
                    {/* <div className="text-xs text-gray-700 px-4">Role: Superadmin</div> */}
                  </MenuItem>
                  <MenuItem>
                    <button
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-primaryLight transition-all duration-500 flex gap-2 items-center rounded-md"
                      onClick={() => {
                        // logout();
                        router.replace("/login");
                      }}
                    >
                      <LogOutIcon size={16} />
                      <span>Logout</span>
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
