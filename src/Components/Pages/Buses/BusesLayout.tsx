
import Categories from '../../Home/Categories';
import NavBar from '../../Header/Navbar';
import Box from '../../Helpers/MainBox';

function BusesLayout() {
  return (
    <div>
     <div>
            <NavBar />
            <div
                className="relative -top-96"
                style={{ position: 'relative', top: '-670px', right: '120px' }}
            >
                <Categories />
            </div>
            <div style={{ position: 'relative', top: '-670px' }}>
                <Box name="Welcome to Buses page" />
            </div>
           
        </div>
    </div>
  )
}

export default BusesLayout
