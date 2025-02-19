import banner_mens from '../assets/products/banner_mens.png'
import banner_kids from '../assets/products/banner_kids.png'
import { useSelector } from 'react-redux'


const Landing = ()=>{

    const val = useSelector(state=>state.cart.filter)


    return <div className="landing-wrap">
        {
            val=='all' || val=='men'?<img src={banner_mens} alt='Banner image' />:
            <img src={banner_kids} alt='Banner image' />
        }
    </div>
}

export default Landing;