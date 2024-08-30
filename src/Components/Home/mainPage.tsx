import Categories from "./Categories"
import FlightBookingForm from "../Pages/Flights/TicketLayout";
import NavBar from '../Header/Navbar'

function MainPage() {
    return (
        <div>
            <NavBar />
            <div className="absolute top-32 left-32">
            <Categories/>
            <FlightBookingForm />
            </div>
        </div>
    )
}

export default MainPage
