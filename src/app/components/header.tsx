'use client';

import { UserButton, useUser } from "@clerk/nextjs";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faBurger, faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Header = () => {
    const { user } = useUser();

    return ( 
        <div className="w-screen h-[13vh] bg-gray-950 flex flex-row justify-start items-center ">
            <Link href="/" className="text-white text-xl sm:text-[1.4rem] md:text-[1.6rem] lg:text-4xl font-semibold w-[20%] h-full flex justify-start items-center ml-[3%] sm:ml-[5%] md:ml-[10%] lg:ml-[15%]">
                <h1 className="text-wrap sm:text-wrap md:text-wrap lg:text-nowrap xl:text-nowrap whitespace-normal ">
                    <span className="text-yellow-300">Turkey</span>Expert
                </h1>
            </Link>
            
            <div className="w-[40%] h-full justify-center items-center sm:w-[45%] md:w-[40%] lg:w-[35%] xl:w-[30%] sm:hidden md:flex lg:flex xl:flex 2xl:flex hidden">
                <input 
                    type="text" 
                    className="w-[80%] min-h-14 h-14 rounded-l-xl p-4 placeholder:text-black text-black text-base sm:text-sm md:text-base lg:text-lg xl:text-xl focus:outline-none"
                    placeholder="Search..."
                />
                <button className="bg-yellow-300 w-[10%] min-h-14 h-14 rounded-r-xl flex items-center justify-center sm:w-[15%] md:w-[12%] lg:w-[10%] xl:w-[8%]">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-800 w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"/>
                </button>
            </div>

            <div className="w-[40%] h-full sm:w-[20%]  sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden flex"></div>


            <div className="w-[20%] h-full flex justify-evenly items-center lg:w-[15%]">
                    <Link href="/favourites">
                        <FontAwesomeIcon icon={faHeart} className="text-yellow-300 w-8 h-8 "/>
                    </Link>
                    <Link href="/checkout">
                        <FontAwesomeIcon icon={faCartShopping} className="text-yellow-300 w-8 h-8 "/>
                    </Link>
                <div className=" border-l border-gray-400  mx-2 h-0 hidden sm:flex md:flex lg:flex 2xl:flex sm:h-6 md:h-7 lg:h-8 xl:h-10"></div>

                {user ? (
                            <UserButton
                                appearance={{
                                    elements: {
                                        userButtonAvatarBox: {
                                            width: '50px', 
                                            height: '50px',
                                            sm: { width: '40px', height: '40px' },
                                            md: { width: '45px', height: '45px' },
                                            lg: { width: '50px', height: '50px' },
                                            xl: { width: '55px', height: '55px' }
                                        },
                                    },
                                }}
                            />           
                        ) : (
                            <Link href="/sign-in">
                                <FontAwesomeIcon icon={faUser} className="text-yellow-300 w-8 h-8 "/>
                            </Link>
                        )}
            </div>
            <div className="w-[20%] flex justify-end items-center sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden">
                <FontAwesomeIcon icon={faBars} className="text-yellow-300 w-10 h-10 cursor-pointer mr-[5%]"/>
            </div>
            
        </div>
    );
}

export default Header;
