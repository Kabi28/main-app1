import '../css/Navbar.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { filerproduct } from '../redux/slicer';


const Navbar = ()=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {cartVal} = useSelector(state=>state.cart)
    const [selectedValue,setSelectedValue] = useState('all')

    
    useEffect(()=>{
        dispatch(filerproduct(selectedValue))
    },[selectedValue]);
    
    
    return (
        <>
        <nav>
            <div className="logo">
                <img onClick={()=>navigate('/')} src="./src/assets/react.svg" alt="Logo" />
            </div>
            <div className="search">
                <input type="text" placeholder='Search Products' />
                <img src="./src/assets/search.svg" alt="Search" />
            </div>
            <div className="category" style={{color:'white',padding:'2px'}}>
                <label>Category</label>
                <select value={selectedValue} onChange={(e)=>setSelectedValue(e.target.value)}>
                    <option value="all" >All</option>
                    <option value="men">Men</option>
                    <option value="children">Children</option>
                </select>
            </div>
            <div className="cartlogo">
                <img onClick={()=>navigate('/cart')} src="./src/assets/products/cart_icon.png" alt="cart" /><span>{cartVal.length}</span>
            </div>
            <div className="actions">
                <img className='user' src="./src/assets/user.svg" alt="" onClick={()=>navigate('/signup')} />
                <a className='logout-btn'>Logout</a>
                
            </div>
        </nav>
        </>
    )
}

export default Navbar;