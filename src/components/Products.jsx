import { useDispatch } from "react-redux";
import { addToCart, filerproduct } from "../redux/slicer";
import Landing from'../components/Landing'


const Products = ({products})=>{

    const dispatch = useDispatch();

    

    return (
    <>
    <Landing/>
    <div className="product-wrap">
        {
            products.map((product)=>(
                <div className="product" key={product.id}>
                    <img src={product.image} alt={product.id} />
                    <h3>{product.name}</h3>
                    <br />
                    <div className="price">
                    <h3>Rs.{product.new_price}</h3>
                    <h3 style={{textDecoration:'line-through'}}>Rs.{product.old_price}</h3>
                    </div>
                    <button className="addbtn" onClick={()=>dispatch(addToCart({product}))}>Add To Cart</button>

                </div>
            ))
            
        }
        <a onClick={()=>dispatch(filerproduct('all'))}>See More...</a>
        
    </div>
    </>
    )
}

export default Products;