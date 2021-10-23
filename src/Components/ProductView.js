import React from 'react'
import './ProductView.css'
import { useState, useMemo, useEffect } from 'react'
function Item(props) {
    // console.log(props)
     const [Add, setAdd] = useState([])
    let AddCart = (el)=>{
        let TempArr = []
        TempArr.push(el)
        setAdd([...Add,TempArr])
        console.log(el.name+" adde to the Cart");
    //    return () => console.log(Add)


    }
     useEffect(() => {
        console.log(Add);
        
    }, [Add])

    // const memoizedResult = useMemo(() => {
    //     return console.log(Add);
    //   }, [Add]);
      
    let DeleteCart = (el)=>{
        let NewArr = [...Add];
        let index = Array.indexOf(el);
        console.log(index)
        NewArr.splice(index,1);
        setAdd(NewArr)
    }
    return (
        <div>
            {props.ProductList.map((el,index)=><div  className="ProductCell">
               <h3>Name : {el.name}</h3>
               <h3>Price : {el.price}</h3>
            
               <button onClick={()=>AddCart(el)}>Add to the cart</button>
               <button oncClick={()=>DeleteCart(el)}>Remove from cart</button>
               <div>
            

               </div>
                {/* { console.log(Add) } */}

            </div>)}
        </div>
    )
}

export default Item
