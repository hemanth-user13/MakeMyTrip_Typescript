import { FaPlane, FaHotel, FaHome, FaUmbrellaBeach, FaTrain, FaBus, FaTaxi, FaShieldAlt } from 'react-icons/fa';
import Flight from "./TicketLayout";

function Categories() {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-16 mx-auto max-w-4xl z-10">
        <div className="bg-white py-6 px-8 flex justify-between items-center gap-8 shadow-md rounded-3xl">
          <div className="flex flex-col items-center space-y-2">
            <FaPlane className="text-blue-500 text-4xl" />
            <span className="text-sm font-medium">Flights</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <FaHotel className="text-blue-500 text-4xl" />
            <span className="text-sm font-medium">Hotels</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <FaHome className="text-blue-500 text-4xl" />
            <span className="text-sm font-medium">Homestays</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <FaUmbrellaBeach className="text-blue-500 text-4xl" />
            <span className="text-sm font-medium">Holidays</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <FaTrain className="text-blue-500 text-4xl" />
            <span className="text-sm font-medium">Trains</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <FaBus className="text-blue-500 text-4xl" />
            <span className="text-sm font-medium">Buses</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <FaTaxi className="text-blue-500 text-4xl" />
            <span className="text-sm font-medium">Cabs</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <FaShieldAlt className="text-blue-500 text-4xl" />
            <span className="text-sm font-medium">Travel Insurance</span>
          </div>
        </div>
      </div>
      <Flight />
    </div>
  );
}

export default Categories;
