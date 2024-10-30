import { UserButton } from "@clerk/nextjs";
import SearchBar from "./headerComponents/searchBar";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Header = () => {
    return ( 
    <div className="w-screen h-[13vh] bg-gray-700 flex flex-row justify-start items-center">
        <Link href="/" className="text-white text-4xl w-[20%] h-full flex justify-center items-center ml-[3%] sm:ml-[5%] md:ml-[10%] lg:ml-[15%] "><span className="text-yellow-300">Turkey</span> Expert</Link>
        <SearchBar/>
        <div className="w-[40%] h-full flex justify-around items-center"> 
            <Link href="/favourites">
            <FontAwesomeIcon icon={faHeart} className="text-yellow-300 w-14"/>
            <FontAwesomeIcon icon={faCartShopping} className="text-yellow-300 w-14"/>
            </Link>
        </div>
        <UserButton/>
    </div>
     );
}
 
export default Header;