'use client';

import { UserButton, useUser } from "@clerk/nextjs";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SearchBar from "./headerComponents/searchBar";
import Link from "next/link";

const Header = () => {
    const { user } = useUser();

    return ( 
        <div className="w-screen h-[13vh] bg-gray-700 flex flex-row justify-start items-center">
            <Link href="/" className="text-white text-4xl w-[20%] h-full flex justify-center items-center ml-[3%] sm:ml-[5%] md:ml-[10%] lg:ml-[15%] ">
                <span className="text-yellow-300">Turkey</span> Expert
            </Link>
            <SearchBar/>
            <div className="w-[10%] h-full flex justify-evenly items-center"> 
                <Link href="/favourites">
                    <FontAwesomeIcon icon={faHeart} className="text-yellow-300 w-8 h-8"/>
                </Link>
                <Link href="/checkout">
                    <FontAwesomeIcon icon={faCartShopping} className="text-yellow-300 w-8 h-8"/>
                </Link>
            </div>
            <div className="h-8 border-l border-gray-400 mx-4"></div>
            <div className="w-[30%] h-full justify-start items-center flex pr-[5%]">
                <button className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faUser} className="w-10 text-yellow-300"/>
                    <div>
                        {user ? (
                            <>
                                <h1>My account</h1>
                                <h1>{user.fullName}</h1>
                                <UserButton/>
                            </>
                        ) : (
                            <Link href="/sign-in" className="text-yellow-300 hover:underline">
                                Sign In
                            </Link>
                        )}
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Header;
