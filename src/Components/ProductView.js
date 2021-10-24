import React from 'react'
import './ProductView.css'
import { useState, useEffect} from 'react'
function Item(props) {

     const [Add, setAdd] = useState([])

    let AddCart = (el)=>{
        
        setAdd([...Add,el])
        console.log("Product Added to the cart.");
       
    


    }
     useEffect(() => {
        console.log(Add);
        
    }, [Add])

    
      
    let DeleteCart = (el)=>{
        let NewArr = [...Add];
        
        // console.log(el)
        if(NewArr.length>0){
            let index = Add.indexOf(el)
            // console.log(index);
            if(index>=0){
                NewArr.splice(index,1);
                console.log("Product removed from the cart.")
            }
            else{
                console.log("this Item is not Present in Cart")
            }
            
        }
        else{
            console.log("Cart is Empty")
        }
        setAdd(NewArr)
    }
    let KeyGenr = (index) =>{
        return `${ index }_${ new Date().getTime() }`;
    }
    let KeyGenrForButton =(index,name)=>{
    return `${name}_${ index }_${ new Date().getTime() }`;
        
        

    }
    return (
        <div className="Outer">
            {props.ProductList.map((el,index)=><div key={KeyGenr(index)} className="ProductCell">
               <h3 key={KeyGenr(el.name)}>Name : {el.name}</h3>
               <h3 key={KeyGenr(el.price)}>Price : {el.price}</h3>
            
               <button key={KeyGenrForButton(index,el.name)} onClick={()=>AddCart(el)}>Add to the cart</button>
               <button key={KeyGenrForButton(index,el.price)} onClick={()=>DeleteCart(el)}>Remove from cart</button>
            
            

            </div>)}
        </div>
    )
}

export default Item
