

export const initialState={
    cart:[],
    user:null,
};

export const getCartTotal=(cart)=>
 cart?.reduce((amount,item)=>item.price + amount, 0);

const reducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
       //Logic for adding item to cart
       return {
        ...state,
        cart:[...state.cart,action.item]
    };
       
       
       case 'REMOVE_FROM_CART':
       //Logic for removing item from cart

       //we cloned the Cart
       let newCart=[...state.cart];

       //we check to see if product exits
       const index=state.cart.findIndex((cartItem)=>cartItem.id===action.id);

       if(index>=0){
        //if exits in cart , remove it
        newCart.splice(index,1);
       } else{
        console.warn(
            `can't remove product (id:${action.id}) as its not in Cart`
        )
       }
       return {...state,
        cart:newCart,
    }
     
       default:
        return state;
    }
}

export default reducer;