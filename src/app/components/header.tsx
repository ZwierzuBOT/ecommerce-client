import { UserButton } from "@clerk/nextjs";
import SearchBar from "./headerComponents/searchBar";

const Header = () => {
    return ( 
    <div className="w-screen h-[13vh] bg-gray-100">
        <h1 className="text-black"><span className="text-yellow-400">Turkey </span>Expert</h1>
        <SearchBar/>
        <UserButton/>
        
    </div>
     );
}
 
export default Header;