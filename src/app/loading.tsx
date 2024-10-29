
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading = () => {
    return ( 
        <div className="h-screen bg-[#efefef] w-screen absolute top-0 left-0" >
             <div className="w-screen h-[13vh] bg-gray-700"></div>
            <div className=" md:w-10 lg:w-14 absolute right-[1%] bottom-[1%] rotating">
                <FontAwesomeIcon icon={faRotateRight} className="text-black"/>
            </div>
        </div>
     );
}
 
export default Loading;