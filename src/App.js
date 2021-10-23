
import './App.css';
import Item from './Components/ProductView';
import myData from './product.json';

function App() {
  console.log(myData.data)
  return (
    <div className="App">
      {
        myData.data.map(
          (el,index)=>{
              return (
                
              <><div className="Header"><p key={index}>{el.name}</p>
            
              <hr style={{backgroundColor:"black"}}/></div>
              <div className="Itme">
              <Item ProductList={el.productList}/>

              </div>
              
              </>
                
              )
          }
        )
      }
    </div>
  );
}

export default App;
