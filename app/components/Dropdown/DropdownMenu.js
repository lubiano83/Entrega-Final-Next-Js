"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDarkMode } from '@/app/hooks/useDarkMode';

const DropdownMenu = ({ users }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const router = useRouter();
    const { isDarkMode } = useDarkMode();

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleUserSelect = (user) => {
        setSelectedUser(user);
        router.push(`/pages/admin/carts/${user.id}`);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    id="dropdownHoverButton"
                    onClick={toggleDropdown}
                    className={`text-white ${isDarkMode ? "bg-orange-600" : "bg-blue-600" } border-2 border-white shadow-md shadow-gray-700 bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center`}
                    type="button"
                >
                    Usuarios Registrados
                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                    <ul className="py-2 text-sm text-gray-700">
                        {users.map((user) => (
                            <li key={user.id}>
                                <a 
                                    href="" 
                                    className="block px-4 py-2 hover:bg-gray-100" 
                                    onClick={() => handleUserSelect(user)}
                                >
                                    {user.id}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;