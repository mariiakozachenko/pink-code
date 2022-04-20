import './App.css';
import image from './busket.jpg';
import imageTwo from './boxful.jpg';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className='app'>
      <div className='container'>
      <img src={ image } width="250px" alt="shopping busket"/>
      </div>
      <div className='container'>
      <h1>Grocery list</h1>
      </div>
      <GroceryList/>
      <div className='container'>
      <img src = {imageTwo} width="250px" alt="shopping"/>
      </div>
    </div>
  );
}

export default App;
