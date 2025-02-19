import { createSlice} from "@reduxjs/toolkit";

const cartReducer = createSlice({
    name:'cart',
    initialState:{
        cartVal:[],
        filter:'all'
    },
    reducers:{
        addToCart: (state, action) => {
            // Check if the product already exists in the cart
            const existingProduct = state.cartVal.find((item) => item.id === action.payload.product.id);
            
            if (existingProduct) {
                
                existingProduct.qty += action.payload.product.qty;
            } else {
                
                if (action.payload.product.qty === 0) {
                    action.payload.product.qty = 1; 
                }
                
                state.cartVal.push(action.payload.product);
                alert('Item Added to the Cart..!')
            }
            
        },
        removeFromCart:(state,action)=>{
            const data = state.cartVal.filter((item)=>item.id !== action.payload)
            state.cartVal = data
            
        },
        increaseQty:(state,action)=>{
            const existingProduct = state.cartVal.find((item)=>item.id == action.payload)
            existingProduct.qty += 1;
        },
        decreaseQty:(state,action)=>{
            const existingProduct = state.cartVal.find((item)=>item.id == action.payload)
            if(existingProduct.qty>1){
                existingProduct.qty -= 1;
            }else{
                alert('Only One Product In Cart...')
            }
        },
        filerproduct:(state,action)=>{
            state.filter = action.payload
            
        }
        

    }
})

export const {addToCart,removeFromCart,increaseQty,filerproduct,decreaseQty} = cartReducer.actions;
export default cartReducer.reducer;