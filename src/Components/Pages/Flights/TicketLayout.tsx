  import { FaArrowRight } from 'react-icons/fa';
  import Box from '../../Helpers/MainBox';
  import RadioButtons from '../../Helpers/radiobuttons';
  import DatePicker from '../../Helpers/DatePicker';
  import TravelDropDown from '../../Helpers/DropDown';
  import SearchButton from '../../Helpers/Searchbutton';
  import DestinationModule from '../../Helpers/Destination';
  import { useState } from 'react';

  const FlightBookingForm = () => {
    const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    const [endDate, setEndDate] = useState<Date | undefined>(undefined);
    const travellersOptions = [
      { value: '1', label: '1 Traveller' },
      { value: '2', label: '2 Travellers' },
      { value: '3', label: '3 Travellers' },
    ];

    const classOptions = [
      { value: 'economy', label: 'Economy' },
      { value: 'premiumEconomy', label: 'Premium Economy' },
      { value: 'business', label: 'Business' },
    ];
    const handleTravellersChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      console.log('Selected Travellers:', event.target.value);
  };

  const handleClassChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      console.log('Selected Class:', event.target.value);
  };
    return (
      <div className=" container mx-auto mt-10 pt-28 ml-36">
        <div className="bg-white shadow-md rounded-lg p-8 border-2 border-gray-200">
          <div className="flex flex-col items-start  py-14">

            <div className="flex flex-wrap justify-center gap-2">
              <RadioButtons
                id="student"
                name="specialFare"
                value="student"
                label="Student Fare"
              // styles="text-blue-500"
              />
              <RadioButtons
                id="student"
                name="specialFare"
                value="student"
                label='Round Trip'
              />
              <RadioButtons
                id="seniorCitizen"
                name="specialFare"
                value="seniorCitizen"
                label='Multi City'
              />

              <label className='flex ml-96' style={{ "marginLeft": "600px" }}>Book International and Domestic FLights</label>
            </div>
          </div>
          <div className="flex justify-between items-center mb-6">

            <div className="flex items-center">
              <DestinationModule
              label='From:'
              id='from'
              value='Delhi'
              description='DEL, Delhi Airport India'
              />
              <FaArrowRight className="text-blue-500 text-3xl" />
              {/* <FaArrowLeft className='text-blue-500 text-3xl'/> */}
              <DestinationModule
              label='To:'
              id='to'
              value='Bengaluru'
              description='BLR, Bengaluru Airport India'
              />
            </div>

            <div className='absolute left-80 top-72 ml-96 mt-3' style={{"marginLeft":"300px"}}>
              <DatePicker
                  id="datepicker-range-start"
                  name="start"
                  selectedDate={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="Select date start"
              />
              <span className="mx-4 text-gray-500">to</span>
              <DatePicker
                  id="datepicker-range-end"
                  name="end"
                  selectedDate={endDate}
                  onChange={(date)=>setEndDate(date)}
                  placeholderText="Select date end"
              />
          </div>
            <div className='absolute left-96 ml-96' style={{"marginLeft":"500px","marginBottom":"45px"}}>
            <form className='flex flex-col '>
              <TravelDropDown
                  travellersOptions={travellersOptions}
                  classOptions={classOptions}
                  onTravellersChange={handleTravellersChange}
                  onClassChange={handleClassChange}
              />
          </form>
            </div>
          </div>
          
          <div className="grid grid-cols-subgrid gap-4 ">

            <div className="flex flex-col ">
              <label htmlFor="specialFare" className="block text-gray-700 font-bold mb-2">Special Fare:</label>
              <div className="flex flex-wrap justify-center gap-2">

                <RadioButtons
                  id="regular"
                  name="specialFare"
                  value="regular"
                  label='Regular'
                />
                <RadioButtons
                  id="student"
                  name="specialFare"
                  value="student"
                  label='Student'
                />
                <RadioButtons
                  id="seniorCitizen"
                  name="specialFare"
                  value="seniorCitizen"
                  label='Senior Citizen'
                />
                <RadioButtons
                  id="armedForces"
                  name="specialFare"
                  value="armedForces"
                  label='Armed Forces'
                />
                <RadioButtons
                  id="doctorAndNurses"
                  name="specialFare"
                  value="doctorAndNurses"
                  label='Doctor and Nurses'
                />
              </div>
            </div>

          </div>

          <div className="text-center mt-8" style={{ "position": "absolute", "left": "700px", "top": "470px" }}>
          <SearchButton
          buttonname='Search'
          />
          </div>
        </div>
      </div>
    );
  };

  export default FlightBookingForm;
