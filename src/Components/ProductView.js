import React from 'react'
import './ProductView.css'
import { useState, useEffect, useMemo } from 'react'
function Item(props) {

     const [Add, setAdd] = useState([])

    let AddCart = (el)=>{
        
        setAdd([...Add,el])
        console.log("Product Added to the cart.");
    


    }
     useEffect(() => {
        console.log(Add);
        
    }, [Add])

    
      
    let DeleteCart = (index)=>{
        let NewArr = [...Add];
        // let index = Array.prototype.indexOf(el);
        console.log(index);
        if(NewArr.length>0){
            NewArr.splice(index,1);
            console.log("Product removed from the cart.")
        }
        else{
            console.log("Cart is Empty")
        }
        setAdd(NewArr)
    }
    let KeyGenr = (index) =>{
        return `${ index }_${ new Date().getTime() }`;
    }
    let KeyGenrForButton =()=>{
        return `${ new Date().getTime() }`;

    }
    return (
        <div className="Outer">
            {props.ProductList.map((el,index)=><div key={KeyGenr(index)} className="ProductCell">
               <h3 key={KeyGenr(el.name)}>Name : {el.name}</h3>
               <h3 key={KeyGenr(el.price)}>Price : {el.price}</h3>
            
               <button key={KeyGenrForButton()} onClick={()=>AddCart(el)}>Add to the cart</button>
               <button key={KeyGenrForButton()} onClick={()=>DeleteCart(index)}>Remove from cart</button>
            
            

            </div>)}
        </div>
    )
}

export default Item
