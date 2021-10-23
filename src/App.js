
import './App.css';
import Item from './Components/ProductView';
import myData from './product.json';

function App() {
  // console.log(myData.data)
  let KeyGenrForApp=(index)=>{
    return `${ index }_${ new Date().getTime() }`;

  }
  let KeyGenrForItem =()=>{
    return `${ new Date().getTime() }`;

}
  return (
    <div className="App">
      {
        myData.data.map(
          (el,index)=>{
              return (
                
              <><div className="Header"><p key={index}>{el.name}</p>
            
              <hr key={KeyGenrForApp(index)} style={{backgroundColor:"black"}}/></div>
              <div className="Itme" key={KeyGenrForApp(el.name)}>
              <Item key={KeyGenrForItem()} ProductList={el.productList}/>

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
