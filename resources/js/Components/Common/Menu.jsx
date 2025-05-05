import React, { useState, useEffect, useRef } from "react";
import { router } from "@inertiajs/react";
import { IoMdArrowDropright } from "react-icons/io";

const Menu = ({ menuData }) => {
    const [openMenus, setOpenMenus] = useState([]);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpenMenus([]);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleMenu = (path) => {
        setOpenMenus((prev) => {
            const newPath = prev.join("-") === path ? [] : path.split("-");
            return newPath;
        });
    };

    const handleItemClick = (item, currentPath, e) => {
        e.stopPropagation();

        if (!item.products?.length && item.id) {
            router.visit(`/product/${item.id}`);
        }
        else if (item.products?.length) {
            toggleMenu(currentPath);
        }
    };

    const renderMenu = (items, level = 0, parentPath = "") => {
        return items?.map((item, index) => {
            const currentPath = parentPath
                ? `${parentPath}-${index}`
                : `${index}`;
            const isOpen = openMenus[level] === String(index);

            return (
                <li
                    key={currentPath}
                    className="relative group"
                    onClick={(e) => handleItemClick(item, currentPath, e)}
                >
                    <div
                        className={`py-2 flex justify-between items-center transition-opacity duration-300 ease-in-out ${
                            !item.products?.length && item.id
                                ? "text-blue-600 hover:text-blue-800 cursor-pointer"
                                : ""
                        } ${
                            item.products?.length
                                ? "cursor-pointer"
                                : "cursor-default"
                        }`}
                    >
                        <span>{item.name}</span>
                        {item.products?.length > 0 && (
                            <IoMdArrowDropright className="text-xl" />
                        )}
                    </div>

                    {item.products?.length > 0 && isOpen && (
                        <ul className="absolute left-[105%] top-0 ml-1 w-56 px-4 bg-white border border-gray-200 rounded-lg z-10">
                            {renderMenu(item.products, level + 1, currentPath)}
                        </ul>
                    )}
                </li>
            );
        });
    };

    return (
        <div className="relative" ref={menuRef}>
            <ul className="w-40 mt-2 text-sm font-medium">{renderMenu(menuData)}</ul>
        </div>
    );
};

export default Menu;
