import Categories from '../../Home/Categories';
import NavBar from '../../Header/Navbar';
import Box from '../../Helpers/MainBox';


function CabsLayout() {
  return (
    <div>
    <NavBar />
    <div
        className="relative -top-96"
        style={{ position: 'relative', top: '-670px', right: '120px' }}
    >
        <Categories />
    </div>
    <div style={{ position: 'relative', top: '-670px' }}>
        <Box name="Welcome to Cads Page" />
    </div>
   
</div>
  )
}

export default CabsLayout