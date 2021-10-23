import React from 'react'
import './ProductView.css'
import { useState, useEffect, useMemo } from 'react'
function Item(props) {
    // console.log(props)
     const [Add, setAdd] = useState([])
    let AddCart = (el)=>{
        let TempArr = []
        TempArr.push(el)
        setAdd([...Add,TempArr])
        console.log("Product Added to the cart.");
    //    return () => console.log(Add)


    }
     useEffect(() => {
        console.log(Add);
        
    }, [Add])

    // const AddCart = useMemo((el)=>{
    //     let TempArr = []
    //     TempArr.push(el)
    //     setAdd([...Add,TempArr])
    //     console.log("Product adde to the Cart");
    //    console.log(Add)


    // }, [Add]);
      
    let DeleteCart = (index)=>{
        let NewArr = [...Add];
        // let index = Array.indexOf(el);
        // console.log(index)
        if(NewArr.length>0){
            NewArr.splice(index,1);
            console.log("Product removed from the cart.")
        }
        else{
            console.log("Cart is Empty")
        }
        setAdd(NewArr)
    }
    return (
        <div className="Outer">
            {props.ProductList.map((el,index)=><div  className="ProductCell">
               <h3>Name : {el.name}</h3>
               <h3>Price : {el.price}</h3>
            
               <button onClick={()=>AddCart(el)}>Add to the cart</button>
               <button onClick={()=>DeleteCart(index)}>Remove from cart</button>
            
            

            </div>)}
        </div>
    )
}

export default Item
