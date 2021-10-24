
import './App.css';
import Item from './Components/ProductView';
import myData from './product.json';

function App() {
  
  let KeyGenrForApp=(index)=>{
    return `${ index }_${ new Date().getTime() }`;

  }
  let KeyGenrForItem =(index,name)=>{
    return `${name}_${ index }_${ new Date().getTime() }`;
    

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
              <Item key={KeyGenrForItem(index,el.name)} ProductList={el.productList}/>

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
