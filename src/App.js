
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
              return (<><p key={index}>{el.name}</p>
              {/* <span className="horizontalLine"></span> */}
              <hr style={{backgroundColor:"black"}}/>
              <Item ProductList={el.productList}/>
              
              </>
                
              )
          }
        )
      }
    </div>
  );
}

export default App;
