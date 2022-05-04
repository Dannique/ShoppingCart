import React from 'react';
import { useQuery } from 'react-query';
//Components
import Drawer from '@material-ui/core/Drawer'
import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
import  AddShoppingCartIcon  from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge'

//Styles
import {Wrapper} from './App.styles'

export type CartItemType ={
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async(): Promise<CartItemType[]> => 
await (await fetch('https://fakestoreapi.com/products')).json();

function App() {

   {/* const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]); */}
  
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );
  console.log(data); 

  const getTotalItems = () => null;
  const handleAddToCart = () => null;
  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress/>
  if (error) return <div>Something went wrong..</div>

  return (
    <div className="App">

      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
