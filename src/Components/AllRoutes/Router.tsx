import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NavBar from '../Header/Navbar';
import MainPage from '../Home/mainPage'
import Hotels from '../Pages/Hotels/HotelsLayout';
import HomeStays from '../Pages/HomeStays/HomeStay'
import HolidayPackage from '../Pages/HolidayPackages/HalidayPackage';
import Trains from '../Pages/Trains/Trains';
import Buses from '../Pages/Buses/BusesLayout';
import Cabs from '../Pages/Cabs/CabsLayout';
import Insurance from '../Pages/TravelInsurance/Insurance';

function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/hotels" element={<Hotels/>}/>
        <Route path="/Holidaypackage" element={<HolidayPackage/>}/>
        <Route path="/homestays" element={<HomeStays/>}/>
        <Route path="/trains" element={<Trains/>}/>
        <Route path="/buses" element={<Buses/>}/>
        <Route path="/cabs" element={<Cabs/>}/>
        <Route path="/insurance" element={<Insurance/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
