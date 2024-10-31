'use client';

import { UserButton, useUser } from "@clerk/nextjs";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Header = () => {
    const { user } = useUser();

    return ( 
        <div className="w-screen h-[13vh] bg-gray-950 flex flex-row justify-start items-center sm:h-[10vh] md:h-[11vh] lg:h-[12vh] xl:h-[13vh]">
            <Link href="/" className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold w-[20%] h-full flex justify-center items-center ml-[3%] sm:ml-[5%] md:ml-[10%] lg:ml-[15%]">
                <span className="text-yellow-300">Turkey</span> <span>Expert</span>
            </Link>

            <div className="w-[40%] h-full flex justify-center items-center sm:w-[45%] md:w-[40%] lg:w-[35%] xl:w-[30%]">
                <input 
                    type="text" 
                    className="w-[80%] min-h-14 h-14 rounded-l-xl p-4 placeholder:text-black text-black text-base sm:text-sm md:text-base lg:text-lg xl:text-xl focus:outline-none"
                    placeholder="Search..."
                />
                <button className="bg-yellow-300 w-[10%] min-h-14 h-14 rounded-r-xl flex items-center justify-center sm:w-[15%] md:w-[12%] lg:w-[10%] xl:w-[8%]">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-800 w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"/>
                </button>
            </div>

            <div className="w-[10%] h-full flex justify-evenly items-center sm:w-[12%] md:w-[10%] lg:w-[8%] xl:w-[6%]">
                <Link href="/favourites">
                    <FontAwesomeIcon icon={faHeart} className="text-yellow-300 w-8 h-8 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-7 lg:h-7 xl:w-8 xl:h-8"/>
                </Link>
                <Link href="/checkout">
                    <FontAwesomeIcon icon={faCartShopping} className="text-yellow-300 w-8 h-8 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-7 lg:h-7 xl:w-8 xl:h-8"/>
                </Link>
            </div>

            <div className="h-8 border-l border-gray-400 mx-4 sm:h-6 md:h-7 lg:h-8 xl:h-10"></div>

            <div className="w-[30%] h-full justify-start items-center flex pr-[5%] sm:w-[25%] md:w-[20%] lg:w-[18%] xl:w-[15%]">
                <button className="flex items-center space-x-2 w-[70%] sm:w-[60%] md:w-[70%] lg:w-[80%] xl:w-[70%]">
                    <div>
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
                            <Link href="/sign-in" className="text-yellow-300 hover:underline text-base sm:text-sm md:text-base lg:text-lg xl:text-xl">
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
