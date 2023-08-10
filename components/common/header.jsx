import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const [active, setActive] = useState("Home");
    const [stickyClass, setStickyClass] = useState("relative");
    const [showNav, setShowNav] = useState("hidden");

    const handleActive = (name) => {
        setActive(name);
    };

    const handleShowNav = () => {
        setShowNav((prevState) => {
            if (prevState === "hidden") {
                return "";
            } else {
                return "hidden";
            }
        });
    };

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 50
                ? setStickyClass("sticky top-0 py-5 z-10")
                : setStickyClass("");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", stickNavbar);

        return () => {
            window.removeEventListener("scroll", stickNavbar);
        };
    }, []);

    return (
        <nav
            className={`${stickyClass} bg-white border-gray-200 pb-5 transition-all duration-200`}
        >
            <div className="flex flex-wrap items-center justify-between mx-auto">
                <Link href="/" className="flex items-center">
                    <Image
                        className="mr-1"
                        src="/images/logo.png"
                        alt="Logo"
                        width={50}
                        height={50}
                        layout="fixed"
                    />

                    <h2 className="uppercase text-xl">Holmes Lab</h2>
                </Link>

                <button
                    onClick={handleShowNav}
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>

                <div className={`${showNav} w-full md:block md:w-auto text-sm`}>
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-3 md:mt-0 md:border-0 md:bg-white">
                        <li onClick={() => handleActive("Home")}>
                            <Link
                                href="/"
                                className={`${
                                    active === "Home"
                                        ? "bg-primary-700 text-white"
                                        : "bg-transparent text-gray-900"
                                } block py-2 pl-3 pr-4 rounded md:px-5 md:py-2`}
                            >
                                Home
                            </Link>
                        </li>

                        <li onClick={() => handleActive("About")}>
                            <Link
                                href="/#about"
                                className={`${
                                    active === "About"
                                        ? "bg-primary-700 text-white"
                                        : "bg-transparent text-gray-900"
                                } block py-2 pl-3 pr-4 rounded md:px-5 md:py-2`}
                            >
                                About
                            </Link>
                        </li>

                        <li onClick={() => handleActive("Service")}>
                            <Link
                                href="/#service"
                                className={`${
                                    active === "Service"
                                        ? "bg-primary-700 text-white"
                                        : "bg-transparent text-gray-900"
                                } block py-2 pl-3 pr-4 rounded md:px-5 md:py-2`}
                            >
                                Service
                            </Link>
                        </li>

                        <li onClick={() => handleActive("Contact")}>
                            <Link
                                href="/#contact"
                                className={`${
                                    active === "Contact"
                                        ? "bg-primary-700 text-white"
                                        : "bg-transparent text-gray-900"
                                } block py-2 pl-3 pr-4 rounded md:px-5 md:py-2`}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
