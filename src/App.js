import './App.css'
import Product from './components/Product'

export default function App() {

  return (
    <div className="products">
     <Product title={'milk'} price={'25 uah'}/>
     <Product title={'juice'} price={'120 uah'}/>
        <Product title={'bread'} price={'40 uah'}/>
    </div>
  );
}


