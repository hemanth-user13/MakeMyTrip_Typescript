
import Categories from '../../Home/Categories';
import NavBar from '../../Header/Navbar';
import Box from '../../Helpers/MainBox';

function HotelsLayout() {
    return (
        <div>
            <NavBar/>
            <div className='relative -top-96' style={{"position":"relative","top":"-670px","right":"120px"}}>
            <Categories/>
            </div>
            <div style={{"position":"relative","top":"-670px"}}>
            <Box name='welcome to Hotel Page'/>
            </div>
        </div>
    )
}

export default HotelsLayout
