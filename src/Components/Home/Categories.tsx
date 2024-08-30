import { FaPlane, FaHotel, FaHome, FaUmbrellaBeach, FaTrain, FaBus, FaTaxi, FaShieldAlt } from 'react-icons/fa';
// import Flight from "../Pages/Flights/TicketLayout";
import {Link} from 'react-router-dom';
import React from "react"
 
interface CategoriesProps{
  styles?:string
}
  

const Categories:React.FC<CategoriesProps>=({styles})=>{
  return (
    <div className={`${styles}`}>
      <div className="relative -right-40">
    <div className="absolute inset-x-0 top-16 mx-auto max-w-4xl z-10 ">
      <div className="bg-white py-6 px-8 flex justify-between items-center gap-8 shadow-md rounded-3xl">
        <div className="flex flex-col items-center space-y-2">
          <Link to="/">
          <FaPlane className="text-blue-500 text-4xl" />
          <span className="text-sm font-medium">Flights</span>
          </Link>
        </div>

        <div className="flex flex-col items-center space-y-2">
         <Link to="/hotels" >
         <FaHotel className="text-blue-500 text-4xl" />
         <span className="text-sm font-medium">Hotels</span>
         </Link>
        </div>

        <div className="flex flex-col items-center space-y-2">
         <Link to="/homestays">
         <FaHome className="text-blue-500 text-4xl" />
         <span className="text-sm font-medium">Homestays</span>
         </Link>
        </div>

        <div className="flex flex-col items-center space-y-2">
         <Link to="/Holidaypackage">
         <FaUmbrellaBeach className="text-blue-500 text-4xl" />
         <span className="text-sm font-medium">Holidays</span>
         </Link>
        </div>

        <div className="flex flex-col items-center space-y-2">
         <Link to="/trains">
         <FaTrain className="text-blue-500 text-4xl" />
         <span className="text-sm font-medium">Trains</span>
         </Link>
        </div>

        <div className="flex flex-col items-center space-y-2">
        <Link to="/buses">
        <FaBus className="text-blue-500 text-4xl" />
        <span className="text-sm font-medium">Buses</span>
        </Link>
        </div>

        <div className="flex flex-col items-center space-y-2">
        <Link to="/cabs">
        <FaTaxi className="text-blue-500 text-4xl" />
        <span className="text-sm font-medium">Cabs</span>
        </Link>
        </div>

        <div className="flex flex-col items-center space-y-2">
        <Link to="/insurance">
        <FaShieldAlt className="text-blue-500 text-4xl" />
        <span className="text-sm font-medium">Travel Insurance</span>
        </Link>
        </div>
      </div>
    </div>
    {/* <Flight /> */}
  </div>
    </div>
);
}


export default Categories;
