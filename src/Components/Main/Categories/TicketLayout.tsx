import { FaArrowRight } from 'react-icons/fa';

const FlightBookingForm = () => {
  return (
    <div className="container mx-auto mt-10 pt-28">
      <div className="bg-white shadow-md rounded-lg p-8 border-2 border-gray-200">
      <div className="flex flex-col items-start  py-14">
           
            <div className="flex flex-wrap justify-center gap-2">
              <label className="flex items-center">
                <input 
                  type="radio" 
                  id="regular" 
                  name="specialFare" 
                  value="regular" 
                  className="mr-2" 
                  defaultChecked 
                />
                One Way
              </label>
              <label className="flex items-center">
                <input 
                  type="radio" 
                  id="student" 
                  name="specialFare" 
                  value="student" 
                  className="mr-2" 
                />
                Round Trip
              </label>
              <label className="flex items-center">
                <input 
                  type="radio" 
                  id="seniorCitizen" 
                  name="specialFare" 
                  value="seniorCitizen" 
                  className="mr-2" 
                />
                Multi City
              </label>
              <label className='flex ml-96' style={{"marginLeft":"600px"}}>Book International and Domestic FLights</label>
            </div>
          </div>
        <div className="flex justify-between items-center mb-6">
        
          <div className="flex flex-col items-center">
            <label htmlFor="from" className="text-gray-700 font-bold mb-2">From:</label>
            <input 
              type="text" 
              id="from" 
              value="Delhi" 
              disabled 
              className="border-none font-semibold text-lg text-center"
            />
            <span>DEL,Delhi Airport India</span>
          </div>
          <FaArrowRight className="text-blue-500 text-3xl" />
          <div className="flex flex-col items-center mr-96" style={{"marginRight":"700px"}}>
            <label htmlFor="to" className="text-gray-700 font-bold mb-2">To:</label>
            <input 
              type="text" 
              id="to" 
              value="Bengaluru" 
              disabled 
              className="border-none font-semibold text-lg text-center"
            />
            <span>BLR, Bengaluru Airport India</span>
          </div>
          <div className="mr-96" style={{"position":"absolute","left":"600px"}}>
            <label htmlFor="departure" className="block text-gray-700 font-bold mb-2">Departure:</label>
            <input 
              type="date" 
              id="departure" 
              value="2024-08-30" 
              className="border border-gray-300 rounded-md px-4 py-2 w-full" 
            />
          </div>
          <div style={{"position":"absolute","left":"800px"}}>
            <label htmlFor="return" className="block text-gray-700 font-bold mb-2">Return:</label>
            <input 
              type="date" 
              id="return" 
              className="border border-gray-300 rounded-md px-4 py-2 w-full" 
            />
          </div>
          <div  style={{"position":"absolute","left":"1000px"}}>
            <label htmlFor="travellers" className="block text-gray-700 font-bold mb-2">Travellers & Class:</label>
            <select 
              id="travellers" 
              className="border border-gray-300 rounded-md px-4 py-2 w-56 mb-2"
            >
              <option value="1">1 Traveller</option>
            </select>
            <select 
              id="class" 
              className="border border-gray-300 rounded-md px-4 py-2 w-56"
            >
              <option value="economy">Economy</option>
              <option value="premiumEconomy">Premium Economy</option>
            </select>
          </div>
        </div>
       {/* <div>
       <div>Select a special fare</div>
        <div className="titleTag " style="background-image: linear-gradient(to right, rgb(67, 225, 168), rgb(33, 147, 147));"><span>EXTRA SAVINGS</span></div>
        <span className="">EXTRA SAVINGS</span>
       </div> */}
        <div className="grid grid-cols-subgrid gap-4 ">
         
          <div className="flex flex-col ">
            <label htmlFor="specialFare" className="block text-gray-700 font-bold mb-2">Special Fare:</label>
            <div className="flex flex-wrap justify-center gap-2">
              <label className="flex items-center">
                <input 
                  type="radio" 
                  id="regular" 
                  name="specialFare" 
                  value="regular" 
                  className="mr-2" 
                  defaultChecked 
                />
                Regular
              </label>
              <label className="flex items-center">
                <input 
                  type="radio" 
                  id="student" 
                  name="specialFare" 
                  value="student" 
                  className="mr-2" 
                />
                Student
                
              </label>
              <label className="flex items-center">
                <input 
                  type="radio" 
                  id="seniorCitizen" 
                  name="specialFare" 
                  value="seniorCitizen" 
                  className="mr-2" 
                />
                Senior Citizen
              </label>
              <label className="flex items-center">
                <input
                  type="radio" 
                  id="armedForces" 
                  name="specialFare" 
                  value="armedForces" 
                  className="mr-2" 
                />
                Armed Forces
              </label>
              <label className="flex items-center">
                <input 
                  type="radio" 
                  id="doctorAndNurses" 
                  name="specialFare" 
                  value="doctorAndNurses" 
                  className="mr-2" 
                />
                Doctor and Nurses
              </label>
            </div>
          </div>
         
        </div>

        <div className="text-center mt-8" style={{"position":"absolute","left":"500px","top":"470px"}}>
          <button 
            type="submit" 
            className="bg-blue-500 text-white font-serif py-2 px-4 rounded-full w-44 text-2xl "
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightBookingForm;
