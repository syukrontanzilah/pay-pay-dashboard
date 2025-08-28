/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { MenuAdmin } from "./MenuAdmin";
import Link from "next/link";
import { ChevronDown, Dot } from "lucide-react";

export const role = "admin";

const SidebarMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const handleDropdownToggle = (label: string) => {
    setDropdownOpen((prev) => (prev === label ? null : label));
  };

  return (
    <div className="">
      {MenuAdmin.map((item, index) => (
        <div key={index} className="flex flex-col gap-1 md:p-4">
          <span className="hidden lg:block text-gray-400 font-light my-3">
            {item.title}
          </span>
          {item.items.map((menu, i) => {
            if (menu.visible.includes(role)) {
              const isActive = pathname.startsWith(menu.href);
              return (
                <div key={i}>
                  {/* menu utama */}
                  <Link href={menu.href} passHref>
                    <div
                      onClick={() => handleDropdownToggle(menu.label)}
                      className={`flex items-center justify-center lg:justify-start gap-2 py-2 md:px-2 rounded-md transition-all durat300 cursor-pointer 
                ${
                  isActive
                    ? "bg-red-100 text-primary"
                    : "text-gray-500 hover:bg-red-100 hover:text-gray-500"
                }`}
                      style={{ transition: "all 0.3s ease-in-out" }}
                    >
                      {menu.icon}
                      <span>{menu.label}</span>
                      {menu.submenu && (
                        <ChevronDown
                          size={16}
                          className={`ml-auto transition-transform duration-300 ${
                            dropdownOpen === menu.label ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </div>
                  </Link>
                  {/* submenu */}
                  {menu.submenu && (
                    <div
                      className={`ml-8 mt-0 transition-all duration-500 ease-in-out overflow-hidden ${
                        dropdownOpen === menu.label
                          ? "max-h-screen opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                      style={{
                        transition: "ease-in-out 0.3s",
                      }}
                    >
                      {menu.submenu.map((subitem, subIndex) => {
                        const isSubItemActive = pathname.startsWith(
                          subitem.href
                        );
                        return (
                          <Link key={subIndex} passHref href={subitem.href}>
                            <div
                              className={`flex items-center py-2 px-2 mt-1 text-gray-500 hover:bg-red-100 rounded-md transition-all duration-300 ${
                                isSubItemActive ? "bg-red-100 text-primary" : ""
                              }`}
                            >
                              <Dot size={20} />
                              <span className="ml-2 text-sm">
                                {subitem.title}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
};

export default SidebarMenu;
