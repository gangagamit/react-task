// import logo from './logo.svg';
import './App.css';
// import Name from './Task/Greeting';
// import CardProps from './Task/CardProps';
// import Img1 from './Image/Img-1.jpg';  
// import Img2 from './Image/Img-2.jpg';
// import Img3 from './Image/Img-3.jpg';
// import Data from './Task/Data';
// import Title from './Task/Title';
// import Footer from './Task/Footer';
// import EEmoji from './Task/EEmoji';
// import Button from './Task/Button';
import Table from './Task/Table';
import './Button.css'

function App() {
 
  
  return (
    <>
    <div className='App flex justify-around'>
    
      <Table/>
      {/* <Button/> */}
     
     {/* <Name/> */}
     {/* <EEmoji/>
         <Title/>
    <div className="App  flex mt-10">
         {Data.map((cvalue,index,array)=>{
        console.log(cvalue,"cvalue")
        return <CardProps key={index} Name={cvalue.Name} descri={cvalue.descri} btn={cvalue.btn} img={cvalue.img}/>
      })}
    </div>
      <div className='App flex mt-5'>
      {Data.map((cvalue,index,array)=>{
          console.log(cvalue,"cvalue")
          return <CardProps key={index} Name={cvalue.Name} descri={cvalue.descri} btn={cvalue.btn} img={cvalue.img}/>
        })}
      </div>
      <Footer/> */}
      </div>
      </>
  );
}

export default App;
