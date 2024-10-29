import { UserButton } from "@clerk/nextjs";
import SearchBar from "./headerComponents/searchBar";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Header = () => {
    return ( 
    <div className="w-screen h-[13vh] bg-gray-700 flex flex-row justify-start items-center">
        <Link href="/" className="text-white text-4xl w-[20%] ml-[3%] sm:ml-[5%] md:ml-[10%] lg:ml-[15%] "><span className="text-yellow-300">Turkey</span> Expert</Link>
        <SearchBar/>
        <UserButton/>
        <div className="w-10 h-10">
            <Link href="/favourites">
            <FontAwesomeIcon icon={faHeart} className="text-yellow-300"/>
            </Link>
        </div>
    </div>
     );
}
 
export default Header;